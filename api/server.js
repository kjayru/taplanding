import express from 'express'
import sgMail from '@sendgrid/mail'
import cors from 'cors'
import dotenv from 'dotenv'
import fetch from 'node-fetch'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Configurar __dirname para ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Cargar variables de entorno
dotenv.config()

// Configurar SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// Función para cargar y procesar plantilla HTML
const loadEmailTemplate = (name, email, message) => {
  const templatePath = path.join(__dirname, 'plantilla', 'mailing.html')
  let template = fs.readFileSync(templatePath, 'utf8')
  
  // Reemplazar placeholders
  template = template.replace(/\$\{name\}/g, name)
  template = template.replace(/\$\{email\}/g, email)
  template = template.replace(/\$\{message\.replace\(\/\\n\/g, '<br>'\)\}/g, message.replace(/\n/g, '<br>'))
  template = template.replace(/\$\{new Date\(\)\.toLocaleString\(\)\}/g, new Date().toLocaleString())
  template = template.replace(/\{\{date\("Y"\)\}\}/g, new Date().getFullYear())
  template = template.replace(/\{\{env\('APP_URL'\)\}\}/g, 'https://www.txassetpro.com')
  
  return template
}

// Endpoint para enviar emails con Brevo
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body

    // Validar datos
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'All fields are required'
      })
    }

    // Cargar plantilla HTML
    const htmlContent = loadEmailTemplate(name, email, message)

    // Configurar email con Brevo
    const brevoEmailData = {
      sender: {
        name: 'TAP Security Contact Form',
        email: 'support@txassetpro.com'
      },
      to: [
        {
          email: 'wiltinoco@gmail.com',
          name: 'TAP Security Admin'
        }
      ],
      subject: `New Contact Form Submission from ${name}`,
      htmlContent: htmlContent,
      replyTo: {
        email: email,
        name: name
      }
    }

    // Enviar email a admin con Brevo
    const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': process.env.BREVO_API_KEY,
        'content-type': 'application/json'
      },
      body: JSON.stringify(brevoEmailData)
    })

    if (!brevoResponse.ok) {
      const errorData = await brevoResponse.json()
      throw new Error(`Brevo API error: ${errorData.message || brevoResponse.statusText}`)
    }

    // Email de confirmación al usuario con Brevo (opcional - comentado por ahora)
    // Si quieres enviar confirmación al usuario, descomenta y crea una plantilla específica
    /*
    const confirmationEmailData = {
      sender: {
        name: 'TAP Security',
        email: 'support@txassetpro.com'
      },
      to: [
        {
          email: email,
          name: name
        }
      ],
      subject: 'Thank you for contacting TAP Security',
      htmlContent: loadEmailTemplate(name, email, message) // Usar plantilla
    }

    await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': process.env.BREVO_API_KEY,
        'content-type': 'application/json'
      },
      body: JSON.stringify(confirmationEmailData)
    })
    */



    res.json({
      success: true,
      message: 'Email sent successfully'
    })

  } catch (error) {
    console.error('SendGrid error:', error)
    res.status(500).json({
      success: false,
      error: 'Failed to send email',
      details: error.message
    })
  }
})

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

export default app
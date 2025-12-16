import express from 'express'
import sgMail from '@sendgrid/mail'
import cors from 'cors'
import dotenv from 'dotenv'
import fetch from 'node-fetch'

// Cargar variables de entorno
dotenv.config()

// Configurar SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

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
      htmlContent: `
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
          <div style="background-color: #010B40; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0;">TAP Security</h1>
            <p style="color: white; margin: 10px 0 0 0;">New Contact Form Submission</p>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px;">
            <h2 style="color: #010B40; margin-bottom: 20px;">Contact Details</h2>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #010B40;">Name:</strong>
              <p style="margin: 5px 0; color: #333;">${name}</p>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #010B40;">Email:</strong>
              <p style="margin: 5px 0; color: #333;">${email}</p>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #010B40;">Message:</strong>
              <div style="background: white; padding: 15px; border-radius: 5px; margin-top: 5px; border-left: 4px solid #E01F26;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="margin-top: 30px; padding: 15px; background: white; border-radius: 5px; text-align: center;">
              <p style="margin: 0; color: #666; font-size: 14px;">
                This email was sent from the TAP Security website contact form.
              </p>
              <p style="margin: 5px 0 0 0; color: #666; font-size: 12px;">
                Submitted on: ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      `,
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

    // Email de confirmación al usuario con Brevo
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
      htmlContent: `
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
          <div style="background-color: #010B40; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0;">TAP Security</h1>
            <p style="color: white; margin: 10px 0 0 0;">Thank you for your message</p>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px;">
            <h2 style="color: #010B40;">Hello ${name},</h2>
            
            <p style="color: #333; line-height: 1.6;">
              Thank you for reaching out to TAP Security. We have received your message and one of our team members will get back to you within 24 hours.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #E01F26;">
              <h3 style="color: #010B40; margin: 0 0 10px 0;">Your Message:</h3>
              <p style="margin: 0; color: #666;">${message.replace(/\n/g, '<br>')}</p>
            </div>
            
            <p style="color: #333; line-height: 1.6;">
              In the meantime, feel free to explore our website to learn more about our security services and training programs.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://txassetpro.com" 
                 style="background-color: #E01F26; color: white; padding: 12px 30px; 
                        text-decoration: none; border-radius: 25px; font-weight: bold;">
                Visit Our Website
              </a>
            </div>
            
            <div style="margin-top: 30px; padding: 15px; background: white; border-radius: 5px;">
              <p style="margin: 0; color: #666; font-size: 14px;">
                <strong>Contact Information:</strong><br>
                📧 Email: admin@txassetpro.com<br>
                📞 Phone: (210) 399-1116<br>
                📍 Address: 11503 Jones Maltsberger Rd, Ste 1158, San Antonio, TX 78216
              </p>
            </div>
          </div>
        </div>
      `
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
# TAP Security Landing Page

Landing page profesional para TAP Security con formulario de contacto integrado con SendGrid.

## 🚀 Características

- ✨ Diseño moderno y responsivo
- 📧 Formulario de contacto con SendGrid
- 🎨 Componentes modulares con Vue 3
- 📱 Completamente responsive
- 🎯 Optimizado para conversiones

## 🛠️ Tecnologías

- **Frontend**: Vue 3, Bootstrap 5, SCSS
- **Backend**: Express.js, SendGrid
- **Build**: Vite
- **Deployment**: Node.js

## 📦 Instalación

1. **Instalar dependencias**
```bash
npm install
```

2. **Configurar variables de entorno**
```bash
cp .env.example .env
```

Editar `.env` con tus configuraciones:
```env
SENDGRID_API_KEY=your_sendgrid_api_key
FROM_EMAIL=noreply@txassetpro.com
TO_EMAIL=admin@txassetpro.com
PORT=3001
```

3. **Verificar dominio en SendGrid**
- Accede a tu cuenta de SendGrid
- Ve a Settings > Sender Authentication
- Verifica el dominio `txassetpro.com`
- Agrega los emails `noreply@txassetpro.com` y `admin@txassetpro.com`

## 🚀 Uso

### Desarrollo

```bash
# Ejecutar frontend y backend simultáneamente
npm run dev:full

# O ejecutar por separado:
# Frontend (puerto 5173)
npm run dev

# Backend (puerto 3001)
npm run dev:server
```

### Producción

```bash
# Construir el proyecto
npm run build

# Vista previa de producción
npm run preview
```

## 📧 Configuración de SendGrid

### 1. Crear cuenta y API Key
1. Crear cuenta en [SendGrid](https://sendgrid.com)
2. Ir a Settings > API Keys
3. Crear nueva API Key con permisos de envío
4. Copiar la API Key al archivo `.env`

### 2. Verificar dominio
1. Settings > Sender Authentication
2. Authenticate Your Domain
3. Seguir las instrucciones para verificar `txassetpro.com`

### 3. Configurar Single Sender (alternativa)
Si no puedes verificar el dominio completo:
1. Settings > Sender Authentication
2. Create a Single Sender
3. Usar email verificado como `FROM_EMAIL`

## 🎨 Estructura del Proyecto

```
taplanding/
├── src/
│   ├── components/          # Componentes Vue
│   │   ├── NavBar.vue      # Navegación principal
│   │   ├── Home.vue        # Sección hero
│   │   ├── AboutUs.vue     # Sobre nosotros
│   │   ├── Video.vue       # Sección de video
│   │   ├── Services.vue    # Servicios
│   │   ├── Employment.vue  # Empleo
│   │   ├── Training.vue    # Entrenamiento
│   │   ├── Business.vue    # Testimonios
│   │   ├── Blog.vue        # Blog
│   │   ├── Contacto.vue    # Formulario de contacto
│   │   └── Footer.vue      # Pie de página
│   ├── App.vue             # Componente principal
│   └── main.ts             # Punto de entrada
├── api/
│   └── server.js           # Servidor Express + SendGrid
├── styles/
│   └── _variables.scss     # Variables SCSS
└── public/
    └── images/             # Imágenes del sitio
```

## 📋 Funcionalidades del Formulario

### Frontend (Contacto.vue)
- ✅ Validación en tiempo real
- ✅ Estados de loading
- ✅ Mensajes de éxito/error
- ✅ Diseño responsive
- ✅ Integración con API

### Backend (server.js)
- ✅ Validación de datos
- ✅ Envío a administrador
- ✅ Email de confirmación automático
- ✅ Templates HTML profesionales
- ✅ Manejo de errores

### Emails Enviados
1. **Al administrador**: Notificación con datos del contacto
2. **Al usuario**: Confirmación automática profesional

## 🔧 Personalización

### Colores del Brand
Editar `styles/_variables.scss`:
```scss
$primary: #E01F26;    // Rojo TAP
$secondary: #010B40;  // Azul TAP
$dark: #031059;       // Azul oscuro
```

### Configurar Emails
Editar plantillas en `api/server.js`:
- Cambiar destinatarios
- Personalizar templates HTML
- Modificar asunto y contenido

## 🚨 Solución de Problemas

### Error 403 de SendGrid
- Verificar que la API Key sea correcta
- Asegurar que el email FROM esté verificado
- Verificar permisos de la API Key

### CORS Error
- Verificar que el proxy de Vite esté configurado
- Confirmar que el servidor esté ejecutándose en puerto 3001

### Emails no llegan
- Revisar logs del servidor
- Verificar spam/junk folders
- Confirmar configuración de dominio en SendGrid

## 📞 Soporte

Para soporte técnico, contactar:
- Email: admin@txassetpro.com
- Teléfono: (210) 399-1116

## 📄 Licencia

© 2025 Texas Asset Protection, LLC. Todos los derechos reservados.

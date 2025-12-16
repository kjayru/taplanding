<template>
  <!-- Contact Section -->
  <section id="contact" class="contact-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-11">
          <div class="contact-form-container">
            <div class="row justify-content-center">
              <div class="col-lg-6 col-md-8">
                <!-- Título y logo -->
                <div class="contact-header text-center mb-4">
                  <h2 class="contact-title">GET IN TOUCH</h2>
                  <div class="contact-logo">
                    <img src="/images/icono-tap-titulos-azul.svg" alt="TAP Security Logo" class="logo-img" />
                  </div>
                </div>

                <!-- Formulario -->
                <form @submit.prevent="submitForm" class="contact-form" novalidate>
              <!-- Campo Name -->
              <div class="form-group mb-3">
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  class="form-control"
                  :class="{ 'error': errors.name }"
                  @blur="validateField('name')"
                  @input="clearError('name')"
                  placeholder="Name*"
                />
                <div v-if="errors.name" class="error-message">
                  {{ errors.name }}
                </div>
              </div>

              <!-- Campo Email -->
              <div class="form-group mb-3">
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  class="form-control"
                  :class="{ 'error': errors.email }"
                  @blur="validateField('email')"
                  @input="clearError('email')"
                  placeholder="Email*"
                />
                <div v-if="errors.email" class="error-message">
                  {{ errors.email }}
                </div>
              </div>

              <!-- Campo Message -->
              <div class="form-group mb-3">
                <textarea
                  id="message"
                  v-model="form.message"
                  class="form-control textarea-custom"
                  :class="{ 'error': errors.message }"
                  @blur="validateField('message')"
                  @input="clearError('message')"
                  placeholder="Message*"
                  rows="3"
                ></textarea>
                <div v-if="errors.message" class="error-message">
                  {{ errors.message }}
                </div>
              </div>

              <!-- Nota de campos requeridos -->
              <p class="required-text mb-4">* Field is required</p>

              <!-- Botón Submit -->
              <div class="text-center">


                <button
                  type="submit"
                  class="btn-send"
                  :disabled="isSubmitting"
                >
                  <span v-if="isSubmitting" class="spinner-border spinner-border-sm me-2"></span>
                  {{ isSubmitting ? 'SENDING...' : 'SEND' }}
                </button>


              </div>

              <!-- Mensaje de éxito -->
              <div v-if="showSuccess" class="alert alert-success mt-4 text-center">
                <strong>Thank you!</strong> Your message has been sent successfully. We'll get back to you soon.
              </div>

              <!-- Mensaje de error -->
              <div v-if="showError" class="alert alert-danger mt-4 text-center">
                <strong>Error!</strong> There was a problem sending your message. Please try again.
              </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

// Form data
const form = reactive({
  name: '',
  email: '',
  message: ''
})

// Validation errors
const errors = reactive({
  name: '',
  email: '',
  message: ''
})

// Form states
const isSubmitting = ref(false)
const showSuccess = ref(false)
const showError = ref(false)

// Validation rules
const validateField = (field) => {
  switch (field) {
    case 'name':
      if (!form.name.trim()) {
        errors.name = 'Name is required'
      } else if (form.name.trim().length < 2) {
        errors.name = 'Name must be at least 2 characters'
      } else {
        errors.name = ''
      }
      break

    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!form.email.trim()) {
        errors.email = 'Email is required'
      } else if (!emailRegex.test(form.email)) {
        errors.email = 'Please enter a valid email address'
      } else {
        errors.email = ''
      }
      break

    case 'message':
      if (!form.message.trim()) {
        errors.message = 'Message is required'
      } else if (form.message.trim().length < 10) {
        errors.message = 'Message must be at least 10 characters'
      } else {
        errors.message = ''
      }
      break
  }
}

// Clear individual error
const clearError = (field) => {
  if (errors[field]) {
    errors[field] = ''
  }
}

// Validate all fields
const validateForm = () => {
  validateField('name')
  validateField('email')
  validateField('message')
  
  return !errors.name && !errors.email && !errors.message
}

// Submit form
const submitForm = async () => {
  // Reset messages
  showSuccess.value = false
  showError.value = false

  // Validate all fields
  if (!validateForm()) {
    return
  }

  isSubmitting.value = true

  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message
      })
    })

    if (!response.ok) {
      throw new Error('Failed to send email')
    }

    const result = await response.json()
    console.log('Email sent successfully:', result)
    
    // Reset form
    form.name = ''
    form.email = ''
    form.message = ''
    
    // Show success message
    showSuccess.value = true
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)

  } catch (error) {
    console.error('Form submission error:', error)
    showError.value = true
    
    // Hide error message after 5 seconds
    setTimeout(() => {
      showError.value = false
    }, 5000)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped lang="scss">
@import '../../styles/_variables.scss';

/* Contact Section Styles */
.contact-section {
  background-color: white;
  padding: 60px 0;
  width: 100%;
}

.contact-form-container {
  background: white;
  border-radius: 15px;
  padding: 3rem 2rem;
  /* box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1); */
  border: 2px solid rgba(0, 0, 0, 0.05);
  width: 100%;
  margin: 0;
}

.contact-title {
  font-size: 50px;
  font-weight: 900;
  color: $secondary;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  
}

.contact-logo .logo-img {
  height: 35px;
  width: auto;
}

/* Form Controls - Estilo minimalista */
.form-control-custom {
  width: 100%;
  padding: 1rem 0;
  font-size: 1rem;
  line-height: 1.5;
  color: $dark;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #ddd;
  transition: all 0.3s ease;
  outline: none;
}

.form-control-custom::placeholder {
  color: rgba($dark, 0.6);
  font-weight: 400;
}

.form-control-custom:focus {
  border-bottom-color: $secondary;
  background-color: transparent;
}

.form-control-custom.error {
  border-bottom-color: $primary;
}

.textarea-custom {
  resize: vertical;
  min-height: 120px;
}

.error-message {
  width: 100%;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: $primary;
  display: block;
}

.required-text {
  text-align: right;
  font-size: 0.9rem;
  color: rgba($dark, 0.6);
  font-style: italic;
}

.btn-send {
  background-color: $primary;
  color: white;
  padding: 12px 60px;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  min-width: 160px;
  cursor: pointer;
}

.btn-send:hover:not(:disabled) {
  background-color: $danger;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba($primary, 0.4);
}

.btn-send:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.alert {
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid;
}

.alert-success {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
}

.alert-danger {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}

.spinner-border-sm {
  width: 1rem;
  height: 1rem;
}

.spinner-border {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: text-bottom;
  border: 0.25em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spinner-border 0.75s linear infinite;
}

@keyframes spinner-border {
  to {
    transform: rotate(360deg);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-section {
    padding: 60px 0;
  }
  
  .contact-form-container {
    padding: 2rem 1.5rem;
    margin: 0 1rem;
  }
  
  .contact-title {
    font-size: 2rem;
    letter-spacing: 1px;
  }
  
  .contact-logo .logo-img {
    height: 50px;
  }
}

@media (max-width: 576px) {
  .contact-section {
    padding: 40px 0;
  }
  
  .contact-form-container {
    padding: 1.5rem 1rem;
  }
  
  .contact-title {
    font-size: 1.8rem;
  }
  
  .form-control {
    font-size: 0.9rem;
  }
}

/* Animaciones */
.contact-form-container {
  animation: fadeInUp 0.6s ease;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
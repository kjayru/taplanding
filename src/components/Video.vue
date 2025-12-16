<template>
  <!-- Video Section -->
  <section id="video" class="video-section">
    <div class="container-fluid">
      <div class="row align-items-center min-vh-100">
        <div class="col-12 text-center">
          <!-- Botón de play -->
          <button 
            class="play-button" 
            @click="openModal"
            aria-label="Reproducir video de presentación"
          >
            <img src="/images/play-circle-icono.png" alt="Play Video" class="play-icon" />
          </button>
          
        </div>
      </div>
    </div>
  </section>
  
  <!-- Texto de licencia con fondo negro -->
  <div class="license-bar">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 text-center">
          <p class="video-subtitle">TAP Security is licensed by the Texas Department of Public Safety PSP Lic. B05203201</p>
        </div>
      </div>
    </div>
  </div>

    <!-- Modal de Video -->
    <div 
      v-if="showModal" 
      class="video-modal" 
      @click="closeModal"
    >
      <div class="modal-content" @click.stop>
        <!-- Botón de cerrar -->
        <button class="close-button" @click="closeModal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <!-- Video iframe -->
        <div class="video-container">
          <iframe
            ref="videoIframe"
            :src="videoSrc"
            title="TAP Security Presentation Video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'

// Estados reactivos
const showModal = ref(false)
const videoIframe = ref(null)

// ID del video de YouTube extraído de la URL
const videoId = 'tUFOdr-mnHI'

// URL del video para el iframe (con autoplay cuando se abre el modal)
const videoSrc = computed(() => {
  if (showModal.value) {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`
  }
  return ''
})

// Función para abrir el modal
const openModal = () => {
  showModal.value = true
  // Prevenir scroll del body cuando el modal está abierto
  document.body.style.overflow = 'hidden'
}

// Función para cerrar el modal
const closeModal = () => {
  showModal.value = false
  // Restaurar scroll del body
  document.body.style.overflow = 'auto'
  
  // Parar el video al cerrar el modal
  if (videoIframe.value) {
    videoIframe.value.src = ''
  }
}

// Cerrar modal con tecla Escape
const handleKeydown = (event) => {
  if (event.key === 'Escape' && showModal.value) {
    closeModal()
  }
}

// Agregar event listener para tecla Escape
if (typeof window !== 'undefined') {
  window.addEventListener('keydown', handleKeydown)
}
</script>

<style scoped>
/* Video Section Styles */
.video-section {
  background:url('/images/imagen-video-presentacion-02.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
  padding: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.video-section .container-fluid {
  height: 100%;
  display: flex;
  align-items: center;
}

.video-section .row {
  margin: 0;
  width: 100%;
}

.play-button {
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.play-button:hover {
  transform: scale(1.1);
  filter: brightness(1.2);
}

.play-button:active {
  transform: scale(0.95);
}

.play-icon {
  width: 120px;
  height: 120px;
  
  transition: all 0.3s ease;
}

.video-text {
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.license-bar {
  background-color: #000000;
  padding: 10px 0;
  width: 100%;
}

.video-subtitle {
  font-size: 1rem;
  color: white;
  margin: 0;
  font-weight: 400;
}

/* Modal Styles */
.video-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(5px);
}

.modal-content {
  position: relative;
  width: 90vw;
  height: 90vh;
  max-width: 1200px;
  max-height: 675px;
  background: #000;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.8);
}

.close-button {
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(0, 0, 0, 0.7);
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  transition: all 0.3s ease;
}

.close-button:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.video-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.video-container iframe {
  width: 100%;
  height: 100%;
  border: none;
}

/* Responsive Design */
@media (max-width: 992px) {
  .video-section {
    background-attachment: scroll;
  }
  
  .play-icon {
    width: 100px;
    height: 100px;
  }
  
  .modal-content {
    width: 95vw;
    height: 80vh;
  }
}

@media (max-width: 768px) {
  .play-icon {
    width: 80px;
    height: 80px;
  }
  
  .video-subtitle {
    font-size: 0.9rem;
    padding: 0 1rem;
  }
  
  .modal-content {
    width: 98vw;
    height: 75vh;
    border-radius: 4px;
  }
  
  .close-button {
    top: 10px;
    right: 10px;
    width: 35px;
    height: 35px;
  }
}

@media (max-width: 576px) {
  .play-icon {
    width: 70px;
    height: 70px;
  }
  
  .video-subtitle {
    font-size: 0.8rem;
  }
  
  .modal-content {
    height: 70vh;
  }
}

/* Animaciones */
.video-modal {
  animation: fadeIn 0.3s ease;
}

.modal-content {
  animation: scaleIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes scaleIn {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
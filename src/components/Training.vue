<template>
  <!-- Training Section -->
  <section id="training" class="training-section">
    <div class="container">
      <!-- Título de la sección -->
      <div class="row">
        <div class="col-12 text-center mb-5">
          <div class="section-title">
            <!-- Logo TAP -->
            <div class="tap-logo mb-4">
              <img src="/images/logo.png" alt="TAP Security Logo" class="logo-img" />
            </div>
            <h2 class="title-text">TRAINING WITH US</h2>
            <p class="subtitle-text">Improve your personal skills with our training methods</p>
            <div class="title-underline"></div>
          </div>
        </div>
      </div>

      <!-- Online Courses y In-Person Training -->
      <div class="row mb-5 align-items-center">
        <!-- Online Courses -->
        <div class="col-lg-6 col-md-12 mb-4 order-sm-1 order-2">
          <div class="training-block">
            <h3 class="training-title">ONLINE COURSES</h3>
            <p class="training-description">
              <strong>Comprehensive resources</strong><br>
              With engaging modules, tutorials, and practical exercises, 
              we make sure you're ready to handle real-world challenges.
            </p>
            <a href="https://tap-security.com/courses" class="btn btn-training">EXPLORE COURSES</a>
          </div>
        </div>

        <!-- Video Online Courses -->
        <div class="col-lg-6 col-md-12 mb-4 order-sm-2 order-1">
          <div class="video-container">
            <img src="/images/training-online-courses.png" alt="Online Courses Video" class="training-video" />
            <div class="video-overlay">
              <button class="video-play-btn" @click="openModal('cb7qnKjWEpA')">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                  <circle cx="25" cy="25" r="25" fill="rgba(255,255,255,0.9)"/>
                  <polygon points="20,15 35,25 20,35" fill="#1a1f3a"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- In-Person Training -->
      <div class="row mb-5 align-items-center">
        <!-- Video In-Person Training -->
        <div class="col-lg-6 col-md-12 mb-4 order-lg-1 order-sm-2 order-1">
          <div class="video-container">
            <img src="/images/training-in-person.png" alt="In-Person Training Video" class="training-video" />
            <div class="video-overlay">
              <button class="video-play-btn" @click="openModal('yrEZ0swSwqc')">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                  <circle cx="25" cy="25" r="25" fill="rgba(255,255,255,0.9)"/>
                  <polygon points="20,15 35,25 20,35" fill="#1a1f3a"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- In-Person Training Content -->
        <div class="col-lg-6 col-md-12 mb-4 order-lg-2 order-2 order-s-1">
          <div class="training-block">
            <h3 class="training-title">IN-PERSON TRAINING</h3>
            <p class="training-description">
              We equip critical skills for armed security work-delivered through live 
              instruction and range qualification
            </p>
            <a href="https://tap-security.com/training-calendar" class="btn btn-training">SCHEDULE</a>
          </div>
        </div>
      </div>

      <!-- Newest Online Courses -->
      <div class="row">
        <div class="col-12 text-center mb-4">
          <h3 class="courses-title">NEWEST ONLINE COURSES</h3>
           <div class="title-underline"></div>
        </div>
      </div>

      <!-- Grid de cursos -->
      <div class="row g-4">
        <!-- Private Security Level II -->
        <div class="col-lg-4 col-md-6">
          <div class="course-card">
            <div class="course-image">
              <img src="/images/curso-01.jpg" alt="Private Security Level II" />
            </div>
            <div class="course-content">
              <h4 class="course-title">Private Security Level II</h4>
              <p class="course-description">
                Take the next step to excel in your private security career as a Non-Commissioned Security Officer, fully within...
              </p>
              <a href="https://tap-security.com/course/private-security-level-ii" class="btn btn-course">GO TO COURSE</a>
            </div>
          </div>
        </div>

        <!-- Private Security Level III (Part 1) -->
        <div class="col-lg-4 col-md-6">
          <div class="course-card">
            <div class="course-image">
              <img src="/images/curso-02.jpg" alt="Private Security Level III Part 1" />
            </div>
            <div class="course-content">
              <h4 class="course-title">Private Security Level III (Part 1)</h4>
              <p class="course-description">
                Learn the essential skills needed to start your private security career as an Armed Commissioned Security Officer, fully within...
              </p>
              <a href="https://tap-security.com/course/level-iii-re-certification-part-1" class="btn btn-course">GO TO COURSE</a>
            </div>
          </div>
        </div>

        <!-- Private Security Level III (Part 2) -->
        <div class="col-lg-4 col-md-6">
          <div class="course-card">
            <div class="course-image">
              <img src="/images/curso-03.jpg" alt="Level III Re-Certification (Part 1)" />
            </div>
            <div class="course-content">
              <h4 class="course-title">Level III Re-Certification (Part 1)</h4>
              <p class="course-description">
                Take the required step in maintaining your armed security license with our state-approved Level 3 Re-Certification course...
              </p>
              <a href="https://tap-security.com/course/private-security-level-iii-part-1" class="btn btn-course">GO TO COURSE</a>
            </div>
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
        <div class="video-iframe-container">
          <iframe
            ref="videoIframe"
            :src="videoSrc"
            title="Training Video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

// Estados reactivos
const showModal = ref(false)
const videoIframe = ref(null)
const currentVideoId = ref('')

// URL del video para el iframe (con autoplay cuando se abre el modal)
const videoSrc = computed(() => {
  if (showModal.value && currentVideoId.value) {
    return `https://www.youtube.com/embed/${currentVideoId.value}?autoplay=1&rel=0&modestbranding=1`
  }
  return ''
})

// Función para abrir el modal con el video específico
const openModal = (videoId) => {
  currentVideoId.value = videoId
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
/* Training Section Styles */
.training-section {
  background-color: #031059;
  padding: 80px 0;
  color: white;
}

.section-title {
  margin-bottom: 4rem;
}

.tap-logo {
  margin-bottom: 2rem;
}

.logo-img {
  height: 236px;
  width: auto;
}

.title-text {
  font-size: 4.375rem;
  font-weight: normal;
  letter-spacing: 3px;
  margin-bottom: 1rem;
  color:white;
  line-height: 45px;
}

.title-underline {
  width: 126px;
  height: 4px;
  background-color: #E01F26;
  margin: 0 auto 2rem auto;
  border-radius: 2px;
}

.subtitle-text {
  font-size: 1.625rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1rem;
  font-weight: 400;
}

.training-block {
  padding: 2rem 1rem;
}

.training-title {
  font-size: 3.125rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
}

.training-title::before {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60%;
  height: 1px;
  background-color: #E01F26;
}

.training-description {
  font-size: 1.625rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 2rem;
  margin-top:3rem;
}

.btn-training {
  background-color: #dc3545;
  color: white;
  padding: 12px 25px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.125rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  border: 2px solid #dc3545;
  display: inline-block;
}

.btn-training:hover {
  background-color: white;
  color: #dc3545;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(220, 53, 69, 0.3);
}

.video-container {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

.training-video {
  width: 100%;
      height: 437px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.video-container:hover .training-video {
  transform: scale(1.05);
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.video-container:hover .video-overlay {
  background: none;
}

.video-play-btn {
  background: none;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.video-play-btn:hover {
  transform: scale(1.1);
}

.courses-title {
  font-size:3.125rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
    line-height: 50px;
  color:white;
}

.course-card {
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
}

.course-card:hover {
  transform: translateY(-5px);

  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.course-image {
  position: relative;
  overflow: hidden;
}

.course-image img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.course-card:hover .course-image img {
  transform: scale(1.1);
}

.course-content {
  padding: 1.5rem;
}

.course-title {
  font-size: 1.625rem;
  font-weight: 600;
  color: white;
  line-height: 1.3;
  font-family: 'Open Sans', system-ui, -apple-system, 'Segoe UI', Roboto, Ubuntu, Cantarell, sans-serif;
}

.course-description {
  font-size:1.25rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-clamp: 3;
  overflow: hidden;
}

.btn-course {
  background-color: #dc3545;
  color: white;
  padding: 8px 20px;
  border-radius: 0;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  border: 2px solid #dc3545;
  display: inline-block;
}

.btn-course:hover {
  background-color: white;
  color: #dc3545;
  transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 992px) {
  .title-text {
    font-size: 3rem;
  }
  
  .training-section {
    padding: 60px 0;
  }
  
  .training-title {
    font-size: 1.8rem;
  }
  
  .courses-title {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .title-text {
           font-size: 70px;
        letter-spacing: 1px;
        line-height: 79px;
  }
  
  .training-title {
   font-size: 40px;
        text-align: left;
  }
  
  .courses-title {
    font-size: 40px;
  }

    .course-image img {
        height: 245px;
    }

  .training-title::before {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #E01F26;
}
  
  .training-video {
    height: 200px;
  }
  
  .training-block {
    padding: 1rem;
   text-align: left;
  }
}

@media (max-width: 576px) {
  .title-text {
           font-size: 70px;
        letter-spacing: 1px;
        line-height: 79px;
  }
  
  .training-title {
   font-size: 40px;
        text-align: left;
  }
  .training-title::before {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #E01F26;
}
  
  .courses-title {
    font-size: 40px;
  }
  
  .training-video {
    height: 180px;
  }
  
  .course-image img {
        height: 245px;
    }
  
  .training-section {
    padding: 40px 0;
  }
}

/* Animaciones */
.training-block,
.course-card {
  animation: fadeInUp 0.6s ease;
}

.video-container {
  animation: fadeInLeft 0.6s ease;
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

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Estilos del Modal de Video */
.video-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal-content {
  position: relative;
  width: 100%;
  max-width: 1200px;
  animation: scaleIn 0.3s ease;
}

@keyframes scaleIn {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.close-button {
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 8px;
  transition: all 0.3s ease;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-button:hover {
  transform: scale(1.1);
  opacity: 0.8;
}

.video-iframe-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  background-color: #000;
  border-radius: 8px;
}

.video-iframe-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
}

/* Responsive para el modal */
@media (max-width: 768px) {
  .video-modal {
    padding: 10px;
  }
  
  .close-button {
    top: -35px;
  }
}
</style>
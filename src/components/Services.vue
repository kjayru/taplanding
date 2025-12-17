<template>
  <!-- Services Section -->
  <section id="services" class="services-section">
    <div class="container">
      <!-- Título de la sección -->
      <div class="row">
        <div class="col-12 text-center mb-5">
          <div class="section-title">
            <h2 class="title-text">SERVICES</h2>
            <div class="title-icon">
              <img src="/images/icono-tap-titulos.svg" alt="TAP Security Icon" class="title-logo" />
            </div>
          </div>
        </div>
      </div>

      <!-- Primer bloque de servicios -->
      <div class="row mb-5 align-items-center">
        <!-- Imagen izquierda -->
        <div class="col-lg-6 col-md-12 mb-4 mb-lg-0">
          <div class="service-image">
            <img src="/images/services-we-strive.jpg" alt="Security Services" class="img-fluid " />
          </div>
        </div>
        <!-- Contenido derecha -->
        <div class="col-lg-6 col-md-12">
          <div class="service-content">
            <h3 class="service-subtitle">We strive to combat common objections such as:</h3>
            <ul class="service-list">
              <li>No way to track security officer′s movement or patrol movement to ensure they are fulfilling the contractual agreement</li>
              <li>Unable to find/reach the security officers when needed</li>
              <li>Unprofessional behavior, language and use of mobile devices</li>
              <li>Untidy and unprofessional image</li>
              <li>Not enforcing the rules/regulations requested by the client</li>
              <li>Nonspecific or standard daily reports</li>
              <li>Not following the chain of command</li>
              <li>Patrol units driving by the site rather than engaging in a full onsite patrol</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Segundo bloque de servicios -->
      <div class="row mb-5 align-items-center">
        <!-- Contenido izquierda -->
        <div class="col-lg-6 col-md-12 order-lg-1 order-2">
          <div class="service-content">
            <h3 class="service-subtitle">TAP Security follows a strategic approach grounded in the belief that your security is our business, which provides:</h3>
            <ul class="service-list">
              <li>Protection of personnel and property</li>
              <li>Protection against unauthorized access</li>
              <li>Crime detection and prevention</li>
              <li>Strict adherence to security measures and procedures</li>
              <li>Effective communication</li>
              <li>Cooperation with all local law enforcement agencies</li>
            </ul>
          </div>
        </div>
        <!-- Imagen derecha -->
        <div class="col-lg-6 col-md-12 order-lg-2 order-1 mb-4 mb-lg-0">
          <div class="service-image">
            <img src="/images/services-tap-security.jpg" alt="Strategic Security" class="img-fluid " />
          </div>
        </div>
      </div>

      <!-- Tercer bloque de servicios -->
      <div class="row align-items-center">
        <!-- Imagen izquierda -->
        <div class="col-lg-6 col-md-12 mb-4 mb-lg-0">
          <div class="service-image">
            <img src="/images/services-we-pride.jpg" alt="Professional Security" class="img-fluid " />
          </div>
        </div>
        <!-- Contenido derecha -->
        <div class="col-lg-6 col-md-12">
          <div class="service-content">
            <h3 class="service-subtitle">We pride ourselves in providing consistent layered security to every client:</h3>
            <ul class="service-list">
              <li>State certified security officers</li>
              <li>Security officer tour tracking system</li>
              <li>24-hour dispatch services</li>
              <li>GEO fence around your property to keep our officers accountable</li>
              <li>Daily activity reports providing hourly site activity</li>
              <li>Customized QR codes to keep our officers active and your site′s soft spots covered</li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Este componente no necesita props por ahora
</script>

<style scoped>
/* Services Section Styles */
.services-section {
  background-color: #031059;
  padding: 80px 0;
  color: white;
}

.section-title {
  margin-bottom: 4rem;
}

.title-text {
  font-size: 3.5rem;
  font-weight: 900;
  letter-spacing: 3px;
  margin-bottom: 1rem;
  color:white;
}

.title-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.title-logo {
  height: 60px;
  width: auto;
}

.service-image {
  position: relative;
  overflow: hidden;

  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

.service-image img {
  width: 100%;
  height: auto;
  min-height: 300px;
  object-fit: cover;
  transition: transform 0.3s ease;
 
}

.service-image:hover img {
  transform: scale(1.05);
}

.service-content {
  padding: 1rem 0;
  font-size:1.25rem;
}

.service-subtitle {
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 2rem;
  color: white;
  font-size:1.625rem;
   font-family: 'Open Sans', system-ui, -apple-system, 'Segoe UI', Roboto, Ubuntu, Cantarell, sans-serif;
}

.service-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.service-list li {
  position: relative;
  padding: 0.5rem 0 0.5rem 2rem;
  font-size: 1.25rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.95);
  font-family: 'Open Sans', system-ui, -apple-system, 'Segoe UI', Roboto, Ubuntu, Cantarell, sans-serif;
}

/* Línea separadora solo en móvil */
@media (max-width: 991px) {
  .service-list li {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .service-list li:last-child {
    border-bottom: none;
  }
}

.service-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.7rem;
  width: 1.2rem;
  height: 1.2rem;
  background-image: url('/images/check-servicios.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

/* Responsive Design */
@media (max-width: 992px) {
  .title-text {
    font-size: 3rem;
  }
  
  .services-section {
    padding: 60px 0;
  }
  
  .service-content {
    padding: 2rem 0;
  }
  
  .service-subtitle {
    font-size: 1.3rem;
  }
}

@media (max-width: 768px) {
  .title-text {
          font-size: 53px;
        letter-spacing: 1px;
        line-height: 30px;

  }
  
  .service-subtitle {
    font-size: 1.2rem;
  }
  
  .service-image img {
    min-height: 250px;
  }
  
  .services-section {
    padding: 50px 0;
  }
  
  .section-title {
    margin-bottom: 3rem;
  }
  
  .row.mb-5 {
    margin-bottom: 3rem !important;
  }
}

@media (max-width: 576px) {
  .title-text {
          font-size: 53px;
        letter-spacing: 1px;
        line-height: 30px;

  }
  
  .service-subtitle {
    font-size: 1.1rem;
  }
  
  .service-list li {
    font-size: 0.95rem;
    padding: 0.4rem 0 0.4rem 1.8rem;
  }
  
  .service-list li::before {
    width: 1rem;
    height: 1rem;
    top: 0.6rem;
  }
  
  .service-image img {
    min-height: 200px;
  }
  
  .services-section {
    padding: 40px 0;
  }
}

/* Animaciones suaves */
.service-content {
  animation: fadeInUp 0.6s ease;
}

.service-image {
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
</style>
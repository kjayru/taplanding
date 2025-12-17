<template>
  <!-- About Us Section -->
  <section id="about" class="about-section">
    <div class="container">
      <!-- Título de la sección -->
      <div class="row">
        <div class="col-12 text-center mb-5 about__seccion__titulo">
          <div class="section-title">
            <h2 class="title-text">ABOUT US</h2>
            <div class="title-icon">
              <img src="/images/icono-tap-titulos.svg" alt="TAP Security Icon" class="title-logo" />
            </div>
          </div>
        </div>
      </div>

      <!-- Texto principal -->
      <div class="row mb-5">
        <div class="col-lg-8 mx-auto text-center">
          <h3 class="main-subtitle">
            TAP Security was founded with the vision to challenge the 
            security service industry by proactively placing the client's 
            needs first.
          </h3>
          <p class="main-description">
            We are a veteran owned and operated business, dedicated to achieving excellence for 
            our clients and their customers. Our clients depend on us to meet challenging 
            standards. Anything less is not an option. We pride ourselves in our reliability, 
            promptness, professionalism, and staying active while on site. We excel at what we 
            do and what we do sets us apart from our competitors.
          </p>
        </div>
      </div>

      <!-- Tres bloques de características -->
      <div class="row g-4">
        <!-- Dependable -->
        <div class="col-lg-4 col-md-6">
          <div class="feature-card text-center">
            <div class="feature-icon">
              <img src="/images/icono-dependable.svg" alt="Dependable Icon" />
            </div>
            <h4 class="feature-title">Dependable</h4>
            <p class="feature-description">
              Our Company uses innovative technologies, such as tour tracking, 
              ensures promptness, accountability, and active awareness of your property.
            </p>
          </div>
        </div>

        <!-- Professional -->
        <div class="col-lg-4 col-md-6">
          <div class="feature-card text-center">
            <div class="feature-icon">
              <img src="/images/icono-professional.svg" alt="Professional Icon" />
            </div>
            <h4 class="feature-title">Professional</h4>
            <p class="feature-description">
              We pride ourselves in our attention to detail and it's reflected first in our 
              appearance. We aim to have a strong professional presence in your facility to 
              deter criminal activity.
            </p>
          </div>
        </div>

        <!-- Passionate -->
        <div class="col-lg-4 col-md-12">
          <div class="feature-card text-center">
            <div class="feature-icon">
              <img src="/images/icono-passionate.svg" alt="Passionate Icon" />
            </div>
            <h4 class="feature-title">Passionate</h4>
            <p class="feature-description">
              Our team is passionate about your site. You aren't just a number, you are the 
              foundation of our business growth. Your site is safe with us.
            </p>
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
/* About Us Section Styles */
.about-section {
  background-color: #B7161C;
  padding: 80px 0;
  color: white;
}


.section-title {
  margin-bottom: calc(3rem - 15px);
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

.main-subtitle {
  font-size: 1.625rem;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 2rem;
  color:white;
  font-family: 'Open Sans', system-ui, -apple-system, 'Segoe UI', Roboto, Ubuntu, Cantarell, sans-serif;
}

.main-description {
  font-size: 1.25rem;
  line-height: 1.6;
  opacity: 0.95;
  margin-bottom: 0;
  font-family: 'Open Sans', system-ui, -apple-system, 'Segoe UI', Roboto, Ubuntu, Cantarell, sans-serif;
}

.feature-card {
  padding: 2rem 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.feature-icon {
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 140px;
  
  transition: all 0.3s ease;
}

.feature-icon:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-5px);
}

.feature-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

.feature-title {
  font-family: 'Open Sans', sans-serif;
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 1rem;
  color:white;
}

.feature-description {
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 0;
  flex-grow: 1;

}

/* Responsive Design */
@media (max-width: 992px) {
  .title-text {
    font-size: 3rem;
  }
  
  .main-subtitle {
    font-size: 1.3rem;
  }
  
  .about-section {
    padding: 60px 0;
  }
  .about__seccion__titulo{
    margin-bottom:0 !important;
  }
  .about-section .main-subtitle{
          font-size: 1.5rem;
  }
}

@media (max-width: 768px) {
    .title-text{
        font-size: 3.5rem;
        letter-spacing: 1px;
        line-height: 30px;
    }
  
  .main-subtitle {
    font-size: 1.2rem;
  }
  
  .feature-card {
    padding: 1.5rem 1rem;
  }
  
  .about-section {
    padding: 50px 0;
  }
}

@media (max-width: 576px) {
  .title-text{
        font-size: 3.5rem;
        letter-spacing: 1px;
        line-height: 30px;
    }
  
  .main-subtitle {
    font-size: 1.1rem;
  }
  
  .feature-icon {
    width: 70px;
    height: 70px;
  }
  
  .about-section {
    padding: 40px 0;
  }
}
</style>
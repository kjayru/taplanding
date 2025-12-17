<template>
  <!-- Home Section -->
  <section id="home" class="home-section">
    <div class="container-fluid">

      <div class="row align-items-center min-vh-100 d-none d-md-flex">
        <!-- Contenido central -->
        <div class="col-12 home-content text-center">
          <!-- Texto principal -->
          <div class="home-text mb-4">
            <h1 class="home-title">
              YOUR <span class="text-danger">SECURITY</span><br>
              IS OUR BUSINESS
            </h1>
          </div>
          
          <!-- Logo central -->
          <div class="home-logo">
            <img src="/images/logo.png" alt="TAP Security Logo" class="img-fluid" />
          </div>
        </div>
      </div>


      <div class="row align-items-start mt-5 min-vh-100 d-flex d-md-none">
        <!-- Contenido central -->
        <div class="col-12 home-content text-center">
          <!-- Texto principal -->
          <div class="home-text mb-4">
            <h1 class="home-title">
              YOUR <span class="text-danger">SECURITY</span><br>
              IS OUR BUSINESS
            </h1>
          </div>
          
          <!-- Logo central -->
          <div class="home-logo">
            <img src="/images/logo.png" alt="TAP Security Logo" class="img-fluid" />
          </div>
        </div>
      </div>


    </div>
  </section>
</template>

<script setup>
// Este componente no necesita props por ahora, pero se pueden agregar si es necesario
</script>

<style scoped>
/* Home Section Styles */
.home-section {
  background:  
              url('/images/Banner-landing-home-tap 1.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
  padding: 0;
  position: relative;
  overflow: hidden;
}

.home-section .container-fluid {
  height: 100%;
  padding: 0;
}

.home-section .row {
  margin: 0;
  height: 100vh;
}

.home-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  z-index: 2;
}

.home-logo img {
  width: 333px !important;
  max-width: 100%;
  height: auto;
  margin-bottom: 2rem;
}

.home-title {
  font-size: 4.5rem;
  font-weight: 900;
  color: white;
  line-height: 1.1;
  text-align: center;
  letter-spacing: 3px;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);
  margin-bottom: 0;
}

.home-title .text-danger {
  color: #E01F26 !important;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);
}

.home-content {
  position: relative;
  z-index: 2;
}

/* Responsive Design */
@media (max-width: 992px) {

  .home-section {
    background: url('/images/Banner-landing-home-tap-mobile_1.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    min-height: 100vh;
    padding: 0;
    position: relative;
    overflow: hidden;
  }

  .home-title {
    font-size: 3.5rem;
    letter-spacing: 2px;
  }
  
  .home-logo img {
    width: 220px !important;
  }
  
  .home-section {
    background-attachment: scroll;
  }
  
  .home-section .row {
    height: auto;
    min-height: 100vh;
  }
}

@media (max-width: 768px) {
  .home-title {
    font-size: 2.8rem;
    letter-spacing: 1px;
  }
  
  .home-logo img {
    width: 150px !important;
  }
  
  .home-content {
    padding: 1.5rem;
  }
}

@media (max-width: 576px) {
  .home-title {
    font-size: 2.2rem;
    letter-spacing: 1px;
  }
  
  .home-logo img {
    width: 150px !important;
  }
  
  .home-content {
    padding: 1rem;
  }
}

/* Eliminamos estilos de imágenes laterales que ya no se usan */
</style>
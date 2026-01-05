<template>
  <!-- Business Section -->
  <section id="business" class="business-section">
    <!-- Testimonial Section -->
    <div class="testimonial-section">
      <div class="container-xl">
        <!-- Card a 3 columnas (como la referencia) -->
        <div class="row g-3 align-items-stretch testimonial-card">
          <!-- Columna IZQUIERDA: nombre, cargo y quote -->
          <div class="col-lg-3 col-md-12 order-1 order-lg-1 bg-white  left-rail">
            <div class="testimonial-header">
              <h2 class="person-name">Oscar<br />Gonzalez</h2>
              <p class="person-title">Founder &amp; President</p>
              <div class="title-underline"></div>
            </div>

            <div class="quote-section">
              <blockquote class="main-quote">
                “I believe the success of a business is rooted in the satisfaction of one’s clients.”
              </blockquote>
            </div>
             <div class="title-underline d-block d-sm-none"></div>
          </div>

          <!-- Columna CENTRAL: retrato con fondo azul -->
          <div class="col-lg-4 col-md-12 order-2 order-lg-2 image-rail">
            <div class="portrait-wrap" style="background-image: url('/images/Oscar-gzz.jpg');">
              <!-- Imagen como fondo -->
            </div>
          </div>

          <!-- Columna DERECHA: biografía en panel gris -->
          <div class="col-lg-5 col-md-12 order-3 order-lg-3 bio-rail p-4">
            <div class="bio-text">
              <p>
                Oscar was born in San Antonio, Texas and since an early age, he has been in the security
                industry. He helped manage his father’s 13-year-old investigation and security business at
                the young age of 17. Throughout his adult years, he has maintained the highest standards
                in all areas.
              </p>
              <p>
                At age 21, Oscar joined the United States Air Force and was stationed at Laughlin Air
                Force Base until his honorable discharge in 2005.
              </p>
              <p>
                Throughout his years in the military, his personal previous tools such as security training,
                substance abuse courses, firearm instructor desk, jump entry operations helped in his
                success.
              </p>
              <p>
                Now a veteran, Oscar remains passionate about changing the security industry. He
                believes the success of a business is rooted in the satisfaction of one’s clients. Oscar took
                over the security side of his father’s business and transitioned all of July 2007 to found
                Texas Asset Protection (aka TAP Security). His vision is to set a new standard for what
                clients expect from security officers and patrol services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Trusted By Section -->
    <div class="trusted-section">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5">
            <h3 class="trusted-title">TRUSTED BY</h3>
            <div class="title-icon">
              <img src="/images/icono-tap-titulos.svg" alt="TAP Security Icon" class="trusted-logo" />
            </div>
          </div>
        </div>



        <div class="row align-items-center justify-content-center g-4">
          <!-- Spectrum -->
          <div class="col-lg-3 col-md-3 col-6">
            <div class="client-logo">
              <img src="/images/Cliente-Spectrum-Logo.png" alt="Spectrum" class="img-fluid" />
            </div>
          </div>

          <!-- Apple -->
          <div class="col-lg-3 col-md-3 col-6">
            <div class="client-logo">
              <img src="/images/Cliente-apple.png" alt="Apple" class="img-fluid" />
            </div>
          </div>

          <!-- SRE -->
          <div class="col-lg-3 col-md-3 col-6">
            <div class="client-logo">
              <img src="/images/Cliente-Consulado-SRE-Blanco.png" alt="SRE Consulado" class="img-fluid" />
            </div>
          </div>

          <!-- Albany -->
          <div class="col-lg-3 col-md-3 col-6">
            <div class="client-logo">
              <img src="/images/Cliente-albany.png" alt="Albany" class="img-fluid" />
            </div>
          </div>

          <!-- CoSA -->
          <div class="col-lg-3 col-md-3 col-6">
            <div class="client-logo">
              <img src="/images/cliente-CoSA-Logo.png" alt="CoSA" class="img-fluid" />
            </div>
          </div>

          <!-- Catholic Charities -->
          <div class="col-lg-3 col-md-3 col-6">
            <div class="client-logo">
              <img src="/images/cliente-Catholic-Charities.png" alt="Catholic Charities" class="img-fluid" />
            </div>
          </div>

          <!-- Maruchan -->
          <div class="col-lg-3 col-md-3 col-6">
            <div class="client-logo">
              <img src="/images/Cliente-maruchan.png" alt="Maruchan" class="img-fluid" />
            </div>
          </div>

          <!-- Mexican Culture -->
          <div class="col-lg-3 col-md-3 col-6">
            <div class="client-logo">
              <img src="/images/Cliente-MexicanCultureBlanco.png" alt="Mexican Culture" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Join Us Section -->
    <div id="join-us" class="join-section">
      <div class="container">
        <div class="row align-items-center">
          <!-- Imagen del equipo -->
          <div class="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <div class="join-image">
              <img src="/images/join-us.jpg" alt="Join TAP Security Team" class="img-fluid" />
            </div>
          </div>

          <!-- Contenido de Join Us -->
          <div class="col-lg-6 col-md-12">
            <div class="join-content">
              <div class="join-logo mb-4">
                <img src="/images/logo.png" alt="TAP Security Logo" class="logo-img" />
              </div>

              <h3 class="join-title">JOIN US</h3>

              <p class="join-description">
                We are a fast growing business and always accepting applications.
              </p>

              <a href="https://tap-security.com/employment" class="btn btn-join">APPLY NOW</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// sin props
</script>

<style scoped lang="scss">
@import '../../styles/_variables.scss';

/* -------- Base de la sección -------- */
.business-section {
  background-color: #f8f9fa;
}

.testimonial-section {
  padding: 80px 0;
  background-color: #fff;
}

/* Card general */
.testimonial-card {
  border: 0;
  min-height: 600px;
}

/* -------- Columna CENTRAL (retrato) -------- */
$imageRailBg: #0b1733; /* azul profundo tipo referencia */
.image-rail {

  min-height: 100%;
  display: flex;
  align-items: stretch;
}

.portrait-wrap {
  width: 100%;
  height: 100%;
  min-height: 600px;
  background-size: contain;
  background-position: right bottom;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.portrait {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 6px;
  box-shadow: 0 24px 48px rgba(0,0,0,.28);
}

/* -------- Columna IZQUIERDA (nombre + quote) -------- */
.left-rail {
  display: flex;
  flex-direction: column;
  justify-content: start;
  min-height: 600px;
}


.testimonial-header {
  margin-bottom: 2rem;
}

.person-name {
  font-size: clamp(2rem, 4.2vw, 3.5rem);
  font-weight: bold;
  color: $secondary;
  line-height: .95;
  letter-spacing: 1.5px;
  margin-bottom: .5rem;
  font-weight: bold;
  font-family: 'Open Sans', system-ui, -apple-system, 'Segoe UI', Roboto, Ubuntu, Cantarell, sans-serif;
  font-size:32px;
  padding-top:1.5rem;
   position: relative;
}

.person-title {
  font-size: .95rem;
  color: rgba($secondary, .7);
  font-weight: 700;

  margin-bottom: .75rem;
 
}
.person-name::before {
  content: '';
  position: absolute;
 top: 0;
    left: 0;
    width: 100%;
    height: 1px;
  background-color: $primary;
}

.title-underline {
  width: 100%;
  height: 1px;
  background-color: $primary;
}

.quote-section {
  margin-top: 2.25rem;
}

.main-quote {
  font-size: clamp(1.25rem, 1.8vw, 1.6rem);
  line-height: 1.35;
  color: $secondary;
  font-weight: 800;
  font-style: normal;
  quotes: "“" "”" "‘" "’";
}

/* -------- Columna DERECHA (bio gris) -------- */
$bioBg: #6b7280; /* gris pizarra parecido a la referencia */
.bio-rail {
  background: $bioBg;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 600px;
}

.bio-text p {
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(#fff, .95);
  margin-bottom: 1.1rem;
  text-align: left;
}

/* -------- Trusted -------- */
.trusted-section {
  padding: 60px 0;
  background-color: $primary;
}

.trusted-title {
  font-size:50px;
  font-weight: 900;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 0;
}

.trusted-logo {
  height: 50px;
  width: auto;
}

.client-logo {
  text-align: center;
  padding: 1rem;
  transition: transform .3s ease;
}
.client-logo:hover { transform: translateY(-5px); }

.client-logo img {
  max-height: 60px;
  width: auto;
  filter: brightness(0) invert(1);
  transition: all .3s ease;
}
.client-logo:hover img {
  transform: scale(1.1);
  filter: brightness(0) invert(1) drop-shadow(0 5px 10px rgba(0,0,0,.3));
}

/* -------- Join -------- */
.join-section { padding: 80px 0; background-color: #ffffff; }
.join-image { text-align: center; }
.join-image img {
  width: 100%; height: auto; border-radius: 10px;
  box-shadow: 0 15px 35px rgba(0,0,0,.1);
}
.join-content { padding: 2rem 0; text-align: left; }
.join-logo { text-align: left; }
.join-logo .logo-img { height: 80px; width: auto; }

/* Aumentar logo 20% en desktop */
@media (min-width: 992px) {
  .join-logo .logo-img { height: 96px; }
}
.join-title {
  font-size: 50px; font-weight: 900; color: $secondary;
  text-transform: uppercase; letter-spacing: 2px; margin-bottom: 1.5rem;
  text-align: left;
}
.join-description { font-size: 26px; color: rgba($secondary, .7); line-height: 1.6; margin-bottom: 2rem; text-align: left; }
.btn-join {
  background-color: $primary; color: #fff; padding: 12px 30px; border-radius: 25px;
  text-decoration: none; font-weight: 600; font-size: 1rem; text-transform: uppercase;
  letter-spacing: 1px; transition: all .3s ease; border: 2px solid $primary; display: inline-block;
}
.btn-join:hover { background-color: #010B40; color: $primary; transform: translateY(-2px); box-shadow: 0 8px 20px rgba($primary, .3); }

/* -------- Responsive -------- */

@media(max-width:1360px){
    .bio-text p {
      font-size: 15px;
      line-height: 1.7;
      color: rgba(255, 255, 255, 0.95);
      margin-bottom: 1.1rem;
      text-align: left;
  }
}

@media (max-width: 1280px) {
  .portrait-wrap {
    min-height: 600px;
  }
}

@media (max-width: 992px) {
  .testimonial-section { padding: 60px 0; }
  .image-rail { min-height: 460px; }
  .portrait-wrap {
    min-height: 460px;
  }
}

@media (max-width: 768px) {
  .testimonial-section { padding: 40px 0; }
  .portrait { max-width: 360px; }
  .left-rail { 
    border-right: 0; 
    border-top: 1px solid rgba(0,0,0,.06);
    min-height: auto;
  }
  .portrait-wrap {
      min-height: 600px;
      width: 100%;
      max-width: 100%;
      background-size: cover;
  }
  .main-quote {
    font-size: 30px;
    line-height: 1.35;
    color: #010B40;
    font-weight: 800;
    font-style: normal;
    quotes: "“" "”" "‘" "’";
    padding-right: 3rem;
  }
  .title-underline{
    width: 86%;
    height: 1px;
    background-color: #E01F26;
  }
  .person-name::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 86%;
      height: 1px;
      background-color: #E01F26;
  }


}

@media (max-width: 576px) {
  .portrait { max-width: 300px; }
}
</style>

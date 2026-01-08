<template>
  <!-- Blog Section -->
  <section id="blog" class="blog-section">
    <div class="container">
      <!-- Título de la sección -->
      <div class="row">
        <div class="col-12 text-center mb-5">
          <h2 class="blog-title">BLOG</h2>
          <div class="title-icon mt-3">
            <img src="/images/icono-tap-titulos.svg" alt="TAP Security Icon" class="blog-logo" />
          </div>
        </div>
      </div>

      <!-- Grid de artículos -->
      <div class="row g-4 mb-5">
        <!-- Artículo 1: Key factors to consider -->
        <div class="col-lg-3 col-md-6">
          <a href="https://tap-security.com/blog/key-factors-to-consider-when-choosing-the-right-private-security-company" target="_blank" rel="noopener noreferrer" class="blog-link">
            <div class="blog-card">
              <div class="blog-image" style="background-image: url('https://tap-security.com/storage/card/6rA9UCBYkhoop252rR1aAUNccTDejSPcYzjqiQLc.jpg')">
              </div>
              <div class="blog-content">
                <h3 class="blog-article-title">
                 Key factors to consider when choosing the right private security company
                </h3>
              </div>
            </div>
          </a>
        </div>

        <!-- Artículo 2: 5 common myths -->
        <div class="col-lg-3 col-md-6">
          <a href="https://tap-security.com/blog/5-common-myths-about-security-guards-and-the-truth-behind-them" target="_blank" rel="noopener noreferrer" class="blog-link">
            <div class="blog-card">
              <div class="blog-image" style="background-image: url('https://tap-security.com/storage/card/NfHa9aez0MQnQrihrAJpcceEMJwGiy8veS63fm9v.png')">
              </div>
              <div class="blog-content">
                <h3 class="blog-article-title">
                  5 common myths about security guards and the truth behind them
                </h3>
              </div>
            </div>
          </a>
        </div>

        <!-- Artículo 3: Why choosing the right security partner -->
        <div class="col-lg-3 col-md-6">
          <a href="https://tap-security.com/blog/why-choosing-the-right-security-partner-matters" target="_blank" rel="noopener noreferrer" class="blog-link">
            <div class="blog-card">
              <div class="blog-image" style="background-image: url('https://tap-security.com/storage/card/q19vg4ImzZNO36bNAoAkHaavAYCxIXNquC1ivJ9l.png')">
              </div>
              <div class="blog-content">
                <h3 class="blog-article-title">
                  Why choosing the right security partner matters
                </h3>
              </div>
            </div>
          </a>
        </div>

        <!-- Artículo 4: Why security guard services -->
        <div class="col-lg-3 col-md-6">
          <a href="https://tap-security.com/blog/why-security-guard-services-are-crucial-for-safety-today" target="_blank" rel="noopener noreferrer" class="blog-link">
            <div class="blog-card">
              <div class="blog-image" style="background-image: url('https://tap-security.com/storage/card/pUTtfjoTxLi4tplIQc3E3u7TvKJeI0rVh5GstdWq.png')">
              </div>
              <div class="blog-content">
                <h3 class="blog-article-title">
                 Why security guard services are crucial for safety today
                </h3>
              </div>
            </div>
          </a>
        </div>
      </div>

      <!-- Botón View All -->
      <div class="row">
        <div class="col-12 text-center">
          <a href="https://tap-security.com/blog" class="btn btn-view-all">VIEW ALL</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Este componente no necesita props por ahora
</script>

<style scoped lang="scss">
@import '../../styles/_variables.scss';

/* Blog Section Styles */
.blog-section {
  background-color: $gray-700;
  padding: 80px 0;
  color: white;
}

.blog-title {
  font-size: 3.5rem;
  font-weight: 900;
  letter-spacing: 3px;
  margin-bottom: 0;
 color:#ffffff;
  text-transform: uppercase;
}

.blog-logo {
  height: 50px;
  width: auto;
}

.blog-card {
  height: 350px;
 
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;
  background: white;
  display: flex;
  flex-direction: column;
}

.blog-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
}

.blog-image {
  position: relative;
  width: 100%;
  height: 220px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.blog-card:hover .blog-image {
  transform: scale(1.05);
}

.blog-content {
  flex: 1;
  background: white;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.blog-article-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: $secondary;
  line-height: 1.3;
  margin: 0;
  text-align: left;
  transition: all 0.3s ease;
   font-family: 'Open Sans', system-ui, -apple-system, 'Segoe UI', Roboto, Ubuntu, Cantarell, sans-serif;
   position: relative;
   
}
.blog-article-title::after {
  content:"";
  background: url('/images/arrow.png') no-repeat;
  height: 20px;
  width: 20px;
  position: absolute;
  right: -30px;
  top: 10px;
}

.blog-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.blog-card:hover .blog-article-title {
  color: $primary;
}

.btn-view-all {
  background-color: $primary;
  color: white;
  padding: 12px 30px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  border: 2px solid $primary;
  display: inline-block;
}

.btn-view-all:hover {
  background-color: #ffffff;
  color: #010B40;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(220, 53, 69, 0.3);
}

@media(max-width:1361px){
  .blog-article-title{
      font-size: 16px;
  }
}


/* Responsive Design */
@media (max-width: 992px) {
  .blog-section {
    padding: 60px 0;
  }
  
  .blog-title {
    font-size: 3rem;
  }
  
  .blog-card {
    height: 300px;
  }
  
  .blog-article-title {
    font-size: 1rem;
  }
}

@media (max-width: 1280px) {
  .blog-article-title {
    font-size: 1.05rem;
    line-height: 1.25;
  }
}

@media (max-width: 768px) {
  .blog-title {
    font-size: 40px;
    letter-spacing: 2px;
    line-height: 30px;
  }
  
  
  .blog-article-title {
    font-size: 0.95rem;
  }
  
  .blog-content {
    padding: 1rem;
  }
  .blog-article-title::after {
      content: "";
      background: url(/images/arrow.png) no-repeat;
      height: 20px;
      width: 20px;
      position: absolute;
      right: -18px;
      top: 6px;
  }
    .blog-card {
        height: 315px;
        margin-bottom: 1rem;
    }
}

@media (max-width: 576px) {
  .blog-section {
    padding: 40px 0;
  }
  .blog-card {
        height: 315px;
        margin-bottom: 1rem;
    }
  
   .blog-title {
    font-size: 40px;
    letter-spacing: 2px;
    line-height: 30px;
  }
  
  
  
  
  .blog-article-title {
    font-size: 0.9rem;
  }
  
  .blog-content {
    padding: 0.8rem;
  }
  .blog-article-title::after {
      content: "";
      background: url(/images/arrow.png) no-repeat;
      height: 20px;
      width: 20px;
      position: absolute;
      right: -18px;
      top: 6px;
  }
}

/* Animaciones */
.blog-card {
  animation: fadeInUp 0.6s ease;
}

.blog-card:nth-child(1) {
  animation-delay: 0.1s;
}

.blog-card:nth-child(2) {
  animation-delay: 0.2s;
}

.blog-card:nth-child(3) {
  animation-delay: 0.3s;
}

.blog-card:nth-child(4) {
  animation-delay: 0.4s;
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

/* Efectos adicionales */
.blog-image::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.5s ease;
  z-index: 2;
}

.blog-card:hover .blog-image::before {
  left: 100%;
}


@media(min-width:1200px){

    h3, .h3 {
        font-size: 16px !important;
    }
}
</style>
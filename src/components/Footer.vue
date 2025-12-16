<template>
  <!-- Footer Section -->
  <footer class="footer-section">
    <div class="container">
      <div class="footer-content-wrapper">
        <div class="row">
        <!-- Logo y Botón Column -->
        <div class="col-lg-3 col-md-6 mb-4">
          <div class="footer-logo-section">
            <div class="footer-logo mb-3">
              <img src="/images/logo.png" alt="TAP Security Logo" class="footer-logo-img" />
            </div>
            <p class="psp-license">PSP Lic: B05203201</p>
            <a href="https://tap-security.com/contact" target="_blank" rel="noopener noreferrer" class="btn-quote mt-3">GET A QUOTE</a>
          </div>
        </div>

        <!-- Navigation Links Columns -->
        <div class="col-lg-9 col-md-9 mb-4">
          <div class="row">
            <!-- Home Column -->
            <div class="col-lg-3 col-md-6 mb-3">
              <div class="footer-links">
                <h6 class="footer-link-title">Home</h6>
                <ul class="footer-nav-list">
                  <li><a href="#about" class="footer-link">About us</a></li>
                  <li><a href="#services" class="footer-link">Services</a></li>
                </ul>
              </div>
            </div>

            <!-- Employment Column -->
            <div class="col-lg-3 col-md-6 mb-3">
              <div class="footer-links">
                <h6 class="footer-link-title">Employment</h6>
                <ul class="footer-nav-list">
                  <li><a href="#join-us" class="footer-link">Apply employment</a></li>
                  <li><a href="#join-us" class="footer-link">Form 8850</a></li>
                </ul>
              </div>
            </div>

            <!-- Training Academy Column -->
            <div class="col-lg-3 col-md-6 mb-3">
              <div class="footer-links">
                <h6 class="footer-link-title">Training academy</h6>
                <ul class="footer-nav-list">
                  <li><a href="#training" class="footer-link">Training calendar</a></li>
                  <li><a href="#training" class="footer-link">Online courses</a></li>
                </ul>
              </div>
            </div>

            <!-- More Column -->
            <div class="col-lg-3 col-md-6 mb-3">
              <div class="footer-links">
                <h6 class="footer-link-title">&nbsp;&nbsp;</h6>
                <ul class="footer-nav-list">
                  <li><a href="#blog" class="footer-link">Blog</a></li>
                  <li><a href="#contact" class="footer-link">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">

        <!-- First Divider Line -->
        <div class="row">
          <div class="col-12">
            <hr class="footer-divider">
          </div>
        </div>

        <!-- Contact Information Middle Section -->
        <div class="row">
          <div class="col-md-6 mb-3">
            <div class="footer-contact-info">
              <p class="footer-info-text">admin@txassetpro.com</p>
              <p class="footer-info-text">Tel: (210) 399-1116</p>
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <div class="footer-contact-info">
              <p class="footer-info-text">11503 Jones Maltsberger Rd, Ste 1158</p>
              <p class="footer-info-text">San Antonio, TX 78216</p>
            </div>
          </div>
        </div>

        <!-- Second Divider Line -->
       


         <div class="row">
          <div class="col-12">
            <div class="footer-bottom">
              <div class="footer-bottom-content">
                <p class="copyright-text">
                  2025 All Rights Reserved for Texas Asset Protection, LLC ©
                </p>
                <p class="design-credit">
                  Design by: <a href="https://cobos.com.mx" target="_blank" rel="noopener noreferrer" class="cobo-link">Cobo's</a>
                </p>
              </div>
            </div>
          </div>
        </div>

          </div>
        </div>

        <!-- Contact Info Column (Right Side) -->
      
      </div>


        <!-- Footer Bottom -->
       
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer component logic
</script>

<style scoped lang="scss">
@import '../../styles/_variables.scss';

/* Footer Styles */
.footer-section {
  background-color: white;
  padding: 3rem 0;
}

.footer-content-wrapper {
  background-color:#031059;
  color: white;
  padding: 4rem 2rem 2rem 2rem;

}

/* Logo Section */
.footer-logo-section {
  text-align: center;
}

.footer-logo-img {
  height: 120px;
  width: auto;
  margin-bottom: 1rem;
}

.psp-license {
  color: #ffffff;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  font-weight: 400;
}

.btn-quote {
  background-color: $primary;
  color: white;
  padding: 12px 25px;
  border-radius: 25px;
  border: none;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
}

.btn-quote:hover {
  background-color: $danger;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba($primary, 0.4);
}

/* Footer Links */
.footer-link-title {
  color: white;
  font-size: 14.4px;
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
   font-family: 'Open Sans', system-ui, -apple-system, 'Segoe UI', Roboto, Ubuntu, Cantarell, sans-serif;
}

.footer-nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-nav-list li {
  margin-bottom: 0.5rem;
}

.footer-link {
  color: rgba(white, 0.7);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #E01F26;
  text-decoration: none;

}

.home-link {
  color: $primary;
  font-weight: 600;
}

/* Contact Info Right Side */
.footer-contact-right {
  text-align: left;
}

.contact-item-right {
  color: rgba(white, 0.9);
  font-size: 0.95rem;
  margin-bottom: 0.8rem;
  line-height: 1.5;
}

/* Footer Bottom */
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 2rem;
  padding-top: 1.5rem;
}

/* Footer Divider */
.footer-divider {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  margin: 2rem 0;
}

/* Contact Info Middle Section */
.footer-contact-info {
  text-align: left;
}

.footer-info-text {
  color: rgba(white, 0.9);
  font-size: 0.95rem;
  margin: 0.5rem 0;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.copyright-text {
  color: rgba(white, 0.7);
  font-size: 0.85rem;
  margin: 0;
}

.design-credit {
  color: rgba(white, 0.7);
  font-size: 0.85rem;
  margin: 0;
}

.cobo-link {
  color: rgba(white, 0.7);
  text-decoration: none;
  transition: color 0.3s ease;
}

.cobo-link:hover {
  color: #E01F26;
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer-section {
    padding: 3rem 0 2rem 0;
  }
  
  .footer-logo-section {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .footer-links {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .footer-contact {
    margin-top: 1.5rem;
  }
  
  .footer-bottom-content {
    text-align: center;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .footer-logo-img {
    height: 60px;
  }
}

@media (max-width: 576px) {
  .footer-section {
    padding: 2rem 0 1.5rem 0;
  }
  
  .btn-quote {
    padding: 10px 20px;
    font-size: 0.8rem;
  }
  
  .contact-item {
    font-size: 0.85rem;
  }
  
  .footer-link-title {
    font-size: 0.9rem;
  }
}
</style>
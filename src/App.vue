<script setup>
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'
import Home from './components/Home.vue'
import AboutUs from './components/AboutUs.vue'
import Video from './components/Video.vue'
import Services from './components/Services.vue'
import Employment from './components/Employment.vue'
import Training from './components/Training.vue'
import Business from './components/Business.vue'
import Blog from './components/Blog.vue'
import Contacto from './components/Contacto.vue'
import Footer from './components/Footer.vue'

// Definir las secciones para el NavBar
const sections = ref([
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT US' },
 
  { id: 'services', label: 'SERVICES' },
  { id: 'join-us', label: 'EMPLOYMENT' },
  { id: 'training', label: 'TRAINING ACADEMY' },

  { id: 'blog', label: 'BLOG' }
 
])
</script>

<template>
  <!-- NavBar -->
  <NavBar :sections="sections" />
  
  <!-- Home Section -->
  <Home />
  
  <!-- About Us Section -->
  <AboutUs />
  
  <!-- Video Section -->
  <Video />
  
  <!-- Services Section -->
  <Services />
  
  <!-- Employment Section -->
  <Employment />
  
  <!-- Training Section -->
  <Training />
  
  <!-- Business Section -->
  <Business />
  
  <!-- Blog Section -->
  <Blog />
  
  <!-- Contact Section -->
  <Contacto />
  
  <!-- Footer Section -->
  <Footer />
  
</template>

<style scoped>
/* Estilos globales del App pueden ir aquí si es necesario */
</style>

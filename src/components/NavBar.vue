<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
    sections: {
        type: Array,
        required: true
    }
})

const activeSection = ref('')
const windowWidth = ref(window.innerWidth) // ✅ Agregado

// Función para actualizar el ancho de la ventana
const handleResize = () => {
    windowWidth.value = window.innerWidth
}

// Funciones para manejar los botones GET A QUOTE en móvil
const scrollToContactMobileTop = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
}

const scrollToContactMobileMenu = () => {
    const navCollapse = document.getElementById('navContent')
    const navbarToggler = document.querySelector('.navbar-toggler')
    
    // Cerrar el menú móvil manualmente
    if (navCollapse && navCollapse.classList.contains('show')) {
        // Remover clase show
        navCollapse.classList.remove('show')
        navCollapse.classList.remove('collapsing')
        
        // Actualizar aria-expanded del botón hamburguesa
        if (navbarToggler) {
            navbarToggler.setAttribute('aria-expanded', 'false')
            navbarToggler.classList.add('collapsed')
        }
        
        // Hacer scroll después de cerrar el menú
        setTimeout(() => {
            const contactSection = document.getElementById('contact')
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        }, 300)
    } else {
        // Si el menú ya está cerrado, hacer scroll directamente
        const contactSection = document.getElementById('contact')
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }
}

// Función para detectar qué sección está visible
const handleScroll = () => {
    const scrollPosition = window.scrollY + 150 // offset para el navbar
    const windowHeight = window.innerHeight
    const centerOfViewport = scrollPosition + (windowHeight / 3)

    // Buscar la sección actual más cercana al centro del viewport
    let closestSection = null
    let closestDistance = Infinity

    // También verificar la sección industries
    const industriesSection = document.getElementById('industries')
    if (industriesSection) {
        const rect = industriesSection.getBoundingClientRect()
        const sectionTop = scrollPosition + rect.top
        const sectionBottom = sectionTop + rect.height
        
        if (centerOfViewport >= sectionTop && centerOfViewport <= sectionBottom) {
            activeSection.value = 'services'
            updateActiveLink('services')
            return
        }
    }

    for (let i = 0; i < props.sections.length; i++) {
        const section = document.getElementById(props.sections[i].id)
        if (section) {
            const rect = section.getBoundingClientRect()
            const sectionTop = scrollPosition + rect.top
            const sectionBottom = sectionTop + rect.height
            
            // Si el centro del viewport está dentro de esta sección
            if (centerOfViewport >= sectionTop && centerOfViewport <= sectionBottom) {
                activeSection.value = props.sections[i].id
                updateActiveLink(props.sections[i].id)
                return
            }
            
            // Calcular la distancia al centro del viewport
            const sectionCenter = sectionTop + (rect.height / 2)
            const distance = Math.abs(centerOfViewport - sectionCenter)
            
            if (distance < closestDistance) {
                closestDistance = distance
                closestSection = props.sections[i].id
            }
        }
    }
    
    // Si ninguna sección contiene el centro, usar la más cercana
    if (closestSection) {
        activeSection.value = closestSection
        updateActiveLink(closestSection)
    }
}

// Actualizar la clase active-pill en los links
const updateActiveLink = (sectionId) => {
    const navLinks = document.querySelectorAll('.mobile-menu .nav-link')
    navLinks.forEach(link => {
        const href = link.getAttribute('href')
        if (href === `#${sectionId}`) {
            link.classList.add('active-pill')
        } else {
            link.classList.remove('active-pill')
        }
    })
}

// Cerrar el menú móvil después de hacer clic en un enlace
onMounted(() => {
    const navLinks = document.querySelectorAll('.mobile-menu .nav-link')
    const navCollapse = document.getElementById('navContent')
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Solo cerrar el menú en dispositivos móviles (cuando el collapse está visible)
            if (window.innerWidth < 992 && navCollapse.classList.contains('show')) {
                const bsCollapse = new window.bootstrap.Collapse(navCollapse, {
                    toggle: false
                })
                bsCollapse.hide()
            }
        })
    })



    // Agregar listener de scroll
    window.addEventListener('scroll', handleScroll)
    
    // Agregar listener de resize ✅ Agregado
    window.addEventListener('resize', handleResize)
    
    // Ejecutar una vez al cargar para marcar la sección inicial
    handleScroll()
})

onUnmounted(() => {
    // Limpiar los listeners cuando el componente se desmonte
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('resize', handleResize) // ✅ Agregado
})
</script>

<template>
    <!-- Navbar estilo dark, sticky y expandible -->
    <nav id="mainNav" class="navbar navbar-expand-lg sticky-top navbar-dark bg-brand-navy"
        style="height: var(--header-h);">
        <div class="container-fluid px-3 px-lg-5">
            <!-- Hamburger button - Izquierda en móvil -->
            <button class="navbar-toggler collapsed order-1 order-lg-2 border-0 p-2" type="button" data-bs-toggle="collapse" data-bs-target="#navContent"
                aria-controls="navContent" aria-expanded="false" aria-label="Alternar navegación">
                <span class="navbar-toggler-icon"></span>
            </button> 

            <!-- Logo - Centrado en móvil -->
            <a class="navbar-brand d-flex align-items-center gap-2 order-2 order-lg-1 mx-auto mx-lg-0" href="#hero">
                <img src="/images/logo.png" alt="TuMarca"  class="brand-logo" />
            </a>

            <!-- GET A QUOTE button - Derecha en móvil -->
            <div class="order-3 d-lg-none">
                <button @click="scrollToContactMobileTop" class="btn btn-danger btn-sm fw-semibold px-3 rounded-pill text-nowrap" style="font-size: 0.75rem; border: none;">GET A QUOTE</button>
            </div>


            <div class="collapse navbar-collapse order-4" id="navContent">
                <!-- Header del menú móvil: X izquierda, Logo derecha -->
                <div class="d-lg-none d-flex justify-content-between align-items-center px-3 py-3 mobile-menu-header">
                    <!-- Botón X para cerrar -->
                    <button class="btn-close-menu" type="button" data-bs-toggle="collapse" data-bs-target="#navContent"
                        aria-controls="navContent" aria-expanded="true" aria-label="Cerrar menú">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                            <path stroke="rgba(224, 31, 38, 1)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M6 6l18 18M24 6L6 24"/>
                        </svg>
                    </button>
                    
                    <!-- Logo a la derecha -->
                    <img src="/images/logo.png" alt="TAP Security" height="50" />
                </div>

                <!-- Menu principal -->
                <ul class="navbar-nav ms-lg-3 me-auto align-items-lg-center mobile-menu">
                    <li class="nav-item" v-for="s in sections" :key="s.id">
                        <a :class="['nav-link', 'my-1', 'my-lg-0', windowWidth <= 1280 ? 'px-3' : 'px-4']"
                            :href="`#${s.id}`">
                            {{ s.label }}
                        </a>
                    </li>
                </ul>

                <!-- GET A QUOTE en menú móvil -->
                <div class="d-lg-none text-center py-4 boton__movil">
                    <button @click="scrollToContactMobileMenu" class="btn btn-danger fw-bold px-5 py-3 rounded-pill" style="border: none;">
                        GET A QUOTE
                    </button>
                </div>

                <!-- CLIENT LOGIN y USER LOGIN en móvil -->
                <div class="d-lg-none text-center pb-4 seccion__movil">
                    <a href="https://tapsecurity.staffr.net/" target="_blank" rel="noopener noreferrer" class="d-inline-block link-login-mobile px-4 py-2 mx-2">CLIENT LOGIN</a>
                    <a href="https://tap-security.com/login" target="_blank" rel="noopener noreferrer" class="d-inline-block link-login-mobile px-4 py-2 mx-2">USER LOGIN</a>
                </div>

                <!-- Social icons en móvil -->
                <div class="d-lg-none d-flex justify-content-center gap-4 pb-5 social-links-mobile">
                    <a href="https://www.facebook.com/tapsecurit/" target="_blank" rel="noopener noreferrer" class="social-mobile" aria-label="Facebook">
                        <img src="/images/facebook.svg" alt="Facebook" width="24" height="24" />
                    </a>
                    <a href="https://www.instagram.com/tapsecurity/?hl=es-la" target="_blank" rel="noopener noreferrer" class="social-mobile" aria-label="Instagram">
                        <img src="/images/instagram.svg" alt="Instagram" width="24" height="24" />
                    </a>
                    <a href="https://www.youtube.com/channel/UC72n6tJvyxseA49zLw5D2sA" target="_blank" rel="noopener noreferrer" class="social-mobile" aria-label="YouTube">
                        <img src="/images/youutbe.svg" alt="YouTube" width="24" height="24" />
                    </a>
                </div>

                <!-- Acciones a la derecha (Desktop) -->
                <div class="d-none d-lg-flex align-items-center gap-3 navbar__derecha">
                    <a href="#contact" class="btn btn-danger fw-semibold px-3 rounded-pill">GET A QUOTE</a>


                    <a href="https://tapsecurity.staffr.net/" target="_blank" rel="noopener noreferrer" class="link-login enlace">CLIENT LOGIN</a>
                    <a href="https://tap-security.com/login" target="_blank" rel="noopener noreferrer" class="link-login enlace">USER LOGIN</a>


                    <!-- Social -->
                    <div class="d-none d-lg-flex align-items-center gap-2 ms-2 social-links">
                        <a href="https://www.facebook.com/tapsecurit/" target="_blank" rel="noopener noreferrer" class="social" aria-label="Facebook" title="Facebook">
                            <!-- <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"
                                aria-hidden="true">
                                 <path
                                     d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.3 3h-1.9v7A10 10 0 0 0 22 12z" />
                             </svg>-->
                             <img src="/images/facebook.svg" alt="">
                        </a>
                        <a href="https://www.instagram.com/tapsecurity/?hl=es-la" target="_blank" class="social" aria-label="Instagram" title="Instagram">
                            <!--<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"
                                aria-hidden="true">
                                <path
                                    d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2.2A2.8 2.8 0 1 0 12 17.8 2.8 2.8 0 0 0 12 9.2zM18 6.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>-->
                            <img src="/images/instagram.svg" alt="">
                        </a>
                        <a href="https://www.youtube.com/channel/UC72n6tJvyxseA49zLw5D2sA" target="_blank" class="social" aria-label="YouTube" title="YouTube">
                            <!---<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"
                                aria-hidden="true">
                                <path
                                    d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 0 0 .5 6.2 31.7 31.7 0 0 0 0 12a31.7 31.7 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 3 0 0 0 2.1-2.1 31.7 31.7 0 0 0 .5-5.8 31.7 31.7 0 0 0-.5-5.8zM9.8 15.5V8.5l6.4 3.5-6.4 3.5z" />
                            </svg>--->
                            <img src="/images/youutbe.svg" alt="">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>


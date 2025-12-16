# TAP Security Landing Page - AI Coding Instructions

## Project Overview
Single-page landing site for TAP Security with SendGrid-powered contact form. **Hybrid architecture**: Vue 3 SPA frontend + Express backend API for email handling.

## Architecture & Data Flow

### Frontend-Backend Split
- **Frontend** (Vite dev server, port 5173): Vue 3 SPA with component-based sections
- **Backend** (Express, port 3001): Handles `/api/send-email` endpoint for SendGrid integration
- **Development proxy**: Vite proxies `/api/*` requests to `http://localhost:3001` (see `vite.config.ts`)
- **Production**: Both served from same Express server (built frontend in `dist/`)

### Contact Form Flow
1. `Contacto.vue` validates input client-side (name, email, message)
2. POSTs JSON to `/api/send-email` via native `fetch`
3. `api/server.js` validates, sends via SendGrid to admin AND auto-reply to user
4. Success/error states trigger UI feedback in `Contacto.vue`

## Critical Development Workflows

### Running the App
```bash
# Start both frontend + backend simultaneously (RECOMMENDED)
npm run dev:full

# Or separately:
npm run dev         # Frontend only (port 5173)
npm run dev:server  # Backend only (port 3001)
```

### Building for Production
```bash
npm run build       # TypeScript compile + Vite build → dist/
npm run preview     # Test production build locally
```

### Environment Setup
Required `.env` file at project root (NOT in `api/`):
```env
SENDGRID_API_KEY=your_actual_api_key
FROM_EMAIL=noreply@txassetpro.com
TO_EMAIL=admin@txassetpro.com
PORT=3001
```
**Critical**: SendGrid requires domain verification for `FROM_EMAIL` domain. See README "Configuración de SendGrid" section.

## Code Conventions & Patterns

### Component Structure
- **Single-file components**: All Vue components in `src/components/` using `<script setup>` Composition API
- **Section components**: Each major page section (Home, AboutUs, Services, etc.) is a standalone component
- **App.vue orchestration**: Imports all sections, renders in vertical stack, passes `sections` prop to NavBar

### Styling System
- **SCSS with Bootstrap 5**: Variables in `styles/_variables.scss`, global styles in `styles/base.scss`
- **Brand colors**: `$primary` (#E01F26 red), `$secondary` (#010B40 navy blue), `$danger` (#B7161C dark red)
- **Font stack**: Open Sans (body), Bebas Neue (headings via `$bebas-neue`)
- **Path aliases**: `@styles` → `styles/`, `@` → `src/` (configured in `vite.config.ts`)
- **Scoped styles**: Most component styles are scoped; global overrides in `base.scss`

### Navigation Active State
- NavBar uses scroll spy to detect visible section and apply `.active-pill` class
- Smooth scroll enabled via `scroll-behavior: smooth` in `base.scss`
- Active pill styling: red border (`$danger`), pill-shaped (999px border-radius)

### Form Validation Pattern (Contacto.vue)
- **Reactive errors object**: One property per field (`errors.name`, `errors.email`, etc.)
- **Validation triggers**: `@blur` for field validation, `@input` to clear errors
- **Submit validation**: `validateForm()` checks all fields before API call
- **Visual feedback**: `.error` class on inputs, `.error-message` divs below fields
- **State management**: `isSubmitting`, `showSuccess`, `showError` refs control UI states

### Backend API Structure (api/server.js)
- **Middleware**: CORS enabled, `express.json()` parser
- **Error handling**: 400 for missing fields, 500 for SendGrid failures
- **Email templates**: Inline HTML with brand colors, responsive design
- **Dual send**: Admin notification + user auto-reply in single SendGrid call

## Common Tasks

### Adding a New Section
1. Create `src/components/NewSection.vue` with `<script setup>`, `<template>`, `<style scoped>`
2. Import in `App.vue`: `import NewSection from './components/NewSection.vue'`
3. Add to sections array: `{ id: 'newsection', label: 'NEW SECTION' }`
4. Render in template: `<NewSection />`
5. Ensure section has `id="newsection"` for scroll spy

### Modifying Email Templates
- Edit HTML strings in `api/server.js` (lines ~40-80 for admin email, ~90-120 for auto-reply)
- Use brand colors: `#010B40` (navy), `#E01F26` (red), `#f8f9fa` (light gray)
- Test with `npm run dev:server` + tools like Postman or frontend form

### Updating SCSS Variables
- Modify `styles/_variables.scss` → changes propagate via Bootstrap's theming system
- Rebuild required: Vite hot reload handles this automatically in dev mode

## Gotchas & Edge Cases

- **SendGrid 403 errors**: Usually means `FROM_EMAIL` domain not verified or API key lacks send permissions
- **CORS in production**: Ensure frontend and backend served from same origin, or configure CORS properly
- **TypeScript in main.ts but not all components**: Some `.vue` files lack `<script setup lang="ts">`
- **Image paths**: Public assets in `public/images/` → reference as `/images/filename.svg` (Vite serves `public/` at root)
- **Bootstrap ScrollSpy**: Requires `data-bs-spy="scroll"` on `<body>` (see `index.html`) and unique section IDs

## Key Files Reference
- `src/App.vue`: Main component orchestrating all sections
- `src/components/Contacto.vue`: Contact form with validation + API integration (441 lines)
- `api/server.js`: Express server with SendGrid integration (162 lines)
- `vite.config.ts`: Path aliases + `/api` proxy configuration
- `styles/_variables.scss`: Brand colors, fonts, Bootstrap theme customization
- `package.json`: Scripts for dev, build, concurrent frontend/backend execution

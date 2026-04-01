# ✦ Alquimia Manual - Landing Page Premium

<p align="center">
  <img src="https://img.shields.io/badge/Version-3.0.0-A67B5B?style=flat&logo=semantic-release" alt="Version">
  <img src="https://img.shields.io/badge/License-MIT-A67B5B?style=flat" alt="License">
  <img src="https://img.shields.io/badge/Stack-HTML5%20%2B%20CSS3%20%2B%20JS-A67B5B?style=flat" alt="Tech Stack">
</p>

---

## 📋 Descripción

**Alquimia Manual** es una landing page de alta conversión diseñada para un artesano especializado en joyería y accesorios con materiales naturales. El proyecto digitaliza la artesanía de autor mediante una identidad de proximidad accesible vía código QR, permitiendo pedidos personalizados y envíos a distancia.

### Propuesta de Valor

- **Piezas únicas** feitas a mano con materiales 100% naturales
- **Tres líneas de colección**: Etérea (plumaria), Mineral (litoterapia), Forjada (orfebrería)
- **Atención personalizada** vía WhatsApp
- **Envíos a todo México** con empaque ecológico

---

## 📦 Producto

### Kit de Presentación

| Componente | Descripción |
|------------|-------------|
| `index.html` | Estructura principal con 13 secciones |
| `styles.css` | Sistema de diseño completo |
| `script.js` | Interactividad y animaciones |
| `README.md` | Documentación del proyecto |

### Especificaciones Técnicas

- **Tiempo de carga**: < 2 segundos (optimizado para Mobile First)
- **Responsive**: Mobile First (90% tráfico desde redes sociales)
- **Animaciones**: CSS animations + Intersection Observer
- **Navegación**: Smooth scroll con offsets para navbar fijo
- **Formularios**: Validación native + manejo de eventos

---

## 🛠️ Tecnologías

| Tecnología | Uso |
|------------|-----|
| **HTML5** | Estructura semántica del sitio |
| **CSS3** | Estilos con Custom Properties, Flexbox, Grid |
| **JavaScript (ES6+)** | Interactividad sin dependencias |
| **Google Fonts** | Cormorant Garamond + Syne |
| **No Frameworks** | Vanilla JS para máximo rendimiento |

### Fonts

```css
/* Display/Títulos */
font-family: 'Cormorant Garamond', serif;

/* Body/UI */
font-family: 'Syne', sans-serif;
```

---

## 📂 Estructura del Proyecto

```
alquimia-manual/
├── index.html          # Landing page completa (13 secciones)
├── styles.css         # Sistema de diseño Dark Luxury
├── script.js          # Interactividad y animaciones
├── README.md          # Este archivo
└── images/            # (Pendiente) Imágenes del catálogo
```

---

## 📐 Secciones del Sitio

### 1. **Navbar**
- Logo con ícono decorativo
- Links de navegación: Colecciones, Galería, Proceso, Contacto
- Efecto de scroll (glassmorphism)
- Menú móvil hamburguesa

### 2. **Hero Section**
- Label: "Artesanía de Autor"
- Título con gradiente: "Transmutamos Materiales en Magia"
- Subtítulo descriptivo
- Botones CTA: "Ver Colección" + "Explorar"
- Stats animados: 150+ piezas, 3 líneas, 100% artesanal
- Elementos visuales flotantes (shapes 3D simulados)

### 3. **Trust Badges**
- Materiales 100% Naturales
- Hecho a Mano
- Envíos a Todo México
- Atención Personalizada

### 4. **Servicios / Colecciones**
- 3 flip cards con las líneas de colección:
  - Línea Etérea (plumas)
  - Línea Mineral (piedras) - *Más Vendida*
  - Línea Forjada (metal)
- Tags, descripciones y CTAs

### 5. **Galería / Showcase**
- Grid responsive (1-4 columnas)
- 5 items: 1 large, 2 standard, 1 wide
- Overlay con categoría y título

### 6. **Proceso Creativo**
- Timeline de 4 pasos:
  01. Selección de Materiales
  02. Diseño Artesanal
  03. Creación Manual
  04. Acabado y Empaque

### 7. **Testimonios**
- Carrusel horizontal
- 3 testimonios con estrellas, texto, avatar e info

### 8. **FAQ**
- Accordion con 5 preguntas:
  - ¿Las piezas son realmente hechos a mano?
  - ¿Qué materiales usan?
  - ¿Hacen pedidos personalizados?
  - ¿Cuánto tardan los envíos?
  - ¿Puedo devolver una pieza?

### 9. **Contacto / CTA**
- Sección con gradiente radial
- Info de contacto: WhatsApp + Instagram
- Formulario: nombre, email, mensaje

### 10. **Footer**
- Logo y descripción
- Links organizados en columnas
- Redes sociales
- Copyright + ubicación

---

## 💬 Prompts Originales

### Prompt de Creación (Input del Usuario)

> **Contexto del Dossier Ejecutivo:**
> - Proyecto: "Alquimia Manual" - Joyería artesanal
> - Propuesta: Digitalización de artesanía con QR
> - Líneas: Etérea (plumas), Mineral (gemas), Forjada (metal)
> - Color: Ocre #A67B5B
> - Ubicación: Oaxaca, México
> - Estética: "Estática de la Tierra" - Orgánica, texturas naturales

> **Prompt de Generación:**
> Crear una landing page premium dark mode para un negocio de joyería artesanal llamado "Alquimia Manual". El diseño debe seguir la estética de la tierra con colores ocres y tonos oscuros, tener 13 secciones (hero, colecciones, galería, proceso, testimonios, FAQ, contacto, footer), ser mobile first, y tener integración con WhatsApp para pedidos.

### Análisis del Prompt

| Aspecto | Análisis |
|---------|----------|
| **Tipo de negocio** | Joyería artesanal / Personal |
| **Sector** | Creativo - Artesanal |
| **Estilo visual** | Dark Luxury / Earthy |
| **Color principal** | Ocre (#A67B5B) |
| **CTA principal** | WhatsApp directo |
| **Target** | Clientes que buscan piezas únicas |

---

## 📝 Logs de Cambios

### v3.0.0 (Actual)
**Fecha:** 2026-04-01

- ✅ Landing page completa con 13 secciones
- ✅ Sistema de diseño Dark Luxury Earthy
- ✅ Animaciones CSS completas (particles, floating shapes, reveal on scroll)
- ✅ Contador animado para stats del hero
- ✅ FAQ accordion funcional
- ✅ Formulario de contacto con validación
- ✅ Navbar responsive con menú móvil
- ✅ Mobile First optimizado
- ✅ Documentación completa en README

### v2.0.0
**Fecha:** 2026-03-29

- Estructura HTML con 10 secciones
- Sistema de diseño básico
- JavaScript inicial

### v1.0.0
**Fecha:** 2026-03-25

- Wireframe conceptual
- Paleta de colores definida

---

## ⚙️ Configuración

### Clonar el Proyecto

```bash
# Clone el repositorio
git clone https://github.com/TU_USUARIO/alquimia-manual.git

# Entre al directorio
cd alquimia-manual

# Abra en su navegador
# (Para desarrollo local)
npx serve .   # requiere Node.js
# O simplemente abra index.html en su navegador
```

### Personalización

#### Cambiar Número de WhatsApp

En `script.js`, línea ~95:
```javascript
const phoneNumber = 'TU_NUMERO_AQUI'; // Replace with actual number
```

Formato: sin + (ej: 5219511234567 para México)

#### Cambiar Colors

En `styles.css`,:root:
```css
--primary: #A67B5B;        /* Su color principal */
--primary-light: #C49A6C;  /* Versión clara */
--primary-dark: #8B6247;   /* Versión oscura */
```

#### Agregar Imágenes

Crear carpeta `images/` y agregar:
- `logo.png` - Logo principal
- `hero-visual.png` - Imagen hero
- `service_1.png` a `service_6.png` - Imágenes de servicios

#### Actualizar Testimonios

En `index.html`, sección `testimonials`:
```html
<div class="testimonial-card">
    <div class="testimonial-stars">★★★★★</div>
    <p class="testimonial-text">"Su texto aquí"</p>
    <div class="testimonial-author">
        <div class="author-avatar">P</div>  <!-- Inicial -->
        <div class="author-info">
            <span class="author-name">Nombre</span>
            <span class="author-location">Ciudad</span>
        </div>
    </div>
</div>
```

---

## 🚀 Deployment

### GitHub Pages (Recomendado)

```bash
# 1. Crear repositorio en GitHub
# 2. Push el código
git init
git add .
git commit -m "Initial commit: Alquimia Manual v3.0.0"
git remote add origin https://github.com/TU_USUARIO/alquimia-manual.git
git push -u origin main

# 3. Settings > Pages > Deploy from main branch
# 4. Listo! URL: https://TU_USUARIO.github.io/alquimia-manual/
```

### Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Netlify

```bash
# Arrastrar carpeta al dashboard de Netlify
# o usar CLI
netlify deploy --prod --dir=.
```

---

## 🔍 SEO

### Meta Tags Include

```html
<meta name="description" content="Joyería artesanal hecha a mano...">
<meta name="keywords" content="joyería artesanal, aretes de plumas...">
<meta property="og:title" content="Alquimia Manual | Joyería Artesanal">
<meta property="og:description" content="Piezas únicas...">
<meta name="twitter:card" content="summary_large_image">
```

### Recomendaciones Adicionales

1. **Google Search Console**: Agregar sitio
2. **Sitemap.xml**: Generar y提交
3. **Favicon**: Agregar `favicon.ico`
4. **Analytics**: Agregar Google Analytics
5. **SSL**: GitHub Pages lo provee automáticamente

---

## 🎨 Personalización Avanzada

### Agregar FAQ

En `index.html`, sección FAQ:
```html
<div class="faq-item">
    <button class="faq-question">
        <span>Tu pregunta</span>
        <span class="faq-icon">+</span>
    </button>
    <div class="faq-answer">
        <p>Tu respuesta...</p>
    </div>
</div>
```

### Cambiar Imágenes de Galería

```html
<div class="gallery-item">
    <div class="gallery-image">
        <img src="images/tu-imagen.jpg" alt="Descripción">
    </div>
    <div class="gallery-overlay">
        <span class="gallery-category">Línea...</span>
        <h4 class="gallery-title">Nombre</h4>
    </div>
</div>
```

### Agregar更多 Productos

Duplicar el `service-card` en la sección de servicios y cambiar:
- Título
- Descripción
- Tags
- Icono

---

## 🗺️ Roadmap

### Fase 1: Fundamentos ✅
- [x] Landing page responsive
- [x] Sistema de diseño
- [x] Animaciones básicas

### Fase 2: Funcionalidad ✅
- [x] Formularios
- [x] FAQ accordion
- [x] Navegación móvil

### Fase 3: Contenido
- [ ] Imágenes reales del catálogo
- [ ] Fotos del artesano/proceso
- [ ] Videos de fabricación

### Fase 4: Integraciones
- [ ] WhatsApp Business API
- [ ] Instagram Embed
- [ ] Google Analytics
- [ ] Chat widget

---

## 📞 Créditos

### Desarrollado por

**opencode AI** - Asistente de desarrollo web

### Recursos

- **Fonts**: Google Fonts (Cormorant Garamond, Syne)
- **Icons**: Emoji Unicode
- **Imágenes**: Placeholders (pendiente reemplazar)

### Contacto del Proyecto

📍 **Alquimia Manual** - Oaxaca, México  
📸 Instagram: [@alquimiamanual]  
💬 WhatsApp: [Por configurar]

---

<p align="center">
  ✦ <em>Transmutamos materiales en magia</em> ✦
</p>

*Documentación generada automáticamente - v3.0.0*
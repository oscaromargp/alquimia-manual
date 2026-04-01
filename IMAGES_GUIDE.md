# 📸 GUÍA DE IMÁGENES PNG - Alquimia Manual

Este documento lista todas las imágenes que puedes agregar al sitio para reemplazar los SVGs. Las imágenes deben ser **PNG con transparencia** para verse bien sobre el fondo oscuro.

---

## 📁 Estructura de Carpetas

```
alquimia-manual/
├── index.html
├── styles.css
├── script.js
├── README.md
└── images/                    ← Carpeta para imágenes
    ├── logo.png
    ├── hero/
    │   ├── hero-jewelry.png
    │   ├── hero-feather.png
    │   └── hero-crystal.png
    ├── collections/
    │   ├── ethereal-plumas.png
    │   ├── mineral-piedras.png
    │   └── forged-metal.png
    ├── gallery/
    │   ├── gallery-1.png
    │   ├── gallery-2.png
    │   ├── gallery-3.png
    │   ├── gallery-4.png
    │   └── gallery-5.png
    ├── process/
    │   ├── process-materials.png
    │   ├── process-design.png
    │   ├── process-create.png
    │   └── process-package.png
    └── testimonials/
        └── (se muestran los avatares)
```

---

## 🖼️ LISTA COMPLETA DE IMÁGENES

### 1. LOGO
| Archivo | Descripción | Tamaño recomendado |
|---------|-------------|-------------------|
| `logo.png` | Logo principal con símbolo de diamante/triángulo | 512x512px |

---

### 2. HERO SECTION (Portada)
| Archivo | Descripción | Dimensiones |
|---------|-------------|--------------|
| `hero-jewelry.png` | Collares y pendientes ilustrativos flotando | 600x800px |
| `hero-feather.png` | Plumas decorativas flotantes | 400x400px |
| `hero-crystal.png` | Cristales/piedras brillantes | 400x400px |

**Nota:** El Hero tiene 3 shapes flotantes - puedes agregar imágenes individuales para cada uno.

---

### 3. COLECCIONES (Service Cards)
| Archivo | Sección | Descripción |
|---------|---------|-------------|
| `ethereal-plumas.png` | Línea Etérea | Aretes/tocados con plumas coloridas |
| `mineral-piedras.png` | Línea Mineral | Collares con piedras (cuarzo, obsidiana) |
| `forged-metal.png` | Línea Forjada | Brazaletes/anillos de metal martillado |

**Sugerencia:** 400x300px, fondo transparente, objeto centrado.

---

### 4. GALERÍA (6 piezas)
| Archivo | Pieza | Descripción |
|---------|-------|-------------|
| `gallery-1.png` | Collar Cuarzo Rosa | Collar con gema rosa transparente |
| `gallery-2.png` | Aretes Arcoíris | Aretes de plumas multicolor |
| `gallery-3.png` | Brazalete Martillado | Pulsera de metal texturizado |
| `gallery-4.png` | Dije Obsidiana | Piedra negra brillante |
| `gallery-5.png` | Tocado de Plumas | Diadema con plumas suaves |
| `gallery-6.png` | (extra) | Ring de compromiso o adicional |

**Dimensiones:** 800x600px o 600x800px (portrait)

---

### 5. PROCESO (4 pasos)
| Archivo | Paso | Descripción |
|---------|------|-------------|
| `process-materials.png` | 01 - Materiales | Piedras, plumas, metales sueltos |
| `process-design.png` | 02 - Diseño | Bocetos o herramientas de diseño |
| `process-create.png` | 03 - Creación | Manos trabajando/creando |
| `process-package.png` | 04 - Empaque | Caja/empaque terminado |

**Tamaño:** 200x150px (más bien pequeñas)

---

### 6. TRUST BADGES (4 iconos)
| Archivo | Badge | Descripción |
|---------|-------|-------------|
| `badge-natural.png` | Materiales 100% Naturales | Hoja/elemento naturaleza |
| `badge-handmade.png` | Hecho a Mano | Mano criando |
| `badge-shipping.png` | Envíos a Todo México | Caja/paquete |
| `badge-support.png` | Atención Personalizada | Chat/burbuja |

**Tamaño:** 64x64px o 100x100px

---

### 7. TESTIMONIOS (Avatares)
| Archivo | Cliente | Descripción |
|---------|---------|-------------|
| `avatar-maria.png` | María G. | Foto de cliente |
| `avatar-sarah.png` | Sarah M. | Cliente internacional |
| `avatar-ana.png` | Ana L. | Cliente Ciudad de México |
| `avatar-carolina.png` | Carolina R. | Cliente Guadalajara |
| `avatar-patricia.png` | Patricia K. | Cliente Monterrey |
| `avatar-laura.png` | Laura T. | Cliente Cancún |

**Tamaño:** 100x100px (circular se recorta automáticamente)

---

## 🎨 GUÍA DE ESTILO PARA IMÁGENES

### Color Principal
- Usar colores que combinen con el ocre #A67B5B
- Dorados, tierras, tonos naturales

### Fondo
- **SIEMPRE transparente** (sin fondo blanco/negro)
- PNG-24 para mejores resultados

### Iluminación
- Usar iluminación lateral para dar volumen
- Efectos de brillo/glow en piedras

### Estilo
- Fotografía de producto o ilustraciones vectoriales
- Consistencia entre todas las imágenes

---

## 🔧 CÓMO AGREGAR LAS IMÁGENES

### Paso 1: Crear carpeta
```bash
mkdir images
mkdir images/hero
mkdir images/collections
mkdir images/gallery
mkdir images/process
```

### Paso 2: Agregar imágenes
Coloca tus archivos PNG en la carpeta `images/`

### Paso 3: Actualizar HTML
Cambiar los SVGs por etiquetas `<img>`:

```html
<!-- Antes (SVG) -->
<svg class="hero-jewelry" viewBox="0 0 300 400">
    <!-- contenido SVG -->
</svg>

<!-- Después (PNG) -->
<img src="images/hero/hero-jewelry.png" alt="Joyería artesanal" class="hero-jewelry">
```

---

## 📥 DÓNDE CONSEGUIR IMÁGENES

1. **Unsplash** - Fotos gratuitas de joyas/artesanía
2. **Pexels** - Imágenes de stock gratuitas
3. **Remove.bg** - Quitar fondo de fotos
4. **Canva** - Crear/procesar imágenes
5. **Midjourney/DALL-E** - Generar imágenes únicas

---

## ⚠️ NOTAS IMPORTANTES

1. **Todas las imágenes deben tener fondo transparente**
2. **Nombrar archivos exactamente** como se indica arriba
3. **Probar en móvil** - las imágenes deben verse bien en pantalla pequeña
4. **Optimizar** - usar TinyPNG para reducir tamaño sin perder calidad

---

*Documento generado para Alquimia Manual v3.0*
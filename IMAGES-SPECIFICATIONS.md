# Especificaciones de Imágenes para SEO y Open Graph
# Alex Almeida - Coach de Vida Resiliente

## 📸 IMÁGENES REQUERIDAS PARA SEO COMPLETO

### 🌐 Open Graph y Redes Sociales

#### **og-alex-almeida-coach.jpg** (Imagen principal Open Graph)
- **Tamaño**: 1200 x 630 px
- **Formato**: JPG
- **Contenido**: Retrato de Alex + texto "Coach de Vida Resiliente" + elementos cyberpunk
- **Texto**: "18 años de experiencia • Filosofía • Sociología • Psicoanálisis"
- **Colores**: Fondo oscuro con acentos cyber-blue y scream-orange

#### **twitter-alex-almeida-coach.jpg** (Twitter Card)
- **Tamaño**: 1200 x 600 px
- **Formato**: JPG
- **Contenido**: Similar al Open Graph pero optimizado para Twitter
- **Texto**: "3 Sesiones Gratuitas • Resiliencia • Transformación"

#### **whatsapp-preview.jpg** (Vista previa WhatsApp)
- **Tamaño**: 400 x 400 px (cuadrada)
- **Formato**: JPG
- **Contenido**: Logo/avatar de Alex + "Coach Resiliente"
- **Estilo**: Minimalista, fondo cyberpunk sutil

### 📱 Favicons y App Icons

#### **favicon.ico** (Favicon principal)
- **Tamaño**: 32x32, 16x16 (multi-size)
- **Formato**: ICO
- **Contenido**: Símbolo de resiliencia estilizado (montaña + circuito)

#### **favicon-32x32.png**
- **Tamaño**: 32 x 32 px
- **Formato**: PNG
- **Contenido**: Versión PNG del favicon

#### **favicon-16x16.png**
- **Tamaño**: 16 x 16 px
- **Formato**: PNG
- **Contenido**: Versión PNG del favicon pequeño

#### **apple-touch-icon.png** (iOS Safari)
- **Tamaño**: 180 x 180 px
- **Formato**: PNG
- **Contenido**: Ícono de app para iOS, bordes redondeados automáticos

#### **android-chrome-192x192.png** (Android Chrome)
- **Tamaño**: 192 x 192 px
- **Formato**: PNG
- **Contenido**: Ícono para Android

#### **android-chrome-512x512.png** (Android Chrome HD)
- **Tamaño**: 512 x 512 px
- **Formato**: PNG
- **Contenido**: Versión HD del ícono Android

### 🔍 PWA Icons (Progressive Web App)

#### **icon-72x72.png** hasta **icon-512x512.png**
- **Tamaños**: 72, 96, 128, 144, 152, 192, 384, 512 px
- **Formato**: PNG
- **Contenido**: Íconos escalables para diferentes dispositivos
- **Purpose**: maskable any (para permitir formas adaptativas)

### 📊 Screenshots para PWA

#### **desktop-home.png** (Screenshot desktop)
- **Tamaño**: 1280 x 720 px
- **Formato**: PNG
- **Contenido**: Captura de pantalla de la página principal en desktop

#### **mobile-home.png** (Screenshot móvil)
- **Tamaño**: 375 x 812 px
- **Formato**: PNG
- **Contenido**: Captura de pantalla de la página principal en móvil

### 🎨 ELEMENTOS DE DISEÑO SUGERIDOS

#### **Paleta de Colores para Imágenes**
```css
Fondo principal: #0a0a0a (negro profundo)
Acento primario: #00ffff (cyber-blue)
Acento secundario: #ff0080 (cyber-pink)
Acento cálido: #ff4500 (scream-orange)
Texto: #e0e0e0 (gris claro)
```

#### **Tipografía**
- **Principal**: Orbitron (para títulos cyberpunk)
- **Secundaria**: Roboto (para texto legible)

#### **Elementos Visuales**
- **Grilla cyberpunk** sutil en el fondo
- **Efectos de glitch** en el texto principal
- **Ondas impresionistas** como elemento decorativo
- **Neones** y efectos de brillo
- **Gradientes** entre cyber-blue y cyber-pink

#### **Símbolos Representativos**
- 🧠 Cerebro (psicoanálisis)
- 👁️ Ojo (filosofía/percepción)
- ⛰️ Montaña (resiliencia)
- 🔗 Conexiones (sociología)
- ⚡ Rayo (transformación)

### 📂 ESTRUCTURA DE CARPETAS SUGERIDA

```
/images/
  /seo/
    - og-alex-almeida-coach.jpg
    - twitter-alex-almeida-coach.jpg
    - whatsapp-preview.jpg
  /icons/
    - favicon.ico
    - favicon-16x16.png
    - favicon-32x32.png
    - apple-touch-icon.png
    - android-chrome-192x192.png
    - android-chrome-512x512.png
    /pwa/
      - icon-72x72.png
      - icon-96x96.png
      - [... todas las variantes]
  /screenshots/
    - desktop-home.png
    - mobile-home.png
```

### 🛠️ HERRAMIENTAS RECOMENDADAS

#### **Para Crear las Imágenes**
- **Figma** (diseño vectorial, gratis)
- **Canva** (templates y elementos)
- **GIMP** (edición avanzada, gratis)
- **Photoshop** (profesional)

#### **Para Generar Favicons**
- **RealFaviconGenerator.net** (genera todos los tamaños automáticamente)
- **Favicon.io** (simple y rápido)

#### **Para Optimizar Imágenes**
- **TinyPNG** (compresión PNG/JPG)
- **ImageOptim** (Mac)
- **Squoosh** (Google, web)

### ✅ CHECKLIST DE IMPLEMENTACIÓN

- [ ] Crear imagen Open Graph principal (1200x630)
- [ ] Crear imagen Twitter Card (1200x600)
- [ ] Crear preview WhatsApp (400x400)
- [ ] Generar favicon.ico multi-size
- [ ] Crear apple-touch-icon.png (180x180)
- [ ] Generar todos los tamaños PWA (72px a 512px)
- [ ] Tomar screenshots desktop y móvil
- [ ] Optimizar todas las imágenes
- [ ] Subir imágenes al servidor
- [ ] Actualizar URLs en el HTML
- [ ] Probar Open Graph en Facebook Debugger
- [ ] Probar Twitter Card en Twitter Card Validator
- [ ] Verificar favicons en diferentes navegadores

### 🔗 URLS A ACTUALIZAR EN EL HTML

Una vez que tengas las imágenes, actualiza estas URLs en el `<head>`:

```html
<!-- Cambiar "https://freudiandev.github.io/coach_resiliente_filosofico/" por tu dominio real -->
<meta property="og:image" content="https://freudiandev.github.io/coach_resiliente_filosofico/assets/images/graph.png">
<meta name="twitter:image" content="https://freudiandev.github.io/coach_resiliente_filosofico/assets/images/graph.png">
<meta property="whatsapp:image" content="https://freudiandev.github.io/coach_resiliente_filosofico/assets/images/graph.png">
```

¡Con estas imágenes tendrás un SEO visual completo y professional en todas las plataformas!

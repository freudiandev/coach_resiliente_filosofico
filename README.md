# Coach Resiliente Filosófico - Alex Almeida

**🌐 URL del sitio:** https://freudiandev.github.io/coach_resiliente_filosofico/

## 🧠 Descripción del Proyecto

Sitio web profesional para Alex Almeida, coach de vida especializado en resiliencia con 18 años de experiencia en terapia personal. El proyecto combina una estética única que fusiona elementos impresionistas (inspirados en "El Grito") con la estética cyberpunk neuromancer, creando una experiencia visual liminal y única.

## 🎨 Características de Diseño

### Estética Híbrida
- **Impresionista**: Ondas distorsionadas, colores emocionales (naranjas, amarillos)
- **Cyberpunk**: Efectos de glitch, grillas digitales, colores neón (azul cyan, rosa magenta)
- **Elementos Filosóficos**: Timeline de crecimiento, representaciones neurales del pensamiento

### Paleta de Colores
```css
/* Colores Cyberpunk */
--cyber-blue: #00ffff
--cyber-pink: #ff0080
--cyber-purple: #8000ff
--cyber-green: #00ff41

/* Colores Impresionistas */
--scream-orange: #ff4500
--scream-yellow: #ffcc00
--deep-blue: #1a1a3a
--muted-purple: #6a4c93
```

## 🚀 Funcionalidades

### Core Features
- **Navegación suave** con efectos de scroll
- **Formulario de contacto** con validación
- **Animaciones de entrada** para elementos
- **Efectos de glitch** aleatorios
- **Partículas flotantes** en el hero
- **Diseño responsive** para todos los dispositivos

### Características Especiales
- **Sistema de notificaciones** personalizado
- **Easter egg** con código Konami
- **Contador de caracteres** en formularios
- **Lazy loading** preparado para imágenes
- **Mensaje de bienvenida** para nuevos visitantes

## 📁 Estructura del Proyecto

```
coach_resiliente_filosofico/
├── index.html          # Estructura principal del sitio
├── styles.css          # Estilos CSS con diseño híbrido
├── script.js           # Funcionalidades JavaScript
├── README.md           # Documentación del proyecto
└── LICENSE             # Licencia del proyecto
```

## 🎯 Secciones del Sitio

### 1. Hero Section
- Título con efecto de glitch
- Descripción del enfoque único de Alex
- Botones de llamada a la acción
- Elementos visuales flotantes

### 2. Sobre Mí
- Timeline de 18 años de terapia
- Formación multidisciplinaria
- Red neural visual animada

### 3. Servicios
- **3 Sesiones Gratuitas**: Sin compromiso inicial
- **Coaching Continuado**: Precio acordado mutuamente
- **Escucha Sin Prejuicios**: Espacio seguro para desahogo

### 4. Mi Filosofía
- Cuatro pilares: Resiliencia, Filosofía, Sociología, Psicoanálisis
- Cita personal de Alex sobre su enfoque
- Iconografía representativa

### 5. Contacto
- Formulario interactivo con validación
- Información de contacto
- Llamada a la acción clara

## 💻 Instalación y Uso

### Requisitos
- Navegador web moderno
- Conexión a internet (para fuentes de Google y Font Awesome)

### Instalación Local
1. Clona o descarga el repositorio
2. Abre `index.html` en tu navegador
3. ¡Listo! El sitio es completamente estático

### Para Desarrollo
```bash
# Si usas VS Code, puedes usar Live Server
# O cualquier servidor local como:
python -m http.server 8000
# Luego visita http://localhost:8000
```

## 🌐 Despliegue

### GitHub Pages
1. Sube los archivos a un repositorio de GitHub
2. Ve a Settings > Pages
3. Selecciona la branch main como fuente
4. Tu sitio estará disponible en `https://tu-usuario.github.io/nombre-repo`

### Netlify
1. Arrastra la carpeta del proyecto a [Netlify Drop](https://app.netlify.com/drop)
2. Tu sitio estará disponible inmediatamente

### Vercel
1. Conecta tu repositorio de GitHub con Vercel
2. Despliegue automático en cada push

## 🎨 Personalización

### Cambiar Colores
Modifica las variables CSS en `styles.css`:
```css
:root {
    --cyber-blue: #tu-color;
    --cyber-pink: #tu-color;
    /* etc... */
}
```

### Agregar Contenido
- Edita el HTML en `index.html`
- Las secciones están claramente marcadas con comentarios
- Mantén la estructura semántica existente

### Modificar Animaciones
- Los efectos de glitch están en `styles.css` (keyframes)
- Las funcionalidades interactivas están en `script.js`
- Usa las variables CSS para mantener consistencia

## 📱 Responsive Design

El sitio está optimizado para:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

Breakpoints principales:
```css
@media (max-width: 768px) { /* Tablet y mobile */ }
@media (max-width: 480px) { /* Mobile pequeño */ }
```

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Animaciones avanzadas, Grid, Flexbox
- **JavaScript ES6+**: Funcionalidades interactivas
- **Font Awesome**: Iconografía
- **Google Fonts**: Tipografías (Orbitron, Roboto)

## 🎵 Efectos de Audio (Futuro)

Para una experiencia más inmersiva, considera agregar:
- Sonidos sutiles de interfaz cyberpunk
- Música ambiental opcional
- Feedback auditivo en interacciones

## 🔒 Privacidad y Seguridad

- No se recopilan datos personales automáticamente
- El formulario de contacto necesita backend para funcionar
- Considera implementar HTTPS en producción
- Cumple con GDPR si tienes usuarios europeos

## 🤝 Contribuciones

Si quieres mejorar el sitio:
1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📞 Contacto con Alex Almeida

- **Email**: alex.almeida.coach@gmail.com
- **Servicios**: Coach de vida con enfoque en resiliencia
- **Especialidades**: Filosofía, Sociología, Psicoanálisis
- **Ofertas**: 3 primeras sesiones gratuitas

## 📝 Notas de Desarrollo

### Próximas Mejoras
- [ ] Integración con calendario para citas
- [ ] Blog con artículos sobre resiliencia
- [ ] Testimonios de clientes
- [ ] Versiones en otros idiomas
- [ ] Modo oscuro/claro toggle
- [ ] Integración con redes sociales

### Bugs Conocidos
- Los efectos de glitch pueden ser intensos en algunos dispositivos
- Considerar reducir animaciones en modo "reduced motion"

## 🎭 Inspiración Artística

El diseño se inspira en:
- **"El Grito" de Edvard Munch**: Ondas emocionales, colores intensos
- **Neuromancer de William Gibson**: Estética cyberpunk, futuro digital
- **Arte Liminal**: Espacios de transición y transformación

## 📚 Filosofía del Diseño

> "Como el arte de Munch captura la angustia existencial y la cyberpunk imagina futuros de transformación, este sitio existe en el espacio liminal entre el dolor y la esperanza, donde nace la verdadera resiliencia."

---

**Desarrollado con 💙 para transformar vidas a través de la escucha especializada**
Sitio Web  en el que podrías llegar a encontrar algo que en realidad se encuentra dentro tuyo, y que yo, podría facilitarte en descubrir e ir profundo.

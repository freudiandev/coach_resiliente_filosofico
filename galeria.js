// ===== GALERÍA - FUNCIONALIDAD JAVASCRIPT =====

document.addEventListener('DOMContentLoaded', function() {
    initializeGallery();
    addParticleEffects();
});

// Inicializar funcionalidad de la galería
function initializeGallery() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Filtrado de elementos
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterValue = button.getAttribute('data-filter');
            
            // Actualizar botones activos
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filtrar elementos
            filterGalleryItems(galleryItems, filterValue);
        });
    });
    
    // Lazy loading de elementos
    observeGalleryItems();
}

// Filtrar elementos de la galería
function filterGalleryItems(items, filter) {
    items.forEach(item => {
        const category = item.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
            item.classList.remove('hidden');
            item.classList.add('visible');
            setTimeout(() => {
                item.style.display = 'block';
            }, 50);
        } else {
            item.classList.remove('visible');
            item.classList.add('hidden');
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
}

// Observador para lazy loading
function observeGalleryItems() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // Agregar un pequeño delay aleatorio para efecto staggered
                const delay = Math.random() * 200;
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, delay);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });
    
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
}

// Funciones para el modal
function openModal(itemId) {
    const modal = document.getElementById('galleryModal');
    const modalContent = document.getElementById('modalContent');
    
    // Contenido específico según el tipo de obra
    const content = getModalContent(itemId);
    modalContent.innerHTML = content;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Agregar evento para cerrar con ESC
    document.addEventListener('keydown', handleModalKeydown);
    
    // Cerrar al hacer clic fuera del contenido
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

function closeModal() {
    const modal = document.getElementById('galleryModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    document.removeEventListener('keydown', handleModalKeydown);
}

function handleModalKeydown(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
}

// Contenido específico para cada obra
function getModalContent(itemId) {
    const contents = {
        'art1': `
            <div class="modal-artwork">
                <div class="artwork-placeholder">
                    <i class="fas fa-palette" style="font-size: 4rem; color: var(--accent-primary); margin-bottom: 2rem;"></i>
                    <h2>Fragmentos de Resiliencia</h2>
                    <p style="color: var(--text-secondary); margin: 1rem 0 2rem 0;">Arte digital - 2024</p>
                </div>
                <div class="artwork-description">
                    <h3>Descripción de la obra</h3>
                    <p>Esta pieza representa los momentos de quiebre y reconstrucción que he experimentado 
                    a lo largo de 18 años de terapia. Cada fragmento de color simboliza una parte de mí 
                    que se ha roto y se ha vuelto a formar, más fuerte.</p>
                    
                    <h4>Técnica utilizada</h4>
                    <p>Arte digital generativo usando algoritmos de fragmentación y reconstrucción, 
                    creando patrones que emergen del caos hacia el orden.</p>
                    
                    <h4>Reflexión personal</h4>
                    <p>"En cada fragmento veo una lección aprendida, en cada color una emoción procesada. 
                    Esta obra nació en un momento de crisis y se completó en un momento de claridad."</p>
                </div>
            </div>
        `,
        'art2': `
            <div class="modal-artwork">
                <div class="artwork-placeholder">
                    <i class="fas fa-brain" style="font-size: 4rem; color: var(--accent-primary); margin-bottom: 2rem;"></i>
                    <h2>Neuroplasticidad</h2>
                    <p style="color: var(--text-secondary); margin: 1rem 0 2rem 0;">Arte conceptual - 2023</p>
                </div>
                <div class="artwork-description">
                    <h3>Concepto</h3>
                    <p>Visualización del cerebro como una red en constante cambio, capaz de crear nuevas 
                    conexiones y patrones de pensamiento. Cada línea representa una sinapsis, cada nodo 
                    una posibilidad de cambio.</p>
                    
                    <h4>Inspiración científica</h4>
                    <p>Basado en estudios de neuroplasticidad y mi propia experiencia de cómo la terapia 
                    ha literalmente reestructurado mi forma de pensar y procesar emociones.</p>
                </div>
            </div>
        `,
        'writing1': `
            <div class="modal-writing">
                <h2>La Escucha como Acto Político</h2>
                <p style="color: var(--text-secondary); margin: 1rem 0 2rem 0;">Ensayo - 2024</p>
                
                <div class="writing-content">
                    <p><em>Fragmento del ensayo:</em></p>
                    <blockquote>
                    "Ser escuchado no es un lujo, es un derecho humano fundamental que nuestra sociedad 
                    ha convertido en privilegio. Cuando alguien te escucha verdaderamente, sin juicio, 
                    sin prisa por resolver o aconsejar, está realizando un acto de resistencia contra 
                    un mundo que nos ha enseñado que solo importamos cuando producimos, cuando somos útiles.
                    
                    <br><br>
                    
                    En 18 años de terapia he descubierto que la escucha especializada no es solo una 
                    técnica terapéutica, es una forma de justicia social. Porque cuando escuchas a alguien 
                    en su dolor, en su confusión, en su búsqueda de sentido, le estás devolviendo su 
                    humanidad completa."
                    </blockquote>
                    
                    <h4>Sobre este ensayo</h4>
                    <p>Este texto surge de mi experiencia tanto como paciente durante 18 años como 
                    ahora en mi rol de coach. He visto cómo la falta de escucha especializada perpetúa 
                    ciclos de dolor y cómo el acceso a ella puede ser transformador.</p>
                </div>
            </div>
        `,
        'writing2': `
            <div class="modal-writing">
                <h2>Arqueología del Alma</h2>
                <p style="color: var(--text-secondary); margin: 1rem 0 2rem 0;">Poemario - 2023</p>
                
                <div class="writing-content">
                    <h4>Poema I: "Excavación"</h4>
                    <blockquote>
                    Con pinceles de palabras<br>
                    desentraño cada capa,<br>
                    cada estrato de dolor<br>
                    que el tiempo sepultó.<br><br>
                    
                    No busco tesoros de oro,<br>
                    sino fragmentos de mí<br>
                    que creí perdidos<br>
                    en el sedimento del olvido.<br><br>
                    
                    Cada sesión, una excavación.<br>
                    Cada lágrima, un hallazgo.<br>
                    Cada insight, una pieza<br>
                    del rompecabezas que soy.
                    </blockquote>
                    
                    <h4>Sobre esta colección</h4>
                    <p>18 poemas que documentan diferentes momentos de mi proceso terapéutico. 
                    Cada uno marca un descubrimiento, una conexión nueva, un momento de claridad 
                    en el largo camino hacia el autoconocimiento.</p>
                </div>
            </div>
        `,
        'video1': `
            <div class="modal-video">
                <div class="video-placeholder">
                    <i class="fas fa-play-circle" style="font-size: 4rem; color: var(--accent-primary); margin-bottom: 2rem;"></i>
                    <h2>18 Años: Un Viaje Interior</h2>
                    <p style="color: var(--text-secondary); margin: 1rem 0 2rem 0;">Documental autobiográfico - 45 minutos</p>
                </div>
                <div class="video-description">
                    <h3>Sinopsis</h3>
                    <p>Un recorrido visual y narrativo por mi proceso terapéutico de 18 años. 
                    Desde los 15 años hasta los 33, documentando los momentos clave, las crisis, 
                    los breakthrough y la construcción gradual de una resiliencia extraordinaria.</p>
                    
                    <h4>Estructura</h4>
                    <ul>
                        <li><strong>Acto I:</strong> Los primeros años (15-20) - La búsqueda</li>
                        <li><strong>Acto II:</strong> La crisis y el descubrimiento (20-27) - La resistencia</li>
                        <li><strong>Acto III:</strong> La integración (27-33) - La transformación</li>
                    </ul>
                    
                    <h4>Técnica</h4>
                    <p>Combinación de testimonios personales, animaciones conceptuales y 
                    metáforas visuales. La estética visual refleja el estado emocional de cada etapa.</p>
                    
                    <p><em>Nota: Este documental está disponible para visionado durante las sesiones 
                    de coaching como herramienta terapéutica.</em></p>
                </div>
            </div>
        `,
        'video2': `
            <div class="modal-video">
                <div class="video-placeholder">
                    <i class="fas fa-microphone" style="font-size: 4rem; color: var(--accent-primary); margin-bottom: 2rem;"></i>
                    <h2>Meditaciones Urbanas</h2>
                    <p style="color: var(--text-secondary); margin: 1rem 0 2rem 0;">Serie audiovisual - 12 episodios</p>
                </div>
                <div class="video-description">
                    <h3>Concepto</h3>
                    <p>Reflexiones grabadas en diferentes espacios urbanos, explorando cómo 
                    el entorno físico influye en nuestro estado mental y emocional. Cada episodio 
                    combina filosofía, psicología y observación sociológica.</p>
                    
                    <h4>Episodios destacados</h4>
                    <ul>
                        <li><strong>Ep. 3:</strong> "El Metro como Metáfora" - Sobre transiciones y movimiento</li>
                        <li><strong>Ep. 7:</strong> "Parques: Islas de Calma" - La necesidad humana de naturaleza</li>
                        <li><strong>Ep. 11:</strong> "Cafeterías: Laboratorios Sociales" - Observando la soledad compartida</li>
                    </ul>
                    
                    <h4>Propósito terapéutico</h4>
                    <p>Estas grabaciones sirven como herramientas de mindfulness urbano, 
                    ayudando a las personas a encontrar momentos de contemplación y reflexión 
                    en medio del caos citadino.</p>
                </div>
            </div>
        `,
        'design1': `
            <div class="modal-design">
                <div class="design-placeholder">
                    <i class="fas fa-vector-square" style="font-size: 4rem; color: var(--accent-primary); margin-bottom: 2rem;"></i>
                    <h2>Mapa de la Resiliencia</h2>
                    <p style="color: var(--text-secondary); margin: 1rem 0 2rem 0;">Infografía interactiva - 2024</p>
                </div>
                <div class="design-description">
                    <h3>Propósito</h3>
                    <p>Visualización del proceso de construcción de resiliencia como un mapa de territorio 
                    complejo, con diferentes rutas, obstáculos, recursos y destinos posibles.</p>
                    
                    <h4>Elementos visuales</h4>
                    <ul>
                        <li><strong>Zonas de Crisis:</strong> Representadas como terrenos difíciles que deben atravesarse</li>
                        <li><strong>Recursos Internos:</strong> Fortalezas que pueden desarrollarse en el camino</li>
                        <li><strong>Puntos de Apoyo:</strong> Terapia, relaciones, arte como estaciones de descanso</li>
                        <li><strong>Rutas Alternativas:</strong> Diferentes caminos para cada persona</li>
                    </ul>
                    
                    <h4>Uso terapéutico</h4>
                    <p>Esta infografía se utiliza en sesiones para ayudar a las personas a 
                    visualizar su propio proceso, identificar dónde están actualmente y 
                    qué recursos tienen disponibles.</p>
                </div>
            </div>
        `,
        'design2': `
            <div class="modal-design">
                <div class="design-placeholder cyberpunk-design">
                    <i class="fas fa-robot" style="font-size: 4rem; color: var(--accent-primary); margin-bottom: 2rem;"></i>
                    <h2>Interface Mental</h2>
                    <p style="color: var(--text-secondary); margin: 1rem 0 2rem 0;">Diseño cyberpunk conceptual - 2023</p>
                </div>
                <div class="design-description">
                    <h3>Concepto</h3>
                    <p>Representación de la mente humana como un sistema operativo complejo, 
                    con interfaces, bugs, updates y formas de optimización. Una metáfora 
                    tecnológica para procesos psicológicos.</p>
                    
                    <h4>Elementos del diseño</h4>
                    <ul>
                        <li><strong>CPU Emocional:</strong> El centro de procesamiento de sentimientos</li>
                        <li><strong>Memoria RAM Traumática:</strong> Recuerdos que consumen recursos</li>
                        <li><strong>Firewall de Defensas:</strong> Mecanismos de protección psicológica</li>
                        <li><strong>Updates Terapéuticos:</strong> Nuevas versiones del software mental</li>
                    </ul>
                    
                    <h4>Aplicación práctica</h4>
                    <p>Esta metáfora ayuda especialmente a personas con background técnico 
                    a entender conceptos psicológicos complejos a través de analogías familiares.</p>
                    
                    <div class="cyberpunk-specs">
                        <h5>Especificaciones técnicas</h5>
                        <p><code>Sistema: MenteOS v33.2024</code><br>
                        <code>RAM Instalada: 18 años de experiencia</code><br>
                        <code>Última actualización: Proceso continuo</code></p>
                    </div>
                </div>
            </div>
        `,
        'photo1': `
            <div class="modal-photo">
                <div class="photo-placeholder">
                    <i class="fas fa-camera-retro" style="font-size: 4rem; color: var(--accent-primary); margin-bottom: 2rem;"></i>
                    <h2>Soledad Compartida</h2>
                    <p style="color: var(--text-secondary); margin: 1rem 0 2rem 0;">Serie fotográfica urbana - 2024</p>
                </div>
                <div class="photo-description">
                    <h3>Concepto</h3>
                    <p>Exploraciones fotográficas sobre la paradoja de estar rodeados de personas 
                    pero experimentar profunda soledad. Captura momentos de desconexión y conexión 
                    inesperada en espacios urbanos.</p>
                    
                    <h4>Técnica fotográfica</h4>
                    <ul>
                        <li><strong>Estilo:</strong> Street photography con elementos de documentalismo social</li>
                        <li><strong>Enfoque:</strong> Contrastes entre proximidad física y distancia emocional</li>
                        <li><strong>Composición:</strong> Uso del espacio negativo para enfatizar aislamiento</li>
                    </ul>
                    
                    <h4>Reflexión personal</h4>
                    <p>"Cada foto de esta serie representa un momento en que reconocí mi propia 
                    soledad reflejada en un desconocido. Es la documentación visual de cómo 
                    la terapia me ha enseñado a ver mi experiencia en la experiencia universal humana."</p>
                    
                    <h4>Uso terapéutico</h4>
                    <p>Estas imágenes ayudan a normalizar sentimientos de soledad y aislamiento, 
                    mostrando que son experiencias compartidas por muchas personas en entornos urbanos.</p>
                </div>
            </div>
        `,
        'photo2': `
            <div class="modal-photo">
                <div class="photo-placeholder">
                    <i class="fas fa-leaf" style="font-size: 4rem; color: var(--accent-primary); margin-bottom: 2rem;"></i>
                    <h2>Ciclos de Renovación</h2>
                    <p style="color: var(--text-secondary); margin: 1rem 0 2rem 0;">Serie fotográfica de naturaleza - 2023</p>
                </div>
                <div class="photo-description">
                    <h3>Inspiración</h3>
                    <p>Documentación de procesos naturales de muerte, descomposición y renacimiento 
                    como metáforas para el proceso terapéutico y la renovación personal.</p>
                    
                    <h4>Elementos capturados</h4>
                    <ul>
                        <li><strong>Hojas en descomposición:</strong> La belleza en el proceso de soltar</li>
                        <li><strong>Brotes emergiendo:</strong> Nueva vida surgiendo de lo viejo</li>
                        <li><strong>Cortezas agrietadas:</strong> Las marcas del tiempo como textura, no como daño</li>
                        <li><strong>Raíces expuestas:</strong> Los fundamentos ocultos que nos sostienen</li>
                    </ul>
                    
                    <h4>Mensaje terapéutico</h4>
                    <p>La naturaleza nos enseña que la muerte de una forma permite el nacimiento de otra. 
                    Cada imagen de esta serie es una lección sobre resilencia, paciencia y confianza 
                    en los procesos naturales de renovación.</p>
                    
                    <p><em>"En 18 años de terapia he aprendido que sanar no es volver a ser quien eras, 
                    sino permitir que emerja quien siempre estuviste destinado a ser."</em></p>
                </div>
            </div>
        `
    };
    
    return contents[itemId] || '<p>Contenido no disponible</p>';
}

// Efectos de partículas para la galería
function addParticleEffects() {
    const hero = document.querySelector('.gallery-hero');
    if (!hero) return;
    
    // Crear contenedor de partículas
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'gallery-particles';
    particlesContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        overflow: hidden;
    `;
    
    hero.appendChild(particlesContainer);
    
    // Crear partículas
    for (let i = 0; i < 20; i++) {
        createGalleryParticle(particlesContainer);
    }
}

function createGalleryParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'gallery-particle';
    
    const size = Math.random() * 4 + 2;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    
    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: var(--accent-primary);
        border-radius: 50%;
        left: ${x}%;
        top: ${y}%;
        opacity: 0.3;
        animation: galleryFloat ${duration}s ${delay}s infinite linear;
        box-shadow: 0 0 10px var(--accent-primary);
    `;
    
    container.appendChild(particle);
}

// CSS para animación de partículas (agregado dinámicamente)
const galleryParticleStyles = `
    @keyframes galleryFloat {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 0.3;
        }
        90% {
            opacity: 0.3;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    .gallery-particle {
        filter: blur(0.5px);
    }
    
    .modal-artwork,
    .modal-writing,
    .modal-video,
    .modal-design,
    .modal-photo {
        line-height: 1.6;
    }
    
    .modal-artwork h2,
    .modal-writing h2,
    .modal-video h2,
    .modal-design h2,
    .modal-photo h2 {
        color: var(--accent-primary);
        font-family: 'Orbitron', monospace;
        font-weight: 700;
        margin-bottom: 0.5rem;
        text-align: center;
    }
    
    .modal-artwork h3,
    .modal-writing h3,
    .modal-video h3,
    .modal-design h3,
    .modal-photo h3,
    .modal-artwork h4,
    .modal-writing h4,
    .modal-video h4,
    .modal-design h4,
    .modal-photo h4 {
        color: var(--accent-secondary);
        margin: 2rem 0 1rem 0;
        font-family: 'Orbitron', monospace;
        font-weight: 600;
    }
    
    .modal-artwork blockquote,
    .modal-writing blockquote {
        border-left: 3px solid var(--accent-primary);
        padding-left: 1.5rem;
        margin: 1.5rem 0;
        font-style: italic;
        color: var(--text-secondary);
        background: rgba(0, 255, 255, 0.05);
        padding: 1rem 1.5rem;
        border-radius: 0 8px 8px 0;
    }
    
    .modal-artwork ul,
    .modal-writing ul,
    .modal-video ul,
    .modal-design ul,
    .modal-photo ul {
        margin: 1rem 0;
        padding-left: 1.5rem;
    }
    
    .modal-artwork li,
    .modal-writing li,
    .modal-video li,
    .modal-design li,
    .modal-photo li {
        margin: 0.5rem 0;
        color: var(--text-secondary);
    }
    
    .artwork-placeholder,
    .video-placeholder,
    .design-placeholder,
    .photo-placeholder {
        text-align: center;
        padding: 2rem;
        border: 1px solid var(--accent-primary);
        border-radius: 8px;
        background: rgba(0, 255, 255, 0.05);
        margin-bottom: 2rem;
    }
    
    .cyberpunk-design {
        background: linear-gradient(135deg, rgba(0, 255, 255, 0.1) 0%, rgba(255, 0, 255, 0.05) 100%);
        position: relative;
    }
    
    .cyberpunk-design::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: 
            linear-gradient(90deg, transparent 98%, rgba(0, 255, 255, 0.2) 100%),
            linear-gradient(0deg, transparent 98%, rgba(0, 255, 255, 0.2) 100%);
        background-size: 15px 15px;
        border-radius: 8px;
    }
    
    .cyberpunk-specs {
        background: var(--bg-primary);
        border: 1px solid var(--accent-primary);
        border-radius: 8px;
        padding: 1rem;
        margin-top: 2rem;
        font-family: 'Courier New', monospace;
    }
    
    .cyberpunk-specs h5 {
        color: var(--accent-primary);
        margin: 0 0 1rem 0;
        font-family: 'Orbitron', monospace;
    }
    
    .cyberpunk-specs code {
        color: var(--accent-secondary);
        background: transparent;
        font-size: 0.9rem;
    }
`;

// Inyectar estilos para partículas y modal
const galleryStyleSheet = document.createElement('style');
galleryStyleSheet.textContent = galleryParticleStyles;
document.head.appendChild(galleryStyleSheet);

// Agregar efectos de hover a los elementos de la galería
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Función para compartir obras (placeholder)
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-share') || e.target.parentElement.classList.contains('btn-share')) {
        e.preventDefault();
        
        // Obtener información de la obra
        const galleryItem = e.target.closest('.gallery-item');
        const title = galleryItem.querySelector('h3').textContent;
        const url = window.location.href;
        
        // Compartir vía Web Share API si está disponible
        if (navigator.share) {
            navigator.share({
                title: `${title} - Alex Almeida Coach`,
                text: 'Explora esta obra de arte terapéutico',
                url: url
            });
        } else {
            // Fallback: copiar al portapapeles
            navigator.clipboard.writeText(`${title} - ${url}`).then(() => {
                // Mostrar notificación
                showNotification('Enlace copiado al portapapeles');
            });
        }
    }
});

// Función para mostrar notificaciones
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--accent-primary);
        color: var(--bg-primary);
        padding: 1rem 2rem;
        border-radius: 8px;
        z-index: 1000;
        font-family: 'Orbitron', monospace;
        font-weight: 600;
        box-shadow: 0 10px 30px rgba(0, 255, 255, 0.3);
        animation: slideInRight 0.3s ease, slideOutRight 0.3s ease 2.7s;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Agregar animaciones de notificación
const notificationStyles = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;

const notificationStyleSheet = document.createElement('style');
notificationStyleSheet.textContent = notificationStyles;
document.head.appendChild(notificationStyleSheet);

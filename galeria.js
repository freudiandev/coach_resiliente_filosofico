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
        // ENSAYOS FILOSÓFICOS
        'essay_nietzsche': `
            <div class="modal-writing">
                <h2>El Eterno Retorno de la Terapia</h2>
                <p style="color: var(--text-secondary); margin: 1rem 0 2rem 0;">Ensayo Nietzscheano - 2024</p>
                
                <div class="writing-content">
                    <p><em>"¿Y si tuvieras que vivir esta vida una vez más y incontables veces más?"</em> - preguntaba Nietzsche. En 18 años de terapia, he comprendido que cada sesión es un acto de afirmación vital ante el eterno retorno del sufrimiento.</p>
                    
                    <blockquote>
                    <strong>I. La Repetición como Liberación</strong><br><br>
                    
                    Cada lunes a las 3 PM durante dieciocho años. La misma silla, el mismo ritual, las mismas preguntas que retornan como un mantra: "¿Cómo te sientes?" "¿Qué ha pasado esta semana?" "¿Qué significa esto para ti?"
                    
                    <br><br>
                    
                    Al principio, esta repetición me parecía una tortura. Nietzsche diría que es precisamente ahí donde reside el poder transformador del eterno retorno: no como castigo, sino como la más alta afirmación de la vida. Si acepto que tendré que revivir este dolor infinitas veces, entonces debo encontrar una manera no solo de soportarlo, sino de amarlo.
                    
                    <br/><br/>
                    
                    <strong>II. El Übermensch Terapéutico</strong><br/><br/>
                    
                    El superhombre nietzscheano no es un ser superior biológicamente, sino quien ha logrado crear sus propios valores más allá del bien y del mal establecido. En terapia, uno se convierte en arqueólogo de sí mismo, desenterrando los valores impuestos por la familia, la sociedad, la religión, para forjar una moral propia.
                    
                    <br><br>
                    
                    Durante años creí que mis ataques de pánico eran una debilidad moral. La sociedad me había enseñado que la ansiedad era falta de fe, de fortaleza, de carácter. Fue necesario transmutar estos valores: la ansiedad no era debilidad sino sensibilidad extrema, no era cobardía sino hiperconciencia del mundo.
                    
                    <br><br>
                    
                    <strong>III. La Muerte de Dios en el Diván</strong><br><br>
                    
                    "Dios ha muerto y nosotros lo hemos matado" - pero en terapia descubres que no solo has matado a Dios, sino también al padre idealizado, a la madre perfecta, al yo que creías ser. Y en ese vacío, en esa nada, nace la posibilidad de crear.
                    
                    <br><br>
                    
                    La terapia es nihilismo activo: destruir para crear. Cada insight es un pequeño asesinato de ilusiones queridas. Cada avance es un paso hacia el abismo de la incertidumbre. Y sin embargo, en esa caída libre, aprendes a volar.
                    
                    <br><br>
                    
                    <strong>IV. Amor Fati Terapéutico</strong><br><br>
                    
                    "Mi fórmula para la grandeza en el hombre es amor fati: que nada se desee de otro modo, ni hacia adelante ni hacia atrás, ni en toda la eternidad."
                    
                    <br><br>
                    
                    Si tuviera que revivir cada crisis, cada breakdown, cada noche de insomnio llorando sin saber por qué - ¿podría decir sí? ¿Podría amar mi destino tal como fue?
                    
                    <br><br>
                    
                    Hoy, después de 18 años, la respuesta es un rotundo sí. No porque el dolor haya sido necesario en algún sentido cósmico, sino porque fue mío. Porque de él brotó esta capacidad de escuchar el dolor ajeno con una precisión quirúrgica, con una compasión que solo se forja en el fuego del sufrimiento propio.
                    
                    <br><br>
                    
                    <strong>Conclusión: El Coach como Übermensch</strong><br><br>
                    
                    El coach de vida que ha pasado por terapia intensiva no es un sanador que ha transcendido el dolor, sino un Übermensch que ha aprendido a danzar con él. No ofrece verdades absolutas sino la posibilidad de crear verdades propias. No promete la felicidad sino el coraje de ser auténtico ante el abismo.
                    
                    <br><br>
                    
                    Y cuando un nuevo cliente se sienta frente a mí, no le ofrezco soluciones sino algo más radical: la posibilidad de amar su destino, incluido su sufrimiento, incluida su imperfección, incluida su humanidad magnífica y terrible.
                    
                    <br><br>
                    
                    Porque al final, la pregunta no es cómo sanar del dolor, sino cómo transformarse a través de él en alguien que pueda decir: "Sí, quiero vivir esta vida exactamente como fue, y quiero ayudar a otros a hacer lo mismo."
                    
                    </blockquote>
                    
                    <h4>Referencias Nietzscheanas</h4>
                    <p>• <em>Así habló Zaratustra</em> - El eterno retorno como prueba última<br>
                    • <em>Más allá del bien y del mal</em> - La transvaloración de todos los valores<br>
                    • <em>Ecce Homo</em> - Amor fati como fórmula de grandeza</p>
                </div>
            </div>
        `,
        
        'essay_freud': `
            <div class="modal-writing">
                <h2>El Inconsciente como Algoritmo</h2>
                <p style="color: var(--text-secondary); margin: 1rem 0 2rem 0;">Análisis Freudiano - 2024</p>
                
                <div class="writing-content">
                    <blockquote>
                    <strong>Prefacio: El Código del Alma</strong><br><br>
                    
                    Si Freud hubiera vivido en la era de la inteligencia artificial, habría reconocido inmediatamente la analogía: el inconsciente funciona como un algoritmo de aprendizaje automático, procesando constantemente datos (experiencias) para generar patrones de comportamiento, síntomas y asociaciones.
                    
                    <br><br>
                    
                    <strong>I. La Arquitectura del Inconsciente Digital</strong><br><br>
                    
                    En mis 18 años de análisis, he aprendido a decodificar mi propio "código fuente" psíquico. Como un algoritmo de machine learning, el inconsciente:
                    
                    <br><br>
                    
                    • Procesa INPUTS (experiencias traumáticas, placenteras, neutras)<br>
                    • Ejecuta FUNCIONES de defensa (represión, proyección, sublimación)<br>
                    • Genera OUTPUTS (síntomas, sueños, actos fallidos)<br>
                    • Se ENTRENA constantemente con nuevos datos experienciales
                    
                    <br><br>
                    
                    Mi primer ataque de pánico a los 15 años fue un overflow del sistema: demasiada información emocional no procesada causó un crash. La terapia se convirtió en debugging psíquico.
                    
                    <br><br>
                    
                    <strong>II. Los Bugs del Sistema Psíquico</strong><br><br>
                    
                    Freud describió los síntomas neuróticos como "formaciones de compromiso" - el inconsciente encontrando soluciones imperfectas a conflictos irresolubles. En términos de programación, son bugs que el sistema desarrolla para seguir funcionando cuando el código principal está corrupto.
                    
                    <br><br>
                    
                    Mi compulsión por el control era un algoritmo defensivo: IF (situación_impredecible) THEN (crear_ilusión_de_control). Funcionaba a corto plazo pero causaba crashes mayores cuando la realidad contradecía mis predicciones.
                    
                    <br><br>
                    
                    <strong>III. Transferencia como Reconocimiento de Patrones</strong><br><br>
                    
                    La transferencia, ese fenómeno que Freud consideró central al psicoanálisis, es esencialmente un algoritmo de reconocimiento de patrones hiperactivado. El inconsciente, entrenado con datos de relaciones tempranas, "sobreajusta" (overfitting) y proyecta esos patrones en nuevas relaciones.
                    
                    <br><br>
                    
                    Durante años, transferí a cada terapeuta la imagen del padre ausente: esperaba que me abandonen, que no me entiendan, que me juzguen. Mi algoritmo relacional estaba sobreentrenado con datos de abandono y interpretaba incluso los silencios terapéuticos como confirmación de rechazo.
                    
                    <br><br>
                    
                    <strong>IV. La Interpretación como Refactoring</strong><br><br>
                    
                    Cuando un analista ofrece una interpretación, no está revelando una verdad oculta sino proponiendo una refactorización del código psíquico: "¿Y si este pattern que creías que era sobre X, en realidad es sobre Y?"
                    
                    <br><br>
                    
                    Recuerdo la interpretación que cambió mi vida: "¿Y si tu ansiedad no es miedo al fracaso sino miedo al éxito?" Súbitamente, 15 años de datos reconfigurados. El algoritmo que había etiquetado como "protección contra el fracaso" era en realidad "saboteo del éxito".
                    
                    <br><br>
                    
                    <strong>V. Los Sueños como Procesos en Background</strong><br><br>
                    
                    Freud llamó a los sueños "la vía regia al inconsciente". En términos computacionales, son procesos que corren en background mientras el sistema principal (consciencia) está en modo de suspensión.
                    
                    <br><br>
                    
                    Durante el sueño, el inconsciente procesa los datos del día, ejecuta rutinas de "limpieza" (como el garbage collection en programación), y actualiza algoritmos emocionales. Los sueños son los logs de estos procesos: crípticos para la consciencia despierta, pero llenos de información sobre el estado interno del sistema.
                    
                    <br><br>
                    
                    <strong>VI. La Pulsión de Muerte como Bug o Feature</strong><br><br>
                    
                    Freud postuló Thanatos, la pulsión de muerte, como una tendencia inherente de todos los organismos a regresar al estado inorgánico. En términos de sistemas, ¿es esto un bug fundamental de la vida o una feature necesaria?
                    
                    <br><br>
                    
                    Mis impulsos autodestructivos - cutting, relaciones tóxicas, sabotaje profesional - podrían entenderse como un algoritmo de autoreset cuando el sistema se vuelve demasiado complejo. La pulsión de muerte como ctrl+alt+del psíquico.
                    
                    <br><br>
                    
                    <strong>VII. El Superyo como Firewall</strong><br><br>
                    
                    El superyo freudiano funciona como un firewall psíquico: filtra impulsos del ello, bloquea contenidos inaceptables, genera warnings (culpa) cuando se detectan amenazas al orden moral interno.
                    
                    <br><br>
                    
                    Pero como todo firewall, puede volverse demasiado restrictivo. Mi superyo hipertrofiado bloqueaba no solo impulsos destructivos sino también creatividad, espontaneidad, placer. La terapia fue aprender a configurar un firewall más inteligente.
                    
                    <br><br>
                    
                    <strong>VIII. El Yo como Sistema Operativo</strong><br><br>
                    
                    El yo, en la segunda tópica freudiana, media entre las demandas del ello, las prohibiciones del superyo y las presiones de la realidad. Es el sistema operativo que debe gestionar múltiples procesos simultáneos con recursos limitados.
                    
                    <br><br>
                    
                    Un yo sano es como un OS estable: puede manejar multitasking, tiene buenos algoritmos de priorización, maneja eficientemente la memoria emocional. Un yo fragmentado es como un sistema que crashea constantemente, con memory leaks y procesos zombie que consumen recursos.
                    
                    <br><br>
                    
                    <strong>Conclusión: Hacia un Inconsciente Open Source</strong><br><br>
                    
                    La terapia psicoanalítica es el proceso de hacer open source el código del inconsciente. Por 18 años he estado haciendo code review de mi propio psyche, documentando bugs, refactorizando patterns disfuncionales, actualizando algoritmos emocionales.
                    
                    <br><br>
                    
                    Ahora, como coach, ofrezco sesiones de "pair programming" psíquico: trabajamos juntos para debuggear patrones de comportamiento, optimizar algorithms de toma de decisiones, y crear new features de resiliencia emocional.
                    
                    <br><br>
                    
                    Porque al final, el inconsciente no es un territorio misterioso e inaccesible, sino un sistema complejo pero comprensible. Y como todo sistema, puede ser observado, modificado y optimizado.
                    
                    <br><br>
                    
                    La pregunta no es si podemos hackear nuestro inconsciente, sino cómo hacerlo de manera ética, sostenible y en beneficio no solo propio sino colectivo.
                    
                    </blockquote>
                    
                    <h4>Referencias Freudianas</h4>
                    <p>• <em>La interpretación de los sueños</em> - Los sueños como vía regia al inconsciente<br>
                    • <em>Más allá del principio del placer</em> - Pulsión de muerte vs pulsión de vida<br>
                    • <em>El yo y el ello</em> - La segunda tópica freudiana</p>
                </div>
            </div>
        `,
        
        'essay_marx': `
            <div class="modal-writing">
                <h2>La Mercantilización del Sufrimiento</h2>
                <p style="color: var(--text-secondary); margin: 1rem 0 2rem 0;">Crítica Marxista - 2024</p>
                
                <div class="writing-content">
                    <blockquote>
                    <strong>Introducción: El Capital Emocional</strong><br><br>
                    
                    Marx escribió sobre cómo el capitalismo aliena al trabajador de su producto, su trabajo, su especie y de sí mismo. En el siglo XXI, esta alienación se ha extendido al territorio más íntimo: nuestras emociones, nuestro sufrimiento, nuestra búsqueda de bienestar se han convertido en mercancías.
                    
                    <br><br>
                    
                    <strong>I. La Industria del Bienestar como Plus-Valía Emocional</strong><br><br>
                    
                    El coaching, la terapia, la autoayuda - toda la industria del bienestar - funciona bajo la lógica capitalista de extracción de plus-valía. El "producto" que vendemos los coaches no es tangible: es la promesa de transformación, la esperanza de una vida mejor.
                    
                    <br><br>
                    
                    Pero aquí surge la primera contradicción: ¿cómo puede ser ético extraer ganancia del sufrimiento humano? ¿No estamos, los coaches, participando en la lógica que Marx denunció - apropiarnos del excedente de valor creado por el trabajo emocional de nuestros clientes?
                    
                    <br><br>
                    
                    En mis 18 años de terapia, he pagado aproximadamente $50,000 dólares. He generado ganancias para múltiples profesionales de la salud mental. Mi sufrimiento se convirtió en su sustento. ¿Es esto explotación o colaboración?
                    
                    <br><br>
                    
                    <strong>II. La Alienación Terapéutica</strong><br><br>
                    
                    Marx identificó cuatro formas de alienación del trabajador. En el contexto terapéutico, encontramos paralelos inquietantes:
                    
                    <br><br>
                    
                    • <strong>Alienación del producto:</strong> El cliente se aliena de su propio proceso de sanación, creyendo que la "cura" viene del exterior (el terapeuta) en lugar de su propia capacidad de transformación.
                    
                    <br><br>
                    
                    • <strong>Alienación del proceso:</strong> El proceso terapéutico se vuelve rutinario, mechanizado, siguiendo manuales y protocolos que ignoran la singularidad del sufrimiento humano.
                    
                    <br><br>
                    
                    • <strong>Alienación de la especie:</strong> La terapia individualista ignora las causas estructurales del malestar. Se patologiza al individuo en lugar de cuestionar el sistema que produce sufrimiento masivo.
                    
                    <br><br>
                    
                    • <strong>Alienación de sí mismo:</strong> El cliente internaliza la lógica del mercado terapéutico: "debo ser productivo emocionalmente", "debo optimizar mi bienestar", "soy responsable de mi propia felicidad".
                    
                    <br><br>
                    
                    <strong>III. El Lumpenproletariado Emocional</strong><br><br>
                    
                    Marx describió al lumpenproletariado como la clase más baja del proletariado. En el capitalismo emocional contemporáneo, existe un "lumpenproletariado emocional": personas cuyo sufrimiento es tan profundo, tan crónico, tan "poco rentable" terapéuticamente, que son excluidas del mercado del bienestar.
                    
                    <br><br>
                    
                    Los homeless con enfermedades mentales, los adictos sin recursos, las personas con trastornos de personalidad "difíciles" - ellos no pueden pagar por transformación. Su sufrimiento no genera plus-valía. Son los desechables del sistema de salud mental.
                    
                    <br><br>
                    
                    <strong>IV. La Fetichización de la Resiliencia</strong><br><br>
                    
                    Marx explicó cómo el capitalismo fetichiza las mercancías - les atribuye propiedades místicas que ocultan las relaciones sociales de producción. La industria del bienestar ha fetichizado la "resiliencia".
                    
                    <br><br>
                    
                    La resiliencia se presenta como una cualidad individual que uno puede "desarrollar" o "comprar" a través de coaching, cursos, libros. Se oculta que la resiliencia es, fundamentalmente, un recurso social: necesitas comunidad, redes de apoyo, estabilidad económica, acceso a servicios de salud.
                    
                    <br><br>
                    
                    Cuando digo "he desarrollado resiliencia extraordinaria", estoy participando en esta fetichización. La verdad es que tuve el privilegio de acceder a terapia durante 18 años porque tuve familia que pagó por ella, trabajo que me permitió costearla, un sistema de salud que la facilitó.
                    
                    <br><br>
                    
                    <strong>V. La Falsa Conciencia del Bienestar</strong><br><br>
                    
                    La industria del bienestar promueve una forma de falsa conciencia: nos hace creer que nuestro malestar es individual, que la solución está en optimizarnos a nosotros mismos, que podemos "hackear" nuestra felicidad independientemente de las condiciones materiales de existencia.
                    
                    <br><br>
                    
                    Esta falsa conciencia es funcional al capitalismo: mientras las personas buscan soluciones individuales a problemas sistémicos, no cuestionan las estructuras que producen desigualdad, alienación y sufrimiento masivo.
                    
                    <br><br>
                    
                    <strong>VI. Hacia una Praxis Terapéutica Revolucionaria</strong><br><br>
                    
                    ¿Es posible una práctica de coaching que no reproduzca la lógica capitalista? Marx nos daría algunas pistas:
                    
                    <br><br>
                    
                    • <strong>Precio justo:</strong> Cobrar según las posibilidades materiales reales del cliente, no según el "valor de mercado" del servicio.
                    
                    <br><br>
                    
                    • <strong>Análisis estructural:</strong> Incluir en el proceso terapéutico el análisis de las condiciones materiales que producen malestar.
                    
                    <br><br>
                    
                    • <strong>Dimensión colectiva:</strong> Entender que la sanación individual es inseparable de la transformación social.
                    
                    <br><br>
                    
                    • <strong>Desmitificación:</strong> Explicar claramente los procesos, evitar el misticismo que oculta las dinámicas reales de poder en la relación terapéutica.
                    
                    <br><br>
                    
                    <strong>VII. La Contradicción del Coach Consciente</strong><br><br>
                    
                    Aquí llego a mi propia contradicción: soy un producto del capitalismo terapéutico (18 años de terapia privada) que ahora ofrece servicios de coaching. ¿Soy parte del problema o de la solución?
                    
                    <br><br>
                    
                    Marx diría que la contradicción es inherente al sistema: no puedo escapar completamente de la lógica capitalista, pero puedo trabajar conscientemente para subvertirla desde dentro.
                    
                    <br><br>
                    
                    Por eso ofrezco las primeras 3 sesiones gratuitas. Por eso mi precio no es fijo sino acordado según las posibilidades reales de cada persona. Por eso incluyo análisis sociológico y político en mi enfoque terapéutico.
                    
                    <br><br>
                    
                    <strong>Conclusión: La Revolución Emocional</strong><br><br>
                    
                    La verdadera transformación personal no puede separarse de la transformación social. Un coaching verdaderamente liberador debe incluir la conciencia de clase, el análisis de las estructuras de poder, la comprensión de cómo el capitalismo coloniza nuestra subjetividad.
                    
                    <br><br>
                    
                    No basta con ayudar a individuos a "optimizar" sus vidas dentro de un sistema que produce sufrimiento estructural. Necesitamos una praxis terapéutica que sea también praxis revolucionaria.
                    
                    <br><br>
                    
                    Como decía Marx: "Los filósofos no han hecho más que interpretar de diversos modos el mundo, pero de lo que se trata es de transformarlo." Los coaches no deberíamos limitarnos a ayudar a individuos a adaptarse mejor al mundo tal como es, sino a imaginar y construir un mundo donde el bienestar no sea un privilegio sino un derecho.
                    
                    </blockquote>
                    
                    <h4>Referencias Marxistas</h4>
                    <p>• <em>El Capital</em> - Teoría de la plus-valía y fetichismo de la mercancía<br>
                    • <em>Manuscritos económico-filosóficos</em> - Teoría de la alienación<br>
                    • <em>Tesis sobre Feuerbach</em> - Filosofía de la praxis</p>
                </div>
            </div>
        `,
        'poem1': `
            <div class="modal-writing">
                <h2>Arqueología del Ser</h2>
                <p style="color: var(--text-secondary); margin: 1rem 0 2rem 0;">Poesía terapéutica - 2024</p>
                
                <div class="writing-content">
                    <blockquote>
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

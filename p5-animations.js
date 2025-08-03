// ===== ANIMACIONES P5.JS COMPLEJAS - GALERÍA FILOSÓFICA =====

// Variables globales para diferentes animaciones
let animations = {};
let currentAnimation = null;

// ===== ANIMACIÓN 1: RED NEURONAL PULSANTE (Neuromancer) =====
class NeuralNetworkAnimation {
    constructor(containerId) {
        this.containerId = containerId;
        this.nodes = [];
        this.connections = [];
        this.pulses = [];
        this.setup();
    }

    setup() {
        // Crear canvas en el contenedor específico
        const container = document.getElementById(this.containerId);
        if (!container) return;
        
        this.canvas = createCanvas(800, 600);
        this.canvas.parent(this.containerId);
        
        // Crear nodos de la red neuronal
        for (let i = 0; i < 50; i++) {
            this.nodes.push({
                x: random(width),
                y: random(height),
                size: random(8, 20),
                pulse: random(TWO_PI),
                connections: [],
                activity: 0
            });
        }
        
        // Crear conexiones entre nodos
        for (let i = 0; i < this.nodes.length; i++) {
            for (let j = i + 1; j < this.nodes.length; j++) {
                let distance = dist(this.nodes[i].x, this.nodes[i].y, this.nodes[j].x, this.nodes[j].y);
                if (distance < 150 && random() < 0.3) {
                    this.connections.push({
                        from: i,
                        to: j,
                        strength: random(0.2, 1),
                        pulse: 0
                    });
                }
            }
        }
    }

    draw() {
        background(10, 15, 30, 50); // Fading trail effect
        
        // Dibujar conexiones con pulsos de datos
        stroke(0, 255, 150, 100);
        for (let conn of this.connections) {
            let fromNode = this.nodes[conn.from];
            let toNode = this.nodes[conn.to];
            
            strokeWeight(conn.strength * 2);
            
            // Pulso de datos viajando
            if (conn.pulse > 0) {
                let t = map(conn.pulse, 0, 100, 0, 1);
                let x = lerp(fromNode.x, toNode.x, t);
                let y = lerp(fromNode.y, toNode.y, t);
                
                fill(0, 255, 255, 200);
                noStroke();
                ellipse(x, y, 6);
                
                conn.pulse -= 2;
            }
            
            // Línea de conexión
            stroke(0, 255, 150, conn.strength * 50);
            line(fromNode.x, fromNode.y, toNode.x, toNode.y);
            
            // Activar pulsos aleatoriamente
            if (random() < 0.001) {
                conn.pulse = 100;
                this.nodes[conn.to].activity = 255;
            }
        }
        
        // Dibujar nodos con pulsación
        for (let node of this.nodes) {
            node.pulse += 0.05;
            node.activity *= 0.95; // Fade activity
            
            let pulseFactor = sin(node.pulse) * 0.3 + 1;
            let nodeSize = node.size * pulseFactor;
            
            // Glow effect
            for (let r = nodeSize; r > 0; r -= 5) {
                fill(0, 255, 150, (nodeSize - r) * 3 + node.activity * 0.5);
                noStroke();
                ellipse(node.x, node.y, r);
            }
            
            // Core
            fill(100, 255, 200, 255);
            ellipse(node.x, node.y, nodeSize * 0.3);
        }
        
        // Efecto de código Matrix cayendo
        this.drawMatrixCode();
    }
    
    drawMatrixCode() {
        fill(0, 255, 100, 30);
        textFont('Courier New');
        textSize(12);
        
        for (let i = 0; i < 20; i++) {
            let x = random(width);
            let y = random(height);
            let code = String.fromCharCode(random(33, 126));
            text(code, x, y);
        }
    }
}

// ===== ANIMACIÓN 2: FRACTALES PSICOANALÍTICOS =====
class FractalPsycheAnimation {
    constructor(containerId) {
        this.containerId = containerId;
        this.angle = 0;
        this.depth = 0;
        this.setup();
    }

    setup() {
        const container = document.getElementById(this.containerId);
        if (!container) return;
        
        this.canvas = createCanvas(800, 600);
        this.canvas.parent(this.containerId);
    }

    draw() {
        background(5, 0, 20);
        translate(width/2, height/2);
        
        // Múltiples fractales superpuestos representando capas del inconsciente
        for (let layer = 0; layer < 5; layer++) {
            push();
            rotate(this.angle * (layer + 1) * 0.1);
            scale(1 - layer * 0.15);
            
            stroke(255 - layer * 40, 100 + layer * 30, 255 - layer * 50, 150 - layer * 20);
            strokeWeight(3 - layer * 0.4);
            noFill();
            
            this.drawMandelbrotApproximation(layer);
            pop();
        }
        
        this.angle += 0.01;
        this.depth = sin(millis() * 0.001) * 50 + 100;
    }

    drawMandelbrotApproximation(layer) {
        let detail = 100 - layer * 15;
        beginShape();
        for (let i = 0; i < detail; i++) {
            let angle = map(i, 0, detail, 0, TWO_PI * 3);
            let r = sin(angle * 4) * sin(angle * 2) * this.depth + sin(millis() * 0.002 + layer) * 20;
            let x = cos(angle) * r;
            let y = sin(angle) * r;
            vertex(x, y);
        }
        endShape(CLOSE);
    }
}

// ===== ANIMACIÓN 3: CYBORG TRANSFORMATION =====
class CyborgTransformAnimation {
    constructor(containerId) {
        this.containerId = containerId;
        this.particles = [];
        this.phase = 0;
        this.setup();
    }

    setup() {
        const container = document.getElementById(this.containerId);
        if (!container) return;
        
        this.canvas = createCanvas(800, 600);
        this.canvas.parent(this.containerId);
        
        // Crear partículas que forman una figura humanoide
        for (let i = 0; i < 200; i++) {
            this.particles.push({
                x: random(width),
                y: random(height),
                targetX: 0,
                targetY: 0,
                size: random(2, 8),
                speed: random(0.02, 0.08),
                phase: random(TWO_PI),
                isOrganic: random() < 0.5
            });
        }
        
        this.calculateHumanoidPositions();
    }

    calculateHumanoidPositions() {
        let centerX = width / 2;
        let centerY = height / 2;
        
        for (let i = 0; i < this.particles.length; i++) {
            let particle = this.particles[i];
            
            // Distribución anatómica básica
            if (i < 30) { // Cabeza
                let angle = map(i, 0, 30, 0, TWO_PI);
                particle.targetX = centerX + cos(angle) * 60;
                particle.targetY = centerY - 150 + sin(angle) * 60;
            } else if (i < 80) { // Torso
                particle.targetX = centerX + random(-40, 40);
                particle.targetY = centerY + random(-100, 50);
            } else if (i < 120) { // Brazos
                let side = i < 100 ? -1 : 1;
                particle.targetX = centerX + side * random(50, 120);
                particle.targetY = centerY + random(-50, 0);
            } else { // Piernas
                let side = i < 160 ? -1 : 1;
                particle.targetX = centerX + side * random(20, 40);
                particle.targetY = centerY + random(60, 200);
            }
        }
    }

    draw() {
        background(0, 5, 15, 100);
        
        // Transformación gradual
        this.phase += 0.01;
        
        for (let particle of this.particles) {
            // Movimiento hacia posición objetivo
            particle.x = lerp(particle.x, particle.targetX, particle.speed);
            particle.y = lerp(particle.y, particle.targetY, particle.speed);
            
            // Efectos diferentes para partes orgánicas vs mecánicas
            if (particle.isOrganic) {
                // Partes orgánicas - suaves, pulsantes
                fill(255, 100, 150, 200);
                let pulse = sin(millis() * 0.005 + particle.phase) * 2 + particle.size;
                ellipse(particle.x, particle.y, pulse);
            } else {
                // Partes mecánicas - angular, brillante
                fill(100, 200, 255, 200);
                stroke(200, 255, 255, 150);
                strokeWeight(1);
                let size = particle.size + sin(this.phase * 2 + particle.phase) * 2;
                rect(particle.x - size/2, particle.y - size/2, size, size);
            }
            
            // Conexiones entre partículas cercanas
            for (let other of this.particles) {
                let d = dist(particle.x, particle.y, other.x, other.y);
                if (d < 50 && d > 0) {
                    stroke(150, 255, 200, 255/d * 10);
                    strokeWeight(0.5);
                    line(particle.x, particle.y, other.x, other.y);
                }
            }
        }
        
        // Efectos de transformación digital
        this.drawDigitalGlitches();
    }

    drawDigitalGlitches() {
        if (random() < 0.1) {
            stroke(255, 255, 255, 100);
            strokeWeight(2);
            for (let i = 0; i < 5; i++) {
                line(0, random(height), width, random(height));
            }
        }
    }
}

// ===== ANIMACIÓN 4: VIGILANCIA PANÓPTICA =====
class SurveillanceAnimation {
    constructor(containerId) {
        this.containerId = containerId;
        this.cameras = [];
        this.subjects = [];
        this.scanLines = [];
        this.setup();
    }

    setup() {
        const container = document.getElementById(this.containerId);
        if (!container) return;
        
        this.canvas = createCanvas(800, 600);
        this.canvas.parent(this.containerId);
        
        // Crear cámaras de vigilancia
        for (let i = 0; i < 8; i++) {
            this.cameras.push({
                x: random(width),
                y: random(height),
                angle: random(TWO_PI),
                range: random(100, 200),
                sweep: random(0.01, 0.03)
            });
        }
        
        // Crear sujetos vigilados
        for (let i = 0; i < 20; i++) {
            this.subjects.push({
                x: random(width),
                y: random(height),
                vx: random(-1, 1),
                vy: random(-1, 1),
                detected: false,
                anxiety: 0
            });
        }
    }

    draw() {
        background(10, 15, 25);
        
        // Dibujar campo de vigilancia
        for (let camera of this.cameras) {
            camera.angle += camera.sweep;
            
            // Cono de visión de la cámara
            fill(255, 50, 50, 30);
            noStroke();
            
            push();
            translate(camera.x, camera.y);
            rotate(camera.angle);
            
            beginShape();
            vertex(0, 0);
            for (let a = -PI/6; a <= PI/6; a += 0.1) {
                let x = cos(a) * camera.range;
                let y = sin(a) * camera.range;
                vertex(x, y);
            }
            endShape(CLOSE);
            pop();
            
            // Cámara física
            fill(100);
            stroke(255, 0, 0);
            strokeWeight(2);
            ellipse(camera.x, camera.y, 15);
            
            // Línea de visión
            stroke(255, 0, 0, 150);
            strokeWeight(1);
            let endX = camera.x + cos(camera.angle) * camera.range;
            let endY = camera.y + sin(camera.angle) * camera.range;
            line(camera.x, camera.y, endX, endY);
        }
        
        // Dibujar sujetos y detectar vigilancia
        for (let subject of this.subjects) {
            subject.detected = false;
            
            // Verificar si está siendo vigilado
            for (let camera of this.cameras) {
                let distance = dist(subject.x, subject.y, camera.x, camera.y);
                let angle = atan2(subject.y - camera.y, subject.x - camera.x);
                let angleDiff = abs(angle - camera.angle);
                
                if (distance < camera.range && angleDiff < PI/6) {
                    subject.detected = true;
                    subject.anxiety = min(subject.anxiety + 5, 255);
                    break;
                }
            }
            
            if (!subject.detected) {
                subject.anxiety = max(subject.anxiety - 2, 0);
            }
            
            // Movimiento del sujeto
            subject.x += subject.vx;
            subject.y += subject.vy;
            
            // Rebote en bordes
            if (subject.x < 0 || subject.x > width) subject.vx *= -1;
            if (subject.y < 0 || subject.y > height) subject.vy *= -1;
            
            // Dibujar sujeto con nivel de ansiedad
            if (subject.detected) {
                fill(255, 100 - subject.anxiety/3, 100 - subject.anxiety/3, 200);
                stroke(255, 0, 0);
                strokeWeight(2);
            } else {
                fill(100, 150, 255, 150);
                noStroke();
            }
            
            ellipse(subject.x, subject.y, 8 + subject.anxiety/30);
            
            // Rastro de ansiedad
            if (subject.anxiety > 100) {
                stroke(255, 0, 0, subject.anxiety);
                strokeWeight(1);
                for (let i = 0; i < 5; i++) {
                    let x = subject.x + random(-20, 20);
                    let y = subject.y + random(-20, 20);
                    point(x, y);
                }
            }
        }
        
        // Líneas de escaneo estilo surveillance
        stroke(0, 255, 0, 100);
        strokeWeight(1);
        let scanY = (millis() * 0.5) % height;
        line(0, scanY, width, scanY);
        
        // Timestamp estilo cámara de seguridad
        fill(0, 255, 0);
        textFont('Courier New');
        textSize(14);
        text('SURVEILLANCE ACTIVE - ' + nf(hour(), 2) + ':' + nf(minute(), 2) + ':' + nf(second(), 2), 10, 30);
    }
}

// ===== SISTEMA DE GESTIÓN DE ANIMACIONES =====
function initializeAnimation(type, containerId) {
    let animation;
    
    switch(type) {
        case 'neural':
            animation = new NeuralNetworkAnimation(containerId);
            break;
        case 'fractal':
            animation = new FractalPsycheAnimation(containerId);
            break;
        case 'cyborg':
            animation = new CyborgTransformAnimation(containerId);
            break;
        case 'surveillance':
            animation = new SurveillanceAnimation(containerId);
            break;
        default:
            return null;
    }
    
    animations[containerId] = animation;
    return animation;
}

function startAnimation(containerId) {
    if (animations[containerId]) {
        currentAnimation = animations[containerId];
        draw = function() {
            currentAnimation.draw();
        };
    }
}

// p5.js setup principal
function setup() {
    // Este setup se ejecutará cuando no hay animación específica cargada
    noCanvas();
}

function draw() {
    // Draw loop manejado por las animaciones individuales
}

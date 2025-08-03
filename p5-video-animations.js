// ===== ANIMACIONES DE VIDEO COMPLEJAS =====

// ===== ANIMACIÓN 5: NEUROCAPITALISMO DATA FLOW =====
class NeuroCapitalismFlow {
    constructor(containerId) {
        this.containerId = containerId;
        this.dataStreams = [];
        this.brainNodes = [];
        this.moneyParticles = [];
        this.setup();
    }

    setup() {
        const container = document.getElementById(this.containerId);
        if (!container) return;
        
        this.canvas = createCanvas(800, 600);
        this.canvas.parent(this.containerId);
        
        // Crear nodos del cerebro
        for (let i = 0; i < 30; i++) {
            this.brainNodes.push({
                x: width/2 + cos(i * 0.2) * (100 + sin(i * 0.3) * 50),
                y: height/2 + sin(i * 0.2) * (80 + cos(i * 0.4) * 30),
                size: random(10, 25),
                value: random(100),
                extracted: 0
            });
        }
        
        // Crear streams de datos
        for (let i = 0; i < 100; i++) {
            this.dataStreams.push({
                x: random(width),
                y: random(height),
                vx: random(-2, 2),
                vy: random(-2, 2),
                type: random(['attention', 'emotion', 'memory', 'desire']),
                value: random(1, 10),
                captured: false
            });
        }
    }

    draw() {
        background(5, 10, 25, 150);
        
        // Dibujar cerebro central
        this.drawBrain();
        
        // Procesar streams de datos
        this.processDataStreams();
        
        // Dibujar extracción de valor
        this.drawValueExtraction();
        
        // Efectos de mercantilización
        this.drawMarketEffects();
    }

    drawBrain() {
        // Conexiones neuronales
        stroke(100, 150, 255, 100);
        strokeWeight(1);
        for (let i = 0; i < this.brainNodes.length; i++) {
            for (let j = i + 1; j < this.brainNodes.length; j++) {
                let d = dist(this.brainNodes[i].x, this.brainNodes[i].y, 
                           this.brainNodes[j].x, this.brainNodes[j].y);
                if (d < 80) {
                    line(this.brainNodes[i].x, this.brainNodes[i].y,
                         this.brainNodes[j].x, this.brainNodes[j].y);
                }
            }
        }
        
        // Nodos del cerebro
        for (let node of this.brainNodes) {
            // Glow effect
            for (let r = node.size; r > 0; r -= 3) {
                fill(100, 150, 255, (node.size - r) * 5);
                noStroke();
                ellipse(node.x, node.y, r);
            }
            
            // Core neuronal
            fill(200, 255, 255);
            ellipse(node.x, node.y, node.size * 0.3);
            
            // Indicador de valor extraído
            if (node.extracted > 0) {
                fill(255, 215, 0, node.extracted);
                textAlign(CENTER, CENTER);
                textSize(8);
                text('$' + int(node.extracted/10), node.x, node.y - node.size);
                node.extracted *= 0.95;
            }
        }
    }

    processDataStreams() {
        for (let stream of this.dataStreams) {
            stream.x += stream.vx;
            stream.y += stream.vy;
            
            // Rebote en bordes
            if (stream.x < 0 || stream.x > width) stream.vx *= -1;
            if (stream.y < 0 || stream.y > height) stream.vy *= -1;
            
            // Colores por tipo de datos
            let streamColor;
            switch(stream.type) {
                case 'attention': streamColor = [255, 100, 100]; break;
                case 'emotion': streamColor = [100, 255, 100]; break;
                case 'memory': streamColor = [100, 100, 255]; break;
                case 'desire': streamColor = [255, 255, 100]; break;
            }
            
            // Verificar captura por cerebro
            for (let node of this.brainNodes) {
                let d = dist(stream.x, stream.y, node.x, node.y);
                if (d < node.size && !stream.captured) {
                    stream.captured = true;
                    node.extracted = 255;
                    
                    // Crear partícula de dinero
                    this.moneyParticles.push({
                        x: node.x,
                        y: node.y,
                        vx: random(-3, 3),
                        vy: random(-3, 3),
                        life: 255,
                        value: stream.value
                    });
                }
            }
            
            if (!stream.captured) {
                fill(streamColor[0], streamColor[1], streamColor[2], 150);
                noStroke();
                ellipse(stream.x, stream.y, 4);
                
                // Trail effect
                fill(streamColor[0], streamColor[1], streamColor[2], 50);
                ellipse(stream.x - stream.vx * 2, stream.y - stream.vy * 2, 2);
            }
        }
    }

    drawValueExtraction() {
        // Procesar partículas de dinero
        for (let i = this.moneyParticles.length - 1; i >= 0; i--) {
            let money = this.moneyParticles[i];
            
            money.x += money.vx;
            money.y += money.vy;
            money.life -= 2;
            money.vy += 0.1; // Gravedad
            
            if (money.life <= 0) {
                this.moneyParticles.splice(i, 1);
                continue;
            }
            
            fill(255, 215, 0, money.life);
            textAlign(CENTER, CENTER);
            textSize(12);
            text('$', money.x, money.y);
        }
    }

    drawMarketEffects() {
        // Gráfico de capitalización en tiempo real
        stroke(0, 255, 0);
        strokeWeight(2);
        noFill();
        
        beginShape();
        for (let x = 0; x < width; x += 10) {
            let totalValue = 0;
            for (let node of this.brainNodes) {
                totalValue += node.extracted;
            }
            let y = height - 50 - totalValue * 0.1 + sin(x * 0.01 + millis() * 0.001) * 20;
            vertex(x, y);
        }
        endShape();
        
        // Etiquetas del mercado
        fill(0, 255, 0);
        textAlign(LEFT, TOP);
        textSize(12);
        text('ATTENTION MARKET CAP: $' + int(random(1000000, 9999999)), 10, 10);
        text('EMOTIONAL FUTURES: +' + nf(random(0, 100), 1, 2) + '%', 10, 30);
        text('NEURAL EXTRACTION RATE: ' + int(this.moneyParticles.length * 10) + ' tokens/sec', 10, 50);
    }
}

// ===== ANIMACIÓN 6: ALGORITMO DE TERAPIA =====
class TherapyAlgorithmVisualization {
    constructor(containerId) {
        this.containerId = containerId;
        this.codeLines = [];
        this.emotionalStates = [];
        this.debugOutput = [];
        this.processingStack = [];
        this.setup();
    }

    setup() {
        const container = document.getElementById(this.containerId);
        if (!container) return;
        
        this.canvas = createCanvas(800, 600);
        this.canvas.parent(this.containerId);
        
        // Líneas de código de algoritmo terapéutico
        this.therapyCode = [
            'function processEmotionalState(input) {',
            '  if (input.anxiety > threshold) {',
            '    return breathingExercise();',
            '  } else if (input.depression.detected) {',
            '    return cognitiveRestructuring(input);',
            '  }',
            '  return mindfulnessProtocol();',
            '}',
            '',
            'while (healing !== complete) {',
            '  let currentEmotion = scanEmotionalState();',
            '  let response = processEmotionalState(currentEmotion);',
            '  apply(response);',
            '  updateProgress();',
            '}'
        ];
        
        // Estados emocionales iniciales
        for (let i = 0; i < 20; i++) {
            this.emotionalStates.push({
                x: random(width * 0.6, width - 50),
                y: random(50, height - 50),
                type: random(['anxiety', 'depression', 'trauma', 'joy', 'fear']),
                intensity: random(0.3, 1),
                processed: false,
                processingTime: 0
            });
        }
    }

    draw() {
        background(0, 20, 40);
        
        // Panel de código
        this.drawCodePanel();
        
        // Estados emocionales
        this.drawEmotionalStates();
        
        // Stack de procesamiento
        this.drawProcessingStack();
        
        // Debug output
        this.drawDebugOutput();
        
        // Simular procesamiento
        this.simulateProcessing();
    }

    drawCodePanel() {
        // Fondo del panel de código
        fill(10, 20, 30, 200);
        stroke(0, 150, 255, 100);
        strokeWeight(1);
        rect(10, 10, width * 0.5, height - 20);
        
        // Líneas de código
        fill(200, 255, 200);
        textFont('Courier New');
        textSize(11);
        textAlign(LEFT, TOP);
        
        for (let i = 0; i < this.therapyCode.length; i++) {
            let y = 30 + i * 18;
            
            // Highlight línea ejecutándose
            if (i === int(millis() * 0.005) % this.therapyCode.length) {
                fill(255, 255, 0, 100);
                noStroke();
                rect(15, y - 2, width * 0.5 - 10, 16);
                fill(255, 255, 100);
            } else {
                fill(200, 255, 200);
            }
            
            text(this.therapyCode[i], 20, y);
        }
    }

    drawEmotionalStates() {
        for (let state of this.emotionalStates) {
            let stateColor;
            switch(state.type) {
                case 'anxiety': stateColor = [255, 100, 100]; break;
                case 'depression': stateColor = [100, 100, 255]; break;
                case 'trauma': stateColor = [255, 50, 50]; break;
                case 'joy': stateColor = [255, 255, 100]; break;
                case 'fear': stateColor = [150, 50, 200]; break;
            }
            
            // Glow effect basado en intensidad
            for (let r = state.intensity * 30; r > 0; r -= 5) {
                fill(stateColor[0], stateColor[1], stateColor[2], (state.intensity * 30 - r) * 3);
                noStroke();
                ellipse(state.x, state.y, r);
            }
            
            // Core del estado
            fill(stateColor[0], stateColor[1], stateColor[2], 255);
            ellipse(state.x, state.y, state.intensity * 15);
            
            // Etiqueta
            fill(255);
            textAlign(CENTER, CENTER);
            textSize(8);
            text(state.type.toUpperCase(), state.x, state.y + 25);
            
            // Animación de procesamiento
            if (state.processingTime > 0) {
                stroke(0, 255, 255);
                strokeWeight(2);
                noFill();
                ellipse(state.x, state.y, 40 + sin(millis() * 0.01) * 10);
                state.processingTime--;
            }
        }
    }

    drawProcessingStack() {
        // Panel del stack
        fill(20, 10, 30, 200);
        stroke(255, 100, 0, 100);
        strokeWeight(1);
        rect(width * 0.6 + 20, height * 0.6, width * 0.35, height * 0.35);
        
        fill(255, 200, 100);
        textAlign(CENTER, TOP);
        textSize(12);
        text('PROCESSING STACK', width * 0.77, height * 0.6 + 10);
        
        // Stack items
        for (let i = 0; i < this.processingStack.length && i < 8; i++) {
            let item = this.processingStack[i];
            fill(255, 150, 0, 200 - i * 20);
            textAlign(LEFT, TOP);
            textSize(10);
            text('> ' + item, width * 0.6 + 30, height * 0.6 + 40 + i * 15);
        }
    }

    drawDebugOutput() {
        // Panel de debug
        fill(30, 10, 20, 200);
        stroke(255, 0, 100, 100);
        strokeWeight(1);
        rect(width * 0.6 + 20, 50, width * 0.35, height * 0.5);
        
        fill(255, 100, 200);
        textAlign(CENTER, TOP);
        textSize(12);
        text('DEBUG OUTPUT', width * 0.77, 60);
        
        // Debug messages
        for (let i = 0; i < this.debugOutput.length && i < 15; i++) {
            let msg = this.debugOutput[i];
            fill(255, 200, 255, 255 - i * 15);
            textAlign(LEFT, TOP);
            textSize(9);
            text(msg, width * 0.6 + 30, 85 + i * 12);
        }
    }

    simulateProcessing() {
        // Procesar estados emocionales aleatoriamente
        if (random() < 0.02) {
            let unprocessed = this.emotionalStates.filter(s => !s.processed);
            if (unprocessed.length > 0) {
                let state = random(unprocessed);
                state.processingTime = 60;
                
                this.processingStack.unshift(state.type + '.process()');
                if (this.processingStack.length > 10) {
                    this.processingStack.pop();
                }
                
                this.debugOutput.unshift('[' + millis() + '] Processing ' + state.type + ' intensity: ' + nf(state.intensity, 1, 2));
                if (this.debugOutput.length > 20) {
                    this.debugOutput.pop();
                }
            }
        }
        
        // Reset estados procesados ocasionalmente
        if (random() < 0.005) {
            for (let state of this.emotionalStates) {
                state.processed = false;
                state.intensity = random(0.3, 1);
            }
        }
    }
}

// ===== SISTEMA DE VIDEO LOOPS =====
class VideoLoopManager {
    constructor() {
        this.loops = new Map();
        this.currentLoop = null;
    }
    
    createLoop(id, animationClass, duration = 10000) {
        this.loops.set(id, {
            animation: animationClass,
            duration: duration,
            startTime: 0,
            isPlaying: false
        });
    }
    
    playLoop(id, containerId) {
        const loop = this.loops.get(id);
        if (!loop) return;
        
        // Parar loop actual si existe
        if (this.currentLoop) {
            this.currentLoop.isPlaying = false;
        }
        
        // Iniciar nuevo loop
        const animation = new loop.animation(containerId);
        loop.startTime = millis();
        loop.isPlaying = true;
        this.currentLoop = loop;
        
        // Setup del loop de video
        draw = () => {
            animation.draw();
            
            // Reiniciar loop cuando termine
            if (millis() - loop.startTime > loop.duration) {
                loop.startTime = millis();
            }
        };
    }
    
    stopCurrentLoop() {
        if (this.currentLoop) {
            this.currentLoop.isPlaying = false;
            this.currentLoop = null;
            noLoop();
        }
    }
}

// Instancia global del manager de video loops
const videoManager = new VideoLoopManager();

// Inicializar loops de video
videoManager.createLoop('neurocapitalism', NeuroCapitalismFlow, 15000);
videoManager.createLoop('therapy-algorithm', TherapyAlgorithmVisualization, 20000);

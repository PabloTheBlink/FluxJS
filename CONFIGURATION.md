# FluxJS - Guía de Configuración Completa

FluxJS es una versión ultra configurable de la librería de partículas, con más de 100 opciones de personalización.

## Índice

- [Configuración Básica](#configuración-básica)
- [Sistema de Colores](#sistema-de-colores)
- [Configuración de Tamaño](#configuración-de-tamaño)
- [Sistema de Velocidad](#sistema-de-velocidad)
- [Control de Opacidad](#control-de-opacidad)
- [Sistema de Conexiones](#sistema-de-conexiones)
- [Interacción con Mouse](#interacción-con-mouse)
- [Sistema de Física](#sistema-de-física)
- [Efectos Especiales](#efectos-especiales)
- [Formas y Geometría](#formas-y-geometría)
- [Sistema Responsive](#sistema-responsive)
- [Animaciones Avanzadas](#animaciones-avanzadas)
- [Configuración de Canvas](#configuración-de-canvas)
- [Optimización y Rendimiento](#optimización-y-rendimiento)
- [Eventos y Callbacks](#eventos-y-callbacks)
- [Presets Incluidos](#presets-incluidos)
- [Ejemplos Prácticos](#ejemplos-prácticos)

## Configuración Básica

```javascript
const flux = new FluxJS({
  container: document.getElementById("mi-contenedor"), // Contenedor del canvas
  count: 100, // Número de partículas
});
```

## Sistema de Colores

### Color Simple

```javascript
color: {
  type: "single",
  value: "#ffffff"
}
```

### Gradiente

```javascript
color: {
  type: "gradient",
  gradient: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4"]
}
```

### Arcoíris Animado

```javascript
color: {
  type: "rainbow",
  rainbowSpeed: 0.02 // Velocidad de cambio de color
}
```

### Paleta Aleatoria

```javascript
color: {
  type: "random",
  randomPalette: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FECA57"]
}
```

## Configuración de Tamaño

```javascript
size: {
  min: 1,
  max: 5,
  pulse: true,                    // Efecto de pulsación
  pulseSpeed: 0.02,              // Velocidad de pulsación
  pulseIntensity: 0.5,           // Intensidad del pulso
  distribution: "gaussian"        // 'uniform', 'gaussian', 'exponential'
}
```

## Sistema de Velocidad

```javascript
speed: {
  min: 0.1,
  max: 0.5,
  acceleration: 0.001,           // Aceleración constante
  turbulence: 0.5,              // Turbulencia/ruido
  turbulenceFrequency: 0.01     // Frecuencia de turbulencia
}
```

## Control de Opacidad

```javascript
opacity: {
  min: 0.3,
  max: 0.8,
  fadeIn: true,                 // Efecto de aparición gradual
  fadeInDuration: 2000,         // Duración del fade in (ms)
  flicker: true,                // Efecto de parpadeo
  flickerSpeed: 0.05            // Velocidad de parpadeo
}
```

## Sistema de Conexiones

```javascript
connections: {
  enabled: true,
  distance: 120,                // Distancia máxima para conexiones
  color: "#00ff88",
  opacity: 0.4,
  width: 1.5,                   // Grosor de líneas
  maxConnections: 3,            // Máximo conexiones por partícula
  animated: true,               // Líneas animadas
  animationSpeed: 0.02,
  curve: false                  // Conexiones curvas
}
```

## Interacción con Mouse

```javascript
mouse: {
  interact: true,
  distance: 150,
  attraction: 0.05,
  repulsion: false,             // Cambiar a repulsión
  repulsionForce: 0.1,
  trail: true,                  // Rastro del mouse
  trailLength: 15,
  magnetism: true,              // Magnetismo instantáneo
  magnetismStrength: 0.02,
  onClick: (event, flux) => {   // Callback de click
    console.log('Canvas clicked!');
  }
}
```

## Sistema de Física

```javascript
physics: {
  gravity: 0.1,                 // Fuerza de gravedad
  gravityDirection: "down",     // 'up', 'down', 'left', 'right'
  friction: 0.01,               // Fricción del aire
  bounce: 0.8,                  // Factor de rebote (0-1)
  wind: 0.05,                   // Fuerza del viento
  windDirection: Math.PI / 4    // Dirección del viento (radianes)
}
```

## Efectos Especiales

```javascript
effects: {
  glow: true,                   // Efecto de brillo
  glowColor: "#ffffff",
  glowSize: 10,
  shadow: true,                 // Sombras
  shadowColor: "rgba(0,0,0,0.3)",
  shadowBlur: 5,
  shadowOffset: { x: 2, y: 2 },
  twinkle: true,                // Efecto de centelleo
  twinkleSpeed: 0.03
}
```

## Formas y Geometría

```javascript
shape: {
  type: "star",                 // 'circle', 'square', 'triangle', 'star', 'heart', 'polygon', 'custom'
  sides: 6,                     // Para polígonos
  rotation: true,               // Rotación continua
  rotationSpeed: 0.02,
  customPath: (ctx, particle) => {  // Forma personalizada
    // Tu código de dibujo personalizado
    ctx.beginPath();
    // ... dibujar forma custom
    ctx.fill();
  }
}
```

## Sistema Responsive

```javascript
responsive: {
  enabled: true,
  breakpoints: {
    mobile: { width: 768, particles: 0.3 },
    tablet: { width: 1024, particles: 0.6 },
    desktop: { width: 1920, particles: 1.0 }
  },
  scaleWithContainer: true
}
```

## Animaciones Avanzadas

```javascript
animation: {
  type: "orbit",                // 'float', 'bounce', 'spiral', 'wave', 'orbit'
  speed: 1.5,                   // Multiplicador de velocidad
  direction: "up",              // 'random', 'up', 'down', 'left', 'right'

  // Configuración específica para ondas
  wave: {
    amplitude: 50,
    frequency: 0.01,
    speed: 0.02
  },

  // Configuración para órbitas
  orbit: {
    centerX: null,              // null = centro del canvas
    centerY: null,
    radius: 200,
    speed: 0.005
  }
}
```

## Configuración de Canvas

```javascript
canvas: {
  background: "rgba(0,0,0,0.1)", // Fondo del canvas
  blur: true,                    // Desenfoque del canvas
  blurAmount: 2,
  zIndex: -1,                    // Z-index del canvas
  opacity: 0.8                   // Opacidad del canvas completo
}
```

## Optimización y Rendimiento

```javascript
performance: {
  maxFPS: 60,                    // Límite de FPS
  enableWebGL: false,            // WebGL (experimental)
  optimizeConnections: true,     // Optimizar cálculo de conexiones
  pauseOnBlur: true,            // Pausar cuando se pierde el foco
  adaptiveQuality: true         // Calidad adaptativa
}
```

## Eventos y Callbacks

```javascript
events: {
  onInit: (flux) => {
    console.log('FluxJS inicializado', flux);
  },
  onStart: (flux) => {
    console.log('Animación iniciada');
  },
  onStop: (flux) => {
    console.log('Animación detenida');
  },
  onResize: (flux) => {
    console.log('Canvas redimensionado');
  },
  onParticleClick: (particle, flux) => {
    console.log('Partícula clickeada', particle);
  },
  onParticleHover: (particle, flux) => {
    console.log('Mouse sobre partícula', particle);
  }
}
```

## Presets Incluidos

### Stars (Estrellas)

```javascript
const flux = createFlux.stars(container, {
  count: 200,
  color: { value: "#FFD700" },
});
```

### Network (Red)

```javascript
const flux = createFlux.network(container, {
  color: { value: "#00ff88" },
  connections: { distance: 150 },
});
```

### Bubbles (Burbujas)

```javascript
const flux = createFlux.bubbles(container, {
  physics: { gravity: 0.05 },
});
```

### Galaxy (Galaxia)

```javascript
const flux = createFlux.galaxy(container, {
  count: 300,
  animation: { orbit: { radius: 250 } },
});
```

### Matrix

```javascript
const flux = createFlux.matrix(container, {
  color: { value: "#00ff00" },
  animation: { direction: "down" },
});
```

### Hearts (Corazones)

```javascript
const flux = createFlux.hearts(container, {
  count: 50,
  effects: { glow: true, glowSize: 25 },
});
```

## Ejemplos Prácticos

### 1. Fondo de Estrellas con Efecto Twinkle

```javascript
const starField = new FluxJS({
  container: document.body,
  count: 200,
  color: {
    type: "random",
    randomPalette: ["#FFD700", "#FFF8DC", "#F0F8FF", "#E6E6FA"],
  },
  size: {
    min: 1,
    max: 3,
    distribution: "exponential",
  },
  speed: {
    min: 0.02,
    max: 0.1,
  },
  effects: {
    twinkle: true,
    twinkleSpeed: 0.01,
    glow: true,
    glowSize: 5,
  },
  shape: {
    type: "star",
  },
  connections: {
    enabled: false,
  },
});
```

### 2. Red Neural Interactiva

```javascript
const neuralNetwork = new FluxJS({
  container: document.getElementById("neural-bg"),
  count: 80,
  color: {
    type: "gradient",
    gradient: ["#00ff88", "#0066cc", "#6600ff"],
  },
  size: {
    min: 2,
    max: 6,
    pulse: true,
    pulseSpeed: 0.015,
  },
  connections: {
    enabled: true,
    distance: 120,
    animated: true,
    color: "#00ff88",
    opacity: 0.6,
    maxConnections: 4,
  },
  mouse: {
    interact: true,
    distance: 200,
    attraction: 0.1,
    magnetism: true,
  },
  animation: {
    type: "float",
    speed: 0.8,
  },
  effects: {
    glow: true,
    glowColor: "#00ff88",
    glowSize: 15,
  },
});
```

### 3. Simulación de Física Completa

```javascript
const physicsDemo = new FluxJS({
  container: document.getElementById("physics-demo"),
  count: 100,
  color: {
    type: "rainbow",
    rainbowSpeed: 0.03,
  },
  size: {
    min: 3,
    max: 8,
    distribution: "gaussian",
  },
  speed: {
    min: 0.5,
    max: 2,
    turbulence: 0.3,
  },
  physics: {
    gravity: 0.15,
    gravityDirection: "down",
    friction: 0.02,
    bounce: 0.7,
    wind: 0.03,
    windDirection: Math.PI / 6,
  },
  animation: {
    type: "bounce",
  },
  effects: {
    glow: true,
    shadow: true,
    shadowBlur: 10,
  },
  mouse: {
    interact: true,
    repulsion: true,
    repulsionForce: 0.2,
    distance: 100,
  },
});
```

### 4. Configuración Dinámica

```javascript
const flux = new FluxJS({
  container: document.body,
  count: 50,
});

// Cambiar configuración en tiempo real
flux.setColor({
  type: "gradient",
  gradient: ["#ff0000", "#00ff00", "#0000ff"],
});

flux.setAnimation("spiral", {
  speed: 2,
  wave: { amplitude: 100 },
});

flux.setPhysics({
  gravity: 0.1,
  wind: 0.05,
});

// Añadir partículas dinámicamente
flux.addParticle(100, 100, {
  size: 10,
  color: "#ff0000",
});

// Crear explosión
flux.explode(200, 200, 5, 150);

// Atraer partículas a un punto
flux.attract(300, 300, 3, 200);
```

## Métodos Útiles

```javascript
// Control básico
flux.start();
flux.stop();
flux.destroy();

// Configuración dinámica
flux.updateConfig({ count: 200 });
flux.setColor("#ff0000");
flux.setCount(150);
flux.setAnimation("spiral");

// Interacción
flux.addParticle(x, y, customConfig);
flux.removeParticle(index);
flux.explode(x, y, force, radius);
flux.attract(x, y, force, radius);

// Utilidades
const particle = flux.getParticleAt(x, y);
```

## Utilidades de Configuración

```javascript
// Generar paleta de colores
const colors = createFlux.utils.generateColorPalette("#ff0000", 5);

// Crear gradiente
const gradient = createFlux.utils.createGradient(["#red", "#blue"]);

// Configuraciones de física preestablecidas
const earthPhysics = createFlux.utils.physics.earth;
const spacePhysics = createFlux.utils.physics.space;
```

Esta guía cubre todas las opciones de configuración disponibles en FluxJS. La librería está diseñada para ser extremadamente flexible y permitir crear cualquier tipo de efecto de partículas imaginable.

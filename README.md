# FluxJS ✨

Una librería de partículas animadas ultra configurable para fondos web interactivos, con más de 100 opciones de personalización.

## 🚀 Características Principales

### 🎨 Sistema de Colores Avanzado

- **Colores simples**: Color sólido tradicional
- **Gradientes**: Gradientes lineales multicolor
- **Arcoíris animado**: Cambio de color automático
- **Paletas aleatorias**: Colores al azar de una paleta personalizada

### ⚡ Física Realista

- **Gravedad**: Configurable en 4 direcciones
- **Viento**: Fuerza y dirección personalizables
- **Fricción**: Simulación de resistencia del aire
- **Rebotes**: Factor de rebote configurable
- **Turbulencia**: Movimiento caótico realista

### 🖱️ Interacción Avanzada con Mouse

- **Atracción/Repulsión**: Fuerzas configurables
- **Magnetismo**: Atracción instantánea
- **Trail del mouse**: Rastro visual
- **Eventos personalizados**: onClick, onHover callbacks
- **Detección de partículas**: Click en partículas individuales

### ✨ Efectos Especiales

- **Glow**: Efecto de brillo configurable
- **Sombras**: Sombras con desplazamiento y desenfoque
- **Twinkle**: Efecto de centelleo
- **Pulse**: Pulsación de tamaño
- **Flicker**: Parpadeo de opacidad
- **FadeIn**: Aparición gradual

### 🔵 Formas Personalizadas

- **Círculos**: Forma tradicional
- **Cuadrados**: Formas angulares
- **Triángulos**: Geometría básica
- **Estrellas**: Estrellas de 5 puntas
- **Corazones**: Formas románticas
- **Polígonos**: Lados configurables
- **Formas custom**: Función de dibujo personalizada

### 🌊 Animaciones Avanzadas

- **Float**: Movimiento libre
- **Bounce**: Rebotes en bordes
- **Spiral**: Movimiento espiral
- **Wave**: Ondas sinusoidales
- **Orbit**: Órbitas circulares
- **Direcciones**: Up, down, left, right, random

### 🕸️ Sistema de Conexiones Mejorado

- **Conexiones animadas**: Líneas punteadas en movimiento
- **Conexiones curvas**: Líneas no rectas
- **Límite de conexiones**: Máximo por partícula
- **Colores independientes**: Color separado de partículas
- **Grosor configurable**: Ancho de líneas

### 📱 Sistema Responsive Inteligente

- **Breakpoints personalizables**: Mobile, tablet, desktop
- **Ajuste automático**: Número de partículas según pantalla
- **Escalado del contenedor**: Adaptación a contenedores

### ⚙️ Optimización y Rendimiento

- **Control de FPS**: Límite de cuadros por segundo
- **Pausa automática**: Al perder foco de ventana
- **Calidad adaptativa**: Ajuste automático de calidad
- **Optimización de conexiones**: Algoritmos eficientes

## 📦 Instalación

### CDN (Recomendado)

```html
<script src="https://cdn.jsdelivr.net/gh/tu-usuario/FluxJS/flux.js"></script>
```

### Descarga Directa

```html
<script src="flux.js"></script>
```

### NPM

```bash
npm install fluxjs
```

## 🎯 Uso Rápido

### Inicialización Básica

```javascript
// Fondo simple
const flux = new FluxJS();

// Con configuración básica
const flux = new FluxJS({
  container: document.getElementById("mi-contenedor"),
  count: 100,
  color: { type: "rainbow" },
});
```

### Usando Presets

```javascript
// Estrellas brillantes
const stars = createFlux.stars(document.body, {
  count: 200,
  effects: { twinkle: true, glow: true },
});

// Red neural interactiva
const network = createFlux.network(document.body, {
  mouse: { magnetism: true },
  connections: { animated: true },
});

// Burbujas con física
const bubbles = createFlux.bubbles(document.body, {
  physics: { gravity: 0.1, wind: 0.05 },
});

// Galaxia en órbita
const galaxy = createFlux.galaxy(document.body, {
  count: 300,
  animation: { orbit: { radius: 250 } },
});
```

## 🎨 Ejemplos de Configuración

### Colores Avanzados

```javascript
const flux = new FluxJS({
  color: {
    type: "gradient",
    gradient: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4"],
  },
});

// Arcoíris dinámico
const rainbow = new FluxJS({
  color: {
    type: "rainbow",
    rainbowSpeed: 0.03,
  },
});

// Paleta personalizada
const custom = new FluxJS({
  color: {
    type: "random",
    randomPalette: ["#FF0000", "#00FF00", "#0000FF", "#FFFF00"],
  },
});
```

### Física Completa

```javascript
const physics = new FluxJS({
  physics: {
    gravity: 0.15,
    gravityDirection: "down",
    friction: 0.02,
    bounce: 0.8,
    wind: 0.05,
    windDirection: Math.PI / 4,
  },
  animation: { type: "bounce" },
});
```

### Efectos Especiales

```javascript
const magical = new FluxJS({
  effects: {
    glow: true,
    glowColor: "#FFD700",
    glowSize: 20,
    twinkle: true,
    shadow: true,
  },
  size: {
    pulse: true,
    pulseIntensity: 0.8,
  },
  opacity: {
    flicker: true,
    fadeIn: true,
  },
});
```

### Formas Personalizadas

```javascript
const hearts = new FluxJS({
  shape: {
    type: "heart",
    rotation: true,
    rotationSpeed: 0.02,
  },
  color: { type: "gradient", gradient: ["#FF69B4", "#DC143C"] },
});

// Forma completamente personalizada
const custom = new FluxJS({
  shape: {
    type: "custom",
    customPath: (ctx, particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.moveTo(particle.x + particle.size, particle.y);
      ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2);
      ctx.fill();
    },
  },
});
```

### Interacción Avanzada

```javascript
const interactive = new FluxJS({
  mouse: {
    interact: true,
    distance: 200,
    attraction: 0.1,
    magnetism: true,
    trail: true,
    trailLength: 20,
    onClick: (event, flux) => {
      // Crear explosión en el punto de click
      flux.explode(event.clientX, event.clientY, 10, 200);
    },
  },
  events: {
    onParticleClick: (particle, flux) => {
      // Cambiar color de partícula clickeada
      particle.size *= 2;
      setTimeout(() => (particle.size /= 2), 1000);
    },
  },
});
```

## 🛠️ API Completa

### Métodos de Control

```javascript
flux.start(); // Iniciar animación
flux.stop(); // Detener animación
flux.destroy(); // Limpiar completamente

// Configuración dinámica
flux.updateConfig({ count: 200 });
flux.setColor("#ff0000");
flux.setAnimation("spiral");
flux.setPhysics({ gravity: 0.1 });
```

### Métodos de Interacción

```javascript
// Añadir partícula personalizada
flux.addParticle(x, y, {
  size: 10,
  color: "#ff0000",
  vx: 2,
  vy: -1,
});

// Efectos dinámicos
flux.explode(x, y, force, radius); // Explosión
flux.attract(x, y, force, radius); // Atracción
flux.removeParticle(index); // Eliminar partícula

// Utilidades
const particle = flux.getParticleAt(x, y);
```

### Eventos Disponibles

```javascript
const flux = new FluxJS({
  events: {
    onInit: (flux) => console.log("Inicializado"),
    onStart: (flux) => console.log("Iniciado"),
    onStop: (flux) => console.log("Detenido"),
    onResize: (flux) => console.log("Redimensionado"),
    onParticleClick: (particle, flux) => console.log("Partícula clickeada"),
    onParticleHover: (particle, flux) => console.log("Mouse sobre partícula"),
  },
});
```

## 🎮 Presets Incluidos

- **stars**: Campo de estrellas con efecto twinkle
- **network**: Red neural animada
- **bubbles**: Burbujas con física realista
- **spiral**: Partículas en movimiento espiral
- **galaxy**: Simulación de galaxia en órbita
- **matrix**: Efecto Matrix con caída
- **hearts**: Corazones flotantes románticos

## 📱 Responsive por Defecto

```javascript
const flux = new FluxJS({
  responsive: {
    enabled: true,
    breakpoints: {
      mobile: { width: 768, particles: 0.3 },
      tablet: { width: 1024, particles: 0.6 },
      desktop: { width: 1920, particles: 1.0 },
    },
  },
});
```

## 💡 Tips de Rendimiento

1. **Usa menos partículas en móviles**: El sistema responsive se encarga automáticamente
2. **Limita las conexiones**: Usa `maxConnections` para optimizar
3. **Controla el FPS**: Usa `performance.maxFPS` para dispositivos lentos
4. **Pausa en blur**: `performance.pauseOnBlur` ahorra batería

## 🔧 Configuración Completa

Para ver todas las opciones disponibles, consulta [CONFIGURATION.md](CONFIGURATION.md) que incluye más de 100 opciones organizadas por categorías.

## 📖 Documentación Adicional

- [Guía de Configuración Completa](CONFIGURATION.md)
- [Demo Interactiva](demo.html)
- Ejemplos avanzados en `/examples`

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork del repositorio
2. Crea una rama para tu feature
3. Commit con mensajes descriptivos
4. Push y crea un Pull Request

## 📄 Licencia

MIT License - ve [LICENSE](LICENSE) para más detalles.

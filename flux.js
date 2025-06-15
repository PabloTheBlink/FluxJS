/**
 * FluxJS - Librería de partículas animadas ultra configurable
 * Versión: 1.0.0
 * Autor: Pablo Martínez
 */

(function (global) {
  "use strict";

  class FluxJS {
    constructor(options = {}) {
      // Configuración por defecto extendida
      this.config = {
        // Configuración básica
        container: options.container || document.body,
        count: options.count || 50,

        // Sistema de colores avanzado
        color: {
          type: options.color?.type || "single", // 'single', 'gradient', 'rainbow', 'random'
          value: options.color?.value || options.color || "#ffffff",
          gradient: options.color?.gradient || ["#ffffff", "#cccccc"],
          rainbowSpeed: options.color?.rainbowSpeed || 0.01,
          randomPalette: options.color?.randomPalette || ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FECA57"],
        },

        // Configuración de tamaño con efectos
        size: {
          min: options.size?.min || 1,
          max: options.size?.max || 3,
          pulse: options.size?.pulse || false,
          pulseSpeed: options.size?.pulseSpeed || 0.02,
          pulseIntensity: options.size?.pulseIntensity || 0.5,
          distribution: options.size?.distribution || "uniform", // 'uniform', 'gaussian', 'exponential'
        },

        // Configuración de velocidad avanzada
        speed: {
          min: options.speed?.min || 0.1,
          max: options.speed?.max || 0.5,
          acceleration: options.speed?.acceleration || 0,
          turbulence: options.speed?.turbulence || 0,
          turbulenceFrequency: options.speed?.turbulenceFrequency || 0.01,
        },

        // Sistema de opacidad mejorado
        opacity: {
          min: options.opacity?.min || 0.3,
          max: options.opacity?.max || 0.8,
          fadeIn: options.opacity?.fadeIn || false,
          fadeInDuration: options.opacity?.fadeInDuration || 2000,
          flicker: options.opacity?.flicker || false,
          flickerSpeed: options.opacity?.flickerSpeed || 0.05,
        },

        // Sistema de conexiones mejorado
        connections: {
          enabled: options.connections?.enabled !== false,
          distance: options.connections?.distance || 100,
          color: options.connections?.color || options.color?.value || options.color || "#ffffff",
          opacity: options.connections?.opacity || 0.3,
          width: options.connections?.width || 0.5,
          maxConnections: options.connections?.maxConnections || null,
          animated: options.connections?.animated || false,
          animationSpeed: options.connections?.animationSpeed || 0.02,
          curve: options.connections?.curve || false, // Para conexiones curvas
        },

        // Configuración de interacción con mouse mejorada
        mouse: {
          interact: options.mouse?.interact !== false,
          distance: options.mouse?.distance || 150,
          attraction: options.mouse?.attraction || 0.05,
          repulsion: options.mouse?.repulsion || false,
          repulsionForce: options.mouse?.repulsionForce || 0.1,
          trail: options.mouse?.trail || false,
          trailLength: options.mouse?.trailLength || 10,
          onClick: options.mouse?.onClick || null, // Función callback
          magnetism: options.mouse?.magnetism || false,
          magnetismStrength: options.mouse?.magnetismStrength || 0.02,
        },

        // Configuración de gravedad y física
        physics: {
          gravity: options.physics?.gravity || 0,
          gravityDirection: options.physics?.gravityDirection || "down", // 'up', 'down', 'left', 'right'
          friction: options.physics?.friction || 0,
          bounce: options.physics?.bounce || 0.8,
          wind: options.physics?.wind || 0,
          windDirection: options.physics?.windDirection || 0, // En radianes
        },

        // Efectos especiales
        effects: {
          glow: options.effects?.glow || false,
          glowColor: options.effects?.glowColor || "#ffffff",
          glowSize: options.effects?.glowSize || 10,
          shadow: options.effects?.shadow || false,
          shadowColor: options.effects?.shadowColor || "rgba(0,0,0,0.3)",
          shadowBlur: options.effects?.shadowBlur || 5,
          shadowOffset: options.effects?.shadowOffset || { x: 2, y: 2 },
          twinkle: options.effects?.twinkle || false,
          twinkleSpeed: options.effects?.twinkleSpeed || 0.03,
        },

        // Configuración de formas
        shape: {
          type: options.shape?.type || "circle", // 'circle', 'square', 'triangle', 'star', 'heart', 'custom'
          sides: options.shape?.sides || 6, // Para polígonos regulares
          customPath: options.shape?.customPath || null, // Función para formas personalizadas
          rotation: options.shape?.rotation || false,
          rotationSpeed: options.shape?.rotationSpeed || 0.02,
        },

        // Configuración responsive mejorada
        responsive: {
          enabled: options.responsive?.enabled !== false,
          breakpoints: options.responsive?.breakpoints || {
            mobile: { width: 768, particles: 0.3 },
            tablet: { width: 1024, particles: 0.6 },
            desktop: { width: 1920, particles: 1.0 },
          },
          scaleWithContainer: options.responsive?.scaleWithContainer || true,
        },

        // Sistema de animaciones expandido
        animation: {
          type: options.animation?.type || options.animation || "float",
          speed: options.animation?.speed || 1,
          direction: options.animation?.direction || "random", // 'random', 'up', 'down', 'left', 'right'
          wave: {
            amplitude: options.animation?.wave?.amplitude || 50,
            frequency: options.animation?.wave?.frequency || 0.01,
            speed: options.animation?.wave?.speed || 0.02,
          },
          orbit: {
            centerX: options.animation?.orbit?.centerX || null, // null = centro del canvas
            centerY: options.animation?.orbit?.centerY || null,
            radius: options.animation?.orbit?.radius || 100,
            speed: options.animation?.orbit?.speed || 0.01,
          },
        },

        // Configuración de fondo y canvas
        canvas: {
          background: options.canvas?.background || options.background || "transparent",
          blur: options.canvas?.blur || false,
          blurAmount: options.canvas?.blurAmount || 1,
          zIndex: options.canvas?.zIndex || 1,
          opacity: options.canvas?.opacity || 1,
        },

        // Configuración de rendimiento
        performance: {
          maxFPS: options.performance?.maxFPS || 60,
          enableWebGL: options.performance?.enableWebGL || false,
          optimizeConnections: options.performance?.optimizeConnections || true,
          pauseOnBlur: options.performance?.pauseOnBlur || true,
          adaptiveQuality: options.performance?.adaptiveQuality || false,
        },

        // Eventos y callbacks
        events: {
          onInit: options.events?.onInit || null,
          onStart: options.events?.onStart || null,
          onStop: options.events?.onStop || null,
          onResize: options.events?.onResize || null,
          onParticleClick: options.events?.onParticleClick || null,
          onParticleHover: options.events?.onParticleHover || null,
        },
      };

      this.particles = [];
      this.mouse = { x: 0, y: 0, trail: [] };
      this.canvas = null;
      this.ctx = null;
      this.animationId = null;
      this.isRunning = false;
      this.lastFrameTime = 0;
      this.deltaTime = 0;
      this.rainbow = 0;
      this.turbulenceTime = 0;
      this.connectionAnimationOffset = 0;

      // Inicializar sistema de colores
      this.initColorSystem();

      // Llamar evento onInit si está definido
      if (this.config.events.onInit) {
        this.config.events.onInit(this);
      }

      this.init();
    }

    initColorSystem() {
      if (this.config.color.type === "gradient") {
        this.createGradient();
      }
    }

    createGradient() {
      // Se creará cuando tengamos el contexto del canvas
      this.gradientCache = null;
    }

    getParticleColor(particle) {
      switch (this.config.color.type) {
        case "gradient":
          return this.getGradientColor(particle);
        case "rainbow":
          return this.getRainbowColor(particle);
        case "random":
          return this.getRandomPaletteColor(particle);
        case "single":
        default:
          return this.config.color.value;
      }
    }

    getGradientColor(particle) {
      if (!this.gradientCache && this.ctx) {
        this.gradientCache = this.ctx.createLinearGradient(0, 0, this.canvas.width, this.canvas.height);
        this.config.color.gradient.forEach((color, index) => {
          this.gradientCache.addColorStop(index / (this.config.color.gradient.length - 1), color);
        });
      }
      return this.gradientCache || this.config.color.value;
    }

    getRainbowColor(particle) {
      const hue = (this.rainbow + particle.x * 0.1 + particle.y * 0.1) % 360;
      return `hsl(${hue}, 70%, 60%)`;
    }

    getRandomPaletteColor(particle) {
      if (!particle.colorIndex) {
        particle.colorIndex = Math.floor(Math.random() * this.config.color.randomPalette.length);
      }
      return this.config.color.randomPalette[particle.colorIndex];
    }

    init() {
      this.createCanvas();
      this.setupEventListeners();
      this.createParticles();
      this.start();
    }

    createCanvas() {
      // Crear canvas
      this.canvas = document.createElement("canvas");
      this.canvas.style.pointerEvents = this.config.mouse.interact ? "auto" : "none";
      this.canvas.style.background = this.config.canvas.background;
      this.canvas.style.opacity = this.config.canvas.opacity;

      // Obtener contexto
      this.ctx = this.canvas.getContext("2d");

      // Añadir al contenedor
      if (this.config.container === document.body) {
        // Para el body, usar posición fija
        this.canvas.style.position = "fixed";
        this.canvas.style.top = "0";
        this.canvas.style.left = "0";
        this.canvas.style.width = "100%";
        this.canvas.style.height = "100%";
        this.canvas.style.zIndex = this.config.canvas.zIndex;
        document.body.appendChild(this.canvas);
        document.body.style.margin = "0";
        document.body.style.padding = "0";
      } else {
        // Para contenedores específicos, usar posición absoluta
        this.config.container.style.position = "relative";
        this.canvas.style.position = "absolute";
        this.canvas.style.top = "0";
        this.canvas.style.left = "0";
        this.canvas.style.width = "100%";
        this.canvas.style.height = "100%";
        this.canvas.style.zIndex = this.config.canvas.zIndex;
        this.config.container.appendChild(this.canvas);
      }

      this.resize();

      // Aplicar filtros de canvas si están habilitados
      if (this.config.canvas.blur) {
        this.canvas.style.filter = `blur(${this.config.canvas.blurAmount}px)`;
      }

      // Recrear gradient si es necesario
      if (this.config.color.type === "gradient") {
        this.gradientCache = null;
        this.createGradient();
      }
    }

    setupEventListeners() {
      // Redimensionar canvas
      const resizeHandler = () => {
        this.resize();
        if (this.config.events.onResize) {
          this.config.events.onResize(this);
        }
      };
      window.addEventListener("resize", resizeHandler);

      // Seguimiento del mouse
      if (this.config.mouse.interact) {
        const mouseHandler = (e) => {
          if (this.config.container === document.body) {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
          } else {
            const rect = this.config.container.getBoundingClientRect();
            this.mouse.x = e.clientX - rect.left;
            this.mouse.y = e.clientY - rect.top;
          }

          // Manejar trail del mouse
          if (this.config.mouse.trail) {
            this.mouse.trail.push({ x: this.mouse.x, y: this.mouse.y, time: Date.now() });
            if (this.mouse.trail.length > this.config.mouse.trailLength) {
              this.mouse.trail.shift();
            }
          }
        };

        const clickHandler = (e) => {
          if (this.config.mouse.onClick) {
            this.config.mouse.onClick(e, this);
          }

          // Verificar click en partículas
          if (this.config.events.onParticleClick) {
            this.particles.forEach((particle) => {
              const dx = this.mouse.x - particle.x;
              const dy = this.mouse.y - particle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              if (distance <= particle.size + 5) {
                this.config.events.onParticleClick(particle, this);
              }
            });
          }
        };

        document.addEventListener("mousemove", mouseHandler);
        document.addEventListener("click", clickHandler);

        // También escuchar en el contenedor específico para mayor precisión
        if (this.config.container !== document.body) {
          this.config.container.addEventListener("mousemove", mouseHandler);
          this.config.container.addEventListener("click", clickHandler);
        }
      }

      // Pausar/reanudar cuando la ventana pierde/gana foco
      if (this.config.performance.pauseOnBlur) {
        window.addEventListener("blur", () => this.stop());
        window.addEventListener("focus", () => this.start());
      }

      // Responsive - ajustar partículas según el tamaño de pantalla
      if (this.config.responsive.enabled) {
        this.adjustParticleCount();
      }
    }

    resize() {
      if (this.config.container === document.body) {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
      } else {
        const rect = this.config.container.getBoundingClientRect();
        this.canvas.width = this.config.container.offsetWidth || rect.width;
        this.canvas.height = this.config.container.offsetHeight || rect.height;
      }

      // Recrear gradient después del resize
      if (this.config.color.type === "gradient") {
        this.gradientCache = null;
      }
    }

    adjustParticleCount() {
      const width = this.canvas.width;
      let multiplier = 1;

      // Determinar multiplicador basado en breakpoints
      const breakpoints = this.config.responsive.breakpoints;
      if (width <= breakpoints.mobile.width) {
        multiplier = breakpoints.mobile.particles;
      } else if (width <= breakpoints.tablet.width) {
        multiplier = breakpoints.tablet.particles;
      } else {
        multiplier = breakpoints.desktop.particles;
      }

      const adjustedCount = Math.max(5, Math.floor(this.config.count * multiplier));

      if (adjustedCount !== this.particles.length) {
        this.particles = [];
        this.createParticlesWithCount(adjustedCount);
      }
    }

    createParticles() {
      this.createParticlesWithCount(this.config.count);
    }

    createParticlesWithCount(count) {
      this.particles = [];
      for (let i = 0; i < count; i++) {
        this.particles.push(this.createParticle());
      }
    }

    createParticle() {
      const particle = {
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: this.getRandomSpeed(),
        vy: this.getRandomSpeed(),
        size: this.getRandomSize(),
        opacity: this.getRandomOpacity(),
        originalOpacity: 0,
        originalSize: 0,
        angle: Math.random() * Math.PI * 2,
        angleSpeed: (Math.random() - 0.5) * 0.02,
        pulsePhase: Math.random() * Math.PI * 2,
        flickerPhase: Math.random() * Math.PI * 2,
        twinklePhase: Math.random() * Math.PI * 2,
        life: this.config.opacity.fadeIn ? 0 : 1,
        connections: [],
        rotation: 0,
      };

      // Guardar valores originales
      particle.originalOpacity = particle.opacity;
      particle.originalSize = particle.size;

      // Ajustar velocidades según el tipo de animación
      this.applyAnimationSettings(particle);

      return particle;
    }

    getRandomSpeed() {
      return (Math.random() - 0.5) * (this.config.speed.max - this.config.speed.min) + (Math.random() > 0.5 ? this.config.speed.max : this.config.speed.min);
    }

    getRandomSize() {
      switch (this.config.size.distribution) {
        case "gaussian":
          return this.gaussianRandom(this.config.size.min, this.config.size.max);
        case "exponential":
          return this.config.size.min + Math.pow(Math.random(), 2) * (this.config.size.max - this.config.size.min);
        case "uniform":
        default:
          return Math.random() * (this.config.size.max - this.config.size.min) + this.config.size.min;
      }
    }

    getRandomOpacity() {
      return Math.random() * (this.config.opacity.max - this.config.opacity.min) + this.config.opacity.min;
    }

    gaussianRandom(min, max) {
      let u = 0,
        v = 0;
      while (u === 0) u = Math.random();
      while (v === 0) v = Math.random();

      const gaussian = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
      const result = (gaussian + 3) / 6; // Normalizar a 0-1 aproximadamente
      return Math.max(min, Math.min(max, min + result * (max - min)));
    }

    applyAnimationSettings(particle) {
      const animType = this.config.animation.type;

      if (animType === "bounce") {
        particle.vx *= 2;
        particle.vy *= 2;
      } else if (animType === "spiral") {
        particle.vx *= 0.5;
        particle.vy *= 0.5;
        particle.angleSpeed = (Math.random() - 0.5) * 0.05;
      } else if (animType === "wave") {
        particle.vx = Math.abs(particle.vx);
        particle.vy *= 0.3;
        particle.time = Math.random() * Math.PI * 2;
      } else if (animType === "orbit") {
        particle.orbitRadius = Math.random() * this.config.animation.orbit.radius;
        particle.orbitAngle = Math.random() * Math.PI * 2;
      }

      // Aplicar dirección de animación
      this.applyAnimationDirection(particle);
    }

    applyAnimationDirection(particle) {
      const direction = this.config.animation.direction;
      const speed = this.config.animation.speed;

      switch (direction) {
        case "up":
          particle.vy = -Math.abs(particle.vy) * speed;
          break;
        case "down":
          particle.vy = Math.abs(particle.vy) * speed;
          break;
        case "left":
          particle.vx = -Math.abs(particle.vx) * speed;
          break;
        case "right":
          particle.vx = Math.abs(particle.vx) * speed;
          break;
        case "random":
        default:
          particle.vx *= speed;
          particle.vy *= speed;
          break;
      }
    }

    update(currentTime) {
      this.deltaTime = currentTime - this.lastFrameTime;
      this.lastFrameTime = currentTime;

      // Actualizar variables globales
      this.rainbow += this.config.color.rainbowSpeed;
      this.turbulenceTime += this.config.speed.turbulenceFrequency;
      this.connectionAnimationOffset += this.config.connections.animationSpeed;

      this.updateParticles();
    }

    updateParticles() {
      this.particles.forEach((particle) => {
        // Guardar opacidad original si no está guardada
        if (particle.originalOpacity === 0) {
          particle.originalOpacity = particle.opacity;
        }

        // Actualizar vida de la partícula (para fadeIn)
        if (this.config.opacity.fadeIn && particle.life < 1) {
          particle.life += 1 / (this.config.opacity.fadeInDuration / 16.67); // Asumiendo 60 FPS
          particle.life = Math.min(1, particle.life);
        }

        // Actualizar efectos de tamaño
        this.updateParticleSize(particle);

        // Actualizar efectos de opacidad
        this.updateParticleOpacity(particle);

        // Actualizar posición según el tipo de animación
        this.updateParticlePosition(particle);

        // Aplicar física
        this.applyPhysics(particle);

        // Interacción con el mouse
        if (this.config.mouse.interact) {
          this.updateMouseInteraction(particle);
        }

        // Mantener partículas dentro del canvas
        this.wrapParticle(particle);

        // Actualizar rotación si está habilitada
        if (this.config.shape.rotation) {
          particle.rotation += this.config.shape.rotationSpeed;
        }
      });

      // Limpiar trail del mouse
      if (this.config.mouse.trail) {
        const now = Date.now();
        this.mouse.trail = this.mouse.trail.filter((point) => now - point.time < 1000);
      }
    }

    updateParticleSize(particle) {
      let size = particle.originalSize;

      if (this.config.size.pulse) {
        const pulseMultiplier = 1 + Math.sin(particle.pulsePhase) * this.config.size.pulseIntensity;
        size *= pulseMultiplier;
        particle.pulsePhase += this.config.size.pulseSpeed;
      }

      particle.size = size;
    }

    updateParticleOpacity(particle) {
      let opacity = particle.originalOpacity;

      // Aplicar fadeIn
      if (this.config.opacity.fadeIn) {
        opacity *= particle.life;
      }

      // Aplicar flicker
      if (this.config.opacity.flicker) {
        const flickerMultiplier = 0.7 + 0.3 * Math.sin(particle.flickerPhase);
        opacity *= flickerMultiplier;
        particle.flickerPhase += this.config.opacity.flickerSpeed;
      }

      // Aplicar twinkle
      if (this.config.effects.twinkle) {
        const twinkleMultiplier = 0.3 + 0.7 * Math.sin(particle.twinklePhase);
        opacity *= twinkleMultiplier;
        particle.twinklePhase += this.config.effects.twinkleSpeed;
      }

      particle.opacity = Math.max(0, Math.min(1, opacity));
    }

    updateParticlePosition(particle) {
      const animType = this.config.animation.type;

      switch (animType) {
        case "bounce":
          this.updateBounceParticle(particle);
          break;
        case "spiral":
          this.updateSpiralParticle(particle);
          break;
        case "wave":
          this.updateWaveParticle(particle);
          break;
        case "orbit":
          this.updateOrbitParticle(particle);
          break;
        default: // 'float'
          this.updateFloatParticle(particle);
          break;
      }

      // Aplicar turbulencia si está habilitada
      if (this.config.speed.turbulence > 0) {
        const turbulenceX = Math.sin(this.turbulenceTime + particle.x * 0.01) * this.config.speed.turbulence;
        const turbulenceY = Math.cos(this.turbulenceTime + particle.y * 0.01) * this.config.speed.turbulence;
        particle.x += turbulenceX;
        particle.y += turbulenceY;
      }
    }

    updateFloatParticle(particle) {
      particle.x += particle.vx;
      particle.y += particle.vy;
    }

    updateBounceParticle(particle) {
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Rebotar en los bordes
      if (particle.x <= particle.size) {
        particle.x = particle.size;
        particle.vx *= -this.config.physics.bounce;
      } else if (particle.x >= this.canvas.width - particle.size) {
        particle.x = this.canvas.width - particle.size;
        particle.vx *= -this.config.physics.bounce;
      }

      if (particle.y <= particle.size) {
        particle.y = particle.size;
        particle.vy *= -this.config.physics.bounce;
      } else if (particle.y >= this.canvas.height - particle.size) {
        particle.y = this.canvas.height - particle.size;
        particle.vy *= -this.config.physics.bounce;
      }
    }

    updateSpiralParticle(particle) {
      particle.angle += particle.angleSpeed;

      particle.x += particle.vx * 0.3 + Math.cos(particle.angle) * 2;
      particle.y += particle.vy * 0.3 + Math.sin(particle.angle) * 2;

      const centerX = this.canvas.width / 2;
      const centerY = this.canvas.height / 2;
      const distanceFromCenter = Math.sqrt(Math.pow(particle.x - centerX, 2) + Math.pow(particle.y - centerY, 2));

      if (distanceFromCenter > Math.min(this.canvas.width, this.canvas.height) / 3) {
        const attractionForce = 0.005;
        particle.vx += (centerX - particle.x) * attractionForce;
        particle.vy += (centerY - particle.y) * attractionForce;
      }
    }

    updateWaveParticle(particle) {
      if (!particle.time) particle.time = 0;
      particle.time += this.config.animation.wave.speed;

      particle.x += particle.vx;
      particle.y += particle.vy + Math.sin(particle.time + particle.x * this.config.animation.wave.frequency) * this.config.animation.wave.amplitude * 0.1;

      const baseOpacity = particle.originalOpacity || particle.opacity;
      particle.opacity = Math.max(0, baseOpacity + Math.sin(particle.time) * 0.2);
    }

    updateOrbitParticle(particle) {
      const centerX = this.config.animation.orbit.centerX || this.canvas.width / 2;
      const centerY = this.config.animation.orbit.centerY || this.canvas.height / 2;

      particle.orbitAngle += this.config.animation.orbit.speed;

      particle.x = centerX + Math.cos(particle.orbitAngle) * particle.orbitRadius;
      particle.y = centerY + Math.sin(particle.orbitAngle) * particle.orbitRadius;
    }

    applyPhysics(particle) {
      // Aplicar gravedad
      if (this.config.physics.gravity !== 0) {
        switch (this.config.physics.gravityDirection) {
          case "up":
            particle.vy -= this.config.physics.gravity;
            break;
          case "down":
            particle.vy += this.config.physics.gravity;
            break;
          case "left":
            particle.vx -= this.config.physics.gravity;
            break;
          case "right":
            particle.vx += this.config.physics.gravity;
            break;
        }
      }

      // Aplicar viento
      if (this.config.physics.wind !== 0) {
        particle.vx += Math.cos(this.config.physics.windDirection) * this.config.physics.wind;
        particle.vy += Math.sin(this.config.physics.windDirection) * this.config.physics.wind;
      }

      // Aplicar fricción
      if (this.config.physics.friction !== 0) {
        particle.vx *= 1 - this.config.physics.friction;
        particle.vy *= 1 - this.config.physics.friction;
      }

      // Aplicar aceleración
      if (this.config.speed.acceleration !== 0) {
        const currentSpeed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
        const newSpeed = currentSpeed + this.config.speed.acceleration;
        const ratio = newSpeed / currentSpeed;
        particle.vx *= ratio;
        particle.vy *= ratio;
      }
    }

    updateMouseInteraction(particle) {
      const dx = this.mouse.x - particle.x;
      const dy = this.mouse.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.config.mouse.distance) {
        const force = (this.config.mouse.distance - distance) / this.config.mouse.distance;

        // Atracción o repulsión
        let attraction = this.config.mouse.attraction;
        if (this.config.mouse.repulsion) {
          attraction = -this.config.mouse.repulsionForce;
        }

        attraction *= force;

        particle.vx += dx * attraction;
        particle.vy += dy * attraction;

        // Aumentar opacidad cerca del mouse
        particle.opacity = Math.min(1, particle.originalOpacity + force * 0.3);

        // Magnetismo
        if (this.config.mouse.magnetism) {
          const magnetismForce = this.config.mouse.magnetismStrength * force;
          particle.x += dx * magnetismForce;
          particle.y += dy * magnetismForce;
        }

        // Trigger hover event
        if (this.config.events.onParticleHover) {
          this.config.events.onParticleHover(particle, this);
        }
      } else {
        // Restaurar opacidad original
        particle.opacity = particle.originalOpacity;

        // Aplicar fricción para volver a velocidad normal
        particle.vx *= 0.98;
        particle.vy *= 0.98;
      }
    }

    wrapParticle(particle) {
      if (this.config.animation.type === "bounce" || this.config.animation.type === "orbit") {
        return;
      }

      if (this.config.animation.type === "wave") {
        if (particle.x > this.canvas.width + 10) {
          particle.x = -10;
        }
        if (particle.y < -10) particle.y = this.canvas.height + 10;
        if (particle.y > this.canvas.height + 10) particle.y = -10;
      } else {
        if (particle.x < -10) particle.x = this.canvas.width + 10;
        if (particle.x > this.canvas.width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = this.canvas.height + 10;
        if (particle.y > this.canvas.height + 10) particle.y = -10;
      }
    }

    draw() {
      // Limpiar canvas
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // Dibujar trail del mouse si está habilitado
      if (this.config.mouse.trail && this.mouse.trail.length > 1) {
        this.drawMouseTrail();
      }

      // Dibujar conexiones primero (para que estén detrás de las partículas)
      this.drawConnections();

      // Dibujar partículas
      this.drawParticles();
    }

    drawMouseTrail() {
      if (this.mouse.trail.length < 2) return;

      this.ctx.save();
      this.ctx.strokeStyle = this.config.color.value || "#ffffff";
      this.ctx.lineWidth = 2;
      this.ctx.globalAlpha = 0.5;

      this.ctx.beginPath();
      this.ctx.moveTo(this.mouse.trail[0].x, this.mouse.trail[0].y);

      for (let i = 1; i < this.mouse.trail.length; i++) {
        this.ctx.lineTo(this.mouse.trail[i].x, this.mouse.trail[i].y);
      }

      this.ctx.stroke();
      this.ctx.restore();
    }

    drawParticles() {
      this.particles.forEach((particle) => {
        this.ctx.save();

        // Aplicar efectos
        this.applyParticleEffects(particle);

        // Configurar color y opacidad
        this.ctx.globalAlpha = particle.opacity;
        this.ctx.fillStyle = this.getParticleColor(particle);

        // Dibujar según la forma
        this.drawParticleShape(particle);

        this.ctx.restore();
      });
    }

    applyParticleEffects(particle) {
      // Aplicar sombra
      if (this.config.effects.shadow) {
        this.ctx.shadowColor = this.config.effects.shadowColor;
        this.ctx.shadowBlur = this.config.effects.shadowBlur;
        this.ctx.shadowOffsetX = this.config.effects.shadowOffset.x;
        this.ctx.shadowOffsetY = this.config.effects.shadowOffset.y;
      }

      // Aplicar glow
      if (this.config.effects.glow) {
        this.ctx.shadowColor = this.config.effects.glowColor;
        this.ctx.shadowBlur = this.config.effects.glowSize;
        this.ctx.shadowOffsetX = 0;
        this.ctx.shadowOffsetY = 0;
      }
    }

    drawParticleShape(particle) {
      const shape = this.config.shape.type;

      // Aplicar rotación si está habilitada
      if (this.config.shape.rotation) {
        this.ctx.translate(particle.x, particle.y);
        this.ctx.rotate(particle.rotation);
        this.ctx.translate(-particle.x, -particle.y);
      }

      switch (shape) {
        case "square":
          this.drawSquare(particle);
          break;
        case "triangle":
          this.drawTriangle(particle);
          break;
        case "star":
          this.drawStar(particle);
          break;
        case "heart":
          this.drawHeart(particle);
          break;
        case "polygon":
          this.drawPolygon(particle);
          break;
        case "custom":
          if (this.config.shape.customPath) {
            this.config.shape.customPath(this.ctx, particle);
          } else {
            this.drawCircle(particle);
          }
          break;
        case "circle":
        default:
          this.drawCircle(particle);
          break;
      }
    }

    drawCircle(particle) {
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fill();
    }

    drawSquare(particle) {
      const size = particle.size;
      this.ctx.fillRect(particle.x - size, particle.y - size, size * 2, size * 2);
    }

    drawTriangle(particle) {
      const size = particle.size;
      this.ctx.beginPath();
      this.ctx.moveTo(particle.x, particle.y - size);
      this.ctx.lineTo(particle.x - size, particle.y + size);
      this.ctx.lineTo(particle.x + size, particle.y + size);
      this.ctx.closePath();
      this.ctx.fill();
    }

    drawStar(particle) {
      const size = particle.size;
      const spikes = 5;
      const outerRadius = size;
      const innerRadius = size * 0.5;

      this.ctx.beginPath();
      for (let i = 0; i < spikes * 2; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const angle = (i * Math.PI) / spikes;
        const x = particle.x + Math.cos(angle) * radius;
        const y = particle.y + Math.sin(angle) * radius;
        if (i === 0) {
          this.ctx.moveTo(x, y);
        } else {
          this.ctx.lineTo(x, y);
        }
      }
      this.ctx.closePath();
      this.ctx.fill();
    }

    drawHeart(particle) {
      const size = particle.size;
      const x = particle.x;
      const y = particle.y;

      this.ctx.beginPath();
      this.ctx.moveTo(x, y + size / 2);
      this.ctx.bezierCurveTo(x, y, x - size / 2, y, x - size / 2, y + size / 4);
      this.ctx.bezierCurveTo(x - size / 2, y + size / 2, x, y + size / 2, x, y + size);
      this.ctx.bezierCurveTo(x, y + size / 2, x + size / 2, y + size / 2, x + size / 2, y + size / 4);
      this.ctx.bezierCurveTo(x + size / 2, y, x, y, x, y + size / 2);
      this.ctx.fill();
    }

    drawPolygon(particle) {
      const size = particle.size;
      const sides = this.config.shape.sides;

      this.ctx.beginPath();
      for (let i = 0; i < sides; i++) {
        const angle = (i * 2 * Math.PI) / sides;
        const x = particle.x + Math.cos(angle) * size;
        const y = particle.y + Math.sin(angle) * size;
        if (i === 0) {
          this.ctx.moveTo(x, y);
        } else {
          this.ctx.lineTo(x, y);
        }
      }
      this.ctx.closePath();
      this.ctx.fill();
    }

    drawConnections() {
      if (!this.config.connections.enabled) return;

      const maxConnections = this.config.connections.maxConnections;

      for (let i = 0; i < this.particles.length; i++) {
        let connectionCount = 0;

        for (let j = i + 1; j < this.particles.length; j++) {
          if (maxConnections && connectionCount >= maxConnections) break;

          const dx = this.particles[i].x - this.particles[j].x;
          const dy = this.particles[i].y - this.particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < this.config.connections.distance) {
            const opacity = (this.config.connections.distance - distance) / this.config.connections.distance;

            this.ctx.save();
            this.ctx.globalAlpha = opacity * this.config.connections.opacity;
            this.ctx.strokeStyle = this.config.connections.color;
            this.ctx.lineWidth = this.config.connections.width;

            // Animación de conexiones
            if (this.config.connections.animated) {
              this.ctx.setLineDash([5, 5]);
              this.ctx.lineDashOffset = this.connectionAnimationOffset;
            }

            this.ctx.beginPath();

            if (this.config.connections.curve) {
              // Conexiones curvas
              const midX = (this.particles[i].x + this.particles[j].x) / 2;
              const midY = (this.particles[i].y + this.particles[j].y) / 2;
              const controlX = midX + (Math.random() - 0.5) * 50;
              const controlY = midY + (Math.random() - 0.5) * 50;

              this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
              this.ctx.quadraticCurveTo(controlX, controlY, this.particles[j].x, this.particles[j].y);
            } else {
              // Conexiones rectas
              this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
              this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
            }

            this.ctx.stroke();
            this.ctx.restore();

            connectionCount++;
          }
        }
      }
    }

    animate(currentTime = 0) {
      if (!this.isRunning) return;

      // Control de FPS
      const targetFrameTime = 1000 / this.config.performance.maxFPS;
      if (currentTime - this.lastFrameTime < targetFrameTime) {
        this.animationId = requestAnimationFrame((time) => this.animate(time));
        return;
      }

      // Actualizar y dibujar
      this.update(currentTime);
      this.draw();

      // Continuar animación
      this.animationId = requestAnimationFrame((time) => this.animate(time));
    }

    // Métodos públicos mejorados
    start() {
      if (!this.isRunning) {
        this.isRunning = true;
        this.lastFrameTime = 0;

        if (this.config.events.onStart) {
          this.config.events.onStart(this);
        }

        this.animate();
      }
    }

    stop() {
      this.isRunning = false;
      if (this.animationId) {
        cancelAnimationFrame(this.animationId);
        this.animationId = null;
      }

      if (this.config.events.onStop) {
        this.config.events.onStop(this);
      }
    }

    destroy() {
      this.stop();
      if (this.canvas && this.canvas.parentNode) {
        this.canvas.parentNode.removeChild(this.canvas);
      }

      // Limpiar referencias
      this.canvas = null;
      this.ctx = null;
      this.particles = [];
      this.mouse = { x: 0, y: 0, trail: [] };
    }

    // Métodos de configuración dinámica mejorados
    updateConfig(newConfig) {
      // Merge profundo de configuración
      this.deepMerge(this.config, newConfig);

      // Recrear partículas si es necesario
      if (newConfig.count || newConfig.size || newConfig.speed || newConfig.opacity) {
        this.createParticles();
      }

      // Recrear canvas si es necesario
      if (newConfig.canvas || newConfig.effects) {
        this.createCanvas();
      }
    }

    deepMerge(target, source) {
      for (const key in source) {
        if (source[key] && typeof source[key] === "object" && !Array.isArray(source[key])) {
          if (!target[key]) target[key] = {};
          this.deepMerge(target[key], source[key]);
        } else {
          target[key] = source[key];
        }
      }
    }

    // Métodos de control específicos
    setColor(color) {
      if (typeof color === "string") {
        this.config.color.type = "single";
        this.config.color.value = color;
      } else {
        Object.assign(this.config.color, color);
      }
      this.gradientCache = null;
    }

    setCount(count) {
      this.config.count = count;
      this.createParticles();
    }

    setAnimation(animationType, options = {}) {
      this.config.animation.type = animationType;
      Object.assign(this.config.animation, options);

      // Reaplicar configuraciones de animación a partículas existentes
      this.particles.forEach((particle) => {
        this.applyAnimationSettings(particle);
      });
    }

    setPhysics(physicsConfig) {
      Object.assign(this.config.physics, physicsConfig);
    }

    setEffects(effectsConfig) {
      Object.assign(this.config.effects, effectsConfig);
    }

    addParticle(x, y, customConfig = {}) {
      const particle = this.createParticle();
      if (x !== undefined) particle.x = x;
      if (y !== undefined) particle.y = y;

      // Aplicar configuración personalizada a la partícula
      Object.assign(particle, customConfig);

      this.particles.push(particle);
      return particle;
    }

    removeParticle(index) {
      if (index >= 0 && index < this.particles.length) {
        this.particles.splice(index, 1);
      }
    }

    // Métodos de utilidad
    getParticleAt(x, y, tolerance = 10) {
      return this.particles.find((particle) => {
        const dx = x - particle.x;
        const dy = y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance <= particle.size + tolerance;
      });
    }

    explode(x, y, force = 5, radius = 100) {
      this.particles.forEach((particle) => {
        const dx = particle.x - x;
        const dy = particle.y - y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < radius) {
          const explosionForce = ((radius - distance) / radius) * force;
          const angle = Math.atan2(dy, dx);

          particle.vx += Math.cos(angle) * explosionForce;
          particle.vy += Math.sin(angle) * explosionForce;
        }
      });
    }

    attract(x, y, force = 2, radius = 150) {
      this.particles.forEach((particle) => {
        const dx = x - particle.x;
        const dy = y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < radius && distance > 0) {
          const attractionForce = force / distance;

          particle.vx += (dx / distance) * attractionForce;
          particle.vy += (dy / distance) * attractionForce;
        }
      });
    }

    // Presets expandidos y más configurables
    static presets = {
      stars: {
        count: 100,
        color: { type: "single", value: "#ffffff" },
        size: { min: 1, max: 2, pulse: true, pulseSpeed: 0.01 },
        speed: { min: 0.05, max: 0.15 },
        connections: { enabled: false },
        animation: { type: "float" },
        effects: { twinkle: true, twinkleSpeed: 0.02 },
        shape: { type: "circle" },
      },
      network: {
        count: 50,
        color: { type: "single", value: "#00ff88" },
        size: { min: 2, max: 4 },
        speed: { min: 0.1, max: 0.3 },
        connections: {
          enabled: true,
          distance: 120,
          animated: true,
          color: "#00ff88",
          opacity: 0.4,
        },
        animation: { type: "wave" },
        shape: { type: "circle" },
      },
      bubbles: {
        count: 30,
        color: { type: "rainbow", rainbowSpeed: 0.02 },
        size: { min: 3, max: 8, pulse: true },
        speed: { min: 0.2, max: 0.8 },
        connections: { enabled: false },
        animation: { type: "bounce" },
        opacity: { min: 0.2, max: 0.6 },
        physics: { gravity: 0.02, bounce: 0.9 },
        effects: { glow: true, glowSize: 15 },
        shape: { type: "circle" },
      },
      spiral: {
        count: 40,
        color: { type: "gradient", gradient: ["#FF6B6B", "#4ECDC4", "#45B7D1"] },
        size: { min: 2, max: 5 },
        speed: { min: 0.1, max: 0.4, turbulence: 0.5 },
        connections: { enabled: true, distance: 80, curve: true },
        animation: { type: "spiral" },
        effects: { glow: true, glowColor: "#FF6B6B" },
        shape: { type: "circle" },
      },
      galaxy: {
        count: 200,
        color: { type: "random", randomPalette: ["#FFD700", "#FFA500", "#FF69B4", "#9370DB", "#00CED1"] },
        size: { min: 1, max: 4, distribution: "exponential" },
        speed: { min: 0.05, max: 0.3 },
        connections: { enabled: true, distance: 60, maxConnections: 2 },
        animation: { type: "orbit", orbit: { radius: 200, speed: 0.005 } },
        effects: { twinkle: true, glow: true },
        shape: { type: "star" },
      },
      matrix: {
        count: 80,
        color: { type: "single", value: "#00ff00" },
        size: { min: 1, max: 3 },
        speed: { min: 0.5, max: 2 },
        connections: { enabled: true, distance: 100, animated: true },
        animation: { type: "float", direction: "down" },
        opacity: { min: 0.3, max: 1, flicker: true },
        shape: { type: "square" },
        physics: { gravity: 0.01 },
      },
      hearts: {
        count: 25,
        color: { type: "gradient", gradient: ["#FF69B4", "#FF1493", "#DC143C"] },
        size: { min: 4, max: 8, pulse: true, pulseIntensity: 0.3 },
        speed: { min: 0.1, max: 0.5 },
        connections: { enabled: false },
        animation: { type: "float", direction: "up" },
        effects: { glow: true, glowColor: "#FF69B4", glowSize: 20 },
        shape: { type: "heart", rotation: true, rotationSpeed: 0.01 },
        physics: { wind: 0.02, windDirection: Math.PI / 4 },
      },
    };
  }

  // Función de inicialización rápida mejorada
  function createFlux(options = {}) {
    return new FluxJS(options);
  }

  // Funciones de utilidad para presets mejoradas
  Object.keys(FluxJS.presets).forEach((presetName) => {
    createFlux[presetName] = (container, options = {}) => {
      const presetConfig = JSON.parse(JSON.stringify(FluxJS.presets[presetName])); // Deep clone
      return new FluxJS({ ...presetConfig, container, ...options });
    };
  });

  // Función para crear configuraciones personalizadas
  createFlux.custom = (config) => {
    return new FluxJS(config);
  };

  // Utilidades para configuración
  createFlux.utils = {
    // Generar paleta de colores
    generateColorPalette: (baseColor, count = 5) => {
      // Implementación básica - se puede expandir
      const colors = [baseColor];
      for (let i = 1; i < count; i++) {
        colors.push(`hsl(${(360 / count) * i}, 70%, 60%)`);
      }
      return colors;
    },

    // Crear gradiente personalizado
    createGradient: (colors, type = "linear") => {
      return {
        type: "gradient",
        gradient: colors,
      };
    },

    // Configuraciones de física preestablecidas
    physics: {
      earth: { gravity: 0.1, friction: 0.01 },
      space: { gravity: 0, friction: 0 },
      water: { gravity: 0.05, friction: 0.05 },
      wind: { wind: 0.05, windDirection: 0 },
    },
  };

  // Exportar para diferentes entornos
  if (typeof module !== "undefined" && module.exports) {
    // CommonJS
    module.exports = { FluxJS, createFlux };
  } else if (typeof define === "function" && define.amd) {
    // AMD
    define(function () {
      return { FluxJS, createFlux };
    });
  } else {
    // Browser global
    global.FluxJS = FluxJS;
    global.createFlux = createFlux;
  }
})(typeof window !== "undefined" ? window : this);

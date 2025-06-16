/**
 * FluxJS - Librería de partículas animadas ultra configurable
 * Versión: 1.0.2
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
          trail: options.mouse?.trail === true, // Desactivado por defecto
          trailLength: options.mouse?.trailLength || 30, // Aumentado para mejor efecto
          trailWidth: options.mouse?.trailWidth || 8, // Ancho del trail
          trailColor: options.mouse?.trailColor || "#8B00FF", // Color morado por defecto
          trailGlow: options.mouse?.trailGlow !== false, // Glow activado por defecto
          trailFadeTime: options.mouse?.trailFadeTime || 1500, // Tiempo de desvanecimiento
          sparkles: options.mouse?.sparkles !== false, // Partículas brillantes
          onClick: options.mouse?.onClick || null, // Función callback
          magnetism: options.mouse?.magnetism || false,
          magnetismStrength: options.mouse?.magnetismStrength || 0.02,
          // Configuración táctil
          touch: {
            enabled: options.mouse?.touch?.enabled !== false,
            multiTouch: options.mouse?.touch?.multiTouch || false,
            touchDistance: options.mouse?.touch?.touchDistance || 200, // Mayor distancia para táctil
            touchAttraction: options.mouse?.touch?.touchAttraction || 0.08, // Mayor atracción
          },
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
            mobile: { width: 768, particles: 0.15, maxFPS: 30, simplifyEffects: true },
            tablet: { width: 1024, particles: 0.4, maxFPS: 45, simplifyEffects: false },
            desktop: { width: 1920, particles: 1.0, maxFPS: 60, simplifyEffects: false },
          },
          scaleWithContainer: options.responsive?.scaleWithContainer || true,
          detectDevice: options.responsive?.detectDevice !== false,
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
          adaptiveQuality: options.performance?.adaptiveQuality === true,
          // Optimizaciones móviles
          mobile: {
            reducedMotion: options.performance?.mobile?.reducedMotion || false,
            batteryOptimization: options.performance?.mobile?.batteryOptimization !== false,
            memoryLimit: options.performance?.mobile?.memoryLimit || 1000, // Límite de partículas en móvil
            useTransform3d: options.performance?.mobile?.useTransform3d !== false,
          },
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

      // Estados móviles
      this.isMobile = this.detectMobile();
      this.devicePixelRatio = window.devicePixelRatio || 1;
      this.touches = new Map(); // Para multi-touch
      this.currentFPS = 0;
      this.frameCount = 0;
      this.lastFPSUpdate = 0;
      this.performanceMode = "normal"; // 'normal', 'reduced', 'minimal'

      // Guardar configuración original para poder restaurarla
      this.originalConfig = JSON.parse(JSON.stringify(this.config));

      // Inicializar sistema de colores
      this.initColorSystem();

      // Llamar evento onInit si está definido
      if (this.config.events.onInit) {
        this.config.events.onInit(this);
      }

      this.init();
    }

    detectMobile() {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const isMobileUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
      const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth <= 768;

      return isMobileUA || (isTouchDevice && isSmallScreen);
    }

    optimizeForDevice() {
      if (this.isMobile) {
        // Reducir partículas automáticamente en móviles
        this.config.count = Math.min(this.config.count, this.config.performance.mobile.memoryLimit);

        // Ajustar FPS para móviles
        const breakpoint = this.getCurrentBreakpoint();
        if (breakpoint && breakpoint.maxFPS) {
          this.config.performance.maxFPS = breakpoint.maxFPS;
        }

        // Simplificar efectos si es necesario
        if (breakpoint && breakpoint.simplifyEffects) {
          this.config.effects.glow = false;
          this.config.effects.shadow = false;
          this.config.connections.animated = false;
          this.config.mouse.trail = false;
        }

        // Optimización de batería
        if (this.config.performance.mobile.batteryOptimization) {
          this.setupBatteryOptimization();
        }
      }
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
      this.optimizeForDevice();
      this.createCanvas();
      this.setupEventListeners();
      this.createParticles();
      this.start();
    }

    getCurrentBreakpoint() {
      const width = window.innerWidth;
      const breakpoints = this.config.responsive.breakpoints;

      if (width <= breakpoints.mobile.width) {
        return breakpoints.mobile;
      } else if (width <= breakpoints.tablet.width) {
        return breakpoints.tablet;
      } else {
        return breakpoints.desktop;
      }
    }

    setupBatteryOptimization() {
      // Detectar estado de batería si está disponible
      if ("getBattery" in navigator) {
        navigator.getBattery().then((battery) => {
          const updatePerformanceMode = () => {
            if (battery.level < 0.2) {
              this.performanceMode = "minimal";
              this.config.performance.maxFPS = 15;
            } else if (battery.level < 0.5) {
              this.performanceMode = "reduced";
              this.config.performance.maxFPS = 30;
            } else {
              this.performanceMode = "normal";
              const breakpoint = this.getCurrentBreakpoint();
              this.config.performance.maxFPS = breakpoint.maxFPS || 60;
            }
          };

          battery.addEventListener("levelchange", updatePerformanceMode);
          battery.addEventListener("chargingchange", updatePerformanceMode);
          updatePerformanceMode();
        });
      }
    }

    createCanvas() {
      // Crear canvas
      this.canvas = document.createElement("canvas");
      this.canvas.style.pointerEvents = this.config.mouse.interact ? "auto" : "none";
      this.canvas.style.background = this.config.canvas.background;
      this.canvas.style.opacity = this.config.canvas.opacity;

      // Optimización para móviles con hardware acceleration
      if (this.config.performance.mobile.useTransform3d && this.isMobile) {
        this.canvas.style.transform = "translateZ(0)";
        this.canvas.style.backfaceVisibility = "hidden";
        this.canvas.style.perspective = "1000px";
      }

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

      // Manejar cambios de orientación en móviles
      if (this.isMobile) {
        window.addEventListener("orientationchange", () => {
          setTimeout(resizeHandler, 100); // Pequeño delay para que la orientación se complete
        });
      }

      // Seguimiento del mouse y táctil
      if (this.config.mouse.interact) {
        this.setupPointerEvents();
      }

      // Pausar/reanudar cuando la ventana pierde/gana foco
      if (this.config.performance.pauseOnBlur) {
        window.addEventListener("blur", () => this.stop());
        window.addEventListener("focus", () => this.start());
      }

      // Manejar visibilidad de página (especialmente útil en móviles)
      if (typeof document.hidden !== "undefined") {
        document.addEventListener("visibilitychange", () => {
          if (document.hidden) {
            this.stop();
          } else {
            this.start();
          }
        });
      }

      // Responsive - ajustar partículas según el tamaño de pantalla
      if (this.config.responsive.enabled) {
        this.adjustParticleCount();
      }

      // Detectar motion preference del usuario
      if (window.matchMedia && this.config.performance.mobile.reducedMotion) {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (mediaQuery.matches) {
          this.config.animation.speed *= 0.5;
          this.config.performance.maxFPS = Math.min(this.config.performance.maxFPS, 30);
        }
      }
    }

    setupPointerEvents() {
      const updatePointer = (x, y, pointerId = "mouse") => {
        if (pointerId === "mouse") {
          this.mouse.x = x;
          this.mouse.y = y;
        } else {
          // Manejar múltiples toques
          this.touches.set(pointerId, { x, y, time: Date.now() });
        }
        // Manejar trail del mouse/touch
        if (this.config.mouse.trail && pointerId === "mouse") {
          this.mouse.trail.push({ x, y, time: Date.now() });
          if (this.mouse.trail.length > this.config.mouse.trailLength) {
            this.mouse.trail.shift();
          }
        }
      };

      const getCoordinates = (e) => {
        if (this.config.container === document.body) {
          return { x: e.clientX, y: e.clientY };
        } else {
          const rect = this.config.container.getBoundingClientRect();
          return { x: e.clientX - rect.left, y: e.clientY - rect.top };
        }
      };

      // Eventos de mouse (desktop)
      const mouseHandler = (e) => {
        const coords = getCoordinates(e);
        updatePointer(coords.x, coords.y, "mouse");
      };

      // Eventos táctiles (móvil)
      const touchStartHandler = (e) => {
        e.preventDefault(); // Prevenir comportamientos por defecto

        Array.from(e.changedTouches).forEach((touch) => {
          const coords = getCoordinates(touch);
          updatePointer(coords.x, coords.y, touch.identifier);

          // Si no hay multi-touch, usar el primer toque como mouse
          if (!this.config.mouse.touch.multiTouch && e.touches.length === 1) {
            this.mouse.x = coords.x;
            this.mouse.y = coords.y;
          }
        });
      };

      const touchMoveHandler = (e) => {
        e.preventDefault();

        Array.from(e.changedTouches).forEach((touch) => {
          const coords = getCoordinates(touch);
          updatePointer(coords.x, coords.y, touch.identifier);

          if (!this.config.mouse.touch.multiTouch && e.touches.length === 1) {
            this.mouse.x = coords.x;
            this.mouse.y = coords.y;
          }
        });
      };

      const touchEndHandler = (e) => {
        e.preventDefault();

        Array.from(e.changedTouches).forEach((touch) => {
          this.touches.delete(touch.identifier);
        });

        // Limpiar posición del mouse si no hay más toques
        if (e.touches.length === 0) {
          this.mouse.x = -1000;
          this.mouse.y = -1000;
        }
      };

      const clickHandler = (e) => {
        if (this.config.mouse.onClick) {
          this.config.mouse.onClick(e, this);
        }

        // Verificar click en partículas
        if (this.config.events.onParticleClick) {
          const coords = getCoordinates(e);
          this.particles.forEach((particle) => {
            const dx = coords.x - particle.x;
            const dy = coords.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance <= particle.size + 5) {
              this.config.events.onParticleClick(particle, this);
            }
          });
        }
      };

      // Registrar eventos
      if (!this.isMobile) {
        document.addEventListener("mousemove", mouseHandler, { passive: true });
      }

      if (this.config.mouse.touch.enabled) {
        document.addEventListener("touchstart", touchStartHandler, { passive: false });
        document.addEventListener("touchmove", touchMoveHandler, { passive: false });
        document.addEventListener("touchend", touchEndHandler, { passive: false });
      }

      document.addEventListener("click", clickHandler);

      // También escuchar en el contenedor específico para mayor precisión
      if (this.config.container !== document.body) {
        if (!this.isMobile) {
          this.config.container.addEventListener("mousemove", mouseHandler, { passive: true });
        }

        if (this.config.mouse.touch.enabled) {
          this.config.container.addEventListener("touchstart", touchStartHandler, { passive: false });
          this.config.container.addEventListener("touchmove", touchMoveHandler, { passive: false });
          this.config.container.addEventListener("touchend", touchEndHandler, { passive: false });
        }

        this.config.container.addEventListener("click", clickHandler);
      }
    }

    resize() {
      let width, height;

      if (this.config.container === document.body) {
        width = window.innerWidth;
        height = window.innerHeight;
      } else {
        const rect = this.config.container.getBoundingClientRect();
        width = this.config.container.offsetWidth || rect.width;
        height = this.config.container.offsetHeight || rect.height;
      }

      // Manejar dispositivos de alta densidad de píxeles
      if (this.isMobile && window.devicePixelRatio > 1) {
        // Configurar el canvas para alta densidad pero sin multiplicar por devicePixelRatio
        // para mantener el rendimiento en móviles
        this.canvas.width = width;
        this.canvas.height = height;
        this.canvas.style.width = width + "px";
        this.canvas.style.height = height + "px";

        // Solo escalar el contexto si no es móvil o si está explícitamente habilitado
        if (!this.isMobile || this.devicePixelRatio <= 2) {
          this.ctx.scale(1, 1); // No escalar en móviles para mejor rendimiento
        }
      } else {
        this.canvas.width = width;
        this.canvas.height = height;
      }

      // Recrear gradient después del resize
      if (this.config.color.type === "gradient") {
        this.gradientCache = null;
      }

      // Reajustar partículas responsive
      if (this.config.responsive.enabled) {
        this.adjustParticleCount();
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
        this.mouse.trail = this.mouse.trail.filter((point) => now - point.time < this.config.mouse.trailFadeTime);
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
      // Interacción con mouse/dedo principal
      this.updatePointerInteraction(particle, this.mouse.x, this.mouse.y, "mouse");

      // Interacción con múltiples toques si está habilitado
      if (this.config.mouse.touch.multiTouch && this.touches.size > 0) {
        this.touches.forEach((touch, touchId) => {
          // Limpiar toques antiguos
          if (Date.now() - touch.time > 1000) {
            this.touches.delete(touchId);
            return;
          }

          this.updatePointerInteraction(particle, touch.x, touch.y, "touch");
        });
      }
    }

    updatePointerInteraction(particle, pointerX, pointerY, pointerType) {
      const dx = pointerX - particle.x;
      const dy = pointerY - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Usar distancia diferente para táctil
      const interactionDistance = pointerType === "touch" ? this.config.mouse.touch.touchDistance : this.config.mouse.distance;

      const attraction = pointerType === "touch" ? this.config.mouse.touch.touchAttraction : this.config.mouse.attraction;

      if (distance < interactionDistance) {
        const force = (interactionDistance - distance) / interactionDistance;

        // Atracción o repulsión
        let attractionForce = attraction;
        if (this.config.mouse.repulsion) {
          attractionForce = -this.config.mouse.repulsionForce;
        }

        attractionForce *= force;

        particle.vx += dx * attractionForce;
        particle.vy += dy * attractionForce;

        // Aumentar opacidad cerca del puntero
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
        // Restaurar opacidad original solo si no está siendo afectada por otro puntero
        let isAffectedByOtherPointer = false;

        if (pointerType === "mouse" && this.touches.size > 0) {
          // Verificar si algún toque está afectando esta partícula
          this.touches.forEach((touch) => {
            const touchDx = touch.x - particle.x;
            const touchDy = touch.y - particle.y;
            const touchDistance = Math.sqrt(touchDx * touchDx + touchDy * touchDy);
            if (touchDistance < this.config.mouse.touch.touchDistance) {
              isAffectedByOtherPointer = true;
            }
          });
        }

        if (!isAffectedByOtherPointer) {
          particle.opacity = particle.originalOpacity;
          // Aplicar fricción para volver a velocidad normal
          particle.vx *= 0.98;
          particle.vy *= 0.98;
        }
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
      // Limpiar canvas completamente
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // Resetear completamente el contexto para evitar interferencias
      this.ctx.save();
      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
      this.ctx.globalCompositeOperation = "source-over";
      this.ctx.globalAlpha = 1;
      this.ctx.shadowColor = "transparent";
      this.ctx.shadowBlur = 0;
      this.ctx.shadowOffsetX = 0;
      this.ctx.shadowOffsetY = 0;
      this.ctx.restore();

      // Dibujar conexiones primero (para que estén detrás de las partículas)
      this.drawConnections();

      // Dibujar partículas
      this.drawParticles();

      // Dibujar trail del mouse al final (para que esté encima de todo)
      if (this.config.mouse.trail && this.mouse.trail.length > 1) {
        this.drawMouseTrail();
      }

      // Debug: log cada 120 frames si el trail está habilitado pero no se ve
      if (this.frameCount % 120 === 0 && this.config.mouse.trail && this.mouse.trail.length === 0) {
        console.warn("FluxJS: Trail del mouse habilitado pero sin puntos. Posición:", this.mouse.x, this.mouse.y);
      }
    }

    drawMouseTrail() {
      if (this.mouse.trail.length < 3) return; // Necesitamos al menos 3 puntos para omitir el primero

      this.ctx.save();

      const now = Date.now();

      // Obtener el color base de las partículas
      let baseColor = this.config.color.value || "#ffffff";
      if (this.config.color.type === "single") {
        baseColor = this.config.color.value;
      } else if (this.config.color.type === "rainbow") {
        baseColor = this.getRainbowColor({ x: this.mouse.x, y: this.mouse.y });
      } else if (this.config.color.type === "random" && this.config.color.randomPalette) {
        baseColor = this.config.color.randomPalette[0];
      } else if (this.config.color.type === "gradient" && this.config.color.gradient) {
        baseColor = this.config.color.gradient[0];
      }

      // Convertir color a RGB para manipulación
      let r, g, b;
      if (baseColor.startsWith("#")) {
        const hex = baseColor.slice(1);
        r = parseInt(hex.slice(0, 2), 16);
        g = parseInt(hex.slice(2, 4), 16);
        b = parseInt(hex.slice(4, 6), 16);
      } else if (baseColor.startsWith("hsl(")) {
        // Para colores HSL del rainbow, usar una aproximación
        r = 100;
        g = 150;
        b = 255; // Azul-morado por defecto
      } else {
        r = 255;
        g = 255;
        b = 255; // Blanco por defecto
      }

      // Dibujar múltiples capas para efecto de glow
      for (let layer = 0; layer < 3; layer++) {
        this.ctx.save();

        // Configurar blend mode para glow
        this.ctx.globalCompositeOperation = layer === 0 ? "screen" : "lighter";

        // Configurar glow según la capa
        const glowSizes = [20, 12, 6];
        const alphas = [0.1, 0.3, 0.8];
        const widths = [8, 5, 2];

        this.ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 0.8)`;
        this.ctx.shadowBlur = glowSizes[layer];
        this.ctx.strokeStyle = baseColor;
        this.ctx.lineWidth = widths[layer];
        this.ctx.lineCap = "round";
        this.ctx.lineJoin = "round";
        this.ctx.globalAlpha = alphas[layer];

        // Dibujar trail empezando desde el segundo punto para omitir el punto inicial
        for (let i = 2; i < this.mouse.trail.length; i++) {
          const point = this.mouse.trail[i];
          const prevPoint = this.mouse.trail[i - 1];

          // Calcular opacidad basada en el tiempo
          const age = now - point.time;
          const maxAge = 2000; // 2 segundos
          const ageOpacity = Math.max(0, 1 - age / maxAge);

          // Calcular opacidad basada en la posición en el trail (ajustada para omitir el primer punto)
          const positionOpacity = (i - 1) / (this.mouse.trail.length - 1);

          // Combinar opacidades
          const finalOpacity = ageOpacity * positionOpacity * alphas[layer];

          if (finalOpacity > 0.01) {
            this.ctx.save();
            this.ctx.globalAlpha = finalOpacity;

            // Crear gradiente para cada segmento usando el color de las partículas
            const gradient = this.ctx.createLinearGradient(prevPoint.x, prevPoint.y, point.x, point.y);
            gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${finalOpacity * 0.5})`);
            gradient.addColorStop(0.5, `rgba(${Math.min(255, r + 50)}, ${Math.min(255, g + 50)}, ${Math.min(255, b + 50)}, ${finalOpacity})`);
            gradient.addColorStop(1, `rgba(${Math.min(255, r + 30)}, ${Math.min(255, g + 30)}, ${Math.min(255, b + 30)}, ${finalOpacity * 0.8})`);

            this.ctx.strokeStyle = gradient;
            this.ctx.lineWidth = widths[layer] * (0.5 + positionOpacity * 0.5);

            this.ctx.beginPath();
            this.ctx.moveTo(prevPoint.x, prevPoint.y);
            this.ctx.lineTo(point.x, point.y);
            this.ctx.stroke();

            this.ctx.restore();
          }
        }

        this.ctx.restore();
      }

      this.ctx.restore();
    }

    drawParticles() {
      this.particles.forEach((particle) => {
        this.ctx.save();

        // Aplicar efectos primero
        this.applyParticleEffects(particle);

        // Configurar color y opacidad
        this.ctx.globalAlpha = particle.opacity;
        this.ctx.fillStyle = this.getParticleColor(particle);

        // Dibujar según la forma
        this.drawParticleShape(particle);

        // Importante: limpiar efectos después de cada partícula
        this.ctx.shadowColor = "transparent";
        this.ctx.shadowBlur = 0;
        this.ctx.shadowOffsetX = 0;
        this.ctx.shadowOffsetY = 0;

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

      // Guardar y resetear completamente el contexto
      this.ctx.save();
      this.ctx.globalCompositeOperation = "source-over";
      this.ctx.shadowColor = "transparent";
      this.ctx.shadowBlur = 0;
      this.ctx.shadowOffsetX = 0;
      this.ctx.shadowOffsetY = 0;
      this.ctx.setLineDash([]);
      this.ctx.lineDashOffset = 0;

      const maxConnections = this.config.connections.maxConnections;
      let totalConnections = 0;

      for (let i = 0; i < this.particles.length; i++) {
        let connectionCount = 0;

        for (let j = i + 1; j < this.particles.length; j++) {
          if (maxConnections && connectionCount >= maxConnections) break;

          const dx = this.particles[i].x - this.particles[j].x;
          const dy = this.particles[i].y - this.particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < this.config.connections.distance) {
            const opacity = (this.config.connections.distance - distance) / this.config.connections.distance;

            // Configurar estilos de línea
            this.ctx.globalAlpha = Math.max(0.1, opacity * this.config.connections.opacity);
            this.ctx.strokeStyle = this.config.connections.color;
            this.ctx.lineWidth = this.config.connections.width;

            // Animación de conexiones
            if (this.config.connections.animated) {
              this.ctx.setLineDash([5, 5]);
              this.ctx.lineDashOffset = this.connectionAnimationOffset;
            }

            this.ctx.beginPath();

            if (this.config.connections.curve) {
              // Conexiones curvas - usar un offset determinístico basado en los índices
              const midX = (this.particles[i].x + this.particles[j].x) / 2;
              const midY = (this.particles[i].y + this.particles[j].y) / 2;

              // Usar un offset determinístico basado en los índices para evitar parpadeo
              const seedOffset = (i * 1000 + j) * 0.001;
              const controlOffsetX = Math.sin(seedOffset) * 25;
              const controlOffsetY = Math.cos(seedOffset) * 25;

              const controlX = midX + controlOffsetX;
              const controlY = midY + controlOffsetY;

              this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
              this.ctx.quadraticCurveTo(controlX, controlY, this.particles[j].x, this.particles[j].y);
            } else {
              // Conexiones rectas
              this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
              this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
            }

            this.ctx.stroke();

            connectionCount++;
            totalConnections++;
          }
        }
      }

      // Restaurar el contexto
      this.ctx.restore();

      // Debug: log cada 60 frames aprox
      if (this.frameCount % 60 === 0 && totalConnections === 0 && this.particles.length > 0) {
        console.warn("FluxJS: No se dibujaron conexiones. Partículas:", this.particles.length, "Distancia:", this.config.connections.distance);
      }
    }

    animate(currentTime = 0) {
      if (!this.isRunning) return;

      // Control de FPS mejorado
      const targetFrameTime = 1000 / this.config.performance.maxFPS;
      if (currentTime - this.lastFrameTime < targetFrameTime) {
        this.animationId = requestAnimationFrame((time) => this.animate(time));
        return;
      }

      // Monitoreo de rendimiento
      this.frameCount++;
      if (currentTime - this.lastFPSUpdate > 1000) {
        this.currentFPS = this.frameCount;
        this.frameCount = 0;
        this.lastFPSUpdate = currentTime;

        // Ajuste adaptativo de calidad
        if (this.config.performance.adaptiveQuality) {
          this.adaptiveQualityAdjustment();
        }
      }

      // Actualizar y dibujar
      this.update(currentTime);
      this.draw();

      // Continuar animación
      this.animationId = requestAnimationFrame((time) => this.animate(time));
    }

    adaptiveQualityAdjustment() {
      const targetFPS = this.config.performance.maxFPS;
      const currentFPS = this.currentFPS;

      // Si el FPS está por debajo del 80% del objetivo, reducir calidad
      if (currentFPS < targetFPS * 0.8) {
        if (this.performanceMode === "normal") {
          this.performanceMode = "reduced";
          // Reducir número de partículas
          if (this.particles.length > 20) {
            this.particles = this.particles.slice(0, Math.floor(this.particles.length * 0.7));
          }
          // Desactivar algunos efectos
          this.config.connections.animated = false;
        } else if (this.performanceMode === "reduced") {
          this.performanceMode = "minimal";
          // Reducir aún más
          if (this.particles.length > 10) {
            this.particles = this.particles.slice(0, Math.floor(this.particles.length * 0.5));
          }
          // Desactivar más efectos pero mantener conexiones básicas
          this.config.effects.glow = false;
          this.config.effects.shadow = false;
          // NO desactivar conexiones completamente - solo simplificarlas
          this.config.connections.curve = false;
        }
      }
      // Si el FPS es bueno, intentar restaurar calidad gradualmente
      else if (currentFPS > targetFPS * 0.95 && this.performanceMode !== "normal") {
        // Restaurar gradualmente usando la configuración original
        if (this.performanceMode === "minimal") {
          this.performanceMode = "reduced";
          this.config.effects.glow = this.originalConfig?.effects?.glow || false;
          this.config.effects.shadow = this.originalConfig?.effects?.shadow || false;
          this.config.connections.curve = this.originalConfig?.connections?.curve || false;
        } else if (this.performanceMode === "reduced") {
          this.performanceMode = "normal";
          this.config.connections.animated = this.originalConfig?.connections?.animated || false;
          this.config.mouse.trail = this.originalConfig?.mouse?.trail || false;
        }
      }
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

    // Métodos de información y depuración
    getPerformanceInfo() {
      return {
        fps: this.currentFPS,
        maxFPS: this.config.performance.maxFPS,
        particleCount: this.particles.length,
        performanceMode: this.performanceMode,
        isMobile: this.isMobile,
        devicePixelRatio: this.devicePixelRatio,
        touchCount: this.touches.size,
        canvasSize: {
          width: this.canvas.width,
          height: this.canvas.height,
        },
      };
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

    // Métodos de optimización móvil
    forceMobileOptimization() {
      this.isMobile = true;
      this.optimizeForDevice();
      this.adjustParticleCount();

      // Reconfigurar eventos
      this.setupPointerEvents();
    }

    optimizeForLowEndDevice() {
      this.performanceMode = "minimal";
      this.config.performance.maxFPS = 15;
      this.config.count = Math.min(this.config.count, 15);
      this.config.effects.glow = false;
      this.config.effects.shadow = false;
      this.config.connections.enabled = false;
      this.config.mouse.trail = false;

      this.createParticles();
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

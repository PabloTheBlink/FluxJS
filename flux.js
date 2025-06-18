/**
 * FluxJS - Librería de partículas animadas ultra configurable
 * Versión: 1.0.5
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

        // Configuración de viewport para lazy loading
        viewport: {
          enabled: options.viewport?.enabled || false,
          threshold: options.viewport?.threshold || 0.1, // 10% del elemento visible
          rootMargin: options.viewport?.rootMargin || "50px", // Empezar 50px antes
          once: options.viewport?.once !== false, // Solo observar una vez por defecto
        },

        // Eventos y callbacks
        events: {
          onInit: options.events?.onInit || null,
          onStart: options.events?.onStart || null,
          onStop: options.events?.onStop || null,
          onResize: options.events?.onResize || null,
          onParticleClick: options.events?.onParticleClick || null,
          onParticleHover: options.events?.onParticleHover || null,
          onViewportEnter: options.events?.onViewportEnter || null,
          onViewportExit: options.events?.onViewportExit || null,
        },
      };

      this.particles = [];
      this.mouse = { x: -1000, y: -1000, trail: [] };
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

      // Optimizaciones de rendimiento
      this.frameTimeAccumulator = 0;
      this.targetFrameTime = 1000 / this.config.performance.maxFPS;
      this.colorCache = new Map();
      this.distanceCache = new Map();
      this.spatialGrid = new Map();
      this.gridSize = 100; // Tamaño de celda para spatial partitioning
      this.trailPool = []; // Pool de objetos para trail
      this.maxTrailPoolSize = 100;
      this.connectionPairs = []; // Cache de pares de conexión
      this.lastConnectionUpdate = 0;
      this.connectionUpdateInterval = 100; // Actualizar conexiones cada 100ms

      // Viewport intersection observer
      this.intersectionObserver = null;
      this.isInViewport = false;
      this.hasBeenInViewport = false;

      // Guardar configuración original para poder restaurarla
      this.originalConfig = JSON.parse(JSON.stringify(this.config));

      // Inicializar sistema de colores
      this.initColorSystem();

      // Llamar evento onInit si está definido
      if (this.config.events.onInit) {
        this.config.events.onInit(this);
      }

      // Inicializar con manejo de errores
      const initSuccess = this.init();
      if (!initSuccess) {
        console.error("FluxJS: Inicialización falló");
        // Si la inicialización falla, intentar diagnóstico
        setTimeout(() => {
          this.diagnose();
        }, 1000);
      }
    }

    detectMobile() {
      try {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        const isMobileUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
        const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
        const isSmallScreen = window.innerWidth <= 768;

        // Detección adicional para algunos dispositivos problemáticos
        const isAndroid = /android/i.test(userAgent);
        const isIOS = /iphone|ipad|ipod/i.test(userAgent);

        const isMobile = isMobileUA || (isTouchDevice && isSmallScreen) || isAndroid || isIOS;

        return isMobile;
      } catch (error) {
        console.warn("FluxJS: Error en detección móvil, asumiendo escritorio:", error);
        return false;
      }
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
          // Solo desactivar trail si no fue configurado explícitamente por el usuario
          if (this.originalConfig.mouse?.trail !== true) {
            this.config.mouse.trail = false;
          }
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
      // Cache de colores optimizado
      const cacheKey = `${this.config.color.type}_${particle.x}_${particle.y}_${this.rainbow}`;
      if (this.colorCache.has(cacheKey)) {
        return this.colorCache.get(cacheKey);
      }

      let color;
      switch (this.config.color.type) {
        case "gradient":
          color = this.getGradientColor(particle);
          break;
        case "rainbow":
          color = this.getRainbowColor(particle);
          break;
        case "random":
          color = this.getRandomPaletteColor(particle);
          break;
        case "single":
        default:
          color = this.config.color.value;
          break;
      }

      // Limitar el cache para evitar memory leaks
      if (this.colorCache.size > 1000) {
        const firstKey = this.colorCache.keys().next().value;
        this.colorCache.delete(firstKey);
      }

      this.colorCache.set(cacheKey, color);
      return color;
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
      try {
        this.optimizeForDevice();

        const canvasCreated = this.createCanvas();
        if (!canvasCreated) {
          console.error("FluxJS: No se pudo crear el canvas, abortando inicialización");
          return false;
        }

        this.setupEventListeners();
        this.createParticles();

        // Si el viewport lazy loading está habilitado, configurar intersection observer
        if (this.config.viewport.enabled) {
          this.setupViewportObserver();
        } else {
          // Comportamiento por defecto: iniciar inmediatamente
          this.start();
        }

        return true;
      } catch (error) {
        console.error("FluxJS: Error durante la inicialización:", error);

        // Notificar error si hay callback
        if (this.config.events.onError) {
          this.config.events.onError(error, this);
        }

        return false;
      }
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
      try {
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

        // Obtener contexto con opciones compatibles para móviles
        const contextOptions = {
          alpha: this.config.canvas.background === "transparent",
          powerPreference: this.isMobile ? "low-power" : "high-performance",
        };

        // Solo agregar desynchronized si no es móvil (puede causar problemas en móviles)
        if (!this.isMobile) {
          contextOptions.desynchronized = true;
        }

        this.ctx = this.canvas.getContext("2d", contextOptions);

        if (!this.ctx) {
          // Fallback: intentar obtener contexto básico
          console.warn("FluxJS: Usando contexto canvas básico como fallback");
          this.ctx = this.canvas.getContext("2d");
        }

        if (!this.ctx) {
          throw new Error("No se pudo obtener el contexto 2D del canvas");
        } // Optimizaciones adicionales del contexto
        if (this.ctx.imageSmoothingEnabled !== undefined) {
          this.ctx.imageSmoothingEnabled = false; // Mejor rendimiento para partículas simples
        }

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
      } catch (error) {
        console.error("FluxJS: Error al crear canvas:", error);

        // Intentar crear un canvas más básico como último recurso
        if (!this.canvas || !this.ctx) {
          try {
            this.canvas = document.createElement("canvas");
            this.ctx = this.canvas.getContext("2d");

            if (this.ctx) {
              console.warn("FluxJS: Usando canvas básico sin optimizaciones");
              // Configuración mínima
              this.canvas.style.position = "fixed";
              this.canvas.style.top = "0";
              this.canvas.style.left = "0";
              this.canvas.style.zIndex = this.config.canvas.zIndex;

              if (this.config.container === document.body) {
                document.body.appendChild(this.canvas);
              } else {
                this.config.container.appendChild(this.canvas);
              }

              this.resize();
            } else {
              throw new Error("Canvas no soportado en este dispositivo");
            }
          } catch (fallbackError) {
            console.error("FluxJS: Error crítico - Canvas no disponible:", fallbackError);
            // Mostrar mensaje de error al usuario
            if (this.config.container) {
              const errorDiv = document.createElement("div");
              errorDiv.innerHTML = "FluxJS: Tu navegador no soporta Canvas HTML5";
              errorDiv.style.color = "red";
              errorDiv.style.padding = "10px";
              this.config.container.appendChild(errorDiv);
            }
            return false;
          }
        }
      }

      return true;
    }

    setupEventListeners() {
      // Redimensionar canvas con debounce para evitar problemas en iOS
      let resizeTimeout;
      this.resizeHandler = () => {
        if (resizeTimeout) {
          clearTimeout(resizeTimeout);
        }

        // Debounce más agresivo en móviles, especialmente iOS
        const debounceTime = this.isMobile ? 150 : 50;

        resizeTimeout = setTimeout(() => {
          this.resize();
          if (this.config.events.onResize) {
            this.config.events.onResize(this);
          }
        }, debounceTime);
      };
      window.addEventListener("resize", this.resizeHandler);

      // Manejar cambios de orientación en móviles
      if (this.isMobile) {
        this.orientationChangeHandler = () => {
          setTimeout(() => {
            this.resize();
            if (this.config.events.onResize) {
              this.config.events.onResize(this);
            }
          }, 200); // Delay más largo para orientación
        };
        window.addEventListener("orientationchange", this.orientationChangeHandler);
      }

      // Seguimiento del mouse y táctil
      if (this.config.mouse.interact) {
        this.setupPointerEvents();
      }

      // Pausar/reanudar cuando la ventana pierde/gana foco
      if (this.config.performance.pauseOnBlur) {
        this.blurHandler = () => this.stop();
        this.focusHandler = () => this.start();
        window.addEventListener("blur", this.blurHandler);
        window.addEventListener("focus", this.focusHandler);
      }

      // Manejar visibilidad de página (especialmente útil en móviles)
      if (typeof document.hidden !== "undefined") {
        this.visibilityChangeHandler = () => {
          if (document.hidden) {
            this.stop();
          } else {
            this.start();
          }
        };
        document.addEventListener("visibilitychange", this.visibilityChangeHandler);
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
        // Manejar trail del mouse/touch optimizado
        if (this.config.mouse.trail && pointerId === "mouse") {
          let trailPoint;
          if (this.trailPool.length > 0) {
            trailPoint = this.trailPool.pop();
            trailPoint.x = x;
            trailPoint.y = y;
            trailPoint.time = Date.now();
          } else {
            trailPoint = { x, y, time: Date.now() };
          }

          this.mouse.trail.push(trailPoint);

          // Limitar trail length y reciclar objetos
          while (this.mouse.trail.length > this.config.mouse.trailLength) {
            const oldPoint = this.mouse.trail.shift();
            if (this.trailPool.length < this.maxTrailPoolSize) {
              this.trailPool.push(oldPoint);
            }
          }
        }
      };

      const getCoordinates = (e) => {
        let coords;
        if (this.config.container === document.body) {
          coords = { x: e.clientX, y: e.clientY };
        } else {
          const rect = this.config.container.getBoundingClientRect();
          coords = { x: e.clientX - rect.left, y: e.clientY - rect.top };
        }

        // Asegurar que las coordenadas estén dentro del canvas
        // Si están fuera, devolver coordenadas inválidas
        const effectiveWidth = this.getEffectiveCanvasWidth();
        const effectiveHeight = this.getEffectiveCanvasHeight();
        if (coords.x < 0 || coords.x > effectiveWidth || coords.y < 0 || coords.y > effectiveHeight) {
          return { x: -1000, y: -1000 };
        }

        return coords;
      };

      // Eventos de mouse (desktop)
      this.mouseHandler = (e) => {
        const coords = getCoordinates(e);
        // Solo actualizar si las coordenadas son válidas
        if (coords.x !== -1000 && coords.y !== -1000) {
          updatePointer(coords.x, coords.y, "mouse");
        } else {
          // Si las coordenadas no son válidas, resetear posición del mouse
          this.mouse.x = -1000;
          this.mouse.y = -1000;
        }
      };

      // Función para verificar si el toque está dentro del canvas
      const isTouchInCanvas = (touch) => {
        const coords = getCoordinates(touch);
        const effectiveWidth = this.getEffectiveCanvasWidth();
        const effectiveHeight = this.getEffectiveCanvasHeight();
        // Verificar límites del canvas con margen de seguridad
        return coords.x >= 0 && coords.x <= effectiveWidth && coords.y >= 0 && coords.y <= effectiveHeight && coords.x !== -1000 && coords.y !== -1000; // Coordenadas válidas
      };

      // Eventos táctiles (móvil)
      this.touchStartHandler = (e) => {
        // Solo prevenir el comportamiento por defecto si el toque está en el canvas
        const touchInCanvas = Array.from(e.changedTouches).some((touch) => isTouchInCanvas(touch));
        if (touchInCanvas) {
          e.preventDefault();
        }

        Array.from(e.changedTouches).forEach((touch) => {
          if (isTouchInCanvas(touch)) {
            const coords = getCoordinates(touch);

            // Si no hay multi-touch, tratar el toque como mouse para el rastro
            const touchId = !this.config.mouse.touch.multiTouch && e.touches.length === 1 ? "mouse" : touch.identifier;
            updatePointer(coords.x, coords.y, touchId);

            // Si no hay multi-touch, usar el primer toque como mouse
            if (!this.config.mouse.touch.multiTouch && e.touches.length === 1) {
              this.mouse.x = coords.x;
              this.mouse.y = coords.y;
            }
          }
        });
      };

      this.touchMoveHandler = (e) => {
        // Solo prevenir si hay toques activos en el canvas
        const activeTouches = Array.from(e.changedTouches).filter((touch) => this.touches.has(touch.identifier) || isTouchInCanvas(touch));

        if (activeTouches.length > 0) {
          e.preventDefault();
        }

        Array.from(e.changedTouches).forEach((touch) => {
          if (this.touches.has(touch.identifier) || isTouchInCanvas(touch)) {
            const coords = getCoordinates(touch);

            // Si no hay multi-touch, tratar el toque como mouse para el rastro
            const touchId = !this.config.mouse.touch.multiTouch && e.touches.length === 1 ? "mouse" : touch.identifier;
            updatePointer(coords.x, coords.y, touchId);

            if (!this.config.mouse.touch.multiTouch && e.touches.length === 1) {
              this.mouse.x = coords.x;
              this.mouse.y = coords.y;
            }
          }
        });
      };

      this.touchEndHandler = (e) => {
        // Solo prevenir si teníamos toques activos
        const hadActiveTouches = Array.from(e.changedTouches).some((touch) => this.touches.has(touch.identifier));

        if (hadActiveTouches) {
          e.preventDefault();
        }

        Array.from(e.changedTouches).forEach((touch) => {
          this.touches.delete(touch.identifier);
        });

        // Solo limpiar posición del mouse si no hay más toques Y no hay multi-touch
        if (e.touches.length === 0 && !this.config.mouse.touch.multiTouch) {
          // Usar un pequeño delay para evitar interferencias bruscas
          setTimeout(() => {
            if (e.touches.length === 0) {
              this.mouse.x = -1000;
              this.mouse.y = -1000;
            }
          }, 100);
        }
      };

      this.clickHandler = (e) => {
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

      // Handler para cuando el ratón sale del área del canvas
      this.mouseLeaveHandler = () => {
        this.mouse.x = -1000;
        this.mouse.y = -1000;
      };

      // Registrar eventos
      if (!this.isMobile) {
        // Mouse events solo en el contenedor para mayor precisión
        if (this.config.container === document.body) {
          document.addEventListener("mousemove", this.mouseHandler, { passive: true });
          document.addEventListener("mouseleave", this.mouseLeaveHandler, { passive: true });
        } else {
          this.config.container.addEventListener("mousemove", this.mouseHandler, { passive: true });
          this.config.container.addEventListener("mouseleave", this.mouseLeaveHandler, { passive: true });
        }

        // También agregar mouseleave al canvas para mayor precisión
        this.canvas.addEventListener("mouseleave", this.mouseLeaveHandler, { passive: true });
      }

      // Touch events solo en el canvas para evitar interferir con el resto de la página
      if (this.config.mouse.touch.enabled) {
        try {
          // Usar passive: true por defecto para mejor rendimiento, solo false cuando sea necesario
          const touchOptions = { passive: true };

          // Solo usar passive: false si realmente necesitamos preventDefault
          if (this.config.mouse.interact) {
            touchOptions.passive = false;
          }

          this.canvas.addEventListener("touchstart", this.touchStartHandler, touchOptions);
          this.canvas.addEventListener("touchmove", this.touchMoveHandler, touchOptions);
          this.canvas.addEventListener("touchend", this.touchEndHandler, touchOptions);
        } catch (error) {
          console.warn("FluxJS: Error configurando eventos táctiles:", error);
          // Fallback: intentar sin opciones
          try {
            this.canvas.addEventListener("touchstart", this.touchStartHandler);
            this.canvas.addEventListener("touchmove", this.touchMoveHandler);
            this.canvas.addEventListener("touchend", this.touchEndHandler);
          } catch (fallbackError) {
            console.error("FluxJS: No se pudieron configurar eventos táctiles:", fallbackError);
          }
        }
      }

      // Click events en el contenedor
      if (this.config.container === document.body) {
        document.addEventListener("click", this.clickHandler);
      } else {
        this.config.container.addEventListener("click", this.clickHandler);
      }
    }

    // Obtener dimensiones efectivas del canvas (considerando escalado)
    getEffectiveCanvasWidth() {
      if (this.isMobile && window.devicePixelRatio > 1) {
        return this.canvas.width; // En móviles mantenemos 1:1
      } else {
        const dpr = window.devicePixelRatio || 1;
        return this.canvas.width / dpr;
      }
    }

    getEffectiveCanvasHeight() {
      if (this.isMobile && window.devicePixelRatio > 1) {
        return this.canvas.height; // En móviles mantenemos 1:1
      } else {
        const dpr = window.devicePixelRatio || 1;
        return this.canvas.height / dpr;
      }
    }

    resize() {
      try {
        let width, height;

        if (this.config.container === document.body) {
          width = window.innerWidth;
          height = window.innerHeight;
        } else {
          const rect = this.config.container.getBoundingClientRect();
          width = this.config.container.offsetWidth || rect.width;
          height = this.config.container.offsetHeight || rect.height;
        }

        // Validar dimensiones mínimas
        if (width <= 0 || height <= 0) {
          console.warn("FluxJS: Dimensiones inválidas detectadas, usando valores por defecto");
          width = width <= 0 ? 300 : width;
          height = height <= 0 ? 200 : height;
        }

        // Evitar resize innecesarios si las dimensiones no han cambiado significativamente
        const currentWidth = this.canvas.style.width ? parseInt(this.canvas.style.width) : this.canvas.width;
        const currentHeight = this.canvas.style.height ? parseInt(this.canvas.style.height) : this.canvas.height;

        if (Math.abs(width - currentWidth) < 10 && Math.abs(height - currentHeight) < 10) {
          return; // Cambio muy pequeño, probablemente scroll en iOS
        }

        // Manejar dispositivos de alta densidad de píxeles de forma más compatible
        if (this.isMobile && window.devicePixelRatio > 1) {
          // En móviles, mantener 1:1 para mejor rendimiento
          this.canvas.width = width;
          this.canvas.height = height;
          this.canvas.style.width = width + "px";
          this.canvas.style.height = height + "px";

          // Resetear transformaciones previas
          this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        } else {
          // En escritorio, usar devicePixelRatio para mejor calidad
          const dpr = window.devicePixelRatio || 1;
          this.canvas.width = width * dpr;
          this.canvas.height = height * dpr;
          this.canvas.style.width = width + "px";
          this.canvas.style.height = height + "px";

          // Escalar el contexto
          this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }

        // Recrear gradient después del resize
        if (this.config.color.type === "gradient") {
          this.gradientCache = null;
        }

        // Reajustar partículas responsive
        if (this.config.responsive.enabled) {
          this.adjustParticleCount();
        }
      } catch (error) {
        console.error("FluxJS: Error durante resize:", error);

        // Fallback básico
        try {
          this.canvas.width = window.innerWidth || 300;
          this.canvas.height = window.innerHeight || 200;
        } catch (fallbackError) {
          console.error("FluxJS: Error crítico en resize:", fallbackError);
        }
      }
    }

    adjustParticleCount() {
      // Usar window.innerWidth en lugar de canvas.width para evitar problemas con iOS scroll
      let width;
      if (this.config.container === document.body) {
        width = window.innerWidth;
      } else {
        const rect = this.config.container.getBoundingClientRect();
        width = this.config.container.offsetWidth || rect.width || window.innerWidth;
      }

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

      // Evitar cambios innecesarios, especialmente en móviles durante scroll
      if (adjustedCount !== this.particles.length && Math.abs(adjustedCount - this.particles.length) > 2) {
        this.particles = [];
        this.createParticlesWithCount(adjustedCount);
      }
    }

    createParticles() {
      this.createParticlesWithCount(this.config.count);
    }

    createParticlesWithCount(count) {
      // Pre-calcular valores constantes usando dimensiones efectivas
      const canvasWidth = this.getEffectiveCanvasWidth();
      const canvasHeight = this.getEffectiveCanvasHeight();
      const speedRange = this.config.speed.max - this.config.speed.min;
      const sizeRange = this.config.size.max - this.config.size.min;
      const opacityRange = this.config.opacity.max - this.config.opacity.min;

      this.particles = [];
      for (let i = 0; i < count; i++) {
        this.particles.push(this.createParticleOptimized(canvasWidth, canvasHeight, speedRange, sizeRange, opacityRange));
      }
    }

    createParticleOptimized(canvasWidth, canvasHeight, speedRange, sizeRange, opacityRange) {
      const particle = {
        x: Math.random() * canvasWidth,
        y: Math.random() * canvasHeight,
        vx: (Math.random() - 0.5) * speedRange + (Math.random() > 0.5 ? this.config.speed.max : this.config.speed.min),
        vy: (Math.random() - 0.5) * speedRange + (Math.random() > 0.5 ? this.config.speed.max : this.config.speed.min),
        size: Math.random() * sizeRange + this.config.size.min,
        opacity: Math.random() * opacityRange + this.config.opacity.min,
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

    createParticle() {
      return this.createParticleOptimized(this.getEffectiveCanvasWidth(), this.getEffectiveCanvasHeight(), this.config.speed.max - this.config.speed.min, this.config.size.max - this.config.size.min, this.config.opacity.max - this.config.opacity.min);
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
      // Actualizar variables globales con menor frecuencia
      if (this.frameCount % 2 === 0) {
        // Cada 2 frames
        this.rainbow += this.config.color.rainbowSpeed;
        this.turbulenceTime += this.config.speed.turbulenceFrequency;
        this.connectionAnimationOffset += this.config.connections.animationSpeed;
      }

      this.updateParticles();

      // Actualizar spatial grid menos frecuentemente
      if (currentTime - this.lastConnectionUpdate > this.connectionUpdateInterval) {
        this.updateSpatialGrid();
        this.lastConnectionUpdate = currentTime;
      }
    }

    updateSpatialGrid() {
      this.spatialGrid.clear();

      for (let i = 0; i < this.particles.length; i++) {
        const particle = this.particles[i];
        const gridX = Math.floor(particle.x / this.gridSize);
        const gridY = Math.floor(particle.y / this.gridSize);
        const key = `${gridX},${gridY}`;

        if (!this.spatialGrid.has(key)) {
          this.spatialGrid.set(key, []);
        }
        this.spatialGrid.get(key).push(i);
      }
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

      // Limpiar trail del mouse optimizado
      if (this.config.mouse.trail) {
        const now = Date.now();
        const maxAge = this.config.mouse.trailFadeTime || 1500;

        // Filtrar y reciclar objetos del trail
        let i = 0;
        while (i < this.mouse.trail.length) {
          const point = this.mouse.trail[i];
          if (now - point.time > maxAge) {
            // Reciclar objeto
            if (this.trailPool.length < this.maxTrailPoolSize) {
              this.trailPool.push(this.mouse.trail.splice(i, 1)[0]);
            } else {
              this.mouse.trail.splice(i, 1);
            }
          } else {
            i++;
          }
        }
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

      // Rebotar en los bordes usando dimensiones efectivas
      const effectiveWidth = this.getEffectiveCanvasWidth();
      const effectiveHeight = this.getEffectiveCanvasHeight();

      if (particle.x <= particle.size) {
        particle.x = particle.size;
        particle.vx *= -this.config.physics.bounce;
      } else if (particle.x >= effectiveWidth - particle.size) {
        particle.x = effectiveWidth - particle.size;
        particle.vx *= -this.config.physics.bounce;
      }

      if (particle.y <= particle.size) {
        particle.y = particle.size;
        particle.vy *= -this.config.physics.bounce;
      } else if (particle.y >= effectiveHeight - particle.size) {
        particle.y = effectiveHeight - particle.size;
        particle.vy *= -this.config.physics.bounce;
      }
    }

    updateSpiralParticle(particle) {
      particle.angle += particle.angleSpeed;

      particle.x += particle.vx * 0.3 + Math.cos(particle.angle) * 2;
      particle.y += particle.vy * 0.3 + Math.sin(particle.angle) * 2;

      const centerX = this.getEffectiveCanvasWidth() / 2;
      const centerY = this.getEffectiveCanvasHeight() / 2;
      const distanceFromCenter = Math.sqrt(Math.pow(particle.x - centerX, 2) + Math.pow(particle.y - centerY, 2));

      if (distanceFromCenter > Math.min(this.getEffectiveCanvasWidth(), this.getEffectiveCanvasHeight()) / 3) {
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
      const centerX = this.config.animation.orbit.centerX || this.getEffectiveCanvasWidth() / 2;
      const centerY = this.config.animation.orbit.centerY || this.getEffectiveCanvasHeight() / 2;

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
      const effectiveWidth = this.getEffectiveCanvasWidth();
      const effectiveHeight = this.getEffectiveCanvasHeight();

      // Verificar que las coordenadas del ratón estén dentro del canvas
      if (this.mouse.x < 0 || this.mouse.x > effectiveWidth || this.mouse.y < 0 || this.mouse.y > effectiveHeight) {
        // Si el ratón está fuera del canvas, restaurar opacidad y aplicar fricción
        particle.opacity = particle.originalOpacity;
        particle.vx *= 0.98;
        particle.vy *= 0.98;
        return;
      }

      // Cache de distancias para optimizar cálculos
      const cacheKey = `${Math.floor(particle.x)}_${Math.floor(particle.y)}_${Math.floor(this.mouse.x)}_${Math.floor(this.mouse.y)}`;

      let mouseDistance;
      if (this.distanceCache.has(cacheKey)) {
        mouseDistance = this.distanceCache.get(cacheKey);
      } else {
        const dx = this.mouse.x - particle.x;
        const dy = this.mouse.y - particle.y;
        mouseDistance = Math.sqrt(dx * dx + dy * dy);

        // Limitar cache de distancias
        if (this.distanceCache.size > 500) {
          const firstKey = this.distanceCache.keys().next().value;
          this.distanceCache.delete(firstKey);
        }
        this.distanceCache.set(cacheKey, mouseDistance);
      }

      // Interacción con mouse/dedo principal
      this.updatePointerInteraction(particle, this.mouse.x, this.mouse.y, "mouse", mouseDistance);

      // Interacción con múltiples toques si está habilitado
      if (this.config.mouse.touch.multiTouch && this.touches.size > 0) {
        this.touches.forEach((touch, touchId) => {
          // Limpiar toques antiguos
          if (Date.now() - touch.time > 1000) {
            this.touches.delete(touchId);
            return;
          }

          // Verificar que el toque esté dentro del canvas
          if (touch.x >= 0 && touch.x <= effectiveWidth && touch.y >= 0 && touch.y <= effectiveHeight) {
            this.updatePointerInteraction(particle, touch.x, touch.y, "touch");
          }
        });
      }
    }

    updatePointerInteraction(particle, pointerX, pointerY, pointerType, preCalculatedDistance = null) {
      const dx = pointerX - particle.x;
      const dy = pointerY - particle.y;
      const distanceSq = dx * dx + dy * dy;

      // Usar distancia diferente para táctil
      const interactionDistance = pointerType === "touch" ? this.config.mouse.touch.touchDistance : this.config.mouse.distance;
      const interactionDistanceSq = interactionDistance * interactionDistance; // Evitar sqrt

      const attraction = pointerType === "touch" ? this.config.mouse.touch.touchAttraction : this.config.mouse.attraction;

      if (distanceSq < interactionDistanceSq) {
        // Usar aproximación rápida para la fuerza
        const force = (interactionDistanceSq - distanceSq) / interactionDistanceSq;

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

      const effectiveWidth = this.getEffectiveCanvasWidth();
      const effectiveHeight = this.getEffectiveCanvasHeight();

      if (this.config.animation.type === "wave") {
        if (particle.x > effectiveWidth + 10) {
          particle.x = -10;
        }
        if (particle.y < -10) particle.y = effectiveHeight + 10;
        if (particle.y > effectiveHeight + 10) particle.y = -10;
      } else {
        if (particle.x < -10) particle.x = effectiveWidth + 10;
        if (particle.x > effectiveWidth + 10) particle.x = -10;
        if (particle.y < -10) particle.y = effectiveHeight + 10;
        if (particle.y > effectiveHeight + 10) particle.y = -10;
      }
    }

    draw() {
      // Culling: solo limpiar área visible
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // Configurar contexto una sola vez
      this.ctx.globalCompositeOperation = "source-over";
      this.ctx.globalAlpha = 1;

      // Resetear sombras una sola vez
      this.ctx.shadowColor = "transparent";
      this.ctx.shadowBlur = 0;
      this.ctx.shadowOffsetX = 0;
      this.ctx.shadowOffsetY = 0;

      // Dibujar conexiones primero con optimización espacial
      this.drawConnectionsOptimized();

      // Dibujar partículas con culling
      this.drawParticlesOptimized();

      // Dibujar trail del mouse al final
      if (this.config.mouse.trail && this.mouse.trail.length > 1) {
        this.drawMouseTrailOptimized();
      }
    }

    drawMouseTrailOptimized() {
      if (this.mouse.trail.length < 3) return;

      const now = Date.now();
      const maxAge = this.config.mouse.trailFadeTime || 1500;

      // Obtener color base una sola vez
      let baseColor = this.config.mouse.trailColor || this.config.color.value || "#ffffff";
      let r = 255,
        g = 255,
        b = 255;

      if (baseColor.startsWith("#")) {
        const hex = baseColor.slice(1);
        r = parseInt(hex.slice(0, 2), 16);
        g = parseInt(hex.slice(2, 4), 16);
        b = parseInt(hex.slice(4, 6), 16);
      }

      // Configurar contexto una vez
      this.ctx.lineCap = "round";
      this.ctx.lineJoin = "round";

      // Solo usar una capa para mejor rendimiento
      this.ctx.globalCompositeOperation = "lighter";
      this.ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 0.8)`;
      this.ctx.shadowBlur = 8;

      // Dibujar trail optimizado
      for (let i = 2; i < this.mouse.trail.length; i++) {
        const point = this.mouse.trail[i];
        const prevPoint = this.mouse.trail[i - 1];

        const age = now - point.time;
        if (age > maxAge) continue;

        const ageOpacity = 1 - age / maxAge;
        const positionOpacity = (i - 1) / (this.mouse.trail.length - 1);
        const opacity = ageOpacity * positionOpacity;

        if (opacity > 0.05) {
          this.ctx.globalAlpha = opacity;
          this.ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
          this.ctx.lineWidth = 3 * (0.5 + positionOpacity * 0.5);

          this.ctx.beginPath();
          this.ctx.moveTo(prevPoint.x, prevPoint.y);
          this.ctx.lineTo(point.x, point.y);
          this.ctx.stroke();
        }
      }

      // Reset
      this.ctx.shadowColor = "transparent";
      this.ctx.shadowBlur = 0;
      this.ctx.globalCompositeOperation = "source-over";
      this.ctx.globalAlpha = 1;
    }

    drawParticlesOptimized() {
      // Preparar variables comunes
      let needsGlow = this.config.effects.glow;
      let needsShadow = this.config.effects.shadow;

      // Configurar efectos globales una vez
      if (needsGlow) {
        this.ctx.shadowColor = this.config.effects.glowColor;
        this.ctx.shadowBlur = this.config.effects.glowSize;
        this.ctx.shadowOffsetX = 0;
        this.ctx.shadowOffsetY = 0;
      } else if (needsShadow) {
        this.ctx.shadowColor = this.config.effects.shadowColor;
        this.ctx.shadowBlur = this.config.effects.shadowBlur;
        this.ctx.shadowOffsetX = this.config.effects.shadowOffset.x;
        this.ctx.shadowOffsetY = this.config.effects.shadowOffset.y;
      }

      // Culling bounds usando dimensiones efectivas
      const margin = 50; // Margen para partículas parcialmente visibles
      const minX = -margin;
      const maxX = this.getEffectiveCanvasWidth() + margin;
      const minY = -margin;
      const maxY = this.getEffectiveCanvasHeight() + margin;

      for (let i = 0; i < this.particles.length; i++) {
        const particle = this.particles[i];

        // Culling: solo dibujar partículas visibles
        if (particle.x < minX || particle.x > maxX || particle.y < minY || particle.y > maxY) {
          continue;
        }

        // Solo configurar opacity si es diferente
        if (this.ctx.globalAlpha !== particle.opacity) {
          this.ctx.globalAlpha = particle.opacity;
        }

        // Cache color y solo cambiar si es diferente
        const color = this.getParticleColor(particle);
        if (this.ctx.fillStyle !== color) {
          this.ctx.fillStyle = color;
        }

        // Aplicar rotación solo si es necesaria
        if (this.config.shape.rotation && particle.rotation !== 0) {
          this.ctx.save();
          this.ctx.translate(particle.x, particle.y);
          this.ctx.rotate(particle.rotation);
          this.ctx.translate(-particle.x, -particle.y);
          this.drawParticleShapeOptimized(particle);
          this.ctx.restore();
        } else {
          this.drawParticleShapeOptimized(particle);
        }
      }

      // Reset shadow una vez al final
      if (needsGlow || needsShadow) {
        this.ctx.shadowColor = "transparent";
        this.ctx.shadowBlur = 0;
        this.ctx.shadowOffsetX = 0;
        this.ctx.shadowOffsetY = 0;
      }
    }

    drawParticleShapeOptimized(particle) {
      const shape = this.config.shape.type;

      switch (shape) {
        case "square":
          const size = particle.size;
          this.ctx.fillRect(particle.x - size, particle.y - size, size * 2, size * 2);
          break;
        case "triangle":
        case "star":
        case "heart":
        case "polygon":
          // Para formas complejas, usar método original pero optimizado
          this.drawComplexShape(particle, shape);
          break;
        case "custom":
          if (this.config.shape.customPath) {
            this.config.shape.customPath(this.ctx, particle);
          } else {
            // Fallback a círculo
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fill();
          }
          break;
        case "circle":
        default:
          this.ctx.beginPath();
          this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          this.ctx.fill();
          break;
      }
    }

    drawComplexShape(particle, shape) {
      this.ctx.beginPath();

      switch (shape) {
        case "triangle":
          const size = particle.size;
          this.ctx.moveTo(particle.x, particle.y - size);
          this.ctx.lineTo(particle.x - size, particle.y + size);
          this.ctx.lineTo(particle.x + size, particle.y + size);
          this.ctx.closePath();
          break;
        case "star":
          this.drawStarPath(particle);
          break;
        case "heart":
          this.drawHeartPath(particle);
          break;
        case "polygon":
          this.drawPolygonPath(particle);
          break;
      }

      this.ctx.fill();
    }

    drawStarPath(particle) {
      const size = particle.size;
      const spikes = 5;
      const outerRadius = size;
      const innerRadius = size * 0.5;

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
    }

    drawHeartPath(particle) {
      const size = particle.size;
      const x = particle.x;
      const y = particle.y;

      this.ctx.moveTo(x, y + size / 2);
      this.ctx.bezierCurveTo(x, y, x - size / 2, y, x - size / 2, y + size / 4);
      this.ctx.bezierCurveTo(x - size / 2, y + size / 2, x, y + size / 2, x, y + size);
      this.ctx.bezierCurveTo(x, y + size / 2, x + size / 2, y + size / 2, x + size / 2, y + size / 4);
      this.ctx.bezierCurveTo(x + size / 2, y, x, y, x, y + size / 2);
    }

    drawPolygonPath(particle) {
      const size = particle.size;
      const sides = this.config.shape.sides;

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
    }

    drawConnectionsOptimized() {
      if (!this.config.connections.enabled) return;

      // Configurar estilos una sola vez
      this.ctx.globalCompositeOperation = "source-over";
      this.ctx.strokeStyle = this.config.connections.color;
      this.ctx.lineWidth = this.config.connections.width;
      this.ctx.lineCap = "round";

      // Configurar animación si está habilitada
      if (this.config.connections.animated) {
        this.ctx.setLineDash([5, 5]);
        this.ctx.lineDashOffset = this.connectionAnimationOffset;
      }

      const maxConnections = this.config.connections.maxConnections;
      const connectionDistance = this.config.connections.distance;
      const connectionDistanceSq = connectionDistance * connectionDistance; // Evitar sqrt
      let totalConnections = 0;

      // Usar spatial grid si está disponible
      if (this.spatialGrid.size > 0) {
        this.drawConnectionsWithSpatialGrid(connectionDistanceSq, maxConnections);
      } else {
        // Fallback al método tradicional pero optimizado
        this.drawConnectionsBruteForce(connectionDistanceSq, maxConnections);
      }

      // Reset line dash
      if (this.config.connections.animated) {
        this.ctx.setLineDash([]);
      }
    }

    drawConnectionsWithSpatialGrid(connectionDistanceSq, maxConnections) {
      const processedPairs = new Set();

      this.spatialGrid.forEach((particleIndices, gridKey) => {
        const [gridX, gridY] = gridKey.split(",").map(Number);

        // Verificar celdas adyacentes (incluyendo la actual)
        for (let dx = -1; dx <= 1; dx++) {
          for (let dy = -1; dy <= 1; dy++) {
            const neighborKey = `${gridX + dx},${gridY + dy}`;
            const neighborIndices = this.spatialGrid.get(neighborKey);

            if (!neighborIndices) continue;

            // Comparar partículas entre celdas
            for (const i of particleIndices) {
              let connectionCount = 0;

              for (const j of neighborIndices) {
                if (i >= j) continue; // Evitar duplicados
                if (maxConnections && connectionCount >= maxConnections) break;

                const pairKey = `${i}-${j}`;
                if (processedPairs.has(pairKey)) continue;
                processedPairs.add(pairKey);

                const p1 = this.particles[i];
                const p2 = this.particles[j];

                if (!p1 || !p2) continue; // Verificar existencia de partículas
                if (p1 === p2) continue; // Evitar auto-conexiones
                if (p1.opacity <= 0 || p2.opacity <= 0) continue; // Evitar partículas invisibles
                if (p1.size <= 0 || p2.size <= 0) continue; // Evitar partículas sin tamaño
                if (p1.x < 0 || p1.x > this.canvas.width || p1.y < 0 || p1.y > this.canvas.height || p2.x < 0 || p2.x > this.canvas.width || p2.y < 0 || p2.y > this.canvas.height) {
                  continue; // Evitar partículas fuera del canvas
                }

                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distanceSq = dx * dx + dy * dy;

                if (distanceSq < connectionDistanceSq) {
                  // Usar aproximación rápida para la opacidad basada en distanceSq
                  const normalizedDistSq = distanceSq / connectionDistanceSq;
                  const opacity = (1 - normalizedDistSq) * this.config.connections.opacity;

                  this.ctx.globalAlpha = Math.max(0.1, opacity);

                  this.ctx.beginPath();
                  this.ctx.moveTo(p1.x, p1.y);
                  this.ctx.lineTo(p2.x, p2.y);
                  this.ctx.stroke();

                  connectionCount++;
                }
              }
            }
          }
        }
      });
    }

    drawConnectionsBruteForce(connectionDistanceSq, maxConnections) {
      for (let i = 0; i < this.particles.length; i++) {
        let connectionCount = 0;
        const p1 = this.particles[i];

        for (let j = i + 1; j < this.particles.length; j++) {
          if (maxConnections && connectionCount >= maxConnections) break;

          const p2 = this.particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distanceSq = dx * dx + dy * dy;

          if (distanceSq < connectionDistanceSq) {
            // Usar aproximación rápida para la opacidad basada en distanceSq
            const normalizedDistSq = distanceSq / connectionDistanceSq;
            const opacity = (1 - normalizedDistSq) * this.config.connections.opacity;

            this.ctx.globalAlpha = Math.max(0.1, opacity);

            this.ctx.beginPath();
            this.ctx.moveTo(p1.x, p1.y);
            this.ctx.lineTo(p2.x, p2.y);
            this.ctx.stroke();

            connectionCount++;
          }
        }
      }
    }

    animate(currentTime = 0) {
      if (!this.isRunning) return;

      // Inicializar lastFrameTime en el primer frame
      if (!this.lastFrameTime) {
        this.lastFrameTime = currentTime;
        this.animationId = requestAnimationFrame((time) => this.animate(time));
        return;
      }

      // Calcular deltaTime
      this.deltaTime = currentTime - this.lastFrameTime;

      // Sistema de FPS mejorado usando acumulación de tiempo
      this.frameTimeAccumulator += this.deltaTime;

      if (this.frameTimeAccumulator < this.targetFrameTime) {
        this.animationId = requestAnimationFrame((time) => this.animate(time));
        return;
      }

      // Actualizar lastFrameTime
      this.lastFrameTime = currentTime;

      // Calcular cuántos frames procesar
      const framesToProcess = Math.floor(this.frameTimeAccumulator / this.targetFrameTime);
      this.frameTimeAccumulator -= framesToProcess * this.targetFrameTime;

      // Monitoreo de rendimiento optimizado
      this.frameCount++;

      if (currentTime - this.lastFPSUpdate > 1000) {
        this.currentFPS = this.frameCount;

        // Limpieza de memoria cada 5 segundos aprox
        if (this.currentFPS > 0 && Date.now() % 5000 < 1000) {
          // Limpiar arrays de trail si hay muchos elementos
          if (this.mouse.trail.length > 100) {
            this.mouse.trail = this.mouse.trail.slice(-50);
          }
          // Forzar garbage collection si está disponible
          if (window.gc) window.gc();
        }

        this.frameCount = 0;
        this.lastFPSUpdate = currentTime;

        // Actualizar targetFrameTime si cambió maxFPS
        this.targetFrameTime = 1000 / this.config.performance.maxFPS;

        // Ajuste adaptativo de calidad menos frecuente
        if (this.config.performance.adaptiveQuality) {
          this.adaptiveQualityAdjustment();
        }
      }

      // Procesar solo un frame por tick para mejor control de FPS
      this.update(currentTime);
      this.draw();

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

      // Limpiar event listeners
      if (this.mouseHandler) {
        if (this.config.container === document.body) {
          document.removeEventListener("mousemove", this.mouseHandler);
          document.removeEventListener("mouseleave", this.mouseLeaveHandler);
          document.removeEventListener("click", this.clickHandler);
        } else {
          this.config.container.removeEventListener("mousemove", this.mouseHandler);
          this.config.container.removeEventListener("mouseleave", this.mouseLeaveHandler);
          this.config.container.removeEventListener("click", this.clickHandler);
        }

        // Limpiar mouseleave del canvas también
        if (this.canvas && this.mouseLeaveHandler) {
          this.canvas.removeEventListener("mouseleave", this.mouseLeaveHandler);
        }
      }

      if (this.touchStartHandler && this.config.mouse.touch.enabled) {
        this.canvas.removeEventListener("touchstart", this.touchStartHandler);
        this.canvas.removeEventListener("touchmove", this.touchMoveHandler);
        this.canvas.removeEventListener("touchend", this.touchEndHandler);
      }

      // Limpiar otros event listeners globales
      window.removeEventListener("resize", this.resizeHandler);
      if (this.orientationChangeHandler) {
        window.removeEventListener("orientationchange", this.orientationChangeHandler);
      }
      window.removeEventListener("blur", this.blurHandler);
      window.removeEventListener("focus", this.focusHandler);
      document.removeEventListener("visibilitychange", this.visibilityChangeHandler);

      // Limpiar intersection observer
      if (this.intersectionObserver) {
        this.intersectionObserver.disconnect();
        this.intersectionObserver = null;
      }

      // Remover canvas
      if (this.canvas && this.canvas.parentNode) {
        this.canvas.parentNode.removeChild(this.canvas);
      }

      // Limpiar referencias y caches
      this.canvas = null;
      this.ctx = null;
      this.particles = [];
      this.mouse = { x: 0, y: 0, trail: [] };
      this.touches.clear();

      // Limpiar caches de optimización
      this.colorCache.clear();
      this.distanceCache.clear();
      this.spatialGrid.clear();
      this.trailPool = [];
      this.connectionPairs = [];

      // Limpiar handlers
      this.mouseHandler = null;
      this.mouseLeaveHandler = null;
      this.touchStartHandler = null;
      this.touchMoveHandler = null;
      this.touchEndHandler = null;
      this.clickHandler = null;
      this.resizeHandler = null;
      this.orientationChangeHandler = null;
      this.blurHandler = null;
      this.focusHandler = null;
      this.visibilityChangeHandler = null;
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

    // Método de diagnóstico para debugging
    diagnose() {
      const diagnostics = {
        // Información del dispositivo
        device: {
          userAgent: navigator.userAgent,
          isMobile: this.isMobile,
          touchSupport: "ontouchstart" in window,
          maxTouchPoints: navigator.maxTouchPoints,
          devicePixelRatio: window.devicePixelRatio,
          screenSize: `${window.innerWidth}x${window.innerHeight}`,
        },

        // Estado del canvas
        canvas: {
          exists: !!this.canvas,
          contextExists: !!this.ctx,
          size: this.canvas ? `${this.canvas.width}x${this.canvas.height}` : "N/A",
          inDOM: this.canvas ? document.contains(this.canvas) : false,
        },

        // Estado de la animación
        animation: {
          isRunning: this.isRunning,
          currentFPS: this.currentFPS,
          particleCount: this.particles.length,
          performanceMode: this.performanceMode,
        },

        // Configuración crítica
        config: {
          touchEnabled: this.config.mouse.touch.enabled,
          mouseInteract: this.config.mouse.interact,
          connections: this.config.connections.enabled,
          maxFPS: this.config.performance.maxFPS,
        },
      };

      return diagnostics;
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
      // this.config.mouse.trail = false;

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

    // Configuraciones de viewport preestablecidas
    viewport: {
      lazy: { enabled: true, threshold: 0.1, rootMargin: "50px", once: true },
      eager: { enabled: true, threshold: 0.01, rootMargin: "100px", once: false },
      strict: { enabled: true, threshold: 0.5, rootMargin: "0px", once: true },
    },

    // Función de utilidad para crear múltiples instancias con viewport loading
    createLazyFlux: (selector, baseConfig = {}) => {
      const elements = document.querySelectorAll(selector);
      const instances = [];

      elements.forEach((element) => {
        const config = {
          ...baseConfig,
          container: element,
          viewport: { enabled: true, ...baseConfig.viewport },
        };
        instances.push(new FluxJS(config));
      });

      return instances;
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

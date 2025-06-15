/**
 * FluxJS - Librería de partículas animadas para fondos web
 * Versión: 1.0.0
 * Autor: FluxJS Team
 */

(function (global) {
  "use strict";

  class FluxJS {
    constructor(options = {}) {
      // Configuración por defecto
      this.config = {
        container: options.container || document.body,
        count: options.count || 50,
        color: options.color || "#ffffff",
        size: {
          min: options.size?.min || 1,
          max: options.size?.max || 3,
        },
        speed: {
          min: options.speed?.min || 0.1,
          max: options.speed?.max || 0.5,
        },
        opacity: {
          min: options.opacity?.min || 0.3,
          max: options.opacity?.max || 0.8,
        },
        connections: {
          enabled: options.connections?.enabled !== false,
          distance: options.connections?.distance || 100,
          color: options.connections?.color || options.color || "#ffffff",
          opacity: options.connections?.opacity || 0.3,
        },
        mouse: {
          interact: options.mouse?.interact !== false,
          distance: options.mouse?.distance || 150,
          attraction: options.mouse?.attraction || 0.05,
        },
        responsive: options.responsive !== false,
        animation: options.animation || "float", // 'float', 'bounce', 'spiral'
        background: options.background || "transparent",
      };

      this.particles = [];
      this.mouse = { x: 0, y: 0 };
      this.canvas = null;
      this.ctx = null;
      this.animationId = null;
      this.isRunning = false;

      this.init();
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
      this.canvas.style.pointerEvents = "none";
      this.canvas.style.background = this.config.background;

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
        this.canvas.style.zIndex = "-1";
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
        this.canvas.style.zIndex = "1";
        this.config.container.appendChild(this.canvas);
      }

      this.resize();
    }

    setupEventListeners() {
      // Redimensionar canvas
      window.addEventListener("resize", () => this.resize());

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
        };

        document.addEventListener("mousemove", mouseHandler);

        // También escuchar en el contenedor específico para mayor precisión
        if (this.config.container !== document.body) {
          this.config.container.addEventListener("mousemove", mouseHandler);
        }
      }

      // Responsive - ajustar partículas según el tamaño de pantalla
      if (this.config.responsive) {
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
    }

    adjustParticleCount() {
      const area = this.canvas.width * this.canvas.height;
      const baseArea = 1920 * 1080; // Full HD como referencia
      const ratio = area / baseArea;
      const adjustedCount = Math.max(10, Math.floor(this.config.count * ratio));

      if (adjustedCount !== this.particles.length) {
        this.particles = [];
        this.config.count = adjustedCount;
        this.createParticles();
      }
    }

    createParticles() {
      this.particles = [];

      for (let i = 0; i < this.config.count; i++) {
        this.particles.push(this.createParticle());
      }
    }

    createParticle() {
      return {
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * (this.config.speed.max - this.config.speed.min) + this.config.speed.min,
        vy: (Math.random() - 0.5) * (this.config.speed.max - this.config.speed.min) + this.config.speed.min,
        size: Math.random() * (this.config.size.max - this.config.size.min) + this.config.size.min,
        opacity: Math.random() * (this.config.opacity.max - this.config.opacity.min) + this.config.opacity.min,
        originalOpacity: 0,
        angle: Math.random() * Math.PI * 2, // Para animación espiral
        angleSpeed: (Math.random() - 0.5) * 0.02,
      };
    }

    updateParticles() {
      this.particles.forEach((particle) => {
        // Guardar opacidad original
        if (particle.originalOpacity === 0) {
          particle.originalOpacity = particle.opacity;
        }

        // Actualizar posición según el tipo de animación
        switch (this.config.animation) {
          case "bounce":
            this.updateBounceParticle(particle);
            break;
          case "spiral":
            this.updateSpiralParticle(particle);
            break;
          default: // 'float'
            this.updateFloatParticle(particle);
            break;
        }

        // Interacción con el mouse
        if (this.config.mouse.interact) {
          this.updateMouseInteraction(particle);
        }

        // Mantener partículas dentro del canvas
        this.wrapParticle(particle);
      });
    }

    updateFloatParticle(particle) {
      particle.x += particle.vx;
      particle.y += particle.vy;
    }

    updateBounceParticle(particle) {
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Rebotar en los bordes
      if (particle.x <= 0 || particle.x >= this.canvas.width) {
        particle.vx *= -1;
      }
      if (particle.y <= 0 || particle.y >= this.canvas.height) {
        particle.vy *= -1;
      }
    }

    updateSpiralParticle(particle) {
      particle.angle += particle.angleSpeed;
      particle.x += particle.vx + Math.cos(particle.angle) * 0.5;
      particle.y += particle.vy + Math.sin(particle.angle) * 0.5;
    }

    updateMouseInteraction(particle) {
      const dx = this.mouse.x - particle.x;
      const dy = this.mouse.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.config.mouse.distance) {
        const force = (this.config.mouse.distance - distance) / this.config.mouse.distance;
        const attraction = this.config.mouse.attraction * force;

        particle.vx += dx * attraction;
        particle.vy += dy * attraction;

        // Aumentar opacidad cerca del mouse
        particle.opacity = particle.originalOpacity + force * 0.3;
      } else {
        // Restaurar opacidad original
        particle.opacity = particle.originalOpacity;

        // Aplicar fricción para volver a velocidad normal
        particle.vx *= 0.98;
        particle.vy *= 0.98;
      }
    }

    wrapParticle(particle) {
      if (this.config.animation !== "bounce") {
        if (particle.x < -10) particle.x = this.canvas.width + 10;
        if (particle.x > this.canvas.width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = this.canvas.height + 10;
        if (particle.y > this.canvas.height + 10) particle.y = -10;
      }
    }

    drawParticles() {
      this.particles.forEach((particle) => {
        this.ctx.save();
        this.ctx.globalAlpha = particle.opacity;
        this.ctx.fillStyle = this.config.color;
        this.ctx.beginPath();
        this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.restore();
      });
    }

    drawConnections() {
      if (!this.config.connections.enabled) return;

      for (let i = 0; i < this.particles.length; i++) {
        for (let j = i + 1; j < this.particles.length; j++) {
          const dx = this.particles[i].x - this.particles[j].x;
          const dy = this.particles[i].y - this.particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < this.config.connections.distance) {
            const opacity = (this.config.connections.distance - distance) / this.config.connections.distance;

            this.ctx.save();
            this.ctx.globalAlpha = opacity * this.config.connections.opacity;
            this.ctx.strokeStyle = this.config.connections.color;
            this.ctx.lineWidth = 0.5;
            this.ctx.beginPath();
            this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
            this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
            this.ctx.stroke();
            this.ctx.restore();
          }
        }
      }
    }

    animate() {
      if (!this.isRunning) return;

      // Limpiar canvas
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // Actualizar y dibujar partículas
      this.updateParticles();
      this.drawConnections();
      this.drawParticles();

      // Continuar animación
      this.animationId = requestAnimationFrame(() => this.animate());
    }

    // Métodos públicos
    start() {
      if (!this.isRunning) {
        this.isRunning = true;
        this.animate();
      }
    }

    stop() {
      this.isRunning = false;
      if (this.animationId) {
        cancelAnimationFrame(this.animationId);
        this.animationId = null;
      }
    }

    destroy() {
      this.stop();
      if (this.canvas && this.canvas.parentNode) {
        this.canvas.parentNode.removeChild(this.canvas);
      }

      // Limpiar event listeners
      window.removeEventListener("resize", this.resize);

      // Nota: Los event listeners del mouse se limpian automáticamente
      // cuando se destruye el canvas, pero se podría mejorar guardando
      // las referencias de las funciones para removeEventListener

      this.canvas = null;
      this.ctx = null;
      this.particles = [];
    }

    // Métodos de configuración dinámica
    updateConfig(newConfig) {
      Object.assign(this.config, newConfig);
      this.createParticles();
    }

    setColor(color) {
      this.config.color = color;
    }

    setCount(count) {
      this.config.count = count;
      this.createParticles();
    }

    addParticle(x, y) {
      const particle = this.createParticle();
      if (x !== undefined) particle.x = x;
      if (y !== undefined) particle.y = y;
      this.particles.push(particle);
    }

    // Presets de configuración
    static presets = {
      stars: {
        count: 100,
        color: "#ffffff",
        size: { min: 1, max: 2 },
        speed: { min: 0.05, max: 0.15 },
        connections: { enabled: false },
        animation: "float",
      },
      network: {
        count: 50,
        color: "#00ff88",
        size: { min: 2, max: 4 },
        speed: { min: 0.1, max: 0.3 },
        connections: { enabled: true, distance: 120 },
        animation: "float",
      },
      bubbles: {
        count: 30,
        color: "#4FC3F7",
        size: { min: 3, max: 8 },
        speed: { min: 0.2, max: 0.8 },
        connections: { enabled: false },
        animation: "bounce",
        opacity: { min: 0.2, max: 0.6 },
      },
      spiral: {
        count: 40,
        color: "#FF6B6B",
        size: { min: 2, max: 5 },
        speed: { min: 0.1, max: 0.4 },
        connections: { enabled: true, distance: 80 },
        animation: "spiral",
      },
    };
  }

  // Función de inicialización rápida
  function createFlux(options = {}) {
    return new FluxJS(options);
  }

  // Funciones de utilidad para presets
  createFlux.stars = (container, options = {}) => {
    return new FluxJS({ ...FluxJS.presets.stars, container, ...options });
  };

  createFlux.network = (container, options = {}) => {
    return new FluxJS({ ...FluxJS.presets.network, container, ...options });
  };

  createFlux.bubbles = (container, options = {}) => {
    return new FluxJS({ ...FluxJS.presets.bubbles, container, ...options });
  };

  createFlux.spiral = (container, options = {}) => {
    return new FluxJS({ ...FluxJS.presets.spiral, container, ...options });
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

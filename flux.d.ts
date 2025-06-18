// Interfaces y tipos para FluxJS
export interface FluxPoint {
  x: number;
  y: number;
}

export interface FluxColorConfig {
  type?: "single" | "gradient" | "rainbow" | "random";
  value?: string;
  gradient?: string[];
  rainbowSpeed?: number;
  randomPalette?: string[];
}

export interface FluxSizeConfig {
  min?: number;
  max?: number;
  pulse?: boolean;
  pulseSpeed?: number;
  pulseIntensity?: number;
  distribution?: "uniform" | "gaussian" | "exponential";
}

export interface FluxSpeedConfig {
  min?: number;
  max?: number;
  acceleration?: number;
  turbulence?: number;
  turbulenceFrequency?: number;
}

export interface FluxOpacityConfig {
  min?: number;
  max?: number;
  fadeIn?: boolean;
  fadeInDuration?: number;
  flicker?: boolean;
  flickerSpeed?: number;
}

export interface FluxConnectionsConfig {
  enabled?: boolean;
  distance?: number;
  color?: string;
  opacity?: number;
  width?: number;
  maxConnections?: number | null;
  animated?: boolean;
  animationSpeed?: number;
  curve?: boolean;
}

export interface FluxTouchConfig {
  enabled?: boolean;
  multiTouch?: boolean;
  touchDistance?: number;
  touchAttraction?: number;
}

export interface FluxMouseConfig {
  interact?: boolean;
  distance?: number;
  attraction?: number;
  repulsion?: boolean;
  repulsionForce?: number;
  trail?: boolean;
  trailLength?: number;
  // Nuevos tipos para trail avanzado
  trailWidth?: number;
  trailColor?: string;
  trailGlow?: boolean;
  trailFadeTime?: number;
  sparkles?: boolean;
  onClick?: (() => void) | null;
  magnetism?: boolean;
  magnetismStrength?: number;
  touch?: FluxTouchConfig;
}

export interface FluxPhysicsConfig {
  gravity?: number;
  gravityDirection?: "up" | "down" | "left" | "right";
  friction?: number;
  bounce?: number;
  wind?: number;
  windDirection?: number;
}

export interface FluxEffectsConfig {
  glow?: boolean;
  glowColor?: string;
  glowSize?: number;
  shadow?: boolean;
  shadowColor?: string;
  shadowBlur?: number;
  shadowOffset?: FluxPoint;
  twinkle?: boolean;
  twinkleSpeed?: number;
}

export interface FluxShapeConfig {
  type?: "circle" | "square" | "triangle" | "star" | "heart" | "custom";
  sides?: number;
  customPath?: ((ctx: CanvasRenderingContext2D, particle: FluxParticle) => void) | null;
  rotation?: boolean;
  rotationSpeed?: number;
}

export interface FluxBreakpoint {
  width: number;
  particles: number;
  maxFPS: number;
  simplifyEffects: boolean;
}

export interface FluxResponsiveConfig {
  enabled?: boolean;
  breakpoints?: {
    mobile?: FluxBreakpoint;
    tablet?: FluxBreakpoint;
    desktop?: FluxBreakpoint;
  };
  scaleWithContainer?: boolean;
  detectDevice?: boolean;
}

export interface FluxWaveConfig {
  amplitude?: number;
  frequency?: number;
  speed?: number;
}

export interface FluxOrbitConfig {
  centerX?: number | null;
  centerY?: number | null;
  radius?: number;
  speed?: number;
}

export interface FluxAnimationConfig {
  type?: "float" | "bounce" | "spiral" | "wave" | "orbit";
  speed?: number;
  direction?: "random" | "up" | "down" | "left" | "right";
  wave?: FluxWaveConfig;
  orbit?: FluxOrbitConfig;
}

export interface FluxCanvasConfig {
  background?: string;
  blur?: boolean;
  blurAmount?: number;
  zIndex?: number;
  opacity?: number;
}

export interface FluxMobilePerformanceConfig {
  reducedMotion?: boolean;
  batteryOptimization?: boolean;
  memoryLimit?: number;
  useTransform3d?: boolean;
  // Nuevos tipos para optimizaciones móviles
  enableHardwareAcceleration?: boolean;
  touchThrottling?: number;
  simplifyShapes?: boolean;
  reduceTrail?: boolean;
}

export interface FluxPerformanceConfig {
  maxFPS?: number;
  enableWebGL?: boolean;
  optimizeConnections?: boolean;
  pauseOnBlur?: boolean;
  adaptiveQuality?: boolean;
  // Nuevos tipos para rendimiento avanzado
  cullingEnabled?: boolean;
  spatialGrid?: boolean;
  objectPooling?: boolean;
  cacheOptimization?: boolean;
  batteryMonitoring?: boolean;
  mobile?: FluxMobilePerformanceConfig;
}

export interface FluxViewportConfig {
  enabled?: boolean;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export interface FluxEventsConfig {
  onInit?: ((flux: FluxJS) => void) | null;
  onStart?: ((flux: FluxJS) => void) | null;
  onStop?: ((flux: FluxJS) => void) | null;
  onResize?: ((flux: FluxJS) => void) | null;
  onParticleClick?: ((particle: FluxParticle, flux: FluxJS) => void) | null;
  onParticleHover?: ((particle: FluxParticle, flux: FluxJS) => void) | null;
  onViewportEnter?: ((flux: FluxJS, entry: IntersectionObserverEntry) => void) | null;
  onViewportExit?: ((flux: FluxJS, entry: IntersectionObserverEntry) => void) | null;
  // Nuevos eventos para dispositivos móviles
  onTouchStart?: ((touches: TouchList, flux: FluxJS) => void) | null;
  onTouchMove?: ((touches: TouchList, flux: FluxJS) => void) | null;
  onTouchEnd?: ((touches: TouchList, flux: FluxJS) => void) | null;
  onOrientationChange?: ((orientation: string, flux: FluxJS) => void) | null;
  onBatteryLow?: ((batteryInfo: FluxBatteryInfo, flux: FluxJS) => void) | null;
  onPerformanceChange?: ((performanceInfo: FluxPerformanceInfo, flux: FluxJS) => void) | null;
  // Eventos de diagnóstico
  onError?: ((error: Error, flux: FluxJS) => void) | null;
  onWarning?: ((warning: string, flux: FluxJS) => void) | null;
}

export interface FluxOptions {
  container?: HTMLElement;
  count?: number;
  color?: FluxColorConfig | string;
  size?: FluxSizeConfig;
  speed?: FluxSpeedConfig;
  opacity?: FluxOpacityConfig;
  connections?: FluxConnectionsConfig;
  mouse?: FluxMouseConfig;
  physics?: FluxPhysicsConfig;
  effects?: FluxEffectsConfig;
  shape?: FluxShapeConfig;
  responsive?: FluxResponsiveConfig;
  animation?: FluxAnimationConfig | string;
  canvas?: FluxCanvasConfig;
  background?: string;
  performance?: FluxPerformanceConfig;
  viewport?: FluxViewportConfig;
  events?: FluxEventsConfig;
  // Nuevas opciones para características móviles
  gestures?: FluxGestureConfig;
  accessibility?: FluxAccessibilityConfig;
  diagnostics?: FluxDiagnosticsConfig;
}

export interface FluxParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  originalSize: number;
  originalOpacity: number;
  angle: number;
  pulsePhase: number;
  flickerPhase: number;
  twinklePhase: number;
  colorIndex?: number;
  rotationAngle?: number;
  waveOffset?: number;
  orbitAngle?: number;
  orbitRadius?: number;
  orbitCenterX?: number;
  orbitCenterY?: number;
  spiralAngle?: number;
  spiralRadius?: number;
  initialDirection?: FluxPoint;
  connections?: FluxParticle[];
  fadeInStartTime?: number;
}

export interface FluxMouse {
  x: number;
  y: number;
  trail: FluxPoint[];
  // Nuevos tipos para información del mouse
  isMoving?: boolean;
  velocity?: FluxPoint;
  lastMoveTime?: number;
}

// Nuevo tipo para información de dispositivos móviles
export interface FluxDeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  touchSupport: boolean;
  maxTouchPoints: number;
  orientation?: "portrait" | "landscape";
  pixelRatio: number;
  screenSize: {
    width: number;
    height: number;
  };
}

// Nuevo tipo para información de batería
export interface FluxBatteryInfo {
  level?: number;
  charging?: boolean;
  chargingTime?: number;
  dischargingTime?: number;
  supported: boolean;
}

// Nuevo tipo para información de rendimiento extendida
export interface FluxPerformanceInfo {
  fps: number;
  maxFPS: number;
  particleCount: number;
  performanceMode: string;
  isMobile: boolean;
  devicePixelRatio: number;
  touchCount: number;
  canvasSize: {
    width: number;
    height: number;
  };
  // Nuevos campos para información extendida
  memoryUsage?: number;
  batteryInfo?: FluxBatteryInfo;
  deviceInfo?: FluxDeviceInfo;
  renderTime?: number;
  updateTime?: number;
  connectionCount?: number;
}

// Nuevos tipos para características específicas de móviles
export interface FluxGestureConfig {
  enabled?: boolean;
  pinchZoom?: boolean;
  swipeDirection?: "all" | "horizontal" | "vertical" | "none";
  tapSensitivity?: number;
  longPressDuration?: number;
  doubleTapDelay?: number;
}

export interface FluxAccessibilityConfig {
  respectReducedMotion?: boolean;
  highContrast?: boolean;
  screenReaderSupport?: boolean;
  keyboardNavigation?: boolean;
  focusIndicators?: boolean;
}

export interface FluxDiagnosticsConfig {
  enabled?: boolean;
  collectPerformanceMetrics?: boolean;
  logErrors?: boolean;
  logWarnings?: boolean;
  collectDeviceInfo?: boolean;
  collectBatteryInfo?: boolean;
}

export interface FluxUtils {
  generateColorPalette: (baseColor: string, count?: number) => string[];
  createGradient: (colors: string[], type?: string) => FluxColorConfig;
  createLazyFlux: (selector: string, baseConfig?: FluxOptions) => FluxJS[];
  // Nuevas utilidades para dispositivos móviles
  detectDevice: () => FluxDeviceInfo;
  isTouchDevice: () => boolean;
  getBatteryStatus: () => Promise<FluxBatteryInfo>;
  optimizeConfigForDevice: (config: FluxOptions, device: FluxDeviceInfo) => FluxOptions;
  // Utilidades de rendimiento
  measurePerformance: (callback: () => void) => number;
  createPerformancePreset: (device: FluxDeviceInfo) => Partial<FluxOptions>;
  physics: {
    earth: FluxPhysicsConfig;
    space: FluxPhysicsConfig;
    water: FluxPhysicsConfig;
    wind: FluxPhysicsConfig;
  };
  viewport: {
    lazy: FluxViewportConfig;
    eager: FluxViewportConfig;
    strict: FluxViewportConfig;
  };
  // Nuevos presets para dispositivos
  device: {
    mobile: Partial<FluxOptions>;
    tablet: Partial<FluxOptions>;
    desktop: Partial<FluxOptions>;
    lowEnd: Partial<FluxOptions>;
  };
}

export interface FluxPresets {
  default: FluxOptions;
  snow: FluxOptions;
  stars: FluxOptions;
  bubbles: FluxOptions;
  fire: FluxOptions;
  electric: FluxOptions;
  galaxy: FluxOptions;
  matrix: FluxOptions;
  hearts: FluxOptions;
}

export class FluxJS {
  static presets: FluxPresets;

  config: Required<FluxOptions>;
  particles: FluxParticle[];
  mouse: FluxMouse;
  canvas: HTMLCanvasElement | null;
  ctx: CanvasRenderingContext2D | null;
  animationId: number | null;
  isRunning: boolean;
  isMobile: boolean;
  touches: Set<any>;
  currentFPS: number;
  performanceMode: string;
  devicePixelRatio: number;
  // Nuevas propiedades para funcionalidades móviles
  batteryInfo?: FluxBatteryInfo;
  deviceInfo?: FluxDeviceInfo;
  touchHandler?: any;
  intersectionObserver?: IntersectionObserver;

  constructor(options?: FluxOptions);

  // Métodos principales
  init(): void;
  start(): void;
  stop(): void;
  destroy(): void;
  resize(): void;

  // Métodos de configuración
  updateConfig(newConfig: Partial<FluxOptions>): void;
  setColor(color: string | FluxColorConfig): void;
  setCount(count: number): void;
  setAnimation(animationType: string, options?: Partial<FluxAnimationConfig>): void;
  setPhysics(physicsConfig: Partial<FluxPhysicsConfig>): void;
  setEffects(effectsConfig: Partial<FluxEffectsConfig>): void;

  // Métodos de partículas
  addParticle(x?: number, y?: number, customConfig?: Partial<FluxParticle>): FluxParticle;
  removeParticle(index: number): void;
  getParticleAt(x: number, y: number, tolerance?: number): FluxParticle | undefined;

  // Métodos de efectos
  explode(x: number, y: number, force?: number, radius?: number): void;
  attract(x: number, y: number, force?: number, radius?: number): void;

  // Métodos de optimización
  forceMobileOptimization(): void;
  optimizeForLowEndDevice(): void;
  // Nuevos métodos para información de dispositivo
  getDeviceInfo(): FluxDeviceInfo;
  getBatteryInfo(): Promise<FluxBatteryInfo>;
  checkBatteryLevel(): Promise<void>;
  optimizeForBattery(): void;

  // Métodos de información
  getPerformanceInfo(): FluxPerformanceInfo;
  // Nuevos métodos para diagnóstico
  runDiagnostics(): Promise<any>;
  getMemoryUsage(): number;
}

export interface CreateFluxFunction {
  (options?: FluxOptions): FluxJS;
  default: (container: HTMLElement, options?: FluxOptions) => FluxJS;
  snow: (container: HTMLElement, options?: FluxOptions) => FluxJS;
  stars: (container: HTMLElement, options?: FluxOptions) => FluxJS;
  bubbles: (container: HTMLElement, options?: FluxOptions) => FluxJS;
  fire: (container: HTMLElement, options?: FluxOptions) => FluxJS;
  electric: (container: HTMLElement, options?: FluxOptions) => FluxJS;
  galaxy: (container: HTMLElement, options?: FluxOptions) => FluxJS;
  matrix: (container: HTMLElement, options?: FluxOptions) => FluxJS;
  hearts: (container: HTMLElement, options?: FluxOptions) => FluxJS;
  custom: (config: FluxOptions) => FluxJS;
  utils: FluxUtils;
}

declare const createFlux: CreateFluxFunction;

export { createFlux };
export default FluxJS;

# FluxJS 🌟

¿Cansado de fondos web tan aburridos que dan sueño? 😴 FluxJS es tu dosis de cafeína digital. Una librería tan traviesa que hará que tus partículas bailen, conspiren y seduzcan a tus visitantes hasta que no puedan apartar la mirada.

## ✨ Lo que te espera (prepárate para la diversión)

- 🚀 **Ridículamente fácil** - Si sabes escribir una línea, ya eres peligroso
- 🎨 **Más personalizable que tu café matutino** - Colores, tamaños, velocidades... ¡tú mandas!
- 📱 **Responsive por naturaleza** - Se adapta como un camaleón travieso
- 🖱️ **Le gusta coquetear** - Las partículas persiguen tu cursor como cachorros
- 🔗 **Conspiraciones visuales** - Líneas que conectan partículas como una red secreta
- 🎭 **Múltiples personalidades** - Float, bounce, spiral... ¡cada una más loca que la anterior!
- 📦 **Funciona en todos lados** - Script directo, ES6, CommonJS... es un todoterreno
- ⚡ **Más rápido que tus excusas** - Optimizado para que no se queje ni tu abuela con su PC del 2010

## 🚀 Instalación (o cómo empezar la fiesta)

### Como Script Directo (para los impacientes)

```html
<script src="flux.js"></script>
<script>
  // ¡BAM! Partículas instantáneas
  const flux = createFlux();
</script>
```

### Como Módulo ES6 (para los elegantes)

```javascript
import { FluxJS, createFlux } from "./flux.js";

const flux = createFlux(); // Así de simple, así de travieso
```

### Como CommonJS (para los clásicos)

```javascript
const { FluxJS, createFlux } = require("./flux.js");

const flux = createFlux(); // Old school pero con estilo
```

## 📖 Uso Básico (o cómo hacer magia con pocas líneas)

### Para los Perezosos (una línea y listo)

```javascript
// ¡BOOM! Todo el body se convierte en un parque de diversiones
const flux = createFlux();
```

### Para los Controladores Obsesivos

```javascript
// Solo queremos partículas en NUESTRO territorio
const container = document.getElementById("particles-container");
const flux = createFlux({ container: container });
```

### Para los Perfeccionistas (a jugar con TODO)

```javascript
const flux = createFlux({
  count: 100, // ¿100 partículas? ¡Suena a diversión!
  color: "#00ff88", // Verde neón porque somos rebeldes
  size: { min: 1, max: 4 }, // De pequeñitas a... no tan pequeñitas
  speed: { min: 0.1, max: 0.5 }, // Velocidad: desde perezosa hasta hiperactiva
  connections: {
    enabled: true, // ¡Que conspiren entre ellas!
    distance: 120, // Distancia social... pero no tanto
    color: "#00ff88", // Misma conspiración, mismo color
    opacity: 0.3, // Un poquito transparentes, como secretos
  },
  mouse: {
    interact: true, // ¡Que te persigan como fans!
    distance: 150, // ¿150px? Perfecto para el acoso amigable
    attraction: 0.05, // Atracción sutil pero irresistible
  },
  animation: "float", // 'float', 'bounce', 'spiral' - elige tu locura
});
```

## 🎨 Presets para Vagos (efectos instantáneos)

¿No tienes tiempo para personalizar? Aquí tienes efectos pre-hechos que funcionan de inmediato:

### Estrellas Traviesas ⭐

```javascript
const flux = createFlux.stars(); // Cielo nocturno instantáneo
```

### Red Conspiratoria 🕸️

```javascript
const flux = createFlux.network(); // Matrix vibes, but cooler
```

### Burbujas Rebeldes 🫧

```javascript
const flux = createFlux.bubbles(); // Diversión acuática digital
```

### Espiral Hipnótica 🌀

```javascript
const flux = createFlux.spiral(); // ¡Cuidado! Puede causar adicción
```

## ⚙️ Configuración Completa (para los que lo quieren TODO)

```javascript
const flux = createFlux({
  container: document.body, // Tu reino (por defecto: todo el body)
  count: 50, // ¿Cuántas travesuras quieres?
  color: "#ffffff", // El color de la diversión

  // Tamaño: desde hormiguitas hasta monstruitos
  size: {
    min: 1, // Pequeñitas y tímidas
    max: 3, // Grandes y atrevidas
  },

  // Velocidad: desde chill hasta hiperactivas
  speed: {
    min: 0.1, // Modo zen
    max: 0.5, // Modo Red Bull
  },

  // Opacidad: desde fantasmitas hasta protagonistas
  opacity: {
    min: 0.3, // Discretas
    max: 0.8, // ¡Aquí estoy!
  },

  // Conexiones: la red social de las partículas
  connections: {
    enabled: true, // ¿Quieres conspiración? ¡SÍ!
    distance: 100, // Máxima distancia para chismorrear
    color: "#ffffff", // Color de los chismes
    opacity: 0.3, // Secretos semi-transparentes
  },

  // Mouse: el imán de la diversión
  mouse: {
    interact: true, // ¡Que te sigan como groupies!
    distance: 150, // Radio de influencia
    attraction: 0.05, // ¿Qué tan magnético eres?
  },

  responsive: true, // Se adapta como un camaleón
  animation: "float", // Tu estilo de locura preferido
  background: "transparent", // Fondo invisible = máxima integración
});
```

## 🎮 Métodos de Control (¡tú eres el jefe!)

### Dominio Total de la Diversión

```javascript
flux.start(); // ¡ACCIÓN! 🎬
flux.stop(); // Pausa para tomar aire
flux.destroy(); // Adiós mundo cruel (pero puedes volver)
```

### Cambios sobre la Marcha (sin reiniciar la fiesta)

```javascript
// Cambiar todo lo que quieras sin parar
flux.updateConfig({
  color: "#ff6b6b", // Nuevo look, misma actitud
  count: 80, // Más partículas = más diversión
});

// Cambios específicos porque eres exigente
flux.setColor("#00ff88"); // Solo el color, por favor
flux.setCount(100); // Solo la cantidad, gracias

// Invocar una partícula donde TÚ quieras
flux.addParticle(100, 200); // X=100, Y=200. ¡Aparece, criatura!
```

## 🎯 Ejemplos de Uso (inspiración instantánea)

### Fondo Estelar para Landing Page (porque todos necesitan magia)

```javascript
createFlux.stars(document.body, {
  count: 150, // Cielo lleno de estrellas traviesas
  color: "#ffffff", // Blanco clásico, nunca falla
  mouse: { interact: false }, // Que no molesten al usuario
});
```

### Red Conspiratoria para Página Tech (Matrix style)

```javascript
createFlux.network(document.getElementById("hero"), {
  color: "#00ff88", // Verde hacker, obvio
  connections: { distance: 150 }, // Más conexiones = más conspiración
});
```

### Burbujas Flotantes para Página Creativa (diversión acuática)

```javascript
createFlux.bubbles(document.querySelector(".creative-section"), {
  count: 25, // No muchas, pero grandes
  color: "#4FC3F7", // Azul agua cristalina
  size: { min: 5, max: 15 }, // Desde gotitas hasta globos
});
```

## 🎨 Tipos de Animación (elige tu personalidad)

- **`float`** - Movimiento libre y relajado (zen mode activado)
- **`bounce`** - Rebotes por todos lados (modo pinball)
- **`spiral`** - Patrones hipnóticos (cuidado: puede causar adicción)

## 📱 Responsive (se adapta como un ninja)

FluxJS es más inteligente que tu promedio de JavaScript:

- En pantallas pequeñas se pone modesto y reduce las partículas automáticamente
- En móviles no mata la batería (tus usuarios te lo agradecerán)
- Si eres rebelde, puedes desactivarlo con `responsive: false`

## 🎪 Casos de Uso (donde brillar con estilo)

- **Landing Pages**: Fondos estelares que enamoran desde el primer scroll
- **Portfolios**: Efectos tan cool que hablan por sí solos
- **Páginas Tech**: Redes futuristas que gritan "soy desarrollador pro"
- **Sitios Creativos**: Burbujas, espirales y efectos que despiertan la imaginación
- **Presentaciones Web**: Fondos dinámicos que hacen que nadie se duerma

## ⚡ Rendimiento (rápido como un rayo, suave como la seda)

- Usa `requestAnimationFrame` porque no somos animales
- Maneja cientos de partículas sin hacer sudar a tu CPU
- Canvas con `pointer-events: none` para no fastidiar la navegación
- Se ajusta automáticamente según el tamaño de pantalla (smart, ¿verdad?)

## 🔧 Compatibilidad (funciona hasta en el microondas)

- ✅ Chrome, Firefox, Safari, Edge (los usual suspects)
- ✅ Dispositivos móviles (sí, también en tu Nokia 3310... ok, no tanto)
- ✅ ES6+ & ES5 compatible (para todos los gustos)
- ✅ CommonJS & AMD compatible (somos inclusivos)

## 📄 Licencia

MIT License - Libre como el viento. Úsalo, modifícalo, véndelo, regálalo... ¡haz lo que se te ocurra!

---

**¡Convierte tu web de aburrida a adictiva con FluxJS!** ⚡✨  
_Porque la vida es demasiado corta para fondos estáticos_ 😎

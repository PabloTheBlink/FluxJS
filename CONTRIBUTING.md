# 🤝 Guía de Contribución para FluxJS

¡Gracias por tu interés en contribuir a FluxJS! Esta guía te ayudará a entender cómo puedes participar en el desarrollo de esta librería de partículas animadas.

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [Tipos de Contribuciones](#tipos-de-contribuciones)
- [Configuración del Entorno](#configuración-del-entorno)
- [Proceso de Desarrollo](#proceso-de-desarrollo)
- [Estándares de Código](#estándares-de-código)
- [Convenciones de Commits](#convenciones-de-commits)
- [Reportar Bugs](#reportar-bugs)
- [Sugerir Features](#sugerir-features)
- [Pull Requests](#pull-requests)
- [Testing](#testing)

## 🤝 Código de Conducta

Al participar en este proyecto, te comprometes a mantener un ambiente respetuoso y colaborativo. Se espera que todos los participantes:

- Usen un lenguaje acogedor e inclusivo
- Respeten diferentes puntos de vista y experiencias
- Acepten críticas constructivas de manera elegante
- Se enfoquen en lo que es mejor para la comunidad
- Muestren empatía hacia otros miembros de la comunidad

## 🎯 Tipos de Contribuciones

### 🐛 Reportar Bugs

- Usa el template de issue para bugs
- Incluye información del navegador y OS
- Proporciona pasos para reproducir el problema
- Adjunta screenshots o videos si es relevante

### 💡 Sugerir Features

- Explica el problema que resuelve tu propuesta
- Describe la solución que imaginas
- Considera alternativas que hayas evaluado
- Proporciona mockups o ejemplos si es posible

### 📝 Mejorar Documentación

- Corrige errores tipográficos
- Mejora explicaciones poco claras
- Añade ejemplos prácticos
- Traduce contenido a otros idiomas

### 🔧 Contribuir Código

- Implementa nuevas características
- Optimiza código existente
- Refactoriza para mejorar mantenibilidad
- Añade tests para tus cambios

### 🎨 Crear Ejemplos

- Desarrolla demos interactivas
- Crea casos de uso específicos
- Documenta configuraciones avanzadas
- Diseña tutoriales paso a paso

## ⚙️ Configuración del Entorno

### Prerrequisitos

- **Node.js** (versión 16 o superior)
- **Git** para control de versiones
- **Editor de código** (VS Code recomendado)

### Configuración Inicial

1. **Fork el repositorio**

   ```bash
   # Haz click en "Fork" en GitHub
   ```

2. **Clona tu fork**

   ```bash
   git clone https://github.com/tu-usuario/FluxJS.git
   cd FluxJS
   ```

3. **Configura el remote upstream**

   ```bash
   git remote add upstream https://github.com/usuario-original/FluxJS.git
   ```

4. **Instala dependencias (si las hay)**

   ```bash
   npm install
   ```

5. **Crea una rama para tu trabajo**
   ```bash
   git checkout -b feature/mi-nueva-caracteristica
   ```

## 🔄 Proceso de Desarrollo

### 1. Mantén tu fork actualizado

```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

### 2. Desarrolla en una rama separada

```bash
git checkout -b feature/nombre-descriptivo
```

### 3. Haz commits frecuentes

```bash
git add .
git commit -m "feat: añadir nueva función de partículas"
```

### 4. Testea tus cambios

- Prueba en diferentes navegadores
- Verifica que no hayas roto funcionalidad existente
- Valida el rendimiento

### 5. Prepara el Pull Request

```bash
git push origin feature/nombre-descriptivo
```

## 📝 Estándares de Código

### Estilo JavaScript

```javascript
// ✅ Bueno
const particleSystem = new FluxJS({
  particleCount: 100,
  colors: ["#ff0000", "#00ff00", "#0000ff"],
});

// ❌ Malo
const ps = new FluxJS({ particleCount: 100, colors: ["#ff0000", "#00ff00", "#0000ff"] });
```

### Convenciones de Nomenclatura

- **Variables y funciones**: `camelCase`
- **Constantes**: `UPPER_SNAKE_CASE`
- **Clases**: `PascalCase`
- **Archivos**: `kebab-case.js`

### Comentarios

```javascript
/**
 * Crea una nueva partícula con las propiedades especificadas
 * @param {Object} options - Opciones de configuración
 * @param {number} options.x - Posición X inicial
 * @param {number} options.y - Posición Y inicial
 * @returns {Particle} Nueva instancia de partícula
 */
function createParticle(options) {
  // Implementación aquí
}
```

### Estructura del Código

```javascript
// 1. Imports/requires al inicio
import { utils } from "./utils.js";

// 2. Constantes
const DEFAULT_CONFIG = {
  // configuración
};

// 3. Clase principal
class FluxJS {
  constructor(options = {}) {
    // constructor
  }

  // 4. Métodos públicos primero
  init() {
    // método público
  }

  // 5. Métodos privados después
  _updateParticles() {
    // método privado
  }
}

// 6. Export al final
export default FluxJS;
```

## 📝 Convenciones de Commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/) para mantener un historial claro:

### Tipos de Commits

- **feat**: Nueva característica
- **fix**: Corrección de bug
- **docs**: Cambios en documentación
- **style**: Cambios de formato (espacios, comas, etc.)
- **refactor**: Refactorización de código
- **test**: Añadir o modificar tests
- **chore**: Tareas de mantenimiento

### Ejemplos

```bash
# Nueva característica
git commit -m "feat: añadir soporte para partículas triangulares"

# Corrección de bug
git commit -m "fix: corregir cálculo de colisiones en bordes"

# Documentación
git commit -m "docs: actualizar guía de instalación"

# Refactorización
git commit -m "refactor: simplificar lógica de animación"
```

### Formato Completo

```
tipo(scope): descripción breve

Descripción más detallada del cambio, explicando
qué se cambió y por qué.

Fixes #123
```

## 🐛 Reportar Bugs

### Antes de Reportar

1. **Busca issues existentes** para evitar duplicados
2. **Verifica con la última versión** del código
3. **Reproduce el bug** en diferentes navegadores
4. **Prepara información relevante**

### Template de Bug Report

```markdown
**Descripción del Bug**
Una descripción clara y concisa del problema.

**Pasos para Reproducir**

1. Ve a '...'
2. Haz click en '....'
3. Desplázate hacia abajo hasta '....'
4. Ve el error

**Comportamiento Esperado**
Una descripción clara de lo que esperabas que pasara.

**Screenshots**
Si es aplicable, añade screenshots para ayudar a explicar el problema.

**Información del Entorno:**

- OS: [ej. iOS]
- Navegador: [ej. chrome, safari]
- Versión: [ej. 22]
- Versión de FluxJS: [ej. 1.0.1]

**Contexto Adicional**
Añade cualquier otro contexto sobre el problema aquí.
```

## 💡 Sugerir Features

### Template de Feature Request

```markdown
**¿Tu feature request está relacionado con un problema?**
Una descripción clara y concisa del problema. Ej. Siempre me frustra cuando [...]

**Describe la solución que te gustaría**
Una descripción clara y concisa de lo que quieres que pase.

**Describe alternativas que hayas considerado**
Una descripción clara y concisa de soluciones o features alternativos que hayas considerado.

**Contexto adicional**
Añade cualquier otro contexto o screenshots sobre el feature request aquí.
```

## 🔄 Pull Requests

### Checklist antes de enviar

- [ ] He leído la guía de contribución
- [ ] Mi código sigue las convenciones del proyecto
- [ ] He comentado mi código, especialmente en áreas difíciles
- [ ] He hecho cambios correspondientes en la documentación
- [ ] Mis cambios no generan nuevas advertencias
- [ ] He añadido tests que prueban mi fix o feature
- [ ] Tests nuevos y existentes pasan localmente
- [ ] He verificado que mi código funciona en diferentes navegadores

### Proceso de Review

1. **Creación**: Crea el PR con una descripción clara
2. **Review automático**: GitHub Actions ejecutará tests
3. **Review manual**: Un maintainer revisará el código
4. **Cambios**: Implementa feedback si es necesario
5. **Aprobación**: Una vez aprobado, será merged

### Template de Pull Request

```markdown
## Descripción

Descripción breve de los cambios realizados.

## Tipo de cambio

- [ ] Bug fix (cambio no rompedor que soluciona un issue)
- [ ] Nueva feature (cambio no rompedor que añade funcionalidad)
- [ ] Breaking change (fix o feature que causaría que funcionalidad existente no funcione como se espera)
- [ ] Cambio de documentación

## ¿Cómo se ha testeado?

Describe las pruebas que ejecutaste para verificar tus cambios.

## Checklist:

- [ ] Mi código sigue las guías de estilo del proyecto
- [ ] He realizado una auto-review de mi código
- [ ] He comentado mi código, particularmente en áreas difíciles de entender
- [ ] He hecho cambios correspondientes a la documentación
- [ ] Mis cambios no generan nuevas advertencias
- [ ] He añadido tests que prueban que mi fix es efectivo o que mi feature funciona
- [ ] Tests nuevos y existentes pasan localmente con mis cambios
```

## 🧪 Testing

### Testing Manual

```bash
# Abre los archivos de ejemplo en diferentes navegadores
open demo.html
open examples.html
open index.html
```

### Testing de Rendimiento

```javascript
// Monitorea FPS
const flux = new FluxJS({
  debug: true, // Muestra información de debug
  performance: {
    maxFPS: 60,
    showFPS: true,
  },
});
```

### Testing de Compatibilidad

Prueba en:

- **Chrome/Chromium** (últimas 2 versiones)
- **Firefox** (últimas 2 versiones)
- **Safari** (últimas 2 versiones)
- **Edge** (últimas 2 versiones)
- **Dispositivos móviles** (iOS Safari, Chrome Mobile)

## 🚀 Deployment y Release

Los mantainers del proyecto se encargan del proceso de release:

1. **Versioning**: Seguimos [Semantic Versioning](https://semver.org/)
2. **Changelog**: Se actualiza automáticamente
3. **NPM**: Se publica en npm registry
4. **CDN**: Se actualiza el CDN
5. **Documentation**: Se actualizan los docs

## 🆘 ¿Necesitas Ayuda?

Si tienes preguntas sobre cómo contribuir:

- **Crea un issue** con la etiqueta `question`
- **Únete a las discusiones** en GitHub Discussions
- **Revisa issues existentes** etiquetados como `good first issue`

## 🏆 Reconocimiento

Todos los contribuidores son reconocidos:

- **README.md**: Lista de colaboradores
- **Contributors page**: Página dedicada
- **Release notes**: Menciones en releases

¡Gracias por contribuir a FluxJS! 🎉

---

_Esta guía está viva y evoluciona. Si tienes sugerencias para mejorarla, ¡no dudes en proponer cambios!_

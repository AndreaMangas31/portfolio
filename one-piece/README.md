# One Piece - Character Explorer

Proyecto frontend que muestra cartas de personajes de One Piece. Construido con Vite + React + TailwindCSS. Consume la API pública (documentación: https://api-onepiece.com/en/documentation).

# Deployment
https://one-piece-landing.vercel.app/

## Tecnologías
- React
- Vite
- TailwindCSS
- JavaScript / TypeScript (según archivos del proyecto)
- fetch / Axios para llamadas HTTP

## Demo
(Usar la build en `public/` o `build/` para desplegar estático)

## Instalación (macOS)
1. Clonar repositorio
   - git clone <repo-url>
2. Entrar al proyecto
   - cd /Users/andream31/Desktop/portfolio/one-piece
3. Instalar dependencias
   - pnpm install
4. Ejecutar en modo desarrollo
   - pnpm dev

## Scripts útiles
- pnpm dev — arranca el servidor de desarrollo
- pnpm build — crear build de producción
- pnpm preview — servir la carpeta build localmente

## Estructura principal
- src/
  - api/ — cliente API e interfaces (p. ej. apiClient.ts)
  - features/ — lógica y vistas por feature (character)
  - ui/ — componentes reutilizables (cards, layouts)
  - styles/ — estilos globales
- public/ — assets públicos
- build/ — contenido de build (si existe)

## Integración con la API (resumen)
La documentación oficial está en: https://api-onepiece.com/en/documentation

Recomendaciones generales:
- Configurar base URL en variables de entorno (Vite usa import.meta.env):
  - Crear `.env` o `.env.local`:
    VITE_API_BASE=https://api-onepiece.com

Ejemplo usando fetch (simple):
```javascript
const BASE = import.meta.env.VITE_API_BASE || "https://api-onepiece.com";

async function fetchCharacters() {
  const res = await fetch(`${BASE}/characters`);
  if (!res.ok) throw new Error("Error al obtener personajes");
  return res.json();
}
```

Ejemplo usando axios:
```javascript
import axios from "axios";
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || "https://api-onepiece.com",
  // headers: { Authorization: `Bearer ${import.meta.env.VITE_API_KEY}` } // si aplica
});

export const getCharacters = () => api.get("/characters");
```

Nota: revisar la documentación oficial para rutas exactas, parámetros de búsqueda, paginación y autenticación.

## Buenas prácticas
- Usa import.meta.env para claves y base URL.
- Maneja errores y estados de carga en hooks (ver `src/features/character/hooks`).
- Cachea respuestas cuando sea conveniente (SW, React Query u otro).

## Despliegue
- Generar build: `pnpm build`
- Subir `dist/` o `build/` a Netlify / Vercel / GitHub Pages
- Asegurar variables de entorno en la plataforma de despliegue

## Contribuir
- Crear rama por feature: `git checkout -b feat/nombre`
- Abrir PR con descripción clara

## Licencia
Añadir archivo LICENSE según preferencia (p. ej. MIT).

---
Documentación API completa: https://api-onepiece.com/en/documentation

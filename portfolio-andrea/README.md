# Portfolio - Andrea

Proyecto: portfolio personal construido con React + TypeScript + Vite y TailwindCSS. Muestra secciones de experiencia, proyectos, intereses y multimedia.
# Despliegue
https://portfolio-cj62l73va-andreamangas31s-projects.vercel.app

## Tecnologías
- React + TypeScript
- Vite
- TailwindCSS
- PNPM (gestor de paquetes)
- Estructura modular por features y componentes

## Requisitos
- Node.js (recomendado >= 16)
- pnpm instalado (https://pnpm.io/)

## Instalación (Mac)
1. Clonar repositorio
   - git clone <repo-url>
2. Abrir carpeta del proyecto
   - cd /Users/andream31/Desktop/portfolio/portfolio-andrea
3. Instalar dependencias
   - pnpm install
4. Ejecutar en modo desarrollo
   - pnpm dev
   - Por defecto Vite sirve en http://localhost:5173

## Scripts útiles
- pnpm dev — modo desarrollo
- pnpm build — construir para producción
- pnpm preview — vista previa del build local
- pnpm lint — (si está configurado en package.json)

## Estructura principal
- src/
  - assets/ — imágenes y recursos
  - components/ — componentes reutilizables (cards, header, footer)
  - features/
    - projects/ — datos, interfaces y vistas de proyectos
      - services/data.ts — donde actualizar los proyectos y skills
    - about-me/, contact/, look-into-it/ — secciones del sitio
  - layouts/, pages/ — enrutado y plantillas
  - styles/ — estilos Tailwind y CSS adicionales

## ¿Dónde editar contenido?
- Proyectos: `src/features/projects/services/data.ts`
- Experiencias: `src/features/projects/services/data.ts` y `src/features/projects/services/interfaces.ts`
- Texto y secciones: archivos dentro de `src/features/*/view` y `src/features/*/components`

## Despliegue
- Plataformas recomendadas: Vercel, Netlify
- Configurar build command: `pnpm build` y carpeta de salida `dist`

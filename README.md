# Portafolio digital · TFI Adopción de Rust vs C++

Sitio web estático del Trabajo Final Integrador. Funciona localmente con doble click y se despliega directo en GitHub Pages.

## Estructura

```
portfolio/
├── index.html              ← Home: resumen del trabajo + métricas + secciones
├── presentacion.html       ← Las 18 slides interactivas con menú de secciones
├── descargas.html          ← Página de descargas
└── assets/
    ├── css/shared.css      ← Estilos comunes a las tres páginas
    ├── js/shared.js        ← Toggle del menú mobile
    ├── img/                ← 6 figuras PNG del modelo
    ├── pdf/                ← El informe completo (29 páginas)
    └── zip/                ← El ZIP con Código/, Datasets/ y PDF (1.4 MB)
```

## Probar localmente

Doble click en `index.html`. Funciona en cualquier navegador moderno sin necesidad de servidor.

Si por alguna razón el navegador bloquea el JavaScript de archivos locales, levantá un servidor mínimo:
```bash
cd portfolio
python -m http.server 8000
# Abrí http://localhost:8000
```

## Personalización antes de publicar

Reemplazá `[Tu nombre]` y `[Nombre del docente]` si aparecen aún en la slide 1 de `presentacion.html` (en `index.html` ya está como **Elias Uribe**).

## Desplegar en GitHub Pages

1. Creá un repo nuevo en GitHub (puede ser público o privado si tenés Pro).
2. Subí todo el contenido de `portfolio/` a la raíz del repo (no subas la carpeta `portfolio/`, sino su contenido).
3. En el repo: **Settings → Pages → Source → Deploy from a branch → main / root → Save**.
4. Esperá 1-2 minutos. Tu sitio queda en `https://<usuario>.github.io/<repo>/`.

### Comandos completos (desde la terminal)

```bash
cd portfolio
git init
git add .
git commit -m "Portafolio digital TFI"
git branch -M main
git remote add origin https://github.com/<usuario>/<repo>.git
git push -u origin main
```

Después configurás GitHub Pages desde Settings.

## Características

- **Responsive**: funciona desde mobile (390px) hasta desktop 4K.
- **Sin dependencias de servidor**: 100% estático, perfecto para GitHub Pages.
- **Accesible**: focus visible, navegación por teclado, ARIA labels, `prefers-reduced-motion`.
- **Tipografía**: Fraunces (display) + Inter (cuerpo) + JetBrains Mono (código), desde Google Fonts.
- **Chart.js**: embebido inline en `presentacion.html` (no requiere CDN para los gráficos del slideshow).

## Atajos de teclado en la presentación

- `←` `→` `Espacio` — navegar entre slides
- `Inicio` `Fin` — primera / última slide
- `M` — abrir menú de acceso rápido a secciones
- `?` — mostrar panel de ayuda
- `Esc` — cerrar overlays

## Tres páginas

### `index.html` (home)
Resumen del trabajo en una sola página. Sirve como puerta de entrada al portafolio.

Secciones: hero con datos del estudiante, métricas clave (R², RMSE, año 2028), el problema, metodología, modelo Bass con ecuación, parámetros, resultados con figuras, descubrimiento clave (q > p), respuesta cuantitativa (2028), recursos del portafolio, conclusiones, footer.

### `presentacion.html`
Las 18 slides interactivas con el simulador en vivo del modelo Bass. Mantiene todo el contenido original más:
- Link **← Inicio** en la topbar para volver al portafolio
- Botón **SECCIONES** en la topbar que abre un menú con las 18 slides agrupadas
- Atajo `M` para abrir el menú desde teclado

### `descargas.html`
Botón principal para descargar el ZIP completo (1.4 MB) con la estructura solicitada por la cátedra (`Código/`, `Datasets/`, PDF). Más abajo: descargas individuales por archivo y pasos para reproducir el análisis localmente.

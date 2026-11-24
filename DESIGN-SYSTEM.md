# Sistema visual de Profe Macón

Esta referencia describe la portada actual. Los valores compartidos están en `assets/css/styles.css`; las ilustraciones y ondas conservan colores propios.

## Colores semánticos

| Función | Claro | Oscuro |
| --- | --- | --- |
| Fondo general `--background` | `#f5f8fa` | `#101b25` |
| Superficie y encabezado | `#fff` | `#182936` |
| Hero | `#f9fcfc` | `#152530` |
| Texto principal `--navy` | `#09243b` | `#e3eef4` |
| Título principal `--ink` | `#090b10` | `#f1f7fa` |
| Texto secundario `--muted` | `#4a606b` | `#b1c4d0` |
| Acento `--petrol` | `#07576a` | `#83e0db` |
| Lavanda en texto | `#8574be` | `#c9bafa` |
| Borde | `#eaf0f2` | `#344957` |
| Borde hover | `#93cbc8` | `#83e0db` |
| Superficie de acento | `#d9f5f2` | `#223c49` |
| Foco | `#8574be` | `#c9bafa` |

Los SVG originales usan el lavanda `#827ab8`. Las cajas de iconos mantienen el degradado `#087789` → `#075064`, con trazos blancos, en ambos temas.

## Tipografía y composición

Montserrat variable local, pesos 100–900, con Arial y sans-serif como alternativas. Cuerpo 400 y línea 1,6; H1 y H2 800; H3 700; navegación y botones 600. H1: `clamp(2.8rem, 5vw, 4.6rem)` (en escritorio de altura hasta 800 px: `clamp(2.6rem, 3.7vw, 3.25rem)`); H2 de espacios: `clamp(1.75rem, 2.4vw, 2rem)`; H3: `1.08rem`. El texto y espaciado varían por componente. El contenedor mide hasta 1200 px, con 24 px de margen lateral (16 px en móvil). La cuadrícula usa 18 px de separación y pasa de cuatro a dos columnas a 900 px y a una a 600 px.

## Componentes e interacción

- Tarjetas: superficie y borde semánticos, radio 18 px, padding 20 px 22 px; sombra `0 12px 35px rgba(9,36,59,.09)` en claro y `0 12px 35px #0005` en oscuro. Hover eleva 4 px, cambia borde y sombra y desplaza la flecha 4 px. Foco con contorno de 3 px y separación de 4 px.
- Botones: radio completo, borde de 2 px, padding `.7rem 1.2rem`; primario petróleo `#07576a` con texto blanco en claro y `#83e0db` con texto `#10232b` en oscuro; secundario con superficie clara `#ffffffba` o superficie oscura, con borde y texto de acento. El hover eleva 2 px.
- Selector: dos botones de 44 × 44 px, fondo de acento y opción activa en superficie con sombra; `aria-pressed` comunica la selección. Los botones muestran contorno al pasar el puntero y foco visible al usar teclado.
- Las transiciones duran 200 ms; `prefers-reduced-motion` las desactiva. Los enlaces conservan su comportamiento nativo de activación.
- Banner: radio 24 px, degradados `#092d43` → `#07576a` y radial `#147d85`. El estado informativo usa texto `#b8f8f0` y punto `#9af3ee`.

## Marca

Utilizar `logo-profemacon-fondo-claro.svg` y `logo-pm-fondo-claro.svg` sobre superficies claras, y sus equivalentes `fondo-oscuro.svg` sobre superficies oscuras. Mantener proporciones y transparencia. El favicon usa el símbolo claro; la imagen social conserva el PNG por compatibilidad. Los SVG suministrados contienen texto que depende de Gill Sans MT y no llevan la fuente incrustada: para una reproducción idéntica en cualquier dispositivo se necesitan exportaciones del original con el texto convertido a trazados. No aplicar filtros ni redibujar los originales.

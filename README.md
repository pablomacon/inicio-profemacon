# Profe Macón · página de inicio

Portal estático de acceso a los espacios educativos de Profe Macón, como apoyo a la enseñanza presencial de programación y ciencias de la computación.

## Archivos

- `index.html`: contenido, navegación, enlaces e iconos SVG.
- `assets/css/styles.css`: diseño adaptable, colores y tipografía.
- `assets/js/theme.js`: selección del tema y preferencia guardada en el navegador.
- `assets/img/`: logotipos para los modos claro y oscuro.
- `assets/fonts/`: Montserrat variable y su licencia SIL Open Font License.

Los colores principales se definen en variables CSS de `:root`, con ajustes adicionales en las reglas de cada componente y del modo oscuro. Se utiliza Montserrat para títulos y texto, con pesos adaptados a cada jerarquía. La portada es estática y no requiere dependencias de ejecución. El selector de tema usa JavaScript para respetar la preferencia del sistema y guardar la elección en el navegador.

## Vista previa

Abrir `index.html` en un navegador o ejecutar `python -m http.server 8000` desde esta carpeta y visitar `http://localhost:8000/`.

## Enlaces y nuevos espacios

Los destinos están en los atributos `href` de las tarjetas en `index.html`. Para añadir un espacio, duplicar una tarjeta, actualizar su destino, título, descripción e icono, y comprobar su orden y accesibilidad. La cuadrícula se adapta al número de tarjetas.

Las referencias al CSS y al JavaScript en `index.html` incluyen un número de versión (por ejemplo, `?v=2`). Al modificar uno de esos archivos, actualizar su número de versión para que los navegadores soliciten el archivo nuevo en lugar de reutilizar una copia antigua en caché.

## Cloudflare Pages

El repositorio está conectado a Cloudflare Pages: los cambios enviados a `main` activan el despliegue de producción. El sitio es estático, no tiene comando de compilación y usa `/` como directorio de salida. No se necesitan funciones ni variables de entorno. Tras publicar, comprobar el estado del despliegue y la versión servida en el dominio.

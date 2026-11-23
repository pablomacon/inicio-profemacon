# Profe Macón · página de inicio

Portal estático de acceso a los espacios educativos de Profe Macón, como apoyo a la enseñanza presencial de programación y ciencias de la computación.

## Archivos

- `index.html`: contenido, navegación, enlaces e iconos SVG.
- `assets/css/styles.css`: diseño adaptable, colores y tipografía.
- `assets/img/`: logotipos originales.
- `assets/fonts/`: Montserrat variable y su licencia SIL Open Font License.

La paleta y el diseño se centralizan en las variables CSS de `:root`. Se utiliza Montserrat para títulos y texto, con pesos adaptados a cada jerarquía. El sitio no requiere JavaScript ni dependencias de ejecución.

## Vista previa

Abrir `index.html` en un navegador o ejecutar `python -m http.server 8000` desde esta carpeta y visitar `http://localhost:8000/`.

## Enlaces y nuevos espacios

Los destinos están en los atributos `href` de las tarjetas en `index.html`. Para añadir un espacio, duplicar una tarjeta, actualizar su destino, título, descripción e icono, y comprobar su orden y accesibilidad. La cuadrícula se adapta al número de tarjetas.

## Cloudflare Pages

Conectar el repositorio en Cloudflare Pages, seleccionar la rama deseada y elegir una configuración de sitio estático sin comando de compilación. Usar `/` como directorio de salida. Revisar la vista previa antes de publicar y configurar el dominio por separado. No se necesitan funciones ni variables de entorno.

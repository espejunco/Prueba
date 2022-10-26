# Empezando con Create React App

## Scripts disponibles

Al descargar el repositorio ejecute

###`npm install`

Para descargar las dependencias y poder arrancar el proyecto con

### `npm start`

Abre [http://localhost:3000](http://localhost:3000) para verla en tu navegador.

La página se recargará cuando hagas cambios.
También puedes ver cualquier error de lint en la consola.

### `npm test`

Lanza el ejecutor de pruebas en el modo de vigilancia interactiva.\N
Vea la sección sobre [ejecución de pruebas](https://facebook.github.io/create-react-app/docs/running-tests) para más información.

### `npm run build`

Construye la aplicación para producción en la carpeta `build`.
Agrupa correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

La compilación está minificada y los nombres de los archivos incluyen los hashes.
Tu aplicación está lista para ser desplegada.

# Información sobre el proyecto

Se trata de una ecommerce de dispositivos electrónicos como móviles y ipads.

## Vista principal

Encontramos en un primer lugar una barra de navegación con el logo a la izquierda que siempre redigirá a la misma, a la derecha el icono del carrito.

Debajo del logo de encunetra el breadcrums con el directorio en el que estamos.

Por último se observa las cartas donde está la imagen del producto, modelo, marca y precio, para acceder a la información del mismo se debe clicar en la imagen, que nos llevará a la segunda vista.

## Vista secundaria

El Topbar siempre estará presente y tendrá el mismo funcionamiento que en la primera opción, ya que es un componente reutilizable para todas las vistas.

En el body vemos dos columnas, la de la izquierda con la imagen del producto con el tamaño idóneo para su correcta visualización manteniendo su calidad, y en la de la derecha una tabla con sus características principales, debajo de la misma vemos dos apartados más donde podremos elegir tanto el color como el almacenamiento.

# Observaciones

La función de añadir cartas al carrito no funciona ya que existen problemas con el Post al entregar los datos al backend, lo he intentado de varias formas sin éxito.


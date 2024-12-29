# APITASK

API para la gestión de tareas con funcionalidades de creación, consulta, actualización y eliminación. Esta API está documentada con Swagger y utiliza MongoDB para el almacenamiento de datos.

## Enlace a la Aplicación Desplegada

[Ver aplicación en producción](https://taskapimanager.onrender.com)

## Instalación y Ejecución Local para la Base de Datos en Local

Si deseas ejecutar la API en tu entorno local y usar MongoDB de manera local, sigue las instrucciones a continuación. La URL de conexión a la base de datos está configurada como `mongodb://127.0.0.1:27017/apiTask`.

### Requisitos previos

1. Tener instalado [Node.js](https://nodejs.org) y [npm](https://www.npmjs.com/).
2. Tener una base de datos MongoDB instalada localmente o configurada en [MongoDB Atlas](https://www.mongodb.com/atlas). Si usas una base de datos local, asegúrate de tener MongoDB Compass o la interfaz de tu preferencia para interactuar con la base de datos.

### Pasos para instalar y ejecutar el proyecto

1. Clona este repositorio:
   ```bash
   git clone https://github.com/bichozx/taskApiManager
   cd taskApiManager
   ```
2. npm install

3. Configura la base de datos local:

Abre MongoDB Compass o tu herramienta de administración MongoDB preferida.
Si estás usando MongoDB localmente, asegúrate de que el servicio de MongoDB esté corriendo. La URL de conexión será:
bash
mongodb://127.0.0.1:27017/apiTask

4. Configura la variable de entorno dbURI para que apunte a tu base de datos MongoDB. Puedes hacerlo en un archivo .env en la raíz del proyecto o directamente en el código. El valor por defecto es:
   dbURI='mongodb://127.0.0.1:27017/apiTask'

5. Ejecuta la API localmente:
   npm start

6. Accede a la documentación de la API con Swagger en la siguiente URL:
   http://localhost:8082/api-docs

Despliegue en Producción
La API está desplegada en Render y se conecta a MongoDB Atlas para almacenamiento de datos. Puedes acceder a la API en producción a través del siguiente enlace:

API en producción: https://taskapimanager.onrender.com

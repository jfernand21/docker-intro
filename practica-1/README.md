
## Comando Docker para ejecutar la aplicacion:
````
docker build . -t practica1:<tag>
````
## Ejecutar el contenedor
````
docker run -e MONGODB_URI=<IP_DB> -p3000:3000 practica1:<tag>
````
### Configuracion del servicio de MongoDB
#### Variables de Entorno
**`MONGODB_URI`:** Especifica la URL  a conectar por defecto `localhost`
**`MONGODB_PORT`:** Especifica el Puerto por defecto `27017`
**`MONGODB_DB`:** Especifica la Base de Datos por defecto `TEST`
**`PORT`:** Especifica el puerto para el servicio express por defecto `3000`
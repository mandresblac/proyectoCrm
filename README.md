# Indice

1. [Descripción del proyecto](#Descripción-del-proyecto)

2. [Instalación](#Instalación)

3. [Configuración](#Configuración)

4. [Estructura del proyecto](#Estructura-del-proyecto)

5. [Tecnologías, bibliotecas y frameworks utilizados en el proyecto](#Tecnologías-bibliotecas-y-frameworks-utilizados-en-el-proyecto)

6. [Diccionario de datos](#Diccionario-de-datos)

7. [Construcción y despliegue](#Construcción-y-despliegue)

8. [Uso de la aplicación](#Uso-de-la-aplicación)

9. [Contacto](#Contacto)

# Descripción del proyecto:

Un programa informático para la gestión de la relación con los clientes o CRM (Customer Relationship Management) es una herramienta indispensable para que las empresas puedan situar al cliente en el centro de su negocio y tomar mejores decisiones al disponer de una información más profunda y precisa.
<br />
<br />
El proposito principal de este proyecto esta directamente relacionado con los clientes potenciales de un negocio, y responde a las necesidades actuales de las empresas para poder competir en un mercado globalizado y dependiente de tecnologías como internet, los teléfonos móviles y la computación en la nube.
<br />
<br />
sus objetivos principales son:
<br />

- ✅ **Centralizar toda la información sobre los clientes potenciales de un negocio**
  <br />
  Capturar, organizar y distribuir toda la información que maneja la empresa sobre sus clientes. Centralizando toda la información en una base de datos única para poder disponer de información actualizada y en tiempo real de los clientes.
  <br />

- ✅ **Captar clientes potenciales**
  <br />
  Este CRM es una herramienta ideal para captar leads o contactos, es decir, usuarios que ya han mostrado un interés por los productos y servicios que ofrece una empresa.
  <br />

- ✅ **Incrementar las ventas**
  <br />
  Este CRM permite disponer de información actualizada de los clientes facilitando el diseño y ejecución de las distintas estrategias de ventas de una empresa.
  <br />

- ✅ **Incrementar la productividad y competitividad**
  <br />
  Es una herramienta que automatiza muchos de los procesos relacionados con la captación, organización y distribución de datos sobre los clientes. Estas tareas automatizadas evitan que los trabajadores de las distintas áreas de la empresa tengan que realizar tareas repetitivas y tediosas, liberando un tiempo que pueden dedicar a otros asuntos más importantes, mejorando la productividad y el nivel competitivo de la empresa.
  <br />

- ✅ **Reducir costos**
  <br />
  Los gastos relacionados con la gestión de datos sobre los clientes se ven reducidos gracias a la automatización de procesos de este CRM, ya que permite llevar una gestión de la relación con los clientes óptima, haciendo mejor uso de los recursos materiales y humanos del negocio, lo que implica una reducción de los gastos asociados.
  <br />

[Ir al indice](#Indice)

# Instalación

**1.** Dirijase al [repositorio del proyecto](https://github.com/mandresblac/proyectoCrmFrontend?tab=readme-ov-file) en Github.

**2.** Si desea clonar el repositorio, es decir, descargarlo en su maquina local, de click en el boton de color azul **_"Code"_** ubicado a la derecha de su pantalla, se desplegara una ventana que en la parte superior de la pestaña debe estar en **_"local"_**, por defecto debe aparecer **_"HTTPS"_** subrayado en rojo, luego vera una dirección o URL, a la derecha de esa URL hay un boton para copiar en el portapapeles, de click en ese boton.

**3.** Abra una terminal en su computadora, ubiquese en la carpeta de su preferencia y corra el siguiente comando:
`git clone copia_URL_del_proyecto_en_GITHUB`.
<br />
ejemplo:
<br />
`git clone https://github.com/mandresblac/proyectoCrmFrontend.git`
<br />

**Otra opción:**
<br />
Dar click en el boton de color azul **_"Code"_** y en la parte inferior nuevamente de click en **_"Download ZIP"_**, esto descargara el proyecto en su computadora en un archivo comprimido en formato **_".zip"_** que luego tendra que descomprimir.

**4.** Acceda a la carpeta del proyecto con el comando `cd carpeta_proyecto` o desde el explorador de archivos de su sistema operativo de click sobre la carpeta del proyecto.

**5.** Desde la terminal, ubicado en la carpeta raiz del proyecto, ejecute el comando `npm i` para instalar todas las dependencias que estan refenciadas en el archivo "**_package.json_**".

**Nota:** Lo anterior creara una carpeta llamada "**_*node_modules*_**" donde estan todas las dependencias.

[Ir al indice](#Indice)

# Configuración

- Versión 1.42.0 de MongoDB Compass
- Versión 6.0 de MongoDB Atlas
- Conexion a la base de datos de MongoDB:
  - **Usuario**: Usuario_solo_lectura
  - **Password**: m8SuqnzJKDAhB4nn
  - **link de conexión de Mongo**: mongodb+srv://<username>:<password>@cluster0.tbv1rap.mongodb.net/
- Variables de entorno:

  | DB_CONECTION    | mongodb+srv://mandresblac:CUTji3bhmiw1YDKb@cluster0.tbv1rap.mongodb.net/proyectoCrm |
  | :-------------- | :---------------------------------------------------------------------------------- |
  | PORT            | 3000                                                                                |
  | JWT_SECRET      | pal$37\*78/                                                                         |
  | JWT_SECRET_PASS | &/80393944\*\*                                                                      |
  | EXPIRES_IN      | 12h                                                                                 |

[Ir al indice](#Indice)

# Estructura del proyecto

### - **Estructura del Frontend**

![Estructura del Frontend](./src/assets/img/fontend.png)

### - **Estructura del Backtend**

![Estructura del Backend](./src/assets/img/backtend.png)

[Ir al indice](#Indice)

# Tecnologías bibliotecas y frameworks utilizados en el proyecto

- [Html](https://developer.mozilla.org/es/docs/Web/HTML)
- [Css](https://developer.mozilla.org/es/docs/Web/CSS)
- [Javascript](https://developer.mozilla.org/es/docs/Web/javascript)
- [Typescript](https://www.typescriptlang.org/)
- [NodeJs](https://nodejs.org/en)
- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Angular 17](https://angular.dev/)
- [Tailwind Css](https://tailwindcss.com/)
- [Flowbite](https://flowbite.com/)
- [Sweetalert2](https://sweetalert2.github.io/#input-types)
- [Apexcharts.js](https://www.apexcharts.com/)

[Ir al indice](#Indice)

# Diccionario de datos

| CAMPO               | TIPO    | DESCRIPCIÓN                         |
| :------------------ | :------ | :---------------------------------- |
| Nombre y apellido   | string  | Nombre y apellido del suario        |
| Dirección           | string  | Dirección del usuario               |
| telefono            | string  | Telefono del usuario                |
| Email               | string  | Email del usuario                   |
| Tipo de documento   | string  | Tipo de documento del suario        |
| Número de documento | string  | Número de documento del suario      |
| Password            | string  | Password del usuario                |
| Oportunidades       | string  | Oportunidades del usuario           |
| Rol                 | string  | Rol del usuario                     |
| Estado              | Boolean | Estado del usuario                  |
| CreatedAt           | Date    | Fecha en que se registra el usuario |

[Ir al indice](#Indice)

# Construcción y despliegue

### - **Despliegue:**

Tras tener listo el código en el repositorio correspondiente, creamos una cuenta gratuita en un proveedor de alojamiento en la nube como **_Render_** o **_Netlify_** que proporcionan servicios de backend sin servidor (serverless) para sitios web, esto con el fin de poder tener acceso a sus herramientas y hacer un despliegue continuo de nuestro proyecto. En nuestro caso escogimos **_Netlify_** para el Frontend y **_Render_** para el Backend, existen distintos planes de pago con distintas características, escogemos el gratuito, ya que se adapta de manera holgada al objetivo del curso y del proyecto.

Siguiendo con nuestro despliegue, crear la cuenta es tan fácil como registrarnos con nuestra cuenta de GitHub, GitLab, Bitbucket o con nuestro correo. Debemos dar permisos a Netlify para acceder a nuestra cuenta GitHub e introducir el nombre de usuario y el tipo de proyecto que se va a desplegar: un CMR.

A continuación, ya podemos acceder al dashboard.

Ahora hay que indicar a Netlify el contenido de nuestro proyecto web. Para ello tenemos dos opciones: indicar el repositorio de GitHub donde tenemos el código de nuestro proyecto, o simplemente arrastrar la carpeta que representa al proyecto. En nuestro caso, vamos a escoger el repositorio que contiene el proyecto Angular que hemos creado.

Solamente queda configurar los parámetros del deploy. Hay que indicar la rama del proyecto que se va a desplegar y el comando que va a hacer que se compile la aplicación. En nuestro caso la orden `ng build` es la orden común en Angular para compilar el proyecto. El directorio dist el que contiene por defecto todos los archivos que el navegador va a necesitar cuando el proyecto ya esté desplegado en producción. Dependiendo del framework será una orden u otra. También existe la opción de definir variables de entorno ya sea mediante el build command o mediante un archivo de configuración donde se gestionen todas.

Una vez esté todo el deploy configurado y hayamos pulsado la opción de <<Deploy site>>, si volvemos al dashboard nos encontraremos que el proyecto está en proceso de desplegarse en el dominio provisto por Netlify.

Y a continuación, en muy poco tiempo, ya tenemos nuestro proyecto web desplegado correctamente.

Si pulsamos en el enlace, podemos ver el contenido de nuestra web.

Tras esto, los siguientes pasos que sugiere Netlify son configurar nuestro propio dominio web y securizar el mismo con HTTPS.

[Ir al indice](#Indice)

# Uso de la aplicación

### - **Como ingresar a la aplicación:**

1. En su navegador preferido ingrese la siguiente [url](https://merry-moonbeam-35c33d.netlify.app/).
2. En la parte derecha de la pantalla hay un formulario para Registrarse en la aplicación, ingrese todos los datos solicitados.
3. Luego de registrarse vaya a la parte superior derecha de la pantalla y de click en el boton "**_Iniciar Sesión_**".
4. Ingrese email, contraseña y de click en el boton "**_Iniciar Sesión_**", acontinuación aparece una nueva ventana modal de dar click en "**_OK_**".

### - **Como registrar un usuario en la aplicación:**

1. En la parte derecha de la pantalla de inicio hay un formulario de registro, ingrese los datos solicitados.
2. De click en el boton "**_Registrarse_**
3. Aparecera una ventana modal confirmando que el usuario se ha registrado satisfactoriamente.

### - **Como Editar la información de un usuario:**

1. En la pestaña "**_Usuarios_**" puede ver una tabla con todos los usuarios registrados en la aplicación.
2. Si desea editar la información de algun usuario vaya a la parte derecha de la pantalla y de click en el boton de color verde con el icono de un lapiz.

   **_Nota:_** Si desiste de su intencion de modificar la información de algun usuario de click en el boton "**_Volver sin editar_**", esto lo redirigira a la pantalla de "**_Usuarios_**" sin modificar la información de algun usuario.

3. Modifique los datos que quiera y luego de click en el boton de "**_Editar_**", esto lo redirigira a la pantalla de "**_Usuarios_**" donde podra verificar que los datos han sido modificados.

### - **Como Eliminar un usuario:**

1. En la pestaña "**_Usuarios_**" puede ver una tabla con todos los usuarios registrados en la aplicación.
2. Si desea eliminar algun usuario, vaya a la parte derecha de la pantalla y de click en el boton de color rojo con el icono de un bote de basura.
3. Aparecera una ventana modal confirmando la eliminación del usuario, de clik en "**_OK_**".

### - **Como modificar las oportunidades de negocio de un usuario:**

1. En la parte superior de la pantalla de click en "**_Oportunidades_**".
2. En la parte derecha de la pantalla en la casilla de "**_OPORTUNIDADES_**" de click en el recuadro vacio y selecione la oportunidad, que puede ser perdida, ganada, en proceso o cerrada.
3. Aparecera una ventana modal confirmando que se actualizo la oportunidad del usuario, de clik en "**_OK_**".

### - **Como ver informes con graficas:**

1. En la parte superior derecha de la pantalla de clik en el boton "**_Informes_**"
2. Se vizualizaran las graficas y estadisticas de todos los usuarios de la aplicación.

### - **Como salir de la aplicación:**

1. En la parte superior derecha de la pantalla de clik en el boton "**_Cerrar Sesión_**"
2. Al salir de la aplicación sera redirigido a la pantalla de inicio donde se encuentra el formulario de registro.

[Ir al indice](#Indice)

# Contacto

Para comunicarse con el equipo de desarrollo y mantenimiento del proyecto comunicate a través del correo electronico ***cmr@gmail.com***.

- Links del Proyecto:
  - Link del Proyecto [FrontEnd](https://merry-moonbeam-35c33d.netlify.app) Online.
  - Link del Proyecto [BackEnd](https://proyectocrmbackend.onrender.com) Online.
  - Link del Proyecto [Frontend](https://github.com/mandresblac/proyectoCrmFrontend) en GitHub.
  - Link del Proyecto [Backend](https://github.com/mandresblac/ProyectoCrmBackend) en GitHub.

[Ir al indice](#Indice)

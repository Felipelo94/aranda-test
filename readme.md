Sitio web aranda-test
¡Hola Bienveni@!

Este sitio web está creado para realizar la prueba de ingreso para la compañia Aranda Software.

Requisitos
Antes de continuar asegúrate de tener instalado en tu máquina lo siguiente:

1. Git (Manejo versiones)
2. Node.js v16.19
3. Un editor de texto (VSCode recomendado)

Empezando
1. Clona el proyecto
2. Crea un archivo en tu carpeta raiz con el nombre .env
3. Modifica el .env con los valores correspondientes, luego explicaré como obtener esos valores.
4. Instala las dependecias ejecutando: npm install
5. Listo, ahora puedes ejecutar el proyecto en tu máquina. Conoce los scripts que puedes ejecutar en la sección 'Scripts definidos' en el package.json.


Metodologías
Estas son algunas metodologías que se usarón en el proyecto.

- Atomic Design
- Git Flow
- Diseño web mobile-first

Breackpoints:
Movil: >=428px
Tablet: >=768px
Desktop: >=1280px

Stack tecnológico

- Nodejs v16.19
- ReactJs v18
- TypeScript

Convenciones 
- Uso de kebab-case para nombrar archivos y directorios.
- Uso de sufijos como .styles.scss para nombrar archivos.
- Cuando dse definen  los props de un componente, uso de tipos (type) de TypeScript.

Variables de entorno
VITE_SPOONACULAR_API_KEY = Spoonacular api key del usuario que consume el servicio.


Como obtener las credenciales para el archivo .env

- Ingresar a la pagina: https://spoonacular.com/food-api
- Dirigirse al menú hamburguesa y clickar en el opcion 'Start Now'
- Registraté o inicia sesion en la aplicación
- Una vez inicies sesión dirigete a la pestaña 'Profile'
- Clickea en la opcion 'Show/Hide API Key'
- Copia el contenido de esa propiedad
- Pega el texto dentro del archivo .env en la variable de nombre VITE_SPOONACULAR_API_KEY

Ejemplo:
VITE_SPOONACULAR_API_KEY = xxxx123456
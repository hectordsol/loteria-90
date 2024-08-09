# WebApp LoteriaApp 
Es un Tablero por un lado (con números del 1 al 90, que se pueda limpiar con un botón limpiar). 

Tiene Sorteo automatizado, que es el generador aleatorio de números del 1 al 90, que al apretar inicio el primer número muestra sin esperar, y va marcando en el tablero mientras van saliendo en color rojo el último que salió, y que cada 30 segundos por defecto, sale un nuevo número. 

Tiene tiempo de Espera que sería el tiempo que falta para generar el siguiente número aleatorios, no debería repitir número (simulando como si fueran números de un bolillero). 

Arriba de la parte del Sorteo se puede modificar el tiempo de espera con las flechas.

Tiene un botón para iniciar, que luego sea para hacer pausa y que el mismo puede usarse para continuar (haciendo que muestre los segundos restantes para el siguiente número). 

Tiene un contenedor Salidos en el mismo contenedor de Sorteo pero que se muestre abajo, que va mostrando en forma secuencial hasta 10 por fila, los números que van saliendo.

# ChatGPT
Este código fue en principio generado por ChatGPT con las siguientes intrucciones:
Podrías crear el código de una aplicación web con React que en App.js solo importe de una carpeta src/components, LoteriaApp, y que LoteriaApp importe el código de Tablero por un lado (números del 1 al 90, que se pueda limpiar el tablero con un botón limpiar) que lo muestre a la derecha del contenedor y a la izquierda, que importe dos componentes, uno, el Sorteo, que es el generador aleatorio de números del 1 al 90, al apretar inicio el primer número lo muestre sin esperar, que vaya marcando en el tablero mientras van saliendo, que sea rojo el último que salió y que cada 30 segundos salga un nuevo número. Debería importa Espera que sería el tiempo que falta para generar el siguiente número aleatorios, que no repita el número (simulando como si fueran números de un bolillero). Debería tener el botón para iniciar, que luego sea para hacer pausa y que el mismo pueda usarse para continuar (haciendo que Espera muestre los segundos restantes para el siguiente número). ¿Podrías generar el estilo de cada archivo? LoteriaApp, Tablero, Sorteo, Espera. Ten en cuenta que cuando se limpia el tablero, el botón debe quedar de nuevo en inicio. ¿Podrias agregar al contenedor principal de LoteriaApp un tablero Salidos en el mismo contenedor de Sorteo pero que se muestre abajo, con su estilo en archivo aparte también, que vaya mostrando en forma secuencial hasta 10 por fila, los números que van saliendo?

Luego le pedí:

¿Podrías agregarme un componente que sea TiempoEspera que tenga un botón para incrementar que muestre una flecha arriba, otro botón para disminuir que muestre una flecha abajo, y que muestre el tiempo de espera seleccionado entre medio de los dos botones?

Tuve que hacerle algunos cambios en la lógica del código porque cuando iniciaba esperaba 30 segundos en el primer número.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

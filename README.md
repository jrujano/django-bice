
## Crear Virtuealnev
Obtener directorio de instalación de python3 
```
which python3
```
Crear el  virtualenv (entorno virtual)
```
virtualenv -p /usr/bin/python3 <nombre>
```

moverse el directorio de entorno virtual
```
cd <nombre>
```
Deberá clonar el repositorio
```
git clone XXXXXXXXXXXXXXX
```
moverse el directorio de
```
cd django-bice
```
Instalar dependecias python
```
pip install -U pip setuptools 
pip install -r requirements.txt
```
Obtener dependencias de node ejecutado el comando yarn
```
yarn 
```
al ejecutarlo se iniciara el proceso de instalacion
```
yarn install v1.19.1
[1/4] Resolving packages...
[2/4] Fetching packages...
```

## Available Scripts

  

Para Ejecuta la aplicación en modo de desarrollo. En el directorio del proyecto, debe ejeuctar:

  

### `yarn start`

Abra [http://localhost:3000](http://localhost:3000) to para verlo en el navegador.

  

The page will reload if you make edits.<br  />

You will also see any lint errors in the console.

  

### `yarn test`

  

Launches the test runner in the interactive watch mode.<br  />

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

  

### `yarn build`

  

Builds the app for production to the `build` folder.<br  />

It correctly bundles React in production mode and optimizes the build for the best performance.

  

The build is minified and the filenames include the hashes.<br  />

Your app is ready to be deployed!

  

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

  

### `yarn eject`

  

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

  

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

  

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

  

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

  

## Learn More

  

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

  

To learn React, check out the [React documentation](https://reactjs.org/).

  

### Code Splitting

  

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

  

### Analyzing the Bundle Size

  

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

  

### Making a Progressive Web App

  

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

  

### Advanced Configuration

  

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

  

### Deployment

  

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

  

### `yarn build` fails to minify

  

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

You can render UML diagrams using [Mermaid](https://mermaidjs.github.io/). For example, this will produce a sequence diagram:

```mermaid
sequenceDiagram
Alice ->> Bob: Hello Bob, how are you?
Bob-->>John: How about you John?
Bob--x Alice: I am good thanks!
Bob-x John: I am good thanks!
Note right of John: Bob thinks a long<br/>long time, so long<br/>that the text does<br/>not fit on a row.

Bob-->Alice: Checking with John...
Alice->John: Yes... John, how are you?
```

And this will produce a flow chart:

```mermaid
graph LR
A[Square Rect] -- Link text --> B((Circle))
A --> C(Round Rect)
B --> D{Rhombus}
C --> D
```

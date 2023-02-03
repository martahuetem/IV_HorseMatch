# ELECCIÓN TEST RUNNER

El siguiente paso para avanzar en mi proyecto es elegir el test runner que mejor se adapte a este. Para ello, voy a tener en cuenta los siguientes criterios:

1. **Actualizado:** el test runner debe tener actualizaciones frecuentes. Con esto nos evitaremos usar un test que haya quedado obsoleto.
2. **Velocidad:** es importante que el test runner se ejecute rápido para evitar perder tiempo innecesario.
3. **Compatibilidad:** dado que mi proyecto se está desarrollando usando node.js, el test runner debe ser compatible con este lenguaje. Además de ser compatible con varios navegadores.

Tras indagar sobre los test runners que se pueden usar en proyectos de JavaScript, destacan:

### mocha

**VENTAJAS**

- Es un testing framework de JavaScript destinado a probar aplicaciones que se ejecutan con Node.js.
- Es de código abierto y proporciona flexibilidad.
- Al ser un test que lleva muchos años en el mercado, hay muchos tutoriales y documentación que explican su uso y como solucionar sus problemas.
- Ofrece posibilidades prácticamente infinitas para la configuración e integración avanzadas, lo que permite lograr el entorno de prueba perfecto para un determinado proyecto.
- Puede testear tanto código síncrono como código asíncrono.
- Hace uso de una sintaxis simple, es decir, sin necesidad de tener conocimientos avanzados sobre el test runner podemos lograr de entender los que estamos testeando.
- Tiene métodos que se ejecutan en un orden particular, registrando los resultados en una ventana de terminal separada. También borra el estado del software que se está probando para garantizar que los casos de prueba se ejecuten de forma aislada.
- En cuanto al mantenimiento, mocha tiene actualizaciones frecuentes. Según [snyk](https://snyk.io/advisor/npm-package/mocha), tanto su último commit como su última versión fueron subidas hace 2 meses.

**INCOVENIENTES**

- Es solo un test runner por lo que requiere del uso de bibliotecas de aserciones para su funcionamiento.
- Su configuración es más compleja que la de otros test runners.
- Ejecuta sus test en serie lo que puede hacer que su ejecución sea más lenta que aquellos que los ejecuten en paralelo.


### cypress

**VENTAJAS**

- Cypress se basa en JavaScript pero solo es compatible con el marco Mocha JS.
- Toma una instantánea en cada paso de la prueba. Esto permite que se pueda verificar el estado y la actividad en cualquier paso del test.
- Los test se ejecutan dentro del navegador y tienen una visibilidad completa de todo lo que sucede en la aplicación de forma sincrónica.
- Una vez termina el test, se puede depurar viendo los errores cometidos.
- En cuanto al mantenimiento, mocha tiene actualizaciones frecuentes. Según [snyk](https://snyk.io/advisor/npm-package/cypress), su último commit se subió hace 12 horas y su última versión hace 16 horas.
- Puede ejecutar sus test en paralelo, lo que proporciona mayor velocidad a sus ejecuciones.

**INCONVENIENTES**

- Necesitas tener instalado mocha para poder instalar cypress.
- Solo es compatible con Chrome, Firefox, Edge, Brave, y Electron.


### jest

**VENTAJAS**

- Jest fue desarrollado por Facebook y se usa para probar códigos JavaScript.
- Proporciona un framework integrado que no requiere ninguna experiencia para su configuración.
- En cuanto al mantenimiento(freshness), jest está en contante actualización para mejorar. En [snyk](https://snyk.io/advisor/npm-package/jest), podemos ver que su último commit ha sido hace 21 horas y su última versión fue subida hace 8 días.
- Dado que es un test que lleva muchos años en el mercado, tiene una gran cantidad de foros, documentaciones y tutoriales sobre su uso.
- Tiene un soporte de simulación y una biblioteca de aserciones propia lo que simplifica su configuración. Esta biblioteca de aserciones hace uso de BDD lo que facilita su uso y compresión.
- Jest ofrece herramientas sólidas para desarrolladores con un código menos propenso a errores.
- Jest incorpora la ejecución paralela de tests, que ejecuta primero los tests más lentos y continúa de manera descendente. Esto ahorra mucho tiempo. Airbnb cambió de Mocha a Jest, lo que produjo una caída en el tiempo de ejecución de la prueba de 12 minutos a 4,5 minutos.
- Fue creado y es mantenido por Facebook, lo que nos garantiza calidad y confianza. Es utilizado por compañías como Twitter, Instagram, The New York Times, Spotify y el propio Facebook.
- Jest promete un gran rendimiento incluso para proyectos más grandes que requieren implementación y pruebas diarias.


**INCONVENIENTES**

- En comparación con otros frameworks, como Jasmine, no admite tantas bibliotecas o herramientas que a veces pueden ser muy útiles para depurar sus tests.


### jasmine

**VENTAJAS**

- Es un testing de JavaScript de código abierto y que hace uso de la herramienta BDD.
- Su mayor ventaja es su compatibilidad con todos los frameworks o bibliotecas, lo que lo convierte en uno de los frameworks de JavaScript más flexibles.
- Tiene una comunidad bastante grande por lo que podemos encontrar mucha información sobre su uso.
- Jasmine puede probar tanto el código frontend como el backend, lo cual es una gran ventaja.
- Permite la ejecución en paralelo lo que hace a dicha ejecución más rápida.

**INCONVENIENTES**

- Su instalación es bastante compleja.
- No trae su propia biblioteca de aserciones por lo que antes de usarlo habría que elegir una.
- Una de sus mayores quejas es la sintaxis que utiliza ya que es dificil de comprender.
- Su mantenimiento no es tan constante como los test expuestos anteriormente. Como se puede ver en [snyk](https://snyk.io/advisor/npm-package/jasmine). su último commit y su última actualización fueron hace tres meses.


## ELECCIÓN DEL TEST

Una vez expuestos los criterios y los test, 

- Descarto **cypress** ya que su uso se restringe a muy pocos navegadores.
- Descarto **jasmine** ya que su mantenimiento no es muy constante y ya que ha recibido muchas quejas sobre su sintaxis.
- Entre **mocha** y **jasmine** ambos son los dos test runners más utilizados por la comunidad de JavaScript (como se puede ver aquí, [State of JS: Testing](https://2022.stateofjs.com/en-US/libraries/testing/)) y ambos podrían adaptarse correctamente a mi proyecto. Sin embargo, finalmente he decidido decantarme por `jest` ya que: 
  - tiene una configuración más simple dado que incluye su propia biblioteca de aserciones, 
  - su mantenimiento es más constante que el de **mocha** (mocha lleva meses sin actualizarse), 
  - es más rápido al tener una ejecución en paralelo de los tests
  
La información la he obtenido de los siguientes enlaces:

- [State of JS: Testing](https://2022.stateofjs.com/en-US/libraries/testing/)
- [snyk](https://snyk.io/advisor/)
- [lambdatest](https://www.lambdatest.com/blog/top-javascript-automation-testing-framework/)
- [testim.io](https://www.testim.io/blog/best-unit-testing-framework-for-javascript/)
- [Jest](https://jestjs.io/es-ES/)
* [Mocha](https://mochajs.org/)
* [Jasmine](https://jasmine.github.io/)
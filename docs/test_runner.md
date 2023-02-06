En este documento, presentaré tanto los criterios para la elección del test runner y de la biblioteca de aserciones como una breve exposición de los test runners y las bibliotecas de aserciones a tener en cuenta:

# TEST RUNNER

El siguiente paso para avanzar en mi proyecto es elegir el test runner que mejor se adapte a este. Para ello, voy a tener en cuenta los siguientes criterios:

1. **Actualizado:** el test runner debe tener actualizaciones frecuentes. El hecho de que tenga versiones actualizadas nos da la seguridad de que puede estar adaptado a las nuevas tecnologías (nos evitaremos de este modo usar un test que haya quedado obsoleto). Además si el test está actualizado, se han podido solucionar los errores que pueda tener.
2. **Velocidad:** El tiempo que se necesita para ejecutar un conjunto de pruebas es importante a la hora de decidir sobre el  uso de un test runner u otro. Encontrar los errores lo antes posible es de ayuda a los desarrolladores y ahorrará tiempo de cómputo.
3. **Compatibilidad:** Es otro criterio importante, ya que buscamos un test runner que sea compatible con el lenguaje que estoy utilizando en el proyecto (en este caso, node.js). Además sería conveniente que el test fuese compatible con varios navegadores.
4. **Uso por la comunidad:** El que un test runner sea utilizado puede indicar que es útil para la comunidad y que su funcionamiento es correcto. En este sentido, el que una herramienta tenga muchas descargas podríamos considerarlo como un indicativo de su uso.

La elección del test runner esta basada en la información extraída de varias páginas (entre las que destaco las expuestas al final del documento). A partir de dicha información procedo a exponer los test runners más relevantes compatibles con JavaScript:


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
- Relativo al uso en la comunidad, podemos ver en [State of JS: Testing](https://2022.stateofjs.com/en-US/libraries/testing/), que mocha volvería a ser usado solamente por un 44% de los usuarios de node.js. Consta de 8 millones de descargas semanales.

**INCOVENIENTES**

- Es solo un test runner por lo que requiere del uso de bibliotecas de aserciones para su funcionamiento.
- Su configuración es más compleja que la de otros test runners.
- Ejecuta sus test en serie lo que puede hacer que su ejecución sea más lenta que aquellos que los ejecuten en paralelo.


### cypress

**VENTAJAS**

- Cypress se basa en JavaScript.
- Hace uso de Mocha como proveedor de estructura de test, esto hace que su uso sea bastante estándar.
- Toma una instantánea en cada paso de la prueba. Esto permite que se pueda verificar el estado y la actividad en cualquier paso del test.
- Los test se ejecutan dentro del navegador y tienen una visibilidad completa de todo lo que sucede en la aplicación de forma sincrónica.
- Una vez termina el test, se puede depurar viendo los errores cometidos.
- En cuanto al mantenimiento, mocha tiene actualizaciones frecuentes. Según [snyk](https://snyk.io/advisor/npm-package/cypress), su último commit se subió hace 12 horas y su última versión hace 16 horas.
- Puede ejecutar sus test en paralelo, lo que proporciona mayor velocidad a sus ejecuciones.
- Según se puede ver en [State of JS: Testing](https://2022.stateofjs.com/en-US/libraries/testing/), cypress volvería a ser utilizado por un 42% de los usuarios de node.js. Además, tiene 4 millones de descargas semanales según [snyk](https://snyk.io/advisor/npm-package/cypress.


**INCONVENIENTES**

- Necesitas tener instalado mocha para poder instalar cypress.
- Solo es compatible con Chrome, Firefox, Edge, Brave, y Electron.


### jest

**VENTAJAS**

- Jest se usa para probar códigos JavaScript.
- Proporciona un framework integrado que no requiere ninguna experiencia para su configuración.
- En cuanto al mantenimiento(freshness), jest está en contante actualización para mejorar. En [snyk](https://snyk.io/advisor/npm-package/jest), podemos ver que su último commit ha sido hace 21 horas y su última versión fue subida hace 8 días.
- Dado que es un test que lleva muchos años en el mercado, tiene una gran cantidad de foros, documentaciones y tutoriales sobre su uso.
- Tiene un soporte de simulación y una biblioteca de aserciones propia lo que simplifica su configuración. Esta biblioteca de aserciones hace uso de BDD lo que facilita su uso y compresión.
- Jest ofrece herramientas sólidas para desarrolladores con un código menos propenso a errores según [lambdatest: top javascript automation testing frameworks](https://www.lambdatest.com/blog/top-javascript-automation-testing-framework/).
- Jest incorpora la ejecución paralela de tests, que ejecuta primero los tests más lentos y continúa de manera descendente. Esto ahorra mucho tiempo. 
- Fue creado y es mantenido por Facebook, lo que nos garantiza calidad y confianza. Es utilizado por compañías como Twitter, Instagram, The New York Times, Spotify y el propio Facebook.
- Jest promete un gran rendimiento incluso para proyectos más grandes que requieren implementación y pruebas diarias según [lambdatest: best javascript testing frameworks](https://www.lambdatest.com/blog/best-javascript-unit-testing-frameworks/)
- Según se puede ver en esta página [State of JS: Testing](https://2022.stateofjs.com/en-US/libraries/testing/), jest volvería a ser utilizado por un 68% de los usuarios de node.js. Además, tiene 19 millones de descargas semanales y ha sido usado en 3,898,000 repositorios públicos de GitHub en el último mes.


**INCONVENIENTES**

- En comparación con otros frameworks, como Jasmine, no admite tantas bibliotecas o herramientas que a veces pueden ser muy útiles para depurar sus tests.
- En algunos casos, puede resultar más lento que otros tests runners.


### jasmine

**VENTAJAS**

- Es un testing de JavaScript de código abierto y que hace uso de la herramienta BDD.
- Su mayor ventaja es su compatibilidad con todos los frameworks o bibliotecas, lo que lo convierte en uno de los frameworks de JavaScript más flexibles.
- Tiene una comunidad bastante grande por lo que podemos encontrar mucha información sobre su uso.
- Jasmine puede probar tanto el código frontend como el backend, lo cual es una gran ventaja.
- Permite la ejecución en paralelo lo que hace a dicha ejecución más rápida.
- Según [State of JS: Testing](https://2022.stateofjs.com/en-US/libraries/testing/), jasmine volvería a ser usado por el 33% de los usuarios de node.js, un porcentaje bastante inferior al de los tests anteriores. Sus descargas semanales son de 1 millon, una cifra bastante menor que la de jest y mocha.

**INCONVENIENTES**

- Su instalación es bastante compleja.
- No trae su propia biblioteca de aserciones por lo que antes de usarlo habría que elegir una.
- Una de sus mayores quejas es la sintaxis que utiliza ya que es dificil de comprender.
- Su mantenimiento no es tan constante como los test expuestos anteriormente. Como se puede ver en [snyk](https://snyk.io/advisor/npm-package/jasmine), su último commit y su última actualización fueron hace tres meses.


# BIBLIOTECA DE ASERCIONES

Los criterios de selección para las bibliotecas de aserciones son:

1. **Freshness:** es muy importante que biblioteca de aserciones a elegir esté atualizado y que se actualice cada poco tiempo.

2. **Los estilos que utilice:** se tendrá en cuenta los estilos que utilice la biblioteca. Se primará el uso de BDD (Behavior Driven Design) ya que esto nos facilitará su uso al utilizar un lenguaje cercano a nuestro lenguaje cotidiano.

3. **Uso por la comunidad:** El hecho de que una biblioteca de aserciones sea utilizada puede indicar que es útil para la comunidad y que su funcionamiento es correcto. En este sentido, el que una herramienta tenga muchas descargas y buena puntuación en snyk podríamos considerarlo como un indicativo de su uso.


## chai

- Hace uso tanto de BDD (Behavior Driven Developement) como de TDD (Test Driven Developement), lo que facilita su uso.
- Como se puede ver en [open base](https://openbase.com/js/chai), su popularidad es alta teniendo 6 millones de descargas en la semana del 16 de enero de 2023.
- Tiene un matenimiento constante. Su último commit según [snyk](https://snyk.io/advisor/npm-package/chai) fué hace 2 meses y su última versión se subió hace 3.
- Su puntuación en snyk es de 100/100 por lo que podríamos decir que tiene un funcionamiento correcto.


## unexpected

- Hace uso de BDD lo que facilita su uso.
- Según [open base](https://openbase.com/js/unexpected), tiene una popularidad bastante más baja que el ya mencionado anteriormente. En este caso, en la última semana solo ha tenido 13.000 descargas.
- En cuanto a su mantenimiento podemos decir que es constante ya que según [snyk](https://snyk.io/advisor/npm-package/unexpected) su último commmit al igual que su última versión se subieron hace 1 mes.
- Su puntuación en snyk es de un 81/100, ya que se muestra en la propia página, tanto su popularidad como su comunidad no son tan fuertes como por ejemplo los de chai.
  

## expect.js

- Hace uso de BDD, es decir, su lenguaje va a ser cercano al cotidiano lo que nos facilitará su uso.
- Su mantenimiento también es constante, su último commit a su repositorio de [GitHub](https://github.com/Automattic/expect.js) fue hace 3 semanas.
- Según [open base](https://openbase.com/js/expect.js), tuvo 93.000 descargas en la semana del 16 de enero de este mismo año.
- Su puntuación en snyk es muy baja, 55/100. Esto se debe en parte a su falta de apoyo por la comunidad y a algunos problemas de seguridad.


# ELECCIÓN

Una vez expuestos los criterios de los test y de las bibliotecas de aserciones,  

- Ya que las tres bibliotecas expuestas hacen uso de BDD y tienen un mantenimiento más o menos constante, decido descartar **unexpected** y **expect.js** ya que son menos usadas que **chai** teniendo millones de descargas menos por semana. Además teniendo en cuenta su valoración en snyk, tanto expect.js como unexpected tiene una puntuación más baja que la de chai.

- Por ello, me decanto por la biblioteca **chai** ya que además de tener actualizaciones recientes, hace uso de una sintaxis simple y es muy usada por la comunidad de node.js.

- Descarto el test **cypress** ya que aunque es de los más usados por la comunidad, su uso se restringe a muy pocos navegadores lo que podría limitar el desarrollo del proyecto.
  
- Descarto el test **jasmine** ya que su mantenimiento no es tan constante como el resto (hace 3 meses que no se actualizó). Además, de los expuestos es el menos recomendado por la comunidad ya que hace uso de una sintaxis muy compleja.
  
- Entre **mocha** y **jest**, ambos son los dos test runners más utilizados por la comunidad de JavaScript (como se puede ver aquí, [State of JS: Testing](https://2022.stateofjs.com/en-US/libraries/testing/)), satisfaciendo el criterio **Compatibilidad**. Dado que ambos podrían adaptarse correctamente a mi proyecto finalmente he decidido decantarme por `jest` ya que:
  
  * Relacionado con el criterio **Actualización**, el mantenimiento de jest es más constante que el de **mocha** (mocha lleva meses sin actualizarse). Esta actualización continua ayuda a que este test runner sea menos propenso a errores. 
  
  * Considerando el criterio **Velocidad**, podemos ver que jest más rápido al tener una ejecución en paralelo de los tests como se muestra por ejemplo en [lambdatest](https://www.lambdatest.com/blog/best-javascript-unit-testing-frameworks/) donde se indica que cuando Airbnb cambió de Mocha a Jest, se produjo una reducción en el tiempo de ejecución de la prueba de 12 minutos a 4,5 minutos. Todo esto hace que el test runner tenga un alto rendimiento ([lambdatest: best javascript testing frameworks](https://www.lambdatest.com/blog/best-javascript-unit-testing-frameworks/)),
  
  * Otro aspecto relacionado con el criterio **Uso por la comunidad** es que el porcentaje de satisfacción de los usuarios que han usado jest es del 90% según [State of JS: Testing](https://2022.stateofjs.com/en-US/libraries/testing/) esto se puede deber al hecho de que jest está muy bien documentado.

En resumen, usaré como test runner **jest** y como biblioteca de aserciones **chai**.
  

### ENLACES RELEVANTES

## PARA LOS TEST RUNNERS

- [State of JS: Testing](https://2022.stateofjs.com/en-US/libraries/testing/): que ofrece comparaciones sobre el uso actual y la opinión de los usuarios de todos los test runners.
- [snyk](https://snyk.io/advisor/): de esta página he obtenido información sobre las actualizaciones y el estado de los tests.
- [lambdatest: Best 9 JavaScript Testing Frameworks](https://www.lambdatest.com/blog/top-javascript-automation-testing-framework/): que muestra los diferentes test compatibles con JavaScript y una breve descripción de ellos.
- [lambdatest: How To Choose The Best JavaScript Unit Testing Frameworks](https://www.lambdatest.com/blog/best-javascript-unit-testing-frameworks/)
- [testim.io](https://www.testim.io/blog/best-unit-testing-framework-for-javascript/): igual que el enlace anterior nos da información sobre los tests.
- [medium: An Overview of JavaScript Testing in 2022](https://medium.com/welldone-software/an-overview-of-javascript-testing-7ce7298b9870)

Páginas oficiales de los diferentes tests:
- [Jest](https://jestjs.io/es-ES/)
* [Mocha](https://mochajs.org/)
* [Jasmine](https://jasmine.github.io/)
* [cypress](https://github.com/cypress-io/cypress)

## PARA LAS BIBLIOTECAS

- [Open Base](https://openbase.com/categories/js/highest-rated-javascript-assertion-libraries?vs=webdriverio%2Ctape%2Cmocha)
- [Snyk](https://snyk.io/advisor/)
- [Página Oficial de Chai](https://www.chaijs.com/)
- [Página Oficial de Unexpected](https://unexpected.js.org/)

# ELECCIÓN TEST RUNNER

Para hacer la elección del Test-Runner que mejor se adapte a mi proyecto los voy a comparar y voy a elegir el que mejor se adapte. Para ello me voy a ayudar de:
* [snyk](https://snyk.io/advisor/), 
* [State of JS: Testing](https://2022.stateofjs.com/en-US/libraries/testing/), 
* [Top JavaScript Testing Frameworks](https://www.browserstack.com/guide/top-javascript-testing-frameworks), 
* [ponicode](https://www.ponicode.com/shift-left/which-test-framework-should-i-choose),
* [Página oficial de Jest](https://jestjs.io/es-ES/),
* [Página oficial de Mocha](https://mochajs.org/),
* [Repositorio de GitHub de Ava](https://github.com/avajs/ava),
* [Página oficial de Jasmine](https://jasmine.github.io/)

Los criterios que voy a seguir son:

1. **Freshness:** es muy importante que test runner a elegir esté atualizado y que se actualice cada poco tiempo.
2. **Uso por la comunidad:** el hecho de que se use en por una gran cantidad de usuario y que tenga una gran comunidad detrás, así como el hecho de que esté respaldado por grandes proyectos, son indicativos de calidad.
3. **Velocidad:** es importante que el test se ejecute rápido.
4. **Facil de usar:** la sintaxis debe de ser sencilla, es decir, debería de poder entenderse lo que se está testeando sin necesidad de tener conocimientos avanzados.

## jest

- En cuanto al mantenimiento(freshness), jest está en contante actualización para mejorar. En [snyk](https://snyk.io/advisor/npm-package/jest), podemos ver que su último commit ha sido hace dos días y su última versión fue subida hace 6 días.
- Este test es rápido en su ejecución ya que ejecuta los distintos ficheros tests en paralelo, lo que permite que un test no se vea afectado por la ejecución del resto.
- Según se puede ver en esta página [State of JS: Testing](https://2022.stateofjs.com/en-US/libraries/testing/), `jest` volvería a ser utilizado por un 68% de los usuarios de node.js. Además, tiene 19 millones de descargas semanales y ha sido usado en 3,898,000 repositorios públicos de GitHub en el último mes.
- Fue creado y es mantenido por Facebook, lo que nos garantiza calidad y confianza. Es utilizado por compañías como Twitter, Instagram, The New York Times, Spotify y el propio Facebook.
- Es fácil de usar ya que hace uso del enfoque "ready-to-go". Su configuración es simple, aunque siempre es posible una personalización avanzada. Esto significa que es muy accesible y se adapta tanto a principiantes como a profesionales.


## mocha

- En cuanto al mantenimiento, al igual que jest, mocha tiene actualizaciones frecuentes. Según [snyk](https://snyk.io/advisor/npm-package/mocha), tanto su último commit como su última versión fueron subidas hace 2 meses.
- En cuanto a la velocidad, también tiene una ejecución en paralelo lo que hace sus ejecuciones más rápidas.
- Relativo al uso en la comunidad, podemos ver en [State of JS: Testing](https://2022.stateofjs.com/en-US/libraries/testing/), que `mocha` volvería a ser usado solamente por un 44% de los usuarios de node.js. Consta de 8 millones de descargas semanales.
- Tiene como inconvenientes su mayor complejidad de configuración, uso y legilibilidad. 
- Es más flexible y aunque como se mencionó arriba su configuración sea más compleja, ofrece un gran número posibilidades de configuración y de integración avanzadas que permiten adaptarlas a cualquier proyecto.
- Es utilizado por empresas como Yahoo, Accenture y Netifly.


## jasmine

- Su mantenimiento es constante aun que menos que el de jest y mocha. Como se puede ver en [snyk](https://snyk.io/advisor/npm-package/jasmine). su último commit y su última actualización fueron hace tres meses.
- Al igual que los dos anteriores, `jasmine` permite la ejecución en paralelo lo que hace que su ejecución sea más rápida.
- Según [State of JS: Testing](https://2022.stateofjs.com/en-US/libraries/testing/), `jasmine` volvería a ser usado por el 33% de los usuarios de node.js, un porcentaje bastante inferior al de los tests anteriores. Sus descargas semanales son de 1 millon, una cifra bastante menor que la de `jest` y `mocha`.
- Al igual que `jest`, `jasmine` tiene una sintaxis sencilla que permite a los usuarios comprender el test sin necesitar conocimientos avanzados.
- Es más lento en la ejecución que los dos test anteriores.


## ava

- Su mantenimiento es muy frecuente. Según [snyk](https://snyk.io/advisor/npm-package/ava), su último commit fué hace 3 días y su última versión fué subida hace 17 días.
- Permite la ejecución en paralelo al igual que los 3 anteriores, lo que aumenta la velocidad de ejecución.
- Como podemos ver en [State of JS: Testing](https://2022.stateofjs.com/en-US/libraries/testing/), `ava` solamente volvería a ser utilizado por el 6% de los usuarios de node.js. Un porcentaje muy bajo comparado con los test anteriores. Tiene simplemente 296.000 descargas semanales.
- Al igual que `mocha` no tiene una sintaxis sencilla y es dificil de configurar y de usar.
- Es más lento en su ejecución que los tres anteriores.  


## Elección

A partir de los criterios descritos anteriormente y comparando los diferentes test, he decidido descartar tanto `ava` como `jasmine` ya que son los menos utilizados y son relativamente más lentos que los otros dos.
Entre `jest` y `mocha`, he decidido quedarme con `**jest**` ya que su uso y configuración son más simple que los de `mocha` y para las necesidades de mi proyecto no necesito una mayor flexibilidad que sería lo que podría hacerme decantar por `mocha`.
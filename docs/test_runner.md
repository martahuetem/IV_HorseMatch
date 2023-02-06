En este documento, presentaré tanto los criterios para la elección del test runner y de la biblioteca de aserciones como una breve exposición de los test runners y las bibliotecas de aserciones a tener en cuenta. Finalmente presentaré las herramientas elegidas junto al porque de dicha elección.

# TEST RUNNER

El siguiente paso para avanzar en mi proyecto es elegir el test runner que mejor se adapte a este. Para ello, voy a tener en cuenta los siguientes criterios:

1. **Actualizado:** el test runner debe tener actualizaciones frecuentes. El hecho de que tenga versiones actualizadas nos da la seguridad de que puede estar adaptado a las nuevas tecnologías (nos evitaremos de este modo usar un test que haya quedado obsoleto). Además si el test está actualizado, se han podido solucionar los errores que pueda tener.
2. **Velocidad:** El tiempo que se necesita para ejecutar un conjunto de pruebas es importante a la hora de decidir sobre el  uso de un test runner u otro. Encontrar los errores lo antes posible es de ayuda a los desarrolladores y ahorrará tiempo de cómputo.

La elección del test runner esta basada en la información extraída de varias páginas (entre las que destaco las expuestas al final del documento). A partir de dicha información procedo a exponer los test runners más relevantes compatibles con JavaScript:


### mocha

**VENTAJAS**

- Es un testing framework de JavaScript destinado a probar aplicaciones que se ejecutan con Node.js.
- En cuanto al mantenimiento, mocha tiene actualizaciones frecuentes. Según [snyk](https://snyk.io/advisor/npm-package/mocha), tanto su último commit como su última versión fueron subidas hace 2 meses.

**INCONVENIENTES**

- Es solo un test runner por lo que requiere del uso de bibliotecas de aserciones para su funcionamiento.
- Puede llegar a ser más lento que otros test runners a la hora de ejecutarse.


### jest

**VENTAJAS**

- Jest se usa para probar códigos JavaScript.
- En cuanto al mantenimiento(freshness), jest está en contante actualización para mejorar. En [snyk](https://snyk.io/advisor/npm-package/jest), podemos ver que su último commit ha sido hace 21 horas y su última versión fue subida hace 8 días.
- Jest ofrece herramientas sólidas para desarrolladores con un código menos propenso a errores según [lambdatest: top javascript automation testing frameworks](https://www.lambdatest.com/blog/top-javascript-automation-testing-framework/) gracias a sus constantes actualizaciones.
- Jest incorpora la ejecución paralela de tests, que ejecuta primero los tests más lentos y continúa de manera descendente. Esto ahorra mucho tiempo. 
- Fue creado y es mantenido por Facebook, lo que nos garantiza calidad y confianza. Es utilizado por compañías como Twitter, Instagram, The New York Times, Spotify y el propio Facebook.
- Jest promete un gran rendimiento incluso para proyectos más grandes que requieren implementación y pruebas diarias según [lambdatest: best javascript testing frameworks](https://www.lambdatest.com/blog/best-javascript-unit-testing-frameworks/)


**INCONVENIENTES**

- En algunos casos, puede resultar más lento que otros tests runners.


### jasmine

**VENTAJAS**

- Es un testing de JavaScript.
- Permite la ejecución en paralelo lo que hace a dicha ejecución más rápida.

**INCONVENIENTES**

- Su mantenimiento no es tan constante como los test runners expuestos anteriormente. Como se puede ver en [snyk](https://snyk.io/advisor/npm-package/jasmine), su último commit y su última actualización fueron hace tres meses.


# BIBLIOTECA DE ASERCIONES

Los criterios de selección para las bibliotecas de aserciones son:

1. **Freshness:** es muy importante que biblioteca de aserciones a elegir esté atualizado y que se actualice cada poco tiempo.

2. **Los estilos que utilice:** se tendrá en cuenta los estilos que utilice la biblioteca. Se primará el uso de BDD (Behavior Driven Design) ya que esto nos facilitará su uso al utilizar un lenguaje cercano a nuestro lenguaje cotidiano.


## chai

- Hace uso tanto de BDD (Behavior Driven Developement) como de TDD (Test Driven Developement), lo que facilita su uso.
- Como se puede ver en [open base](https://openbase.com/js/chai), su popularidad es alta teniendo 6 millones de descargas en la semana del 16 de enero de 2023.


## unexpected

- Hace uso de BDD lo que facilita su uso.
- En cuanto a su mantenimiento podemos decir que es constante ya que según [snyk](https://snyk.io/advisor/npm-package/unexpected) su último commmit al igual que su última versión se subieron hace 1 mes.
  

## expect.js

- Hace uso de BDD, es decir, su lenguaje va a ser cercano al cotidiano lo que nos facilitará su uso.
- Su mantenimiento también es constante, su último commit a su repositorio de [GitHub](https://github.com/Automattic/expect.js) fue hace 3 semanas.


# ELECCIÓN

Una vez expuestos los criterios de los test y de las bibliotecas de aserciones,  

- Ya que las tres bibliotecas expuestas hacen uso de BDD y tienen un mantenimiento más o menos constante. Sin embargo, me decanto por la biblioteca **chai** ya que además de tener actualizaciones recientes y hace uso de una sintaxis simple.

Con respecto a los test runners, 
  
- Descarto el test **jasmine** ya que su mantenimiento no es tan constante como el resto (hace 3 meses que no se actualizó). 
  
- Entre **mocha** y **jest**, ambos son los dos test runners más utilizados por la comunidad de JavaScript (como se puede ver aquí, [State of JS: Testing](https://2022.stateofjs.com/en-US/libraries/testing/)). Dado que ambos podrían adaptarse correctamente a mi proyecto finalmente he decidido decantarme por `jest` ya que:
  
  * Relacionado con el criterio **Actualización**, el mantenimiento de jest es más constante que el de **mocha** (mocha lleva meses sin actualizarse). Esta actualización continua ayuda a que este test runner sea menos propenso a errores. 
  
  * Considerando el criterio **Velocidad**, podemos ver que jest más rápido al tener una ejecución en paralelo de los tests como se muestra por ejemplo en [lambdatest](https://www.lambdatest.com/blog/best-javascript-unit-testing-frameworks/) donde se indica que cuando Airbnb cambió de Mocha a Jest, se produjo una reducción en el tiempo de ejecución de la prueba de 12 minutos a 4,5 minutos. Todo esto hace que el test runner tenga un alto rendimiento ([lambdatest: best javascript testing frameworks](https://www.lambdatest.com/blog/best-javascript-unit-testing-frameworks/)),

En resumen, lo que más se adapta a mi proyecto es el uso del test runner **jest** y de la biblioteca de aserciones **chai**.
  

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

# ELECCIÓN TEST RUNNER

Para hacer elección del Test-Runner que mejor se adapte a mi proyecto los voy a comparar y voy a elegir el que mejor se adapte a mi proyecto. Para ello me voy a ayudar de [snyk](https://snyk.io/advisor/).

Los criterios que voy a seguir son:

1. **Freshness:** es muy importante que test runner a elegir esté atualizado y que se actualice cada poco tiempo.
2. **Buenas prácticas:** ver qué es lo que aconseja la mayoría de usuarios de node.js. Para ello he usado estos dos enlaces: [Top JavaScript Testing Frameworks](https://www.browserstack.com/guide/top-javascript-testing-frameworks) y [State of JS: Testing](https://2022.stateofjs.com/en-US/libraries/testing/)
3. **Velocidad:** es importante que el test se ejecute rápido.
4. **Biblioteca de aserciones**: buscaré que el test runner tenga su propia biblioteca de aserciones para evitar la deuda técnica.


## jest

- En cuanto al **mantenimiento** (freshness), jest está en contante actualización para mejorar.
- Este test es **rápido** en su ejecución ya que se puede ejecutar en paralelo.
- En cuanto a la valoración general de [**snyk**](https://snyk.io/advisor/npm-package/jest), tiene una valoración alta por parte de los usuarios. Consta de comunidad activa.
- Es el más usado actualmente por los usuarios. Ya que las pruebas están aisladas unas de otras, es rápido y ofrece diferentes tipos de excepciones para las pruebas.
- Tiene su propia **biblioteca de aserciones**.

## mocha

- En cuanto al **mantenimiento**, al igual que jest, mocha tiene actualizaciones frecuentes.
- En cuanto a la **velocidad**, también tiene una ejecución en paralelo. Sin embargo, se ha demostrado que es más lento que jest.
- En cuanto a su valoración en [**snyk**](https://snyk.io/advisor/npm-package/mocha), su calificación era igual a la de `jest`, aunque ahora ha subido levemente. Su comunidad es también muy activa y también es recomendado por los usuarios.
- No cuenta con su propia **biblioteca de aserciones**.
- Este test también es de lo más recomendados por la comunidad de node.js.

## jasmine

- Su **mantenimiento** es constante aun que menos que el de jest y mocha.
- Permite la ejecución en paralelo por lo que es más **rápido** al ejecutarse.
- Su valoración en [**snyk**](https://snyk.io/advisor/npm-package/jasmine) es más baja que los dos anteriores. Tiene una comunidad activa pero muy pocos usuarios lo utilizan.
- Incluye su propia **biblioteca de aserciones**.
- Este tipo de test, también es usado por la comunidad pero no tanto como los dos anteriores.

## ava

- Su **mantenimiento** es muy frecuente. Casi todos los meses se ha subido alguna actualización.
- Permite la ejecución en paralelo. Lo que aumenta la **velocidad** de ejecución.
- Su valoración en [**snyk**](https://snyk.io/advisor/npm-package/ava) es es más alta que los anteriores, sin embargo, son muy pocos los usuarios lo utilizan (no llega a los 500.000 usuarios).
- No cuenta con una **biblioteca de aserciones**.
- Es el menos utilizado por la comunidad de node.js.


## Elección

A partir de los criterios descritos anteriormente y comparando los diferentes test, he decidido utilizar `jest` ya que además de cumplir con los criterios, es de los más usado y dispone de una biblioteca propia de aserciones lo que va ahorranos la deuda técnica.

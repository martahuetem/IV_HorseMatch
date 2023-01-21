# ELECCIÓN TEST RUNNER

Para hacer elección del Test-Runner que mejor se adapte a mi proyecto los voy a comparar y voy a elegir el que mejor se adapte a mi proyecto. Para ello me voy a ayudar de [synk](https://snyk.io/advisor/).

Los criterios que voy a seguir son:

1. **Freshness:** es muy importante que test runner a elegir esté atualizado y que se actualice cada poco tiempo.
2. **Buenas prácticas:** ver qué es lo que aconseja la mayoría de usuarios de node.js.
3. **Velocidad:** es importante que el test se ejecute rápido.

//Biblioteca de aserciones propia para ahorra la deuda tecnica

## jest

- En cuanto al **mantenimiento** (freshness), jest está en contante actualización para mejorar. Además, es el más utilizado por la comunidad.
- Este test es **rápido** en su ejecución ya que se puede ejecutar en paralelo.
- En cuanto a la valoración general de **synk**, tiene una nota de 95/100 con una comunidad activa y es usado por varios usuarios.

## mocha

- En cuanto al **mantenimiento**, al igual que jest, mocha tiene actualizaciones frecuentes.
- En cuanto a la **velocidad**, también tiene una ejecución en paralelo. Sin embargo, se ha demostrado que es más lento que jest.
- En cuanto a su valoración en **synk**, su calificación es de 95/100 (al igual que jest). Su comunidad es activa también y muy usado por los usuarios.

## chai

- El **mantenimiento** de este test no es tan frecuente como los dos anteriores. Mirando en synk tanto mocha como jest tienen actualizaciones casi todos los meses. Sin embargo, chai no ha tenido ninguna actualización desde febrero hasta octubre de este año.
- No tiene una ejecución en paralelo por lo que es más **lento** que los anteriores.
- Sin embargo, su valoración en **synk** es de 100/100. Aún que tiene menos usuarios que los anteriores.

## jasmine

- Su **mantenimiento** es constante aun que menos que el de jest y mocha.
- Permite la ejecución en paralelo por lo que es más **rápido** al ejecutarse.
- Su valoración en **synk** es de 92/100. Tiene una comunidad activa pero muy pocos usuarios lo utilizan.

## ava

- Su **mantenimiento** es muy frecuente. Casi todos los meses se ha subido alguna actualización.
- Permite la ejecución en paralelo.
- Su valoración en **synk** es de 98/100. Tiene una comunidad activa pero muy pocos usuarios lo utilizan (no llega a los 500.000 usuarios).

## Elección

A partir de los criterios descritos anteriormente y comparando los diferentes test, he decidido utilizar `jest` ya que además de cumplir con los criterios, es el más usado y dispone de una librería propia de aserciones lo que va ahorranos la deuda técnica.

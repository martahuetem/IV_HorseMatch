# ELECCIÓN DE LA BIBLIOTECA DE ASERCIONES

Para hacer la elección de la biblioteca de aserciones que mejor se adapte a mi proyecto, me he ayudado de:

- [Open Base](https://openbase.com/categories/js/highest-rated-javascript-assertion-libraries?vs=webdriverio%2Ctape%2Cmocha)
- [Snyk](https://snyk.io/advisor/)
- [Página Oficial de Chai](https://www.chaijs.com/)
- [Página Oficial de Unexpected](https://unexpected.js.org/)

Los criterios de selección para las bibliotecas de aserciones son:

1. **Freshness:** es muy importante que biblioteca de aserciones a elegir esté atualizado y que se actualice cada poco tiempo.

2. **Uso con los test:** debe de poder usarse con los test expuestos en [test_runner](test_runner.md).

Tras indagar sobre que bibliotecas de aserciones son compatibles con node.js, he destacado:

## chai

- Hace uso tanto de BDD (Behavior Driven Developement) como de TDD (Test Driven Developement), lo que facilita su uso.
- Es compatible con cualquier test runner de JavaScript.
- Como se puede ver en [open base](https://openbase.com/js/chai), su popularidad es alta teniendo 6 millones de descargas en la semana del 16 de enero de 2023.
- Tiene un matenimiento constante. Su último commit según [snyk](https://snyk.io/advisor/npm-package/chai) fué hace 2 meses y su última versión se subió hace 3.


## unexpected

- Hace uso de BDD lo que facilita su uso.
- Es compatible con los test en JavaScript.
- Según [open base](https://openbase.com/js/unexpected), tiene una popularidad bastante más baja que los dos mencionados anteriormente. En este caso, en la última seman solo ha tenido 13.000 descargas.
- En cuanto a su mantenimiento podemos decir que es constante ya que según [snyk](https://snyk.io/advisor/npm-package/unexpected) su último commmit al igual que su última versión se subieron hace 1 mes.


## jest expect

- Al igual que las 3 anteriores hace uso de BDD lo que facilita su uso y compresión.
- Según [snyk](https://snyk.io/advisor/npm-package/@jest/expect), su último commit fué hace 2 días y su última versión se subió hace 6 días por lo que podemos decir que su mantenimiento es constante.
- Según [open base](https://openbase.com/js/@jest/expect), su popularidad es bastante alta ya que en la semana del 16 de enero tuvo 6 millones de descargas.
- Es compatible con los test en JavaScript.


## ELECCIÓN

Una vez expuestas esas 3 bibliotecas de aserciones y una vez hecha la elección de `jest` como [test_runner](test_runner.md), he decidido usar la propia biblioteca de aserciones que trae `jest` ya que hace uso de BDD lo que facilita su uso y su compresión. Además tiene una integración completa con `jest` y es compatible con JavaScript.
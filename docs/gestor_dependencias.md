## **GESTOR DE DEPENDENCIAS**

Para elegir el gestor de dependencias para mi proyecto voy a tener en cuenta los siguientes criterios:

1. **Freshness:** es muy importante que el gestor de dependencias a elegir esté atualizado y que se actualice cada poco tiempo. 

2. **Buenas prácticas:** ver qué es lo que aconseja la mayoría de usuarios de node.js.

3. **Velocidad:** se tiene que tener en cuenta la velocidad en la que se instalan las dependencias. 


## GESTORES DE DEPENDENCIAS POSIBLES


## npm (Node Package Manager)
Es un gestor de paquetes creado en lenguaje JavaScript y es la parte esencial de Node.js.

**Ventajas**

1. Es uno de los sistemas de gestión de paquetes más utilizados por la comunidad ya que es el gestor por defecto de node.js.
2. Viene por defecto en node.js

**Inconvenientes**

1. Lento en cuanto a rendimiento y eficiencia de disco.

## yarn

Yarn surgió como una propuesta para solucionar los problemas tanto de seguridad como de consistencia y de rendimiento.

**Ventajas**

1. Muy usado en los proyectos de proyectos de código abierto. 
2. Es más rápido que npm en cuanto a rendimiento y eficiencia de disco.


**Inconvenientes**

1. No viene por defecto en node.js y hay que instalarlo.
2. A veces falla a la hora de optimizar el espacio en disco.
3. Es una pequeña mejora de npm pero la mayoría de cosas siguen funcionando igual.

## pnpm
Es el remplazo de npm por lo que ha es mucho más rápido y eficiente que su predecesor.

**Ventajas**

1. Es tres veces más rápido que npm y más rapido que yarn en cuanto a rendimiento y eficiencia de disco.
2. Eficiencia en el espacio en disco.
3. Más rápido que yarn y npm a la hora de instalar paquetes.

**Inconvenientes**

1. No soporta, en un principio, los lock files de npm. Sin embargo, hay un comando que convierte los lock files de npm o yarn a pnpm.


## ¿Cuál elijo?

Una vez presentados el top 3 de los gestores de dependencias para node.js se debe de ver cuál es el que más se adecua a mi proyecto en función a los criterios de selección:

1. **Freshness:** En este caso tanto npm como yarn y pnpm se actualizan continuamente (no haya pasado más 18 meses de su última actualización).

2. **Buenas prácticas:** Tras indagar un poco y entrar en varios foros en los que se discute cuál de las tres opciones es mejor, puedo decir que en la mayoría de los casos se recomienda pnpm tanto por su velocidad como por su eficiencia.

3. **Velocidad:** En este caso gana pnpm.

Por todo esto, teniendo que en cuenta que mi proyecto es un proyecto pequeño, descarto el uso de npm ya que es el más lento.

Entre yarn y pnpm, en cuanto a velocidad pnpm es más rápido. Y luego teniendo en cuenta lo que recomiendan los usurios en los foros me quedo con **pnpm** para la realización de mi proyecto.

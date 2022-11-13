## **GESTOR DE DEPENDENCIAS**

Los gestores de dependencias más utilizados para node.js son:

## npm (Node Package Manager)
Es un gestor de paquetes creado en lenguaje JAvaScript y es la parte esencial de Node.js.

**Ventajas**

1. Es uno de los sistemas de gestión de paquetes más utilizados por la comunidad ya que es el gestor por defecto de node.js
2. Tiene la mayor selección de paquetes.
3. Se tiene bastantante información sobre él.
4. Se obtiene cualquier librería a través de una única linea de código, la cual que permite integrar dependencias, distribuir paquetes y administrar módulos.
5. Viene por defecto en node.js
6. Tiene soporte para monorepo.

**Inconvenientes**


1. Se tienen problemas de permisos si se hace uso de *sudo*
2. Ha tenido algunos problemas de seguridad a lo largo de sus 10 años. Sin embargo, se han ido solucionando.
3. Lento en cuanto a rendimiento y eficiencia de disco.

* yarn

Yarn surgió como una propuesta para solucionar los problemas tanto de seguridad como de consistencia y de rendimiento.

**Ventajas**

1. Tiene soporte para monorepo.
2. Es muy seguro desde sus inicios.
3. Muy usado en los proyectos de proyectos de código abierto. Por lo que se tiene mucha información sobre él.
4. Es más rápido que npm en cuanto a rendimiento y eficiencia de disco.


**Inconvenientes**

1. No viene por defecto en node.js y hay que instalarlo.
2. A veces falla a la hora de optimizar el espacio en disco.
3. Es una pequeña mejora de npm pero la mayoría de cosas siguen funcionando igual.

## pnpm
Es el remplazo de npm por lo que ha es mucho más rápido y eficiente que su predecesor.

**Ventajas**

1. Facilita el monorepo con su workspace:.
2. Es tres veces más rápido que npm y más rapido que yarn en cuanto a rendimiento y eficiencia de disco.
3. Al igual que yarn, es muy seguro desde sus inicios.
4. Eficiencia en el espacio en disco.
5. Más rápido que yarn y npm a la hora de instalar paquetes.

**Inconvenientes**

1. No soporta, en un proncipio, los lock files de npm. Sin embargo, hay un comando que convierte los lock files de npm o yarn a pnpm.


## ¿Cuál elijo?

Una vez presentados el top 3 de los gestores de dependencias para node.js se debe de ver cuál es el que más se adecua a mi proyecto en función a los criterios de selección:

1. **Seguridad:** es uno de los criterios principales. Para cualquier proyecto es necesario 

2. **Freshness:** es muy importante que el gestor de dependencias a elegie esté atualizado y que se actualice cada poco tiempo. En este caso tanto npm como yarn y pnpm se actualizan continuamente.

3. **Buenas prácticas:** ver qué es lo que aconseja la mayoría de usuarios de node.js. Tras indagar un poco y entrar en varios foros en los que se discute cuál de las tres opciones es mejor, puedo decir que en la mayoría de los casos se recomienda pnpm tanto por su velocidad como por su eficiencia.

4. **Velocidad:** se tiene que tener en cuenta la velocidad en la que se instalan las dependencias. En este caso gana pnpm.

5. **Monorepo:** el gestor elegido debe dar soporte a monorepo. Los tres gestores dan soporte a monorepo.

Por todo esto, teniendo que en cuenta que mi proyecto es un proyecto pequeño, descarto el uso de npm ya que es lento y no es el más seguro.

Entre yarn y pnpm, en cuanto a velocidad pnpm es más rápido. Y luego teniendo en cuenta lo que recomiendan los usurios en los foros me quedo con **pnpm** para la realización de mi proyecto.

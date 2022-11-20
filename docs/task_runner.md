## Elección del Gestor de Tareas 

El Task Runner es una herramienta que automatiza tareas. Se busca la automatización de tareas repetitivas como compilar o pruebas unitarias.

Para elegir el Task Runner voy a tener en cuenta los siguientes criterios:

1. **Seguridad:** es uno de los criterios principales. Todo proyecto debe ser seguro.

2. **Freshness:** es muy importante que el taks runner esté atualizado y que se actualice cada poco tiempo.

3. **Buenas prácticas:** ver qué es lo que aconseja la mayoría de usuarios. 

4. **Velocidad:** se debe de tener en cuenta la velocidad de el gestor de tareas.

## Grunt

Usa inicialmente una configuración en la que indicas las tareas que tendrás disponible para usar. Para cada tarea, se abren, se crean archivos temporales y se cierran los archivos. Por ello algunos optan por su uso.

* Ventajas

1. Más facil de configurar que gulp.
2. Cuenta con una comunidad muy grande.

* Inconvenientes

1. Hace uso de plugins que a veces hacen varias tareas a la vez.
2. Hace uso de archivos de configuración de datos que son similares a JSON.
3. Complicado en proyectos grandes.
4. Más lento.

## Gulp

A diferencia de Grunt, usa menos código y no usa archivos temporales.

* Ventajas

1. Es más rápido que grunt.
2. A diferencia de grunt, tiene una serie de plugins los cuales cada uno hace una tarea. 
3. Hace uso de JavaScript por lo que es más fácil que grunt.
4. Puede procesar varia tareas a la vez.
5. Se actualiza cada poco tiempo.

* Inconvenientes

1. Es difícil de configurar.
2. No es muy seguro.

## npm

npm también puede automatizar tareas. Para ello en el archivo package.json se pueden crear scripts que resumen las líneas de comandos que se usarían para ejecutar las tareas.

* Ventajas

1. A diferencia de grunt, no te limita a sus complementos. Se puede usar todo npm.
2. No necesita de herramientas adicionales.

* Inconvenientes

1. No funciona muy bien en los entornos de Windows. 

## make

make además de ser una herramienta para generar archivos de otros archivos (p.ej. ejecutables desde el código fuente), también puede hacer otras operaciones como ejecutar otras herramientas y comandos.

* Ventajas

1. A diferencia de grunt o gulp, no necesita de plugins ni de tiempos de ejecución especiales de JavaScript.
2. Se empezó a usar mucho antes que grunt o gulp por lo que tiene mucha más información.
3. Es más rápido.
4. Cuenta con actualizaciones frecuentes.
5. Se puede usar con todos los lenguajes.
6. Es el más seguro.



## ¿Cuál elijo?

Una vez presentados los taks runners más utilizados, toca elegir cuál se adecua más a mi proyecto siguiendo los criterios de selección.

1. **Seguridad:** En este caso, el más seguro sería make.

2. **Freshness:** Todos cumplen este punto.

3. **Buenas prácticas:** Las opiniones están divididas en cuanto a que task runner usar. Los dos a destacar son gulp y make.

4. **Velocidad:** el más rápido en este caso sería make.

Teniendo en cuenta los cuatro puntos anteriores, descarto npm ya que suele dar problemas en windows y grunt porque es lento.

Entre glunt y make, voy a elegir **make** ya que además de que es rápido, seguro y de que cuenta con actualizaciones frecuentes es con el que más familiarizada estoy ya que es el que más hemos usado a lo largo de la carrera.

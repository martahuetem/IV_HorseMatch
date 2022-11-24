## Elección del Gestor de Tareas 

El Task Runner es una herramienta que automatiza tareas. Se busca la automatización de tareas repetitivas como compilar o pruebas unitarias.

Para elegir el Task Runner voy a tener en cuenta los siguientes criterios:

1. **Freshness:** es muy importante que el taks runner esté atualizado y que se actualice cada poco tiempo para que no se quede obsoleto.

2. **Buenas prácticas:** ver qué es lo que aconseja la mayoría de usuarios. 


## Grunt

Usa inicialmente una configuración en la que indicas las tareas que tendrás disponible para usar. Para cada tarea, se abren, se crean archivos temporales y se cierran los archivos. Por ello algunos optan por su uso.

* Ventajas

1. Más facil de configurar que gulp.
2. Cuenta con una comunidad muy grande.

* Inconvenientes

1. Hace uso de plugins que a veces hacen varias tareas a la vez.
2. Hace uso de archivos de configuración de datos que son similares a JSON.
3. Complicado en proyectos grandes.

## Gulp

A diferencia de Grunt, usa menos código y no usa archivos temporales.

* Ventajas

1. A diferencia de grunt, tiene una serie de plugins los cuales cada uno hace una tarea. 
2. Hace uso de JavaScript por lo que es más fácil que grunt.
3. Puede procesar varia tareas a la vez.
4. Se actualiza cada poco tiempo.

* Inconvenientes

1. Es difícil de configurar.

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
3. Cuenta con actualizaciones frecuentes.
4. Se puede usar con todos los lenguajes.



## ¿Cuál elijo?

Una vez presentados los taks runners más utilizados, toca elegir cuál se adecua más a mi proyecto siguiendo los criterios de selección.

1. **Freshness:** Todos cumplen este punto.

2. **Buenas prácticas:** Las opiniones están divididas en cuanto a que task runner usar. Los dos a destacar son gulp y make.


Teniendo en cuenta los dos puntos anteriores, descarto npm ya que suele dar problemas en windows.

Entre grunt, glunt y make, voy a elegir **make** ya que cuenta con actualizaciones frecuentes y es con el que más familiarizada estoy al ser el que más hemos usado a lo largo de la carrera.

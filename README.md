# IV_HorseMatch


El problema que pretende resolver mi aplicación la asignación más óptima posible de caballos a alumnos en un centro hípico.

Para el desarrollo de esta aplicación se va a tener en cuenta el carácter y las posibilidades de un caballo (que se reflejará en un nivel) así como el nivel y las preferencias del alumno.

Se deben de tener en cuenta ciertas restricciones tales como que un caballo solo sea montado por un único jinete y que un jinete no pueda montar mas de un caballo. También se debe de tener en cuenta que no puede haber más jinetes que caballos aunque si podremos tener más caballos que jinetes. Además, se debe de facilitar el descanso de los caballos para su bienestar.

Para generar este reparto, cada caballo dispondrán de un nivel establecido y cada alumno dispondrán de una lista de caballos preferidos.

Al procesar estos datos, la aplicación generará un asignación entre caballos y jinetes del centro. El encontrar la mejor asignacion posibe es importante para el centro hipico ya que en gran medida garantiza la satisfaccion del alumnado, y por consiguiete permite favorecer el numero de alumnos inscritos, que se traduce en mayores ganancias.

Este aplicación podrá ser usada por cualquier centro hípico ya que simplemente variará la lista de caballos y jinetes.

* [Captura del fichero de configuración](Configuracion/configuracion.png)
* [Captura de la clave pública](Configuracion/clavepublica.png)

* [Gestor de dependencias](docs/gestor_dependencias.md)
* [Task Runner](docs/task_runner.md)

* [Test Runner](docs/test_runner.md)
  

#### Orden para comprobar la sintaxis:
Como task runner elegí make. Su instalación se hace mediante Se hara uso de la orden `make check` o `make` para comprobar la sintaxis.

#### Comprobación del test:
Se debe de hacer uso del comando `make test`. Este nos dirá si ha habido algún fallo o no en la realización del test además de la localización de dicho error.

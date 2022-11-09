# HorseMatch: Dominio

## Identificación de clases
Atendiando a las historias de usuario redactadas se han identificado la clase caballo y la clase jinete, que conforman el dominio. Ambas clases podrían variar algunos de sus datos miembros, por lo que ambas son mutables y por tanto entidades.

**_¿Porque podrían variar los datos miembros de ambas clases?_**
Expicándolo con un ejemplo: Un jinete **X** monta un caballo **Y** en 2022, sin embargo en 2023 por problemas de salud el caballo **Y** no puede ser usado, y al jinete **X** le asignan ahora un nuevo caballo **Z**. Esto significa que habría que modificar las relaciones que hay entre el jinete **X** y el caballo **Y**, y asignar ahora alguna relación entre el jinete **X** y el caballo **Z**.


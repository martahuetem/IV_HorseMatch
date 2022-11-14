# HorseMatch: Dominio

## Identificación de clases
Atendiando a las historias de usuario redactadas se han identificado la clase **caballo** y la clase **jinete**, que conforman el dominio. La clase jinete será implementada inicialmente como inmutable, por lo que representará un _objeto-valor_, mientras que caballo podría variar algunos de sus datos miembros, por lo que es mutables y por tanto una _entidad_.

**_¿Porque podría variar los datos miembros de la clase caballo?_**
En la HU2 #4, se habla de que los caballos pueden estar descansando o no, por lo que en la clase caballo habría un dato miembro que represente la disponibilidad del caballo y que podría cambiar en función de si el caballo está descansado o no.


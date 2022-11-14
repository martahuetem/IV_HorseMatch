# HorseMatch: Dominio

## Identificación de clases
Atendiando a las historias de usuario redactadas se han identificado la clase **caballo**, **jinete** y **caballosDisponibles** que conforman el dominio. La clase jinete será implementada inicialmente como inmutable, por lo que representará un _objeto-valor_, mientras que caballo podría variar algunos de sus datos miembros, por lo que es mutables y por tanto una _entidad_.

**_Caballo_**
Representa a un caballo mediante un identificador y un nivel, por lo que una vez inicializada no varíaría por lo que sería inmutable y por tanto un **objeto-valor** .

**_Jinete_**
Representa a un jinete mediante un identificador y un nivel, por lo que una vez inicializada no varíaría por lo que sería inmutable y por tanto un **objeto-valor** .

**_caballosDisponibles_**
Representa la disponibilidad de los caballos mediante una lista de caballos y su disponibilidad asociada. La disponibilidad de los caballos puede cambiar por lo que sería mutable y por tanto una **entidad** .


# **IMAGEN BASE PARA DOCKER**

Para elegir la imagen base para mi proyecto voy a tener en cuenta los siguientes criterios:

1. **Freshness y mantenimiento:** es muy importante que la imagen a elegir esté atualizado y que se actualice cada poco tiempo. 

2. **Buenas prácticas:** ver qué es lo que aconseja la mayoría de usuarios y ver que es lo que mejor se adapta a node.js.

3. **Peso:** se tiene que tener en cuenta el peso de la imagen.

La información para hacer las comparaciones la he sacado del [hub de docker](https://hub.docker.com/search?q=&type=image)

## Docker Oficial Image 

### alpine

* Su mantenimiento es constante. Se actualizó hace 14 días exactamente.
* Pesa muy poco, 8 MB según su [página oficial](https://alpinelinux.org/about/).
* Solo instala su propio paquete, no añade funciones extras. 

### debian

- Al igual que `alpine` hace uso de su propio paquete. 
- Su mantenimiento es constante. Ha sido actualizado hace 13 días.
- Tiene un tamaño de 125 MB claramente mayor que el de `alpine`.

### ubuntu

- Tiene un constante mantenimiento. Su última actualización fue hace 22 días.
- Solo se instala su propio paquete al igual que las dos opciones anteriores.
- Tiene un tamaño de 77.8 MB. Es superior al de `alpine` pero inferior al de `debian`.



## Verified Publisher

### cimg/node

- Al igual que las anteriores, tiene un mantenimiento constante. Su última actualización fue hace 10 días.
- Tiene un tamaño bastante mayor que las anteriores: 608.38 MB.
- Además de instalar `node`, también nos ofrece `npm`, `yarn` y herramientas para construir el entorno CircleCI de manera segura.

### bitnami/node

- Tiene un tamaño de 712.86 MB. Mayor incluso que `cimg/node`.
- Su última actualización fue hace 3 días. Por lo que su mantenimiento es constante.

Además de esas dos imágenes hay muchas otras que han sido creadas por publicadores oficiales pero las descarto ya que no tienen una comunidad muy grande. 


## Recomendaciones de usuarios para node.js

Buscando que imágenes recomiendan los usuarios para node.js he encontrado el siguiente enlace [snyk](https://snyk.io/blog/choosing-the-best-node-js-docker-image/) en el que las imagenes que más se recomiendan son: `alpine` y `node:bullseye-slim` de la imagen de `node`. Como ya he expuesto `alpine` voy a exponer `node:bullseye-slim`.

### node:bullseye-slim

- Al igual que todas las nombradas, tiene un mantenimiento constante siendo su última actualización hace 12 días.
- Es compatible con node.js aportando todo lo necesario para su desarrollo.
- La imagen de `node` tiene un tamaño de 928.24 MB, sin embargo, al optar por la opción de `-slim` la imagen solo contiene los paquetes necesario para correr `node` y su tamaño se reduce a 247.8MB.
  

## Elección de la imagen base

Expuesto todo lo anterior y guiándome por lo que recomiendan los usuarios, he decidido usar `node:bullseye-slim` como imagen base. Aunque no es la más pequeña, cumple con todos los criterios expuestos ya que tiene un matenimiento constante, es compatible con node y tiene un tamaño pequeño.
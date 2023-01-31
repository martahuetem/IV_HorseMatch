const Caballo = require("./caballo")
const Jinete = require("./jinete")
const ExcepcionNumeroJinetes = require("../src/excepciones.js");
const minimum_columna = require("../src/minimo_columna.js")


/**
     * Método que pretende buscar el emparejamiento óptimo de caballos y jinetes. 
     * @param {Array<Array>} matriz Matriz de costos
     * @param {Number} ncaballos Número de caballos
     * @param {Number} nusuarios Número de jinetes
     */

function emparejamiento(matriz, ncaballos, nusuarios) {

  //Lanzo la excepción en caso de que el número de caballos sea menor al de usuarios
  if(ncaballos < nusuarios){
    throw new ExcepcionNumeroJinetes();
  }

  let parejas = new Map()

  let caballo_min = new Array(nusuarios) //Para cada usuario se almacenará el índice del caballo con costo de emparejamiento mínimo

  let costo_min_user = new Array(nusuarios) //Se almacenará el costo de emparejamiento anterior

  let caballos_asignados = new Array(ncaballos)

  //Inicializo la variable caballos_asignados a 0 ya que en un principio no hay ningún caballo asignado
  for (let fila = 0; fila < ncaballos; fila++) {
    caballos_asignados[fila] = 0
  }

  //Para cada jinete(usuario), busco el costo de emparejamiento mínimo y el caballo que corresponde a ese mínimo 
  //y lo añado al array indicado.
  for (let col = 0; col < nusuarios; col++) {
    let minimum = minimum_columna(matriz, ncaballos, nusuarios, col, caballos_asignados)
    costo_min_user[col] = minimum.minimo
    caballo_min[col] = minimum.pos_caballo_minimo
  }

  let min = 0
  let pos_rider_min = 0

  //Hasta que no esten todos los jinetes(usuarios) emparejados
  while (parejas.size < nusuarios) {

    let encontrado = false
    let pos_jinete_minimo = 0

    //Encuentro el primer valor mínimo de entre los jinetes no emparejados
    while (pos_jinete_minimo < costo_min_user.length && !encontrado) {
      if (parejas.has(pos_jinete_minimo) == false) { //Si el jinete no ha sido emparejado
        //Indico que el mínimo es el costo de emparejamiento del jinete
        min = costo_min_user[pos_jinete_minimo]
        //Guardo la posición del jinete mínimo
        pos_rider_min = pos_jinete_minimo
        encontrado = true
      }
      pos_jinete_minimo++
    }

    //Me muevo por el resto del array costo_min_user y busco el costo mínimo y la posición de ese costo
    while (pos_jinete_minimo < costo_min_user.length) {
      if (parejas.has(pos_jinete_minimo) == false && costo_min_user[pos_jinete_minimo] < min) {
        min = costo_min_user[pos_jinete_minimo]
        pos_rider_min = pos_jinete_minimo
      }
      pos_jinete_minimo++
    }

    //Añado la pareja jinete caballo
    parejas.set(pos_rider_min, caballo_min[pos_rider_min])

    //Indico que el caballo en la posición indicada está ya escogido
    caballos_asignados[caballo_min[pos_rider_min]] = 1
    
    //Actualizo los valores en costo_min_uer y caballo_min teniendo en cuenta la asingacion anterior
    for (let col = 0; col < nusuarios; col++) {
      //Si el minimo actual lo tiene con el caballo anterios y no ha sido asignado
      if (caballo_min[col] == caballo_min[pos_rider_min] && col != pos_rider_min && !parejas.has(col)) {
        //Actualizamos valores
        let minimum = minimum_columna(matriz, ncaballos, nusuarios, col, caballos_asignados)
        costo_min_user[col] = minimum.minimo
        caballo_min[col] = minimum.pos_caballo_minimo
      }
    }

  }

  return parejas

}

module.exports =  emparejamiento;

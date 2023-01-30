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

  let costo_min_user = new Array(nusuarios)

  let caballo_min = new Array(nusuarios)

  let caballos_asignados = new Array(ncaballos)

  
  for (let fila = 0; fila < ncaballos; fila++) {
    caballos_asignados[fila] = 0
  }

  for (let col = 0; col < nusuarios; col++) {
    let minimum = minimum_columna(matriz, ncaballos, nusuarios, col, caballos_asignados)
    costo_min_user[col] = minimum.minimo
    caballo_min[col] = minimum.pos_caballo_minimo
  }

  let min = 0
  let pos_rider_min = 0

  while (parejas.size < nusuarios) {

    let encontrado = false
    let pos_jinete_minimo = 0

    while (pos_jinete_minimo < costo_min_user.length && !encontrado) {
      if (parejas.has(pos_jinete_minimo) == false) {
        min = costo_min_user[pos_jinete_minimo]
        pos_rider_min = pos_jinete_minimo
        encontrado = true
      }
      pos_jinete_minimo++
    }

    while (pos_jinete_minimo < costo_min_user.length) {
      if (parejas.has(pos_jinete_minimo) == false && costo_min_user[pos_jinete_minimo] < min) {
        min = costo_min_user[pos_jinete_minimo]
        pos_rider_min = pos_jinete_minimo
      }
      pos_jinete_minimo++
    }


    parejas.set(pos_rider_min, caballo_min[pos_rider_min])


    caballos_asignados[caballo_min[pos_rider_min]] = 1
    

    for (let col = 0; col < nusuarios; col++) {
      if (caballo_min[col] == caballo_min[pos_rider_min] && col != pos_rider_min && !parejas.has(col)) {
        let minimum = minimum_columna(matriz, ncaballos, nusuarios, col, caballos_asignados)
        costo_min_user[col] = minimum.minimo
        caballo_min[col] = minimum.pos_caballo_minimo
      }
    }

  }

  return parejas

}

module.exports =  emparejamiento;
const Caballo = require("./caballo")
const Jinete = require("./jinete")
const ExcepcionNumeroJinetes = require("../src/excepciones.js");

/**
     * Método que busca el mínimo de una columna dada en una matriz. Teniendo en cuenta que puede haber caballos que
     * ya hayan sido asignados. Devuelve el valor del mínimo y la posición (fila) del caballo mínimo.
     * @param {Array<Array>} matriz Matriz de costos
     * @param {Number} nfil Número de caballos
     * @param {Number} ncol Número de jinetes
     * @param {Number} columna_usuario Columna en la cual buscamos el mímino
     * @param {Array} caballos_asignados Caballos que ya han sido asignados
     */

function minimum_columna(matriz, nfil, ncol, columna_usuario, caballos_asignados) {
  let min = 0
  let fila = 0
  let pos_min = -1
  let asignado = false

  while (fila < nfil && !asignado) {
    if (caballos_asignados[fila] == 0) {
      min = matriz[fila][columna_usuario]
      pos_min = fila
      asignado = true
    }
    fila++
  }

  while (fila < nfil) {
    if (caballos_asignados[fila] == 0 && matriz[fila][columna_usuario] < min) {
      min = matriz[fila][columna_usuario]
      pos_min = fila
    }
    fila++
  }

  return {
    pos_caballo_minimo: pos_min,
    minimo: min
  };
}

/**
     * Método que pretende buscar el emparejamiento óptimo de caballos y jinetes. 
     * @param {Array<Array>} matriz Matriz de costos
     * @param {Number} ncaballos Número de caballos
     * @param {Number} nusuarios Número de jinetes
     */

function emparejamiento(matriz, ncaballos, nusuarios) {

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
  let pos_jm = 0



  while (parejas.size < nusuarios) {

    let encontrado = false
    let pos_jinete_minimo = 0

    while (pos_jinete_minimo < costo_min_user.length && !encontrado) {
      if (parejas.has(pos_jinete_minimo) == false) {
        min = costo_min_user[pos_jinete_minimo]
        pos_jm = pos_jinete_minimo
        encontrado = true
      }
      pos_jinete_minimo++
    }

    while (pos_jinete_minimo < costo_min_user.length) {
      if (parejas.has(pos_jinete_minimo) == false && costo_min_user[pos_jinete_minimo] < min) {
        min = costo_min_user[pos_jinete_minimo]
        pos_jm = pos_jinete_minimo
      }
      pos_jinete_minimo++
    }


    parejas.set(pos_jm, caballo_min[pos_jm])


    caballos_asignados[caballo_min[pos_jm]] = 1
    

    for (let col = 0; col < nusuarios; col++) {
      if (caballo_min[col] == caballo_min[pos_jm] && col != pos_jm && !parejas.has(col)) {
        let minimum = minimum_columna(matriz, ncaballos, nusuarios, col, caballos_asignados)
        costo_min_user[col] = minimum.minimo
        caballo_min[col] = minimum.pos_caballo_minimo
      }
    }

  }

  return parejas

}

module.exports =  emparejamiento;
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

  module.exports = minimum_columna;
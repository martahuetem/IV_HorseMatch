const Caballo = require("./caballo")
const Jinete = require("./jinete")

/**
     * Método para crear la matriz con sus costes.
     * Para calcular el costo, he tenido en cuenta las diferencias entre el nivel del jinete y el nivel del 
     * caballo al cuadrado todo esto multiplicado por el valor inverso a la preferencia del jinete (la preferencia 
     * toma valores: 0 si no le gusta, 3 si le gusta). Esto lo hago por ser un problema de minimización. 
     * He sumado uno al valor más uno para evitar tener ceros en la matriz.
     * @param {Array} jinetes Array con los jinetes y sus preferencias
     * @param {Array} horses Array con los caballos
     */


function crearMatrizCosto(jinetes, horses) {

    let matriz = []

    for (let i = 0; i < horses.length; i++) {
        matriz[i] = []
        for (let j = 0; j < jinetes.length; j++) {
            let valor_nivel = Math.pow(jinetes[j].nivel - horses[i].nivel, 2)
            for (let p = 0; p < horses.length; p++) {
                if (jinetes[j].pref_caballos[p].keys().next().value.nombre == horses[i].nombre) {
                    pref = jinetes[j].pref_caballos[p].get(jinetes[j].pref_caballos[p].keys().next().value);
                }
                let valor = valor_nivel * (4 - pref)
                matriz[i][j] = valor + 1
            }
        }
    }
    return matriz
}

module.exports = crearMatrizCosto;
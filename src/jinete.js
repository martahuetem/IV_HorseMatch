const Nivel = require("./nivel")
const Caballo = require("./caballo")

/**
 * Declaración de la clase Jinete. Objeto-valor (pues sus datos miembros no 
 * variarán) que contendrá información del jinete.
 */

class Jinete{
    /**
     * Constructor clase Jinete
     * @param {String} nombre Identificador del jinete 
     * @param {Nivel} nivel Nivel del jinete
     * @param {Array<Map<Caballo, preferencia>>} montados_antes Caballos montados previamente evaluados con una preferencia
     */
    constructor(nombre, nivel, montados_antes){
        this.nombre = nombre;
        this.nivel = nivel;
        this.montados_antes = montados_antes
    }

}

module.exports = Jinete;
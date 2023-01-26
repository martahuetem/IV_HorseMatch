const Nivel = require("./nivel")
const Preferencia = require("./preferencia")

/**
 * Declaración de la clase Jinete. Objeto-valor (pues sus datos miembros no 
 * variarán) que contendrá información del jinete.
 */

class Jinete{
    /**
     * Constructor clase Jinete
     * @param {String} nombre Identificador del jinete 
     * @param {Nivel} nivel Nivel del jinete
     * @param {Array<Map<Caballo, Preferencia>>} pref_caballos Caballos montados previamente evaluados con una preferencia
     */
    constructor(nombre, nivel, pref_caballos){
        this.nombre = nombre;
        this.nivel = nivel;
        this.pref_caballos = pref_caballos
    }

}

module.exports = Jinete;
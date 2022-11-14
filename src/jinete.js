const Nivel = require("./nivel")

/**
 * Declaración de la clase Jinete. Objeto-valor que contendrá información 
 * del jinete.
 */

class Jinete{
    /**
     * Constructor clase Jinete
     * @param {String} nombre Identificador del jinete 
     * @param {Nivel} nivel Nivel del jinete
     */
    constructor(nombre, nivel){
        this.nombre = nombre;
        this.nivel = nivel;
    }

}

module.exports = Jinete;
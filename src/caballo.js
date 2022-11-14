const Nivel = require("./nivel")
/**
 * Declaración de la clase Caballo. Entidad que contendrá información 
 * del caballo.
 */

class Caballo{
    /**
     * Constructor clase caballo
     * @param {String} nombre Identificador del caballo 
     * @param {Nivel} nivel Nivel del caballo
     */
    constructor(nombre, nivel){
        this.nombre = nombre;
        this.nivel = nivel;
    }
    
}

module.exports = Caballo;

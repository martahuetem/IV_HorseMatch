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
     * @param {Boolean} descansado Caballo está descansado o no
     */
    constructor(nombre, nivel, descansado){
        this.nombre = nombre;
        this.nivel = nivel;
        this.descansado = descansado;
    }
    
}

module.exports = Caballo;

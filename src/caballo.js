const Nivel = require("./nivel")
/**
 * Declaración de la clase Caballo. Entidad (pues el valor de 
 * descansado podrá variar en función de si el caballo 
 * está disponible o no) que contendrá información del caballo.
 */

class Caballo{
    /**
     * Constructor clase caballo
     * @param {String} nombre Identificador del caballo 
     * @param {Nivel} nivel Nivel del caballo
     * @param {Boolean} descansado Disponibilidad del caballo
     */
    constructor(nombre, nivel, descansado){
        this.nombre = nombre;
        this.nivel = nivel;
        this.descansado = descansado;
    }
    
}

module.exports = Caballo;

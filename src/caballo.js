const Nivel = require("./nivel")
/**
 * Declaración de la clase Caballo. Objeto-valor pues sus datos representarán
 * un caballo y una vez inicializado no variarán sus datos miembros.
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
const Nivel = require("../Enums/Nivel")

class Caballo{
    /**
     * Constructor clase Caballo
     * @param {String} nombre Identificador del caballo 
     * @param {Nivel} nivel Nivel del caballo
     */
    constructor(nombre, nivel){
        this.nombre = nombre;
        this.nivel = nivel;
    }

    /**
    * Método que devuelve el nombre del caballo
    * @returns {String}
    */
    getNombre(){
        return this.nombre;
    }

    /**
    * Método que devuelve el nombre del caballo
    * @returns {Nivel}
    */
    getNivel(){
        return this.nivel;
    }
    
}

module.exports = Caballo;

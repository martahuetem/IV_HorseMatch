const Nivel = require("../Enums/Nivel")

class Caballo{
    /**
     * Constructor clase Caballo
     * @param {String} nombre Identificador del caballo 
     */
    constructor(nombre){
        this.nombre = nombre;
    }

    /**
    * Método que devuelve el nombre del caballo
    * @returns {String}
    */
    getNombre(){
        return this.nombre;
    }
}

module.exports = Caballo;

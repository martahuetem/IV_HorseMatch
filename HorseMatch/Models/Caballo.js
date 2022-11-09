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

}

module.exports = Caballo;

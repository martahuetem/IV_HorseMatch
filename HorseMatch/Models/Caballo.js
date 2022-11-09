const Nivel = require("../Enums/Nivel")

class Caballo{
    /**
     * Constructor clase Caballo
     * @param {String} nombre Identificador del caballo 
     * @param {Nivel} nivel Nivel del caballo
     * @param {boolean} descansado Caballo está descansado o no
     */
    constructor(nombre, nivel, descansado){
        this.nombre = nombre;
        this.nivel = nivel;
        this.descansado = descansado;
    }
}

module.exports = Caballo;

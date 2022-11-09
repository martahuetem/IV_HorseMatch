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

    /**
    * Método que devuelve si el caballo esta descansado o no
    * @returns {boolean}
    */
    getDescansado(){
        return this.descansado;
    }
}

module.exports = Caballo;

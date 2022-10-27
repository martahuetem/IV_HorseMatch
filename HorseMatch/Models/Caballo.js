const Nivel = require("../Enums/Nivel")

class Caballo{
    /**
     * Constructor clase Caballo
     * @param {String} nombre Identificador del caballo 
     * @param {Nivel} nivel Nivel del caballo
     * @param {boolean} descansado Caballo está descansado o no
     * @param {boolean} tieneJinete Caballo ya ha sido asignado a un Jinete o aún no.
     */
    constructor(nombre, nivel, descansado, tieneJinete){
        this.nombre = nombre;
        this.nivel = nivel;
        this.descansado = descansado;
        this.tieneJinete = tieneJinete;
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

    /**
    * Método que devuelve si el caballo tiene asignado un jinete
    * @returns {boolean}
    */
    getTieneJinete(){
        return this.tieneJinete;
    }
}


module.exports = Caballo;
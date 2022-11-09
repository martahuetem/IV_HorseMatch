const Nivel = require("../Enums/Nivel")

class Jinete{
    /**
     * Constructor clase Jinete
     * @param {String} nombre Identificador del jinete 
     * @param {Nivel} nivel Nivel del jinete
     * @param {Array} listaCaballos Caballos montados por el jinete
     */
    constructor(nombre, nivel, listaCaballos){
        this.nombre = nombre;
        this.nivel = nivel;
        this.listaCaballos = listaCaballos;
    }

    /**
    * Método que devuelve el nombre del jinete
    * @returns {String}
    */
     getNombre(){
        return this.nombre;
    }

    /**
    * Método que devuelve el nombre del jinete
    * @returns {Nivel}
    */
    getNivel(){
        return this.nivel;
    }

    /**
    * Método que devuelve una lista de caballos montados por el jinete
    * @returns {Array}
    */
    getlistaCaballos(){
        return this.listaCaballos;
    }
}

module.exports = Jinete;

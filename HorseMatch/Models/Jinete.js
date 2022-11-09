const Nivel = require("../Enums/Nivel")

class Jinete{
    /**
     * Constructor clase Jinete
     * @param {String} nombre Identificador del jinete 
     * @param {Array} listaCaballos Caballos montados por el jinete
     */
    constructor(nombre, listaCaballos){
        this.nombre = nombre;
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
    * Método que devuelve una lista de caballos montados por el jinete
    * @returns {Array}
    */
    getlistaCaballos(){
        return this.listaCaballos;
    }
}

module.exports = Jinete;

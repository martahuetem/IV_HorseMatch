const Nivel = require("../Enums/Nivel")

class Jinete{
    /**
     * Constructor clase Jinete
     * @param {String} nombre Identificador del jinete 
     * @param {Nivel} nivel Nivel del jinete
     * @param {Array} listaCaballos Caballos montados por el jinete
     * @param {Boolean} tieneCaballo Jinete ya ha sido asignado a un Caballo o aún no.
     */
    constructor(nombre, nivel, listaCaballos, tieneCaballo){
        this.nombre = nombre;
        this.nivel = nivel;
        this.listaCaballos = listaCaballos;
        this.tieneCaballo = tieneCaballo;
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

    /**
    * Método que devuelve si el jinete tiene un caballo asignado
    * @returns {Boolean}
    */
    gettieneCaballo(){
        return this.tieneCaballo;
    }
}

module.exports = Jinete;

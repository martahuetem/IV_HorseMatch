const nivel = require("./nivel")

class jinete{
    /**
     * Constructor clase Jinete
     * @param {String} nombre Identificador del jinete 
     * @param {nivel} nivel Nivel del jinete
     * @param {Array} listaCaballos Caballos montados por el jinete
     */
    constructor(nombre, nivel, listaCaballos){
        this.nombre = nombre;
        this.nivel = nivel;
        this.listaCaballos = listaCaballos;
    }

}

module.exports = jinete;
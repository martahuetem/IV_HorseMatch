const nivel = require("./nivel")

class jinete{
    /**
     * Constructor clase Jinete
     * @param {String} nombre Identificador del jinete 
     * @param {nivel} nivel Nivel del jinete
     * @param {Array} listaCaballos Caballos montados por el jinete
     * @param {Boolean} tieneCaballo Jinete ya ha sido asignado a un Caballo o aún no.
     */
    constructor(nombre, nivel, listaCaballos, tieneCaballo){
        this.nombre = nombre;
        this.nivel = nivel;
        this.listaCaballos = listaCaballos;
        this.tieneCaballo = tieneCaballo;
    }

}

module.exports = jinete;
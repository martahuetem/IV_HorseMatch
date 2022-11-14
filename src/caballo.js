const nivel = require("./nivel")

class caballo{
    /**
     * Constructor clase caballo
     * @param {String} nombre Identificador del caballo 
     * @param {nivel} nivel Nivel del caballo
     * @param {Boolean} descansado Caballo está descansado o no
     * @param {Boolean} tieneJinete Caballo ya ha sido asignado a un Jinete o aún no.
     */
    constructor(nombre, nivel, descansado, tieneJinete){
        this.nombre = nombre;
        this.nivel = nivel;
        this.descansado = descansado;
        this.tieneJinete = tieneJinete;
    }
    
}

module.exports = caballo;

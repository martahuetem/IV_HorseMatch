const nivel = require("./nivel")

class caballo{
    /**
     * Constructor clase caballo
     * @param {String} nombre Identificador del caballo 
     * @param {nivel} nivel Nivel del caballo
     * @param {Boolean} descansado Caballo está descansado o no
     */
    constructor(nombre, nivel, descansado){
        this.nombre = nombre;
        this.nivel = nivel;
        this.descansado = descansado;
    }
    
}

module.exports = caballo;

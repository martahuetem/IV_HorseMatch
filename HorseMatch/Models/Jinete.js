const Nivel = require("../Enums/Nivel")

class Jinete{
    /**
     * Constructor clase Jinete
     * @param {String} nombre Identificador del jinete
     */
    constructor(nombre){
        this.nombre = nombre;
    }

    /**
    * Método que devuelve el nombre del jinete
    * @returns {String}
    */
     getNombre(){
        return this.nombre;
    }
}

module.exports = Jinete;

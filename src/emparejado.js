const Caballo = require("./caballo")
const Jinete = require("./jinete")
/**
 * Declaración de la clase Caballo. Objeto-valor pues sus datos representarán
 * un caballo y una vez inicializado no variarán sus datos miembros.
 */

class Emparejado{
    /**
     * Constructor clase emparejado
     * @param {Array<Caballo>} caballos Lista de caballos
     * @param {Array<Jinete>} jinetes Lista de jinetes
     */
    constructor(caballos, jinetes){
        this.caballos = caballos;
        this.jinetes = jinetes;
    }

    matchRiderWithHorse() {
        this.jinetes.sort((a, b) => b.nivel - a.nivel);
        this.caballos.sort((a, b) => b.nivel - a.nivel);
        return this.jinetes.map((jinete, nivel) => [jinete.nombre, this.caballos[nivel].nombre]);
    }
    
}


module.exports = Emparejado;

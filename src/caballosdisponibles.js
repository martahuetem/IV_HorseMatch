const Caballo = require("./caballo");
/**
 * Declaración de la clase caballoDisponible. Entidad, porque el valor de 
 * disponibilidad de un caballo podrá cambiar.
 */

class CaballosDisponibles{
    /**
     * Constructor clase caballo
     * @param {Array<Caballo>} listaCaballos Lista de caballos
     * @param {Map<String, Boolean>} disponible Disponibilidad de un caballo
     */
    constructor(listaCaballos){
        this.listaCaballos = listaCaballos;
        this.disponible= new Map();

        //Inicialmente todos los caballos se encontrarán disponibles
        for(var Caballo in listaCaballos)
            this.disponible.set(listaCaballos[Caballo].nombre, true);

    }
    
}

module.exports = CaballosDisponibles;


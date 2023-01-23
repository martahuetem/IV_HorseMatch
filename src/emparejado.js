const Caballo = require("./caballo")
const Jinete = require("./jinete")
/**
 * Declaración de la clase Caballo. Objeto-valor pues sus datos representarán
 * un caballo y una vez inicializado no variarán sus datos miembros.
 */


function matchRiderWithHorse(jinetes, caballos) {
    jinetes.sort((a, b) => b.nivel - a.nivel);
    caballos.sort((a, b) => b.nivel - a.nivel);
    return jinetes.map((jinete, nivel) => [jinete.nombre, caballos[nivel].nombre]);
}




module.exports = matchRiderWithHorse;

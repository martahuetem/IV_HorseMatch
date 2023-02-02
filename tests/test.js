const Caballo = require("../src/caballo.js");
const Jinete = require("../src/jinete.js");
const Nivel = require("../src/nivel");
const Preferencia = require("../src/preferencia");
const ExcepcionNumeroJinetesCaballos = require("../src/excepciones.js");
const emparejamiento = require("../src/emparejado.js");
const crear_matriz_costo = require("../src/matriz_costos.js");
const costo_emparejamiento = require("../src/costo_emparejar.js");


function comprobar_matriz(matriz, nfil, ncol) {
    let menor_que_uno = false

    for (let i = 0; i < nfil; i++) {
        for (let j = 0; j < ncol; j++) {
            if (matriz[i][j] < 1) {
                menor_que_uno = true
            }
        }
    }

    return menor_que_uno
}



 //Creo unos caballos ejemplo
 let horses = [
    new Caballo("A", Nivel.Alto),
    new Caballo("B", Nivel.MedioAlto),
    new Caballo("C", Nivel.Medio),
    new Caballo("D", Nivel.Bajo)
 ]

 //Creo las preferencias de los alumnos a los caballos
 let pref_marta = [
     new Map([[horses[0], Preferencia.Gusta]]),
     new Map([[horses[1], Preferencia.Gusta]]),
     new Map([[horses[2], Preferencia.NoGusta]]),
     new Map([[horses[3], Preferencia.NoGusta]]),
 ];

 let pref_carlos = [
     new Map([[horses[0], Preferencia.NoGusta]]),
     new Map([[horses[1], Preferencia.Gusta]]),
     new Map([[horses[2], Preferencia.Gusta]]),
     new Map([[horses[3], Preferencia.NoGusta]]),
 ];

 let pref_paco = [
     new Map([[horses[0], Preferencia.NoGusta]]),
     new Map([[horses[1], Preferencia.NoGusta]]),
     new Map([[horses[2], Preferencia.Gusta]]),
     new Map([[horses[3], Preferencia.NoGusta]]),
 ];

 let pref_alberto = [
     new Map([[horses[0], Preferencia.NoGusta]]),
     new Map([[horses[1], Preferencia.NoGusta]]),
     new Map([[horses[2], Preferencia.NoGusta]]),
     new Map([[horses[3], Preferencia.Gusta]]),
 ];


 let jinetes = [
    new Jinete("Marta", Nivel.Alto, pref_marta),
    new Jinete("Carlos", Nivel.MedioAlto, pref_carlos),
    new Jinete("Paco", Nivel.Medio, pref_paco),
    new Jinete("Alberto", Nivel.Bajo, pref_alberto)
 ]


 let matriz = crear_matriz_costo(jinetes, horses)

 
// TESTS //

describe("Pruebas de corrección", () => {

    test('Los costos de la matriz deben de ser mayores o iguales que 1', () => {
        //Compruebo que todos los costes de la matriz son mayores o iguales a 1
        let matriz_valida = comprobar_matriz(matriz)
        expect(matriz_valida).toBeFalsy()
    });

    test('Asignación correcta de los binomios (caballo, jinete)', () => {
        let pref = 0

        const resultado_esperado = new Map([
            ["Marta", "A"],
            ["Carlos", "B"],
            ["Alberto", "D"],
            ["Paco", "C"]
        ]);

        const costo_esperado = 4

        const caballos_asignados = [0, 1, 0, 0]

        let res = []

        //Compruebo la excepción
        try{
            res = emparejamiento(matriz)
        } catch (excepcion){
            if(excepcion instanceof ExcepcionNumeroJinetesCaballos){
                return excepcion.mensaje
            }
        }
    
        let riders = new Array(jinetes.length)
        let chevals = new Array(horses.length)

        let i = 0

        for (let parejas of res) {
            riders[i] = parejas[0]
            chevals[i] = parejas[1]
            i++
        }

        let pos_jinete = 0
        let pos_caballo = 0

        let binomio = new Map()

        for (let i = 0; i < jinetes.length; i++) {
            pos_jinete = riders[i]
            pos_caballo = chevals[i]
            binomio.set(jinetes[pos_jinete].nombre, horses[pos_caballo].nombre)
        }

        let costo = costo_emparejamiento(matriz, res)

        //Compruebo que el costo sea igual ya que a mismo costo, puede haber varias opciones diferentes
        expect(costo).toEqual(costo_esperado)
        //expect(binomio).toEqual(resultado_esperado);

    });
});





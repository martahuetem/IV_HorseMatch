const Caballo = require("../src/caballo.js");
const Jinete = require("../src/jinete.js");
const emparejamiento = require("../src/emparejado.js");
const crear_matriz_costo = require("../src/matriz_costos.js");

function costo_emparejamiento(matriz, binomio) {
    let costo = 0

    for (let par of binomio) {
        costo += matriz[par[1]][par[0]]
    }
    return costo
}

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
    new Caballo("A", 3),
    new Caballo("B", 2),
    new Caballo("C", 1),
    new Caballo("D", 0)
 ]

 //Creo las preferencias de los alumnos a los caballos
 let pref_marta = [
     new Map([[horses[0], 3]]),
     new Map([[horses[1], 3]]),
     new Map([[horses[2], 0]]),
     new Map([[horses[3], 0]]),
 ];

 let pref_carlos = [
     new Map([[horses[0], 0]]),
     new Map([[horses[1], 3]]),
     new Map([[horses[2], 3]]),
     new Map([[horses[3], 0]]),
 ];

 let pref_paco = [
     new Map([[horses[0], 0]]),
     new Map([[horses[1], 0]]),
     new Map([[horses[2], 3]]),
     new Map([[horses[3], 0]]),
 ];

 let pref_alberto = [
     new Map([[horses[0], 0]]),
     new Map([[horses[1], 0]]),
     new Map([[horses[2], 0]]),
     new Map([[horses[3], 3]]),
 ];

 //Creo uno jinetes ejemplo
 let marta = new Jinete("Marta", 3, pref_marta);
 let carlos = new Jinete("Carlos", 2, pref_carlos);
 let paco = new Jinete("Paco", 1, pref_paco);
 let alberto = new Jinete("Alberto", 0, pref_alberto);

 let jinetes = [
    new Jinete("Marta", 3, pref_marta),
    new Jinete("Carlos", 2, pref_carlos),
    new Jinete("Paco", 1, pref_paco),
    new Jinete("Alberto", 0, pref_alberto)
 ]

 let matriz = crear_matriz_costo(jinetes, horses)

 
// TESTS //

describe("Pruebas de corrección", () => {

    test('El número de jinetes debe de ser menor o igual al de caballos', () => {
        //Comprobamos que el número de jinetes sea siempre menor o igual que el de caballos
        let njinetes = jinetes.length
        let ncaballos = horses.length
        expect(ncaballos).toBeGreaterThanOrEqual(njinetes);
    });

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

        let res = emparejamiento(matriz, horses.length, jinetes.length)
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





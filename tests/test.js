const Caballo = require("../src/caballo.js");
const Jinete = require("../src/jinete.js");
const Nivel = require("../src/nivel");
const Preferencia = require("../src/preferencia");
const ExcepcionNumeroJinetesCaballos = require("../src/excepciones.js");
const emparejamiento = require("../src/emparejado.js");
const crearMatrizCosto = require("../src/matriz_costos.js");
const costoEmparejamiento = require("../src/costo_emparejar.js");


function comprobarMatriz(matriz, nfil, ncol) {
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
const horses = []

const nombres = ["A", "B", "C", "D"];
const niveles = [Nivel.Alto, Nivel.MedioAlto, Nivel.Medio, Nivel.Bajo];

for (let i = 0; i < nombres.length; i++) {
    horses.push(new Caballo(nombres[i], niveles[i]));
}


//Creo las preferencias de los alumnos a los caballos
const preferenciaMarta = [
    new Map([[horses[0], Preferencia.Gusta]]),
    new Map([[horses[1], Preferencia.Gusta]]),
    new Map([[horses[2], Preferencia.NoGusta]]),
    new Map([[horses[3], Preferencia.NoGusta]]),
];

const preferenciaCarlos = [
    new Map([[horses[0], Preferencia.NoGusta]]),
    new Map([[horses[1], Preferencia.Gusta]]),
    new Map([[horses[2], Preferencia.Gusta]]),
    new Map([[horses[3], Preferencia.NoGusta]]),
];

const preferenciaPaco = [
    new Map([[horses[0], Preferencia.NoGusta]]),
    new Map([[horses[1], Preferencia.NoGusta]]),
    new Map([[horses[2], Preferencia.Gusta]]),
    new Map([[horses[3], Preferencia.NoGusta]]),
];

const preferenciaLaura = [
    new Map([[horses[0], Preferencia.NoGusta]]),
    new Map([[horses[1], Preferencia.NoGusta]]),
    new Map([[horses[2], Preferencia.NoGusta]]),
    new Map([[horses[3], Preferencia.Gusta]]),
];


let jinetes = [
    new Jinete("Marta", Nivel.Alto, preferenciaMarta),
    new Jinete("Carlos", Nivel.MedioAlto, preferenciaCarlos),
    new Jinete("Paco", Nivel.Medio, preferenciaPaco),
    new Jinete("Laura", Nivel.Bajo, preferenciaLaura)
]


let matriz = crearMatrizCosto(jinetes, horses)

let binomio = new Map()


// TESTS //
const { expect } = require("chai");
describe("Pruebas de corrección", () => {


    test('Los costos de la matriz deben de ser mayores o iguales que 1', () => {
        //Compruebo que todos los costes de la matriz son mayores o iguales a 1
        let matriz_valida = comprobarMatriz(matriz)
        expect(matriz_valida).to.be.false
    });

    test('Asignación correcta de los binomios (caballo, jinete)', () => {
        let pref = 0

        const resultado_esperado = new Map([
            ["Marta", "A"],
            ["Carlos", "B"],
            ["Laura", "D"],
            ["Paco", "C"]
        ]);

        const costo_esperado = 4

        const caballos_asignados = [0, 1, 0, 0]

        let tanda = new emparejamiento(matriz)

        let res = []

        //Compruebo la excepción
        try {
            res = tanda.crearParejas()
        } catch (excepcion) {
            if (excepcion instanceof ExcepcionNumeroJinetesCaballos) {
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

        for (let i = 0; i < jinetes.length; i++) {
            pos_jinete = riders[i]
            pos_caballo = chevals[i]
            binomio.set(jinetes[pos_jinete].nombre, horses[pos_caballo].nombre)
        }

        let costo = costoEmparejamiento(matriz, res)

        //Compruebo que el costo sea igual ya que a mismo costo, puede haber varias opciones diferentes
        expect(costo).to.equal(costo_esperado)
        //expect(binomio).toEqual(resultado_esperado);

    });

    test('A Laura le ha tocado el caballo "D" que no le da miedo ya que se adpata a su nivel', () => {
        const binomioLaura = "D"

        let obj = Object.fromEntries(binomio.entries())

        let caballoLaura = obj.Laura

        expect(caballoLaura).to.equal(binomioLaura)
    });
});





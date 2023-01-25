const Caballo = require("../src/caballo.js");
const Jinete = require("../src/jinete.js");
const emparejamiento = require("../src/emparejado.js");
const crear_matriz_costo = require("../src/matriz_costos.js");

function costo_emparejamiento(matriz, binomio){
    let costo = 0

    for(let par of binomio){
        costo += matriz[par[1]][par[0]]
    }
    return costo
}

describe("emparejamiento", () => {
    test('emparejar jinete con caballo', () => {

        //Creo unos caballos ejemplo
        let caballo1 = new Caballo("A", 3);
        let caballo2 = new Caballo("B", 2);
        let caballo3 = new Caballo("C", 1);
        let caballo4 = new Caballo("D", 0);

        const horses = [caballo1, caballo2, caballo3, caballo4];

        //Creo las preferencias de los alumnos a los caballos
        let pref_marta = [
            new Map([[caballo1, 3]]),
            new Map([[caballo2, 3]]),
            new Map([[caballo3, 0]]),
            new Map([[caballo4, 0]]),
        ];

        let pref_carlos = [
            new Map([[caballo1, 0]]),
            new Map([[caballo2, 3]]),
            new Map([[caballo3, 3]]),
            new Map([[caballo4, 0]]),
        ];

        let pref_paco = [
            new Map([[caballo1, 0]]),
            new Map([[caballo2, 0]]),
            new Map([[caballo3, 3]]),
            new Map([[caballo4, 0]]),
        ];

        let pref_alberto = [
            new Map([[caballo1, 0]]),
            new Map([[caballo2, 0]]),
            new Map([[caballo3, 0]]),
            new Map([[caballo4, 3]]),
        ];

        //Creo uno jinetes ejemplo
        let marta = new Jinete("Marta", 3, pref_marta);
        let carlos = new Jinete("Carlos", 2, pref_carlos);
        let paco = new Jinete("Paco", 1, pref_paco);
        let alberto = new Jinete("Alberto", 0, pref_alberto);

        const jinetes = [marta, carlos, alberto, paco];

        let matriz = crear_matriz_costo(jinetes, horses)
        let pref = 0

        //console.log(matriz)
        //console.log(jinetes)
        //console.log(horses)

        const resultado_esperado = new Map([
            ["Marta", "A"],
            ["Carlos", "B"],
            ["Alberto", "D"],
            ["Paco", "C"]
        ]);

        const costo_esperado = 4

        let caballos_asignados = [0, 1, 0, 0]

        let res = emparejamiento(matriz, horses.length, jinetes.length)
        let riders = new Array(jinetes.length)
        let chevals = new Array(horses.length)

        //console.log(res)

        let i = 0

        for(let parejas of res){
            riders[i] = parejas[0]
            chevals[i] = parejas[1]
            i++
        }

        //console.log(riders, chevals)

        let pos_jinete = 0
        let pos_caballo = 0

        //console.log(jinetes)
       // console.log(riders)
        let binomio = new Map()

        for(let i=0; i<jinetes.length; i++){
            pos_jinete = riders[i]
            pos_caballo = chevals[i]
            binomio.set(jinetes[pos_jinete].nombre, horses[pos_caballo].nombre)
        }

        //console.log(resultado_esperado)
       // console.log(costo_emparejamiento(matriz, resultado_esperado))

       // console.log(binomio)
       // console.log(costo_emparejamiento(matriz, res))

        let costo = costo_emparejamiento(matriz, res)

        //console.log(riders, cheval)
        expect(costo).toEqual(costo_esperado)

        //expect(binomio).toEqual(resultado_esperado);

    });
});





const Caballo = require("../src/caballo.js");
const Jinete = require("../src/jinete.js");
const matchRiderWithHorse = require("../src/emparejado.js");

describe("matchRiderWithHorse", () => {
    test('emparejar jinete con caballo', () => {
        //Creo uno jinetes ejemplo
        let marta = new Jinete("Marta", 3);
        let carlos = new Jinete("Carlos", 2);
        let paco = new Jinete("Paco", 2);
        let alberto = new Jinete("Alberto", 0);

        

        const jinetes = [marta, carlos, paco, alberto];

        //Creo unos caballos ejemplo
        let caballo1 = new Caballo("A", 3);
        let caballo2 = new Caballo("B", 2);
        let caballo3 = new Caballo("C", 2);
        let caballo4 = new Caballo("D", 0);

        const horses = [caballo1, caballo2, caballo3, caballo4];

        //console.log(jinetes)
        //console.log(horses)


        const resultado_esperado = [["Marta", "A"], ["Carlos", "B"], ["Paco", "C"], ["Alberto", "D"]];


        const match = matchRiderWithHorse(jinetes, horses);
        //console.log(match)
        expect(match).toEqual(resultado_esperado);
    });
});





const jinete = require("../src/jinete");
const caballo = require("../src/caballo");


function matchRiderWithHorse(jinetes, horses) {
    jinetes.sort((a, b) => b.nivel - a.nivel);
    horses.sort((a, b) => b.nivel - a.nivel);
    return jinetes.map((jinete, nivel) => [jinete.nombre, horses[nivel].nombre]);
}


test('emparejar jinete con caballo', () => {
    //Creo uno jinetes ejemplo
    let marta = new jinete("Marta", 3);
    let carlos = new jinete("Carlos", 2);
    let paco = new jinete("Paco", 2);
    let alberto = new jinete("Alberto", 0);

    const jinetes = [marta, carlos, paco, alberto];

    //Creo unos caballos ejemplo
    let caballo1 = new caballo("A", 3);
    let caballo2 = new caballo("B", 2);
    let caballo3 = new caballo("C", 2);
    let caballo4 = new caballo("D", 0);

    const horses = [caballo1, caballo2, caballo3, caballo4];

    //console.log(jinetes)
    //console.log(horses)


    const resultado_esperado = [["Marta", "A"], ["Carlos", "B"], ["Paco", "C"], ["Alberto", "D"]];

    

    const match = matchRiderWithHorse(jinetes, horses);
    //console.log(match)
    expect(match).toEqual(resultado_esperado);
});






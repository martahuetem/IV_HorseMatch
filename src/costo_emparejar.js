function costoEmparejamiento(matriz, binomio) {
    let costo = 0

    for (let par of binomio) {
        costo += matriz[par[1]][par[0]]
    }
    return costo
}

module.exports = costoEmparejamiento;
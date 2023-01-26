/**
     * Método para validar la excepción de que el número de jinetes debe ser menor o igual que el de caballos
     * @param {Number} ncaballos Número de caballos
     * @param {Number} nusuarios Número de jinetes
     */


function ExcepcionNumeroJinetes() {
    this.mensaje = "El número de jinetes no es menor o igual que el de caballos"
}

module.exports = ExcepcionNumeroJinetes;

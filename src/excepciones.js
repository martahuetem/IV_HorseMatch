/**
     * Método para validar la excepción de que el número de jinetes debe ser menor o igual que el de caballos
     * @param {Number} ncaballos Número de caballos
     * @param {Number} nusuarios Número de jinetes
     */


function ExcepcionNumeroJinetesCaballos(valor) {
    
    switch(valor){
        case 1:
            this.mensaje = "El número de jinetes debe ser menor que el de caballos"
            break;
        case 2: 
            this.mensaje = "El número de jinetes no puede ser 0"
            break;
    }
}

module.exports = ExcepcionNumeroJinetesCaballos;

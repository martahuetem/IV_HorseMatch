const Caballo = require("./caballo")
const Jinete = require("./jinete")
const ExcepcionNumeroJinetesCaballos = require("../src/excepciones.js");


class emparejamiento{
      /**
     * Constructor clase emparejamiento
     * @param {Array<Array>} matriz_costos Matriz de costos
     */
      constructor(matriz_costos){

        this.matriz_costos = matriz_costos

        this.nusuarios = this.matriz_costos[0].length;
        this.ncaballos = this.matriz_costos.length;

        

        //Lanzo la excepción en caso de que el número de caballos sea menor al de usuarios
        if(this.ncaballos < this.nusuarios){
          throw new ExcepcionNumeroJinetesCaballos(1);
        }else if(this.nusuarios == 0){
            throw new ExcepcionNumeroJinetesCaballos(2);
          }
         
        
        this.parejas = new Map()

        this.caballo_min = new Array(this.nusuarios) //Para cada usuario se almacenará el índice del caballo con costo de emparejamiento mínimo

        this.costo_min_user = new Array(this.nusuarios) //Se almacenará el costo de emparejamiento anterior

        this.caballos_asignados = new Array(this.ncaballos)

        //Inicializo la variable caballos_asignados a 0 ya que en un principio no hay ningún caballo asignado
        for (let fila = 0; fila < this.ncaballos; fila++) {
          this.caballos_asignados[fila] = 0
        }

        //Inicializacion de los vectores caballo_min y costo_min_user
        for (let col = 0; col < this.nusuarios; col++) {
          let minimum = this.#minimumColumna(col)
          this.costo_min_user[col] = minimum.minimo
          this.caballo_min[col] = minimum.pos_caballo_minimo
        }

      }

      #minimumColumna(ncol){
        let min = Number.MAX_SAFE_INTEGER
        let pos_min = undefined

        for(let fila=0; fila<this.ncaballos; fila++){
          if (this.caballos_asignados[fila] == 0 && this.matriz_costos[fila][ncol] < min) {
            min = this.matriz_costos[fila][ncol]
            pos_min = fila
          }
        }
      
        return {
          pos_caballo_minimo: pos_min,
          minimo: min
        };
      }


      //Método para seleccionar el jinete con menor costo de emparejamiento entre los no emparejados
      #seleccionJineteMenorCostoNoAsignado(){
        let min = Number.MAX_SAFE_INTEGER
        let pos_rider_min = undefined
      
        //Me muevo por el array costo_min_user y busco el costo mínimo y la posición de ese costo
        for(let pos_jinete_minimo=0; pos_jinete_minimo<this.costo_min_user.length; pos_jinete_minimo++){
          if (this.parejas.has(pos_jinete_minimo) == false && this.costo_min_user[pos_jinete_minimo] < min) {
            min = this.costo_min_user[pos_jinete_minimo]
            pos_rider_min = pos_jinete_minimo
          }
        }
      
        return pos_rider_min
      }

      //Método para actualizar los vectores caballo_min y costo_min_user
      #actualizarVectoresMinimos(pos_rider_min){
        //Actualizo los valores en costo_min_user y caballo_min teniendo en cuenta la asingacion anterior
        for (let col = 0; col < this.nusuarios; col++) {
          //Si el minimo actual lo tiene con el caballo anterios y no ha sido asignado
          if (this.caballo_min[col] == this.caballo_min[pos_rider_min] && col != pos_rider_min && !this.parejas.has(col)) {
            //Actualizamos valores
            let minimum = this.#minimumColumna(col)
            this.costo_min_user[col] = minimum.minimo
            this.caballo_min[col] = minimum.pos_caballo_minimo
          }
        }
      }

      crearParejas(){
        while (this.parejas.size < this.nusuarios) {
          //Encuentro el jinete con costo menor de emparejamiento entre los jinetes no emparejados
          let pos_rider_min = this.#seleccionJineteMenorCostoNoAsignado()

          //Añado la pareja jinete, caballo
          this.parejas.set(pos_rider_min, this.caballo_min[pos_rider_min])

          //Indico que el caballo en la posición indicada está ya escogido
          this.caballos_asignados[this.caballo_min[pos_rider_min]] = 1
          
          //Actualizo los valores en costo_min_user y caballo_min teniendo en cuenta la asingacion anterior
          this.#actualizarVectoresMinimos(pos_rider_min)
        }

        return this.parejas
      }


}

module.exports =  emparejamiento;

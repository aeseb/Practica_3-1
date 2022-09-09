//Defino la clase
class  PincelArtistico{

    //Estado/caracteristica/campo
    nombre = "por def";
    cerdas = "por def"
    cerdasNaturales = true;

    //Comportmiento/metodo
    /**
     * Funcion que devuelve dos strigs
     * segun dos estados booleanos: TRUE o FALSE.
     */
    pintaAcuarela(){
        if(this.cerdasNaturales){
            console.log("Me encantan las acuarelas!! :D");
        }
        else{
            console.log("No soy muy bueno con la acuarela :[");
        }
    }
    tusCerdasSonNaturales(cambioValor){
        this.cerdasNaturales = cambioValor;
    }

   /**
    * Pido el nombre de PincelArtistico
    * @returns el nombre 
    */
    pincelNombre(){
       return "Mi nombre es " + this.nombre;
    }
    tuNombreEs(nombre){
        this.nombre = nombre;
    }

    /**
     * Devuelve el tipo de cerdas:
     * naturales o sinteticas.
     * @returns tipo de cerdas.
     */
    cerdasTipo(){
        return "Mis cerdas son " + this.cerdas;
    }
    tusCerdasSon(cerdas){
        this.cerdas = cerdas;
    }
    
    
}

//exporta la definicion de la clase PincelArtisticoS.
module.exports = PincelArtistico;


//Defino la clase
class TecladoPc {

    //Estado/caracteristica/campo
    nombre = "por def";
    sistemaTeclas = "por def"
    tipeo = true;
    //cerdasNaturales = true;

    //Comportmiento/metodo

    /**
     * Funcion que devuelve dos strigs
     * segun dos estados booleanos: TRUE o FALSE.
     */

    /*Por alguna razon que no llego a ver,
    luego de llamar a esta funcion se ve 
    reflejado un undefined en la consola*/
    cualidadTipeo() {
        if (this.tipeo) {
            console.log("Valoro la velocidad de respuesta.");
        }
        else {
            console.log("Valoro el tipeo silencioso.");
        }
    }
    teclaS(tipeo) {
        this.tipeo = tipeo;
    }

    /**
     * Pido el nombre de TecladoPc.
     * @returns el nombre.
     */
    tecladoNombre() {
        return "Soy el teclado " + this.nombre;
    }
    tuNombreEs(nombre) {
        this.nombre = nombre;
    }
    /**
     * Devuelve si el sitema de teclas 
     * es mecanico o de membrana.
     * @returns sitema de teclas
     */
    sistemaTipo() {
        return "Soy un teclado de tipo " + this.sistemaTeclas;
    }
    tusTeclasSon(teclas) {
        this.sistemaTeclas = teclas;
    }
}

//exporta la definicion de la clase TecladoPc.
module.exports = TecladoPc;
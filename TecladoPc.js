
//Defino la clase
class TecladoPc {

    //Estado/caracteristica/campo
    nombre = "por def";
    tecnologia = "por def"
    sistemaTeclas = true;
    
    //Comportmiento/metodo
    /**
     * Funcion que devuelve dos strigs
     * segun dos estados booleanos: TRUE o FALSE.
     */
    cualidadTipeo() {
        if (this.sistemaTeclas) {
            console.log("Valoro la velocidad de respuesta.");
        }
        else {
            console.log("Valoro el tipeo silencioso.");
        }
    }
    sistemaDeMembrana(tipeo) {
        this.sistemaTeclas = tipeo;
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
        return "Soy un teclado de tipo " + this.tecnologia;
    }
    tusTeclasSon(teclas) {
        this.tecnologia = teclas;
    }
}

//exporta la definicion de la clase TecladoPc.
module.exports = TecladoPc;
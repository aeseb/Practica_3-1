const tecladoPc = require("./tecladoPc");
const PincelArtistico = require("./PincelArtistico");

//identidad
const pincelDeSebas = new PincelArtistico();
const commie = new PincelArtistico();
const Preferido = new tecladoPc();
const Nocturno = new tecladoPc();

/** Flujo PincelArtistico **/
pincelDeSebas.tuNombreEs("Pincel de sebas.");
commie.tuNombreEs("Commie");

pincelDeSebas.tusCerdasSon("sinteticas.");
commie.tusCerdasSon("naturales");

pincelDeSebas.tusCerdasSonNaturales(false);

/** Flujo Teclado de PC **/
Preferido.tuNombreEs("Preferido.");
Nocturno.tuNombreEs("Nocturno");

Preferido.tusTeclasSon("mecanico.");
Nocturno.tusTeclasSon("membrana");

Nocturno.sistemaDeMembrana(false);


//Flujo de salida por consola

console.log("---------------------");
console.log("Clase PincelArtistico");
console.log("---------------------");

console.log(pincelDeSebas.pincelNombre());
console.log(pincelDeSebas.cerdasTipo());
pincelDeSebas.pintaAcuarela();
console.log("---------");
console.log(commie.pincelNombre());
console.log(commie.cerdasTipo());
commie.pintaAcuarela();

console.log("-------------------");
console.log("Clase Teclado de PC");
console.log("-------------------");

console.log(Preferido.tecladoNombre());
console.log(Preferido.sistemaTipo());
Preferido.cualidadTipeo();
console.log("---------");
console.log(Nocturno.tecladoNombre());
console.log(Nocturno.sistemaTipo());
Nocturno.cualidadTipeo();

console.log("---------FIN---------");

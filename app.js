const tecladoPc = require("./tecladoPc");
const PincelArtistico = require("./PincelArtistico");

//identidad
const pincelDeSebas = new PincelArtistico();
const commie = new PincelArtistico();
const preferido = new tecladoPc();
const nocturno = new tecladoPc();

/** Flujo PincelArtistico **/
pincelDeSebas.tuNombreEs("Pincel de sebas.");
commie.tuNombreEs("Commie");

pincelDeSebas.tusCerdasSon("sinteticas.");
commie.tusCerdasSon("naturales");

pincelDeSebas.tusCerdasSonNaturales(false);

/** Flujo Teclado de PC **/
preferido.tuNombreEs("Preferido.");
nocturno.tuNombreEs("Nocturno");

preferido.tusTeclasSon("mecanico.");
nocturno.tusTeclasSon("membrana");

nocturno.sistemaMecanico(false);


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

console.log(preferido.tecladoNombre());
console.log(preferido.sistemaTipo());
preferido.cualidadTipeo();
console.log("---------");
console.log(nocturno.tecladoNombre());
console.log(nocturno.sistemaTipo());
nocturno.cualidadTipeo();

console.log("---------FIN---------");

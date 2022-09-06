const tecladoPc = require("./tecladoPc");
const PincelArtistico = require("./PincelArtistico");

//identidad
const pincelDeSebas = new PincelArtistico();
const commie = new PincelArtistico();
const redragon = new tecladoPc();
const logitech = new tecladoPc();

/** Flujo PincelArtistico **/
pincelDeSebas.tuNombreEs("Pincel de sebas.");
commie.tuNombreEs("Commie");

pincelDeSebas.tusCerdasSon("sinteticas.");
commie.tusCerdasSon("naturales");

pincelDeSebas.cerdasIndicadas(false);


/** Flujo Teclado de PC **/
redragon.tuNombreEs("Preferido.");
logitech.tuNombreEs("Nocturno");

redragon.tusTeclasSon("mecanico.");
logitech.tusTeclasSon("membrana");

logitech.teclaS(false);


//Flujo de salida por consola

console.log("---------------------");
console.log("Clase PincelArtistico");
console.log("---------------------");

console.log(pincelDeSebas.pincelNombre());
console.log(pincelDeSebas.cerdasTipo());
console.log(pincelDeSebas.pintaAcuarela());
console.log("---------");
console.log(commie.pincelNombre());
console.log(commie.cerdasTipo());
console.log(commie.pintaAcuarela());

console.log("-------------------");
console.log("Clase Teclado de PC");
console.log("-------------------");

console.log(redragon.tecladoNombre());
console.log(redragon.sistemaTipo());
console.log(redragon.cualidadTipeo());
console.log("---------");
console.log(logitech.tecladoNombre());
console.log(logitech.sistemaTipo());
console.log(logitech.cualidadTipeo());

console.log("---------FIN---------");

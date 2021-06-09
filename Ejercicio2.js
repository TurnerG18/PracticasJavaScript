//Ejercicio 2
var dato = prompt("Introduzca la fecha:");
let fecha1 = new Date(dato);
let fecha2 = new Date();

let milisegDia = 24*60*60*1000;
let milisegTransc = Math.abs(fecha1.getTime() - fecha2.getTime());
let diasTransc = Math.round(milisegTransc/milisegDia);

if (dato.startsWith("jan")||
    dato.startsWith("feb")||
    dato.startsWith("mar")||
    dato.startsWith("apr")||
    dato.startsWith("may")||
    dato.startsWith("jun")||
    dato.startsWith("jul")||
    dato.startsWith("aug")||
    dato.startsWith("sep")||
    dato.startsWith("oct")||
    dato.startsWith("nov")||
    dato.startsWith("dec")) {
    
alert("Dias Transcurridos: " + (diasTransc-1));
console.log (diasTransc-1);

}else {
    alert("Introduzca fecha valida");
}

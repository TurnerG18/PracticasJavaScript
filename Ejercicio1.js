//Ejercicio 1
var fecha = new Date();
var dias = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

document.write('Hoy es ' + dias[fecha.getDay()] + ', ' + fecha.getDate() + ' de ' + meses[fecha.getMonth()] + ' de ' + fecha.getFullYear());

var fechaHora = new Date();
var hora = fechaHora.getHours();
var minuto = fechaHora.getMinutes();
var segundo = fechaHora.getSeconds();

document.write("Son las " + hora + ":" + minuto + ":" + segundo);

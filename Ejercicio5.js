//Ejercicio 5
window.addEventListener("load", inicio);
function inicio(){
    for(var i=0; i < document.getElementsByTagName("h2").length; i++){
        document.getElementsByTagName("h2")[i].addEventListener("click", recorrerAdelante);
    }
}

function recorrerAdelante(ev){
    var texto = "";
    var h2= ev.target;
    texto += "Has elegido "+h2.textContent;

    //seleccionamos el padre
    var padre = h2.parentElement;
    texto += " que esta situada en el"+ padre.id+"<br/>";

    //Seleccionamos el hermano
    var ul = h2.nextElementSibling;

    //Mostrar el numero de hijos
    texto += "El numero de provincias es: "+ ul.children.length;
    var hijo= ul.firstChild;
    while(hijo != null){
        texto += " "+ hijo.textContent;
        hijo = hijo.nextElementSibling;
    }
    
    //Mostramos el texto
    document.getElementById("texto").innerHTML = texto;
}
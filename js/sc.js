// Función para cambiar el color del texto
function cambiaColor() {
    var elem = document.getElementById("cambiatext");
    var color = document.getElementById("colorInput").value;
    elem.style.color = color; 
}
function cambiaColorFondo() {
    var elem = document.getElementById("cambiatext");
    var colorfondo = document.getElementById("colfondoInput").value;
    elem.style.backgroundColor = colorfondo; 
}

// Función para cambiar el tamaño del texto
function cambiatamano() {
    var elem = document.getElementById("cambiatext");
    var tam = document.getElementById("tamInput").value;
    elem.style.fontSize = tam + 'px';
}

function cambiafondo() {
    var eleme = document.getElementById("cambiafondo");
    var fondo = document.getElementById("fondInput").value;
    eleme.style.backgroundColor = fondo;
}


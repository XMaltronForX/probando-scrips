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



function muestraTxt(){
  var texto=" ";

  texto+="<h1>"

  for (let i = 1; i <=9; i++) {

    texto+="<button> ";
    texto+=i;
    
    texto+="</button>"

  }
  texto+="</h1>"
  return texto;
}
document.getElementById("sumativa").innerHTML =muestraTxt();
console.log(muestraTxt());


function muestracard(){
  var texto1=' ';

  texto1+='<div class="container">'
  texto1+='<div class="row">'
  for (let i = 1; i <=6; i++) {
  
  texto1+='<div class="card col-md-4" style="width: 18rem;">';
  texto1+= '<img class="card-img-top" src="img/ta'+i+'.jpg" alt="Card image cap">';
  texto1+='     <div class="card-body">';
  texto1+='        <h5 class="card-title">Card title</h5>';
  texto1+='        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>';
  texto1+='        <a href="#" class="btn btn-primary">Go somewhere</a>';
  texto1+='      </div>';
  texto1+='  </div>';
}
texto1+=' </div>';
texto1+=' </div>';
return texto1;
}

document.getElementById("cartas").innerHTML = muestracard();
console.log(muestracard());






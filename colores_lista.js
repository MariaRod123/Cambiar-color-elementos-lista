/*cambiar los colores de la fuente de los elementos pares e impares de una lista al clickear un botón*/

let lista = document.getElementById('list');
let par = document.getElementById('par');
let impar = document.getElementById('impar');

let colorActual = "black";

par.addEventListener("click", function() {
    let elementosPares = lista.querySelectorAll('li:nth-child(even)');
    
    for (const element of elementosPares) {
      element.style.color = colorActual;
    }

    if (colorActual === "black") {
      colorActual = "red";
    } else {
      colorActual = "black";
    }
});

impar.addEventListener("click", function() {
    let elementosImpares = lista.querySelectorAll('li:nth-child(odd)');
    
    for (const element of elementosImpares) {
      element.style.color = colorActual;
    }

    if (colorActual === "black") {
      colorActual = "blue";
    } else {
      colorActual = "black";
    }
});

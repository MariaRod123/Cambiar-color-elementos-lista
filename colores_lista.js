/*cambiar los colores de la fuente de los elementos pares e impares de una lista al clickear un botón*/

const lista = document.getElementById('list');
const par = document.getElementById('par');
const impar = document.getElementById('impar');

let colorActual = "black";

par.addEventListener("click", function() {
    const elementosPares = lista.querySelectorAll('li:nth-child(even)');
    
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
    const elementosImpares = lista.querySelectorAll('li:nth-child(odd)');
    
    for (const element of elementosImpares) {
      element.style.color = colorActual;
    }

    if (colorActual === "black") {
      colorActual = "blue";
    } else {
      colorActual = "black";
    }
});

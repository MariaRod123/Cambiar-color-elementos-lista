let lista = document.getElementById('list');
let par = document.getElementById('par');
let impar = document.getElementById('impar');

let colorActual = "black";
// Manejar el clic en el botón "Colorear pares"
par.addEventListener("click", function() {
    // Obtener todos los elementos de la lista
    let elementos = list.getElementsByTagName("li");
    
    // Recorrer los elementos de la lista y cambiar el color de los pares
    for (let i = 0; i < elementos.length; i += 2) {
      elementos[i].style.backgroundColor = colorActual;
    }

    
    // Cambiar el color actual para la próxima vez
    if (colorActual === "black") {
      colorActual = "red";
    } else {
      colorActual = "black";
    }
  });
  
  // Manejar el clic en el botón "Colorear impares"
  impar.addEventListener("click", function() {
    // Obtener todos los elementos de la lista
    let elementos = list.getElementsByTagName("li");
    
    // Recorrer los elementos de la lista y cambiar el color de los impares
    for (let i = 1; i < elementos.length; i += 2) {
      elementos[i].style.backgroundColor = colorActual;
    }

    // Cambiar el color actual para la próxima vez
    if (colorActual === "black") {
      colorActual = "blue";
    } else {
      colorActual = "black";
    }
  });

// Ejercicio de lógica Iquall
// Autor de la resolución: Leonel Wirth
// Para correr el ejercicio se requiere node, se debe abrir el terminal en la carpeta en la que se encuentra el código y escribir "node index.js" + enter, luego se observa el resultado sobre la consola.

// PASO 0: Importo la carta y el articulo
var carta = require("./carta.js"); // Importo la carta
var articulo = require("./articulo.js"); // Importo el articulo

// PASO 1: Creo dos arreglos cuya longitud es la misma que la cantidad de letras que tiene el abecedario. Cada componente representa la cantidad de su correspondiente letra que posee la carta (en el primer arreglo) y el articulo (en el segundo arreglo).
var abecedario = "abcdefghijklmnñopqrstuvwxyz"; // Abecedario de referencia
var abecedarioCarta = [];
var abecedarioArticulo = [];

for(let i = 0; i < abecedario.length; i++){ // Inicializo variables de control
    abecedarioCarta[i] = 0;
    abecedarioArticulo[i] = 0;
}

// PASO 2: Recorro en un bucle for, todas las componentes del articulo y analizo qué caracter es. En caso de ser una letra, incremento el contador correspondiente a dicha letra del artículo y luego analizo el siguiente caracter.
for(let i = 0; i < articulo.length; i++){ // Recorro el artículo y capturo la cantidad de letras
    for(let j = 0; j < abecedario.length; j++){
        if(articulo[i] == abecedario[j]){
            abecedarioArticulo[j] ++;
        }
    }
}

// PASO 3: Procedo de la misma manera que en el paso 2, pero con la carta.
for(let i = 0; i < carta.length; i++){ // Recorro la carta y capturo la cantidad de letras
    for(let j = 0; j < abecedario.length; j++){
        if(carta[i] == abecedario[j]){
            abecedarioCarta[j] ++;
        }
    }
}


// PASO 4: Comparo los contadores respectivos de letras, buscando que los contadores de letras del artículo sean mayores o iguales que los de la carta.
var error = 0;
for(let i = 0; i < abecedario.length; i++){
    if(abecedarioArticulo[i] < abecedarioCarta[i]){ // Comparo la cantidad de letras de ambos
        error = 1;
    }
}

// PASO 5: Devuelvo resultado indicando si existen las letras necesarias para escribir la carta.
error? console.log("Las letras del articulo no son suficientes para escribir la carta") :
console.log("Se puede escribir la carta con las letras del articulo"); // Resultado del ejercicio

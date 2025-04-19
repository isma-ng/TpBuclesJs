//Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
let suma = 0;
let input;
let salir = false;

while (!salir) {
    input = prompt("Ingrese un número (o cancele para terminar):");
    if (input === null || input === "") {
        salir = true;
    } 
    else {
        const numero = Number(input);
        if (!isNaN(numero)) {
            suma += numero;
        } 
        else {
            if (confirm("No es un número válido. ¿Desea salir?")) {
                salir = true;
            }
        }
    }
}

alert("La suma total es: " + suma);
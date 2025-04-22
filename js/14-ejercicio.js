// Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

for (let t = 0; t < 1; ) { 
    const texto = prompt("Introduce un texto:");
    if (texto === null || texto.trim() === "" ) {
        alert("No se ha introducido un texto válido.");
        continue; 
    } else {
        let resultado = "";
        for (let r = 0; r < texto.length; r++) {
            resultado += texto.charAt(r);
            if (r < texto.length - 1) {
                resultado += "-";
            }
        }
        alert("Texto con guiones: " + resultado);
    }
    const continuar = confirm("¿Quieres introducir otro texto?");
    if (!continuar) {
        alert("Gracias por usar el programa. <3");
        break; 
    }
}
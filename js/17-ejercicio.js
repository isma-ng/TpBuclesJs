//Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
const texto = prompt("Introduce un texto:");
if (texto === null || texto.trim() === "") {
    alert("No se ha introducido un texto válido.");
} else {
    let posicion = -1;
    const vocales = "aeiouáéíóúüAEIOUÁÉÍÓÚÜ";
    
    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            posicion = i;
            break; 
        }
    }
    if (posicion === -1) {
        alert("No se encontraron vocales en el texto.");
    } else {
        alert(`La primera vocal '${texto[posicion]}' está en la posición ${posicion + 1} `);
    }
}
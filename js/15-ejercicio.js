//Realiza un script que cuente el número de vocales que tiene un texto.

while (true) {
    const texto = prompt("Introduce un texto:");
    if (texto === null || texto.trim() === "" ) {
        alert("No se ha introducido un texto válido.");
        continue; 
    } else {
        let contadorVocales = 0;
        const vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ";
        for (let i = 0; i < texto.length; i++) {
            const caracter = texto.charAt(i);
            if (vocales.includes(caracter)) {
                contadorVocales++;
            }
        }
        alert(`El texto tiene ${contadorVocales} vocales.`);
    }
    const continuar = confirm("¿Quieres introducir otro texto?");
    if (!continuar) {
        alert("Gracias por usar el programa. <3");
        break; 
    }
}

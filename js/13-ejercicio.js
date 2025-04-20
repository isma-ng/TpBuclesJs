//Realiza un script que pida un texto y lo muestre en mayúsculas.
for (let i = 0; i < 1; ) { 
    const texto = prompt("Introduce un texto:");
    if (texto === null || texto.trim() === "" || Number) {
        alert("No se ha introducido un texto válido.");
        continue; 
    } else {
        const textoMayusculas = texto.toUpperCase();
        alert("Texto en mayúsculas: " + textoMayusculas);
    }
    
    const continuar = confirm("¿Quieres introducir otro texto?");
    if (!continuar) {
        alert("Gracias por usar el programa. <3");
        break; 
    }
    
}
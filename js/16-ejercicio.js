// Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
while (true) { 
    const texto = prompt("Introduce un texto:");
    if (texto === null || texto.trim() === "") {
        alert("No se ha introducido un texto válido.");
        continue; 
    } else {
        let resultado = ""; 
        for (let i = texto.length - 1; i >= 0; i--) {
            resultado += texto.charAt(i);
        }
        alert("Texto al revés: " + resultado);
    }
    const continuar = confirm("¿Quieres introducir otro texto?");
    if (!continuar) {
        alert("Gracias por usar el programa. <3");
        break; 
    }
}

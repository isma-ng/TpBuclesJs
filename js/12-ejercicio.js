//Realiza un script que genere un número aleatorio entre 1 y 99
let salir = false;
while (!salir) {
    const numeroAleatorio = Math.floor(Math.random() * 99) + 1;
    const confirmacion = confirm("¿Quieres generar un número aleatorio entre 1 y 99?");
    if (confirmacion) {
        alert("Número aleatorio generado: " + numeroAleatorio);
    } else {
        alert("No se generó ningún número aleatorio. gracias por usar el programa. <3");
        salir = true; 
    }
}


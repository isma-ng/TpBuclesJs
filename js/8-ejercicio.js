function piramideContinua() {
    let limite;
    do {
        limite = parseInt(prompt("Introduce el número límite (1-50):"));
        if (isNaN(limite)) {
            alert("Debes ingresar un número válido");
        } else if (limite < 1 || limite > 50) {
            alert("El número debe estar entre 1 y 50");
        }
    } while (isNaN(limite) || limite < 1 || limite > 50);

    let contador = 1;
    let fila = 1;
    while (contador <= limite) {
        let linea = "";
        for (let col = 1; col <= fila && contador <= limite; col++) {
            linea += contador++;
        }
        console.log(linea);
        fila++;
    }
}

piramideContinua();
// Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
const filas = parseInt(prompt("Introduce el número de filas:"))
const columnas = parseInt(prompt("Introduce el número de columnas:"))
let valor = filas * columnas

if (!isNaN(filas) && filas > 0 && !isNaN(columnas) && columnas > 0) {
    document.writeln(`<table><tbody>`);
    for (let f = 0; f < filas; f++) {
        document.writeln(`<tr>`);
        for (let c = 0; c < columnas; c++) {
            document.writeln(`<td>${valor}</td>`);
            valor--;
        }
        document.writeln(`</tr>`);
    }
    document.writeln(`</tbody></table>`);
} else {
    alert("Introduce un número válido.");
}
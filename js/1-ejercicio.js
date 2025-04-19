//Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
let salir = false;
while (!salir) {
for (let licencia = 0; licencia < 1; licencia++){
    let edad = Number(prompt("Ingrese su edad:"));
    if (isNaN(edad)) {
        alert("La edad ingresada no es un número válido.");
    } else if (edad >= 18) {
        alert("Ya puede conducir.");
    } else {
        alert("No puede conducir.");
    }
}  if (confirm("¿Desea salir?")) {
        alert("Gracias por usar el programa.")
        salir = true; }
}
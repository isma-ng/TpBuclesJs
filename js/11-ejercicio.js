//Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor 
let nombreMayor = "";
let edadMayor = 0;
let contadorIguales = 1;

for (let e = 1; e <= 3; e++) {
    const nombre = prompt(`Introduce el nombre de la persona ${e}:`);
    const edad = parseInt(prompt(`Introduce la edad de ${nombre}:`));
    if (isNaN(edad) || edad < 0) {
        alert("Introduce una edad válida.");
        e--; 
        continue;
    }
    if (edad > edadMayor) {
        edadMayor = edad;
        nombreMayor = nombre;
        contadorIguales = 1;
    } else if (edad === edadMayor) {
        nombreMayor += ` y ${nombre}`;
        contadorIguales ++;
    }
}
     if (contadorIguales === 1) {
    alert(`El mayor es ${nombreMayor} con ${edadMayor} años.`);
} else if (contadorIguales === 2) {
    alert(`Los mayores son ${nombreMayor} con ${edadMayor} años.`);
  } else {
    alert(`Todos tienen la misma edad de ${edadMayor} años.`);
}
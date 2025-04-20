# 📝 README - Ejercicios de Programación JavaScript

## 📌 Descripción
Este repositorio contiene una colección de ejercicios prácticos de JavaScript diseñados para mejorar tus habilidades de programación. Cada ejercicio resuelve un problema específico trabajando con strings, bucles y estructuras de control.

## 🎯 Objetivos
- Practicar manipulación de strings
- Dominar el uso de bucles (`for`, `while`)
- Implementar lógica condicional
- Validar entradas de usuario
- Desarrollar algoritmos básicos

## 📋 Lista de Ejercicios

### 1. Convertidor a Mayúsculas
```javascript
// Ejercicio 1: Convertir texto a mayúsculas
let salir = false;
while (!salir) {
    const texto = prompt("Introduce un texto:");
    if (texto === null || texto.trim() === "") {
        alert("No se ha introducido un texto válido.");
    } else {
        const textoMayusculas = texto.toUpperCase();
        alert("Texto en mayúsculas: " + textoMayusculas);
    }
    salir = !confirm("¿Quieres introducir otro texto?");
}
alert("Gracias por usar el programa. ¡Hasta pronto!");

// Ejercicio 2: Separar letras con guiones
while (true) {
    const texto = prompt("Introduce un texto:");
    if (texto === null || texto.trim() === "") {
        alert("Texto no válido. Intenta nuevamente.");
        continue;
    }
    
    let resultado = "";
    for (let i = 0; i < texto.length; i++) {
        resultado += texto[i];
        if (i < texto.length - 1) resultado += "-";
    }
    
    alert(`Texto separado: ${resultado}`);
    if (!confirm("¿Deseas procesar otro texto?")) break;
}

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
// Ejercicio 16: texto invertido

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

// Ejercicio 12: numero aleatorio

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


// Ejercicio 15: Contar vocales en un texto

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

// Ejercicio 10: Filas y columnas

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

```
 ## 🛠️ Cómo Usar
Clona este repositorio

Abre cada archivo .js en tu navegador o ejecútalo con Node.js

Sigue las instrucciones en los prompts

� Conceptos Aprendidos
String manipulation: toUpperCase(), trim(), charAt()

Loops: for, while, break, continue

Validation: chequeo de valores null y strings vacíos

# 🛠️ Clonar un Repositorio de GitHub

## 📋 Pasos para Clonar un Repositorio

### 1. **Encontrar el repositorio en GitHub**
   - Accede a [github.com](https://github.com)
   - Navega hasta el repositorio que deseas clonar

### 2. **Copiar la URL del repositorio**
   - Haz clic en el botón verde **"Code"**
   - Selecciona **HTTPS** (recomendado para principiantes)
   - Copia la URL (ejemplo: `https://github.com/usuario/repositorio.git`)

### 3. **Abrir terminal/Git Bash**
   - **Windows:** Git Bash o CMD
   - **Mac/Linux:** Terminal

### 4. **Ejecutar comando de clonación**
```bash
git clone https://github.com/usuario/repositorio.git
```

## ✨ Bonus
Prueba modificar los ejercicios para:

Aceptar solo texto alfabético (sin números)

Contar consonantes en lugar de vocales

Mostrar todas las vocales encontradas, no solo la primera

## 🤝 Contribuciones
¡Contribuciones son bienvenidas! Si quieres agregar más ejercicios o mejorar los existentes:

Haz fork del repositorio

Crea tu rama (git checkout -b nueva-funcionalidad)

Haz commit de tus cambios (git commit -m 'Agrego ejercicio')

Haz push a la rama (git push origin nueva-funcionalidad)

Abre un Pull Request

## 📜 Licencia
MIT © 2025 [ISMAEL ISA]
MI GITHUB: https://github.com/isma-ng

Hecho con ❤️ para la comunidad de programadores


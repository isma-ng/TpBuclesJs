//Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

document.writeln("<p>");
for (let i = 1; i <= 500; i++) {
    let output = i.toString(); 
    if (i % 4 === 0 && i % 9 === 0) {
        output += " (Múltiplo de 4 y 9)";
    } else if (i % 4 === 0) {
        output += " (Múltiplo de 4)";
    } else if (i % 9 === 0) {
        output += " (Múltiplo de 9)";
    }
    document.writeln(output + "<br>"); 
    if (i % 5 === 0) {
        document.writeln("————————————————————— <br>");
    }
}
document.writeln("</p>");
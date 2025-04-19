//6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
function piramide() {
    let piramide = "";
    for (let p = 1; p <= 30; p++){
        piramide += p.toString().repeat(p) + "\n";
    }
    return piramide;}
    console.log( piramide());
//Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).
function PiramideInvertida() {
    let piramide = "";
    for (let p = 30; p >= 1; p--){
        piramide += p.toString().repeat(p) + "\n";
    }
    return piramide;}
    console.log( PiramideInvertida());

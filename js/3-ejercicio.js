//Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

    let resultado = "";
    let texto;
    while (true){
        texto = prompt("Ingrese una cadena de texto (o cancele para terminar):");
        if (texto === null || texto === "") {
            break; 
        } if (resultado !== "") {
            resultado += "-"; 
        } 
            resultado += texto; 
    }
        
        if( resultado!== ""){
        alert("Cadena concatenada:\n " + resultado);}
        else {
            alert("No se ingresó ninguna cadena de texto.");
        }

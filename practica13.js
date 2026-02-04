// try catch convierte un texto 
// si el resultado no es un numero valido lanza un error
// capturar error con catch

try {
    //1. pedimos el valor al usuario
    let texto = prompt("Introduce un número");

    //2. intentamos convertir el texto a numero
    let numero = Number(texto);

    //3. comprobamos si NO es un numero valido
    if (isNaN(numero)) {
        //4. lanzamos un error
        throw new Error("El valor introducido no es un número válido");
    }

    //5. si todo va bien mostramos el numero
    alert("El número introducido es: " + numero);

} catch (error) {
    //6. capturamos el error y mostramos un mensaje al usuario
    alert("Error: " + error.message);
}
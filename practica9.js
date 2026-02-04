/*Declara una variable mes (1–12).

Con switch, muestra:

"Invierno" → meses 12, 1, 2

"Primavera" → meses 3, 4, 5

"Verano" → meses 6, 7, 8

"Otoño" → meses 9, 10, 11*/


let mes = parseInt(prompt("Ingresa un número del 1 al 12 para saber la estación del año:"));
switch (mes) {
    case 1:
        alert ("Invierno");
        break;
    case 2:
        alert ("Invierno");
        break;
    case 3: 
        alert("Primavera");
        break;
    case 4: 
        alert ("Primavera");
        break;
    case 5:
        alert("Primavera");
        break;
    case 6:
        alert ("Verano");
        break;
    case 7:
        alert("Verano");
        break;
    case 8:
        alert("Verano");
        break;
    case 9:
        alert("Otoño");
        break;
    case 10: 
        alert("Otoño");
        break;
    case 11: 
        alert("Otoño");
        break;
    case 12: 
        alert ("Invierno");
        break;
}
let notas = [4, 6, 8, 3, 9];

let aprobados = 0;
let suspensos = 0;

for (let i = 0; i < notas.length; i++) {
  if (notas[i] >= 5) {
    console.log("Nota " + notas[i] + ": Aprobado");
    aprobados++;
  } else {
    console.log("Nota " + notas[i] + ": Suspenso");
    suspensos++;
  }
}

console.log("Total aprobados:", aprobados);
console.log("Total suspensos:", suspensos);

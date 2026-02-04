for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        break; //para cuando es 6
    }
    console.log(i); //imprime hasta el 5, ojo
}

for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        continue; //Para saltar el 6
    }
    console.log(i); //imprime todo menos el 6
}

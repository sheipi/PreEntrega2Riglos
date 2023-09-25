let inver = parseInt(prompt("Ingrese un número: "));
let tiempo = parseInt(prompt("Ingrese meses: "));
let tasa = 1.18;
let mes = 0;
let tasatea = 1.763
const resultadotna = (a, b, c) => a * b * c
const resultadotea = (a, b) => a * b



if (tiempo > 12) {
    console.log("Lo siento. Solo brindamos información de un solo año")
} else {
    for (let i = 1; i <= tiempo; i++) {
        mes = i;
        console.log("resultado TNA mes", mes, " = ", resultadotna(inver, tasa, mes))
    }
    console.log("resultado TEA = ", resultadotea(resultadotna(inver, tasa, mes), tasatea))
}

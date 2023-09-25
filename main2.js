let inver = parseInt(prompt("Ingrese un número: "));
let tiempo = parseInt(prompt("Ingrese meses: "));
let tasa = 1.18;
let mes = 0;
const resultadotna = (a, b, c) => a * b * c
const resultadotea = (a, b) => a * b

for (let i = 1; i <= tiempo; i++) {

    if (tiempo > 12) {
        for (let i = 1; i <= 12; i++) {
            mes = i;
        }
        console.log("Lo siento. Solo brindamos información de un solo año")
        break;
    }
    mes = i;
    console.log("resultado TNA mes", mes, " = ", resultadotna(inver, tasa, mes))

}
if (tiempo < 12) {
console.log("resultado TEA = ", resultadotea(resultadotna(inver, tasa, mes), 1.763))
}
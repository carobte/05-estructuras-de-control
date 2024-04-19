console.log("Estructura de control pt.1")

/* console.log(8 < 10) //true
console.log("8" >= 6) //true */

console.group("If, if else, if else if, switch")

/* 
let hora = 13

if (hora > 8 && hora < 17) {
    console.log("Working")
} else {
    console.log("Not working")
} */

/* let mes = prompt("Ingrese el mes actual").toLowerCase()

if (mes === "enero"){
    console.log("Es enero")
} else if (mes === "febrero"){
    console.log("Es febrero ")
} else if (mes === "marzo"){
    console.log("Es marzo ")
} else if (mes === "abril"){
    console.log("Es abril ")
} else if (mes === "mayo"){
    console.log("Es mayo ")
} else {
    console.log("Ingresaste un mes que no entiendo")
} */

// let numeroMes = parseInt(prompt("Ingrese el número de mes actual"))

/*
if (numeroMes <= 3 && numeroMes >= 1){
    console.log("Estamos en el primer trimestre del año")
} else if (numeroMes <= 6 && numeroMes > 3){
    console.log("Estamos en el segundo trimestre del año")
} else if (numeroMes <= 9 && numeroMes > 6){
    console.log("Estamos en el tercer trimestre del año")
} else if (numeroMes <= 12 && numeroMes > 9 ){
    console.log("Estamos en el cuarto y último trimestre del año")
} else {
    console.log("Ingresaste un número incorrecto, debe ser de 1 al 12")
} */

/* switch (numeroMes) { //case no admite operadores, solo el valor de la variable
    case 1:
        console.log("Estamos en el primer trimestre del año")
        break;
    case 2:
        console.log("Estamos en el primer trimestre del año")
        break
    case 3:
        console.log("Estamos en el primer trimestre del año")
        break
    default:
        console.log("No estamos en el primer trimestre")
        break;
} */

console.info(
    `Menu: 
1. Solicitar almuerzo.
2. Solicitar domicilio
3. Cancelar orden
4. Finalizar programa`)

let opcion = parseInt(prompt("Ingresa una de las opciones del menú"))

switch (opcion) {
    case 1:
        console.log("Solicitando almuerzo")
        break;
    case 2:
        console.log("Solicitando domicilio")
        break;
    case 3:
        console.log("Cancelaste tu orden")
        break;
    case 4:
        console.log("Hasta luego")
        break;
    default:
        console.log("Opción incorrecta. Debes ingresar una opción del 1 al 4")
        break;
}

console.groupEnd()
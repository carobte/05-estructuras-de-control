console.log("Estructura de control pt.1")

/* console.log(8 < 10) //true
console.log("8" >= 6) //true */

console.groupCollapsed("Condicionales: If, if else, if else if, switch")

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


/* let opcion = parseInt(prompt(`Ingresa una de las siguientes opciones: 

1. Solicitar almuerzo.
2. Solicitar domicilio.
3. Cancelar orden.
4. Finalizar programa.
`))

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
} */

console.groupEnd()

console.group("Bucles")
console.groupCollapsed("For")
//   inicio; condición; aumento
for (let i = 0; i < 10; i++) {
    console.log(`Hola mundo, vuelta: ${i}`)
}
console.groupEnd()

console.groupCollapsed("Tablas de multiplicar")

/* Tablas de multiplicar

// opción 1:

let tablas = []

for (let i = 1; i <=10; i++) {
    tablas.push(1*i)
    tablas.push(2*i)
    tablas.push(3*i)
    tablas.push(4*i)
    tablas.push(5*i)
    tablas.push(6*i)
    tablas.push(7*i)
    tablas.push(8*i)
    tablas.push(9*i)
    tablas.push(10*i)
}
console.log("Tablas de multiplicar:")
console.table(tablas) 

//-----------------------------------

// Opción 2:

function tablaMultiplicar(num) {
    let tabla = []
    
    for (let index = 1; index <= 10; index++) {
        tabla.push( num * index)
    }
    console.log(`Tabla de multiplicar del ${num}`)
    console.table(tabla)
}

tablaMultiplicar(1)
tablaMultiplicar(2)
tablaMultiplicar(3)
tablaMultiplicar(4)
tablaMultiplicar(5)
tablaMultiplicar(6)
tablaMultiplicar(7)
tablaMultiplicar(8)
tablaMultiplicar(9)
tablaMultiplicar(10) 

//-----------------------------------*/

// Opción 3 con doble for:

for (let i = 1; i <= 10; i++) {
    console.groupCollapsed("Tabla del", i)
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`)
    }
    console.groupEnd()
}

console.groupEnd()

console.groupCollapsed("While")
console.groupCollapsed("Tabla del 9")
let contador = 1

while (contador <= 10) {
    console.log(`9 x ${contador} = ${9 * contador}`)
    contador++
    // contador = contador +1
}
console.groupEnd()
console.groupEnd()
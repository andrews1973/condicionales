

/*
Ejercicio 1: Verificar si un número es positivo, negativo o cero

Escribe una función llamada verificarNumero que reciba un número como argumento y devuelva si el número es positivo, negativo, o cero.

*/

function verificarNumero(num1){
    if (num1 % 2 == 0){
        return num1 + ' es par'
    }else if (num1 % 2 == 1){
        return num1 + ' es impar'
    }else{
        return 'el numero es cero'
    }
}
console.log(verificarNumero(4));
console.log(verificarNumero(5));
console.log(verificarNumero(0));

/*
Ejercicio 2: Edad legal para votar

Escribe una función llamada puedeVotar que reciba la edad de una persona y devuelva si una persona tiene 18 años o más y devuelva "Puede votar" o "No puede votar".
*/

const puedeVotar = (edad) => {
    let mensaje;
    if (edad >= 18){
      mensaje = `Con ${edad} años eres mayor de edad y puedes votar`  
    } else {
        mensaje = `Con ${edad} años eres menor de edad y puedes NO votar`
    }

    return mensaje;
}

console.log(puedeVotar(18));
console.log(puedeVotar(16));


/*
Ejercicio 3: 
Mayor de dos números Escribe una función llamada mayorDeDos que reciba dos números y devuelva el mayor de los dos. Si son iguales, devuelve un mensaje indicando que son iguales.

*/

function mayorDeDos (num1, num2) {
    if (num1 == num2){
        return `${num1} y ${num2} son iguales`
    }

    if (num1 > num2) {
        return `${num1} es mayor que ${num2}`
    } else {
        return `${num1} es menor que ${num2}`
    } 
}

console.log(mayorDeDos(5,10));
console.log(mayorDeDos(10,5));
console.log(mayorDeDos(10,10));

/*
Ejercicio 4: Determinar si un número es divisible por 5

Escribe una función llamada esDivisiblePorCinco que reciba un número y devuelva true si el número es divisible por 5 o false si no lo es.


*/

let esDivisiblePorCinco = num => num % 5 == 0 ? 'true' : 'false'

console.log(esDivisiblePorCinco(10));
console.log(esDivisiblePorCinco(4));

/*
Ejercicio 5: Clasificar nota de examen

Escribe una función llamada clasificarNota que reciba una nota entre 0 y 100 y devuelva una clasificación:

    Nota >= 90: "Excelente"
    Nota >= 70 y < 90: "Buena"
    Nota >= 50 y < 70: "Regular"
    Nota < 50: "Insuficiente"

*/

function clasificarNota (nota){
    if (nota >= 50 && nota < 70){
        return 'Regulin, hay que estudiar algo mas'
    } else if(nota >= 70 && nota < 90){
        return 'Buena, sigue asi'
    } else if (nota >= 90){
        return 'Excelente, maquina!!!'
    } else {
        return 'Insuficiente, ponte las pilas'
    }
        
}
console.log(clasificarNota(55));
console.log(clasificarNota(99));
console.log(clasificarNota(45));
console.log(clasificarNota(70));
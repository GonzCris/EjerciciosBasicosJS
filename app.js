
//1
//Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”. (pantalla)

//alert("Hola Mundo");


//2
//Escribe un programa de una sola línea que escriba en la pantalla un texto que diga “Hello World” (document.write).(pantalla)

//const test = document.write("hola gente");


//3
//Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.(consola)

// console.log(3+5); 8

//4
//Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”(pantalla)

/* let nombreUsuario = prompt("Escribe tu nombre");

let salida Pantalla = document.write("hola ${nombreusuario}"); */


//5
//Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.(consola)

/* let num1 = prompt("Numero uno");
let num2 = prompt("Numero dos");
console.log('La suma de los numeros es: ${num1 + num2}'); */


//6
//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.(consola)

/* let num4 = parseInt(prompt("Numero Uno"))
Let num5 = parseInt(prompt("Numero Dos"))

funtion numeroMayor(num1, num2){
    if(num1 > num2) {
        console.log("El ${num1} es mayor");
        else if (num2 > num1) {
            console.log("El ${num2} es mayor")
        }
    }
    else{
        console.log("los numeros son iguales")

    }
} */


//7
//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.(consola)

/* function numsMayor(){   "nums": Unknown word}
    let num1 = parseInt(prompt(Inserta el primer numero));
    let num2 = parseInt(prompt(Inserta el segundo numero));
    let num3 = parseInt(prompt(Inserta el tercer numero));

    if(num1 > num2 && num 1 > num3) {
        console.log("Entre los numeros ${num1}, ${num2}, ${num3} y el mayor es ${num1}")
    } else if(num2 > num1 && num2 > num3){
        console.log("El numero mayor es ${num2}");
    } else if(num1 === num2 && num1 === num3){
        console.log("Todos son iguales");
        else{console.log("el numero mayor es ${num3}");
        }
    } */


//8
//Escribe un programa que pida un número y diga si es divisible por 2(consola)

/* function divisiblePor(){
    let num1 = parseInt(prompt("Agrega un numero"));

    if (num1 % 2 === 0) {
        console.log("elnumero ${num1} es divisible por 2");
    }else{
        console.log("El numero ${num1} no es divisible por 2");
    }
}
divisiblePor() */


//9
//Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a(pantalla)

/* function letraA() {
    let palabra = promt("Escribe la palabra");
    let contador = 0;

    for (let i = 0; i < palabra.lenght; i++) {
        if (palabra.chartAt(i) === "a"){
            contador++;
        }
    }
console.log("La letra a se encuentra ${contador} veces");

} */

//fin
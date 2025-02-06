/*
Escribir un program que imprima los números del 1 al 100 con las siguientes condiciones : 
Si el numero  es divisible entre 3, imprimir Fizz
Si el numero  es divisible entre 5 imprimir Buzz
Si el numero  es divisible entre 3 y 5, imprimir FizzBuzz
 */


for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log("fizz")
  } else if (i % 5 === 0) {
    console.log("Buzz")
  } else {
    console.log("FizzBuzz")
  }

}
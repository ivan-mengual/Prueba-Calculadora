const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');


const calculadora = new Calculadora();
// console.log(calculadora)
// console.log(calculadora.sumar(2,3))
// console.log(calculadora.sumar(2,8))
calculadora.total=calculadora.sumar(2,3)
console.log(calculadora.total)
calculadora.total=calculadora.sumar(calculadora.total,2)
console.log(calculadora.total)
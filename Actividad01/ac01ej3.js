// Función para verificar si un número es primo
function esPrimo(numero) {
    // Verifica si el número es divisible por algún número menor que él mismo
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) return false; // Si es divisible, no es primo
    }
    return numero > 1; // Si no es divisible por ningún número menor que él mismo, es primo
  }
  
  // generar números primos 
  function generarNumerosPrimos(N) {
    let numerosPrimos = [];
    let num = 2; // desde el primer número primo
  
    // Genera N números primos menores que 110
    while (numerosPrimos.length < N) {
      if (esPrimo(num) && num < 110) {
        numerosPrimos.push(num);
      }
      num++;
    }
  
    return numerosPrimos;
  }
  
  // imprimir N números primos aleatorios menores que 110
  function imprimirNumerosPrimos() {
    let numeros = generarNumerosPrimos(10); // Genera 10 números primos
    console.log("Números primos generados:", numeros); // Imprime los números primos generados
  }
  
  //imprimir los números primos
  imprimirNumerosPrimos();
  
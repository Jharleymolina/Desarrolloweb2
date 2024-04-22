// Función para contar la cantidad de veces que aparece la letra "o" en una frase
function contarLetraO(frase) {
    return frase.split('o').length - 1;
  }
  
  // Función para obtener las vocales que aparecen en una frase y contar cuántas veces aparece cada una
  function contarVocales(frase) {
    let vocales = {a: 0, e: 0, i: 0, o: 0, u: 0}; // Objeto para almacenar las ocurrencias de cada vocal
    let vocalesEncontradas = ""; // String para almacenar las vocales encontradas
  
    for (let letra of frase.toLowerCase()) {
      if ("aeiou".includes(letra)) {
        if (!vocalesEncontradas.includes(letra)) {
          vocalesEncontradas += letra;
        }
        vocales[letra]++;
      }
    }
  
    return {vocalesEncontradas, vocales};
  }
  
  // Función principal
  function analizarFrase() {
    let frase = prompt("Ingrese una frase:");
    
    let vecesLetraO = contarLetraO(frase);
    console.log(`La letra "o" aparece ${vecesLetraO} veces en la frase.`);
  
    let {vocalesEncontradas, vocales} = contarVocales(frase);
    console.log(`Las vocales que aparecen son: ${vocalesEncontradas}`);
    for (let vocal in vocales) {
      if (vocales[vocal] > 0) {
        console.log(`La vocal ${vocal} aparece ${vocales[vocal]} veces.`);
      }
    }
  }
  
  // Llamamos a la función principal
  analizarFrase();
  
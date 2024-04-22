// Array de nombres y apellidos
const nombres = ["Antonio", "María", "Carlos", "Laura"];
const apellidos = ["García", "Martínez", "Fernández", "Pérez"];

// Función para obtener un nombre aleatorio del array
function nombreAleatorio(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Función para formatear un nombre o apellido
function formatearNombre(nombre) {
  return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
}

// Función para combinar nombres y apellidos de forma aleatoria
function combinarNombresYApellidos(nombres, apellidos) {
  let nombresCombinados = [];
  // recorrer sobre los nombres
  for (let i = 0; i < nombres.length; i++) {
    // Obtener un nombre aleatorio
    let nombre = nombreAleatorio(nombres);
    // Obtener un apellido aleatorio
    let apellido = nombreAleatorio(apellidos);
    // Formatear el nombre y el apellido y combinarlos
    let nombreCompleto = `${formatearNombre(nombre)} ${formatearNombre(apellido)}`;
    // Agregar el nombre completo al array de nombres combinados
    nombresCombinados.push(nombreCompleto);
  }
  return nombresCombinados;
}

// Generar y mostrar nombres combinados
let nombresCombinados = combinarNombresYApellidos(nombres, apellidos);
console.log("Nombres combinados:", nombresCombinados);

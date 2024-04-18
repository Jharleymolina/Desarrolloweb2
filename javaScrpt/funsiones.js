/*const nombres = ['Alejandro', 'Sofia', 'Juan',
               'Maria', 'Carlos', 'Laura', 
               'Pablo', 'Ana', 'Diego', 'Lucia',
               'Javier', 'Marta', 'Daniel', 'Carmen',
               'Sergio', 'Paula', 'Luis', 'Elena', 'Oscar',
               'Isabel'];
const apellidos = ['Garcia', 'Rodriguez', 'Martinez',
                  'Lopez', 'Perez', 'Sanchez', 'Gonzalez',
                  'Ramirez', 'Torres', 'Flores', 'Castro',
                  'Diaz', 'Ruiz', 'Herrera', 'Jimenez',
                  'Moreno', 'Alvarez', 'Vargas', 'Navarro',
                  'Soto'];

function crearNombresCompletos(nombres, apellidos) {
  let nombresCompletos = [];

  for (let i = 0; i < nombres.length; i++) {
    let nombre = nombres[i];
    let apellido = apellidos[i];
    let nombreCompleto = `${nombre} ${apellido}`;
    nombresCompletos.push(nombreCompleto);
  }

  return nombresCompletos;
}

let nombresCompletos = crearNombresCompletos(nombres, apellidos);
console.log(nombresCompletos);
*/
//20 nombres y apellidos

/*
Generar un array y tomar como base los siguientes arrays de nombres y apellidos,m los elementos deben ser grabados
randonicamente tomando como base una cantidad de elementos
//Crear un array de nombres
nombres = ['Juan', 'María', 'Pedro', 'Luis', 'Ana', 'Carlos', 'Laura'

 Crear un array de apellidos

apellidos = ['Gómez', 'Rodríguez', 'Fernández', 'López', 'Martinez',

nombrescompletos= ['María Fernández', 'Luis López', 'Laura Gómez...

*/
// Constante para el número de elementos
const NELEMNTOS = 20;

// Arrays de nombres y apellidos
let nombres = ['Juan', 'María', 'Pedro', 'Luis', 'Ana', 'Carlos', 'Laura', 'Marta', 'José', 'Sofía', 'David', 'Andrea', 'Alejandro', 'Claudia', 'Manuel', 'Patricia', 'Pablo', 'Elena', 'Daniel', 'Raquel'];
let apellidos = ['Gómez', 'Rodríguez', 'Fernández', 'López', 'Martínez', 'Sánchez', 'Pérez', 'González', 'Romero', 'García', 'Torres', 'Díaz', 'Ruiz', 'Vázquez', 'Castro', 'Navarro', 'Morales', 'Ramírez', 'Jiménez', 'Herrero'];
let nomape=[];
// Función para generar un nombre completo aleatorio
function generarNombre() {
    let nomal, apeal;
    for (let i=0;i<NELEMNTOS;i++){ 
        nomal=nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
        apeal=apellidoAleatorio = apellidos[Math.floor(Math.random() * apellidos.length)];
        nomape.push(nomal+" "+apeal);

    }
}
function imprimirNomApe(){
    nomape.forEach(persona=>{
        console.log(persona+"\n")
    })
}
generarNombre()
imprimirNomApe()
/*let a=10;
let b=5;
a+=1;
console.log(a);
a=a+b;
console.log("a=a+b="+a);
a=11;
a+=b;
console.log("a+=b :"+a);
a++;
console.log("a++ :"+a);
a--;
console.log("a-- :"+a);

if ((a%2)==0)
    console.log("ES UN NUMERO PAR");
else 
    console.log("ES UN NUMERO IMPAR");
console.log(a+b+Number("5"));
*/

// generar un array de 10elementos nombre: "" nota:ramdomico 20-100

//mostrar la nota mayor , menor y promedio.


// dar número aleatorio entre 20 y 100

// Array de objetos con nombres y notas
// Función para generar un número aleatorio entre 20 y 100
function notarandom() {
    return Math.floor(Math.random() * 81) + 20; // Genera un número entre 20 y 100
}

// Array de objetos con nombres y notas inicializadas en 0
const Item = [
    { nombre: 'juan', nota: 0 },
    { nombre: 'Maria', nota: 0 },
    { nombre: 'pablo', nota: 0 },
    { nombre: 'ana', nota: 0 },
    { nombre: 'luis', nota: 0 },
    { nombre: 'laura', nota: 0 },
    { nombre: 'carlos', nota: 0 },
    { nombre: 'sofia', nota: 0 },
    { nombre: 'diego', nota: 0 },
    { nombre: 'elena', nota: 0 }
];

// Generar las notas aleatorias para cada estudiante en el array Item
Item.forEach(estudiante => {
    estudiante.nota = notarandom();
});

// Mostrar el array actualizado con nombres y notas aleatorias
console.log(Item);

// Calcular la nota mayor, menor y promedio
const notas = Item.map(estudiante => estudiante.nota);
const notaMayor = Math.max(...notas);
const notaMenor = Math.min(...notas);
const promedioNotas = notas.reduce((total, nota) => total + nota, 0) / notas.length;

// Mostrar la nota mayor, menor y promedio
console.log(`Nota mayor: ${notaMayor}`);
console.log(`Nota menor: ${notaMenor}`);
console.log(`Promedio de notas: ${promedioNotas}`);


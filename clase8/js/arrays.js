/* 
    Un Array es un tipo de datos
    Qué dentro tiene una colección o lista de datos
*/
let n = 10
let n2 = 3.141592
let fruta = 'manzana'
let fecha = new Date()
let fn = function foo(){}

console.log(typeof(n))
console.log(typeof(n2))
console.log(typeof(fruta))
console.log(typeof(fecha))
console.log(typeof(fn))

/* ------- */
const marcas = [
                    'Hermès','Zara','Boss',
                    'Aeropostale','Kingin','Tomy',
                    'Gola', 'Abercrombie', 'Topman',
                    'H&M', 'Hollister', 'American Eagle',
                    'Urban Outfitters', 'Old Navy',
                    'Uniqlo'
                ]
console.log(marcas)
console.log(typeof(marcas))
// mostrar todo el array no es práctico
const contenedor = document.querySelector('#contenedor')
// mostrar un elemento de un array
contenedor.textContent = marcas[2]

/* ------- */
const emojis = ['🤺','🏇','⛷️','🏂','🏌️','🏄','🚣','🏊','⛹️','🚴','🤾']

// ver la cantidad de elementos array.length
console.log('cantidad', emojis.length)

// saber la posición de un elemento  aray.indexOf()
console.log('posicion', emojis.indexOf('🏄'))
console.log('posicion', marcas.indexOf('Abercrombie'))

// saber si existe un elemento  array.includes()
console.log('existe', emojis.includes('🏎️')) // false
console.log('existe', emojis.includes('🏄')) // true
console.log('existe', marcas.includes('ferrari')) // false
console.log('existe', marcas.includes('Gola')) // true
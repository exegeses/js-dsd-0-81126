const marcas = [
                    'Hermès','Zara','Boss',
                    'Aeropostale','Kingin','Tomy',
                    'Gola', 'Abercrombie', 'Topman',
                    'H&M', 'Hollister', 'American Eagle',
                    'Urban Outfitters', 'Old Navy',
                    'Uniqlo'
                ]
const lista = document.querySelector('#lista')                
let contenido = ''
// recorrer los elementos de un array
// for ( variableAuxiliar  of  coleccion )
for ( let unaMarca  of  marcas ){
    contenido += `<li>${unaMarca}</li>`
}
lista.innerHTML = contenido
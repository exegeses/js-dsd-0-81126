const marcas = [
                    'Hermès','Zara','Boss',
                    'Aeropostale','Kingin','Tomy',
                    'Gola', 'Abercrombie', 'Topman',
                    'H&M', 'Hollister', 'American Eagle',
                    'Urban Outfitters', 'Old Navy',
                    'Uniqlo'
                ]
const lista = document.querySelector('#lista')                
// recorrer los elementos de un array
let n = 0
let contenido = ''
while( n < marcas.length ){
    //contenido += '<li>'+ marcas[n] +'</li>'
    contenido += `<li>${marcas[n]}</li>`
    n ++
}
lista.innerHTML = contenido

/*
    innerHTML sirve para indicarle al navegador que renderizar el código comprendiendo que es HTML
*/
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
// for ( inicio; condicion; incremento )
for( let n = 0; n < marcas.length; n++ ){
    // contenido += `<li>${marcas[n]}</li>`
    contenido += '<li>'+ marcas[n] +'</li>'
}

lista.innerHTML = contenido
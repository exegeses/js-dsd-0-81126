const marcas = [
                    'Hermès','Zara','Boss',
                    'Aeropostale','Kingin','Tomy',
                    'Gola', 'Abercrombie', 'Topman',
                    'H&M', 'Hollister', 'American Eagle',
                    'Urban Outfitters', 'Old Navy',
                    'Uniqlo'
                ]

//ubicamos elementos dentro del DOM
const rotador = document.querySelector('#rotador')
    // span
    const span = rotador.children[1]
    //anterior
    const anterior = rotador.children[0]
    //siguienmte         
    const siguiente = rotador.children[2]       

/* estado inicial
   ver dentro del span el nombre de una marca
*/
let posicion = 7
span.textContent = marcas[posicion]

anterior.onclick = function()
        {
            posicion --
            if( posicion < 0 ){
                posicion = marcas.length - 1
            }
            span.textContent = marcas[posicion]
        }

siguiente.onclick = function()
        {
            posicion ++            
            if( posicion > marcas.length - 1 ){
                posicion = 0
            }
            span.textContent = marcas[posicion]
        }

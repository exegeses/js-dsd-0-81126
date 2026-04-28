/*
    Un parámetro envía información a una función.
    Y con esta información podemos completar el comportamiento de la función

*/

// declaración
function saludar( nombre ) {
    console.log('hola', nombre)
}

/*
    function duplicarNumero( numero ) {
        let resultado = numero *2
        console.log(resultado)
    }
    // en este código podemos duplicar el valor de un número solamente si envían el número.
*/

function duplicarNumero( numero ){
    if( !isNaN(numero) ) {
        resultado = numero * 2
    }else{
        resultado = 'el valor no es un número'
    }
    console.log(resultado)
}



// llamada
saludar('Rick')
saludar('Morty')
saludar('Summer')

duplicarNumero(5)
duplicarNumero('manzana') // NaN (Not a Number)
duplicarNumero(15)

# Condicionales if()

> El código condicional es un bloque de código que se ejecuta sólo si se cumple una condición. En JavaScript usamos la palabra reservada if para crear un bloque condicional, así:

    if (condición) {  
        // código que se ejecuta si la condición es verdadera.  
    }  

> Ejemplo: 

    const edad = 18   

    if (edad >= 18) {    
        console.log('Eres mayor de edad')    
    }  

## else 
> Es posible utilizar la palabra clave else para ejecutar un bloque de código diferente si la condición es falsa:

    const edad = 17  

    if (edad >= 18) {  
        console.log('Eres mayor de edad')  
    } else {  
        console.log('Eres menor de edad')  
    }

## else if() 
> También podemos utilizar la palabra clave else if para comprobar más de una condición:

    const edad = 17  

    if (edad >= 18) {  
        console.log('Eres mayor de edad')  
    } else if (edad >= 16) {  
        console.log('Eres casi mayor de edad')  
    } else {  
        console.log('Eres menor de edad')  
    }  

----  

    // 🗓️ obtener el número del día de la semana
    let diaSemana = fecha.getDay() // 0 (domingo) a 6 (sábado)
    console.log(diaSemana) // 2 (martes)

    //comparativa if
    if( diaSemana === 0 ){  
        fechaActual.textContent = "Hoy es Domingo"
    }
    else if(diaSemana === 1){
        fechaActual.textContent = "Hoy es Lunes"
    }
    else if(diaSemana === 2){
        fechaActual.textContent = "Hoy es Martes"
    }
    else if ( diaSemana === 3 ){
        fechaActual.textContent = "Hoy es Miércoles"
    }
    else if ( diaSemana === 4 ){
        fechaActual.textContent = "Hoy es Jueves"
    }
    else if ( diaSemana === 5 ){
        fechaActual.textContent = "Hoy es Viernes"
    }
    else{
        fechaActual.textContent = "Hoy es Sábado"
    }    
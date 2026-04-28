# resolución de tarea clase 5

> para resolver la tarea vamos a utilizar el objeto Math
> éste objeto tiene varios métodos aritméticas y también algunas constantes aritméticas

> dentro de estos métodos tenemos random()
> Rango: Devuelve un número de punto flotante (decimal) comprendido entre 0 (inclusive) y 1 (exclusive).
> pùede devolver 0 pero no puede devolver 1

    let numero = Math.random()   

> ¿qué tal si quiero generar un número entero entre 1 y 10?
> para lograr esto debería multiplicarlo por 10

    let numeroX10 = numero * 10   

> con esta operación vamos obtener un número aleatorio con decimales entre 0 y 9.999999999999

> por lo tanto si le sumamos 1, logramos un número entre 1 y 10.9999999

    let numeroMas1 = numeroX10 + 1  

> para generar el número entero, debemos quiitar los decimales.
> tenemos dos métodos que logran esto

    Math.floor()  // que redondea al entero anterior  
    Math.trunc()  // que quita todos los decimales  

    let numeroEntero = Math.floor(numeroMas1)  
const contenedor = document.querySelector('#contenedor')

// creamos objeto de fecha
const fecha = new Date()

// número de día de la semana
let nDiaSemana = fecha.getDay()
/*
    Muestra el día de la semana en formato numérico
    Dom -> 0
    Lun -> 1
    Mar -> 2
    Mié -> 3
    Jue -> 4
    Vie -> 5
    Sáb -> 6
*/
const semana = [
                    'Domingo','Lunes', 'Martes',
                    'Miércoles', 'Jueves', 'Viernes',
                    'Sábado'
                ]
console.log('Hoy es:', semana[nDiaSemana])

// número de día de mes de 1 a 31
let diaMes = fecha.getDate()
console.log('Ho es día:', diaMes)

// número de mes  de 0 a 11
let mes = fecha.getMonth()
console.log('Número de mes:', mes)
const meses = [
                'Enero', 'Febrero', 'Marzo', 'Abril',
                'Mayo', 'Junio', 'Julio', 'Agosto',
                'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
            ]
console.log('mes:', meses[mes])

// mostramos la fecha en el contenedor 
// contenedor.textContent = 'Hoy es: ' + semana[nDiaSemana] + ' ' + diaMes + ' de ' + meses[mes]
contenedor.textContent = `Hoy es: ${semana[nDiaSemana]} ${diaMes} de ${meses[mes]}`


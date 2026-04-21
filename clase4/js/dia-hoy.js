// 📚 Ubicar elementos dentro del DOM
    // el párrafo con el id "fecha-actual"
const fechaActual = document.querySelector("#fecha-actual")

// 📅 crear un objeto de fecha
/*  new Date() 
    "2026-04-21T14:38:34.200Z"
*/
const fecha = new Date()

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

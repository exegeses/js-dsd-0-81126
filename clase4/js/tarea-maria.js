// Día de la semana
/* almacenamos una lista con los días de la semana */
const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
// creamos un objeto de fecha
const fecha = new Date();

// obtenemos el día de la semana con el método gatDay()
const diaSemana = diasSemana[fecha.getDay()];
console.log("Día de la semana:", diaSemana);
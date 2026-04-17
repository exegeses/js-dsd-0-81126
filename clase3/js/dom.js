// seleccionar el elemento body
// document.body. ...

// seleccionar un párrafo
/*#### selectores previos a 2015 ###*/
    // document.getElementById('parrafo1')
    // document.getElementsByClassName('parrafo')
    // document.getElementsByTagName('p')

// document.getElementsByTagName('p')[0].textContent = 'Hola Mundo'; // cambia el texto del primer párrafo

//document.getElementById('parrafo2').textContent = 'Hola Mundo'; // cambia el texto del párrafo con id parrafo2

/*### selectores modernos después de 2015 ###*/
document.querySelector('#parrafo2').textContent = 'Texto modificado desde Javascript'; // cambia el texto del párrafo con id parrafo2

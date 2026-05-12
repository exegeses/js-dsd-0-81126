const emojis = ['🤺','🏇','⛷️','🏂','🏌️','🏄','🚣','🏊','⛹️','🚴','🤾']

const lista2 = document.querySelector('#lista2')

let contenido = ''

for ( let auxiliar of emojis ){
    contenido += `<li>${auxiliar}</li>`
}
lista2.innerHTML = contenido
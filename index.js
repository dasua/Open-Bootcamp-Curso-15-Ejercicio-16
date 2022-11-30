const listaParrafos = document.querySelectorAll('.parrafo')
const listaSecciones = document.querySelectorAll('.seccion')
const papelera = document.querySelector('.papelera')

listaParrafos.forEach(parrafo => {
    parrafo.addEventListener('dragstart', (ev) => {
        parrafo.classList.add('draggin')
        ev.dataTransfer.setData('id',parrafo.id)
        ev.dataTransfer.setDragImage(document.querySelector('.imagen-fantasma'),50,25)
    })
    parrafo.addEventListener('dragend', (ev) => {
        parrafo.classList.remove('draggin')
    })
})

listaSecciones.forEach(seccion => {
    seccion.addEventListener('drop', ev => seccion.append(document.getElementById(ev.dataTransfer.getData('id'))))
    seccion.addEventListener('dragover', ev => {
        ev.preventDefault()
        ev.dataTransfer.dropEffect = 'move'
    })
})

papelera.addEventListener('dragover', ev => {
    ev.preventDefault()
    ev.dataTransfer.dropEffect = 'copy'
})
papelera.addEventListener('drop', ev => {
    document.getElementById(ev.dataTransfer.getData('id')).remove()
})

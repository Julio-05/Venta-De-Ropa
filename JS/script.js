const carrito = document.getElementById('carrito');
const elemento1 = document.getElementById('lista-1');
const lista = document.getElementById('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners(){

    elemento1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', elimiarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento(e) {
    e.PreventDefault();
    if(e.target.classList.contains('agregar carrito')){
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento){
    const infoElemento = {
        image: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAtributte('data-id')

    }

    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento){
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>
        <img src= "${elemento.image}" width=100 />
    </td>
    
    <td>
    <td>`
}


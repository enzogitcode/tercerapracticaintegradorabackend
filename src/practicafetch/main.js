const cardsContainer = document.getElementById('cardsContainer')
const cartsCardContainer = document.getElementById('cartsCardContainer')
fetch('http://localhost:8080/api/products/')
    .then(response => response.json())
    .then(data => {
        procesarProductos(data);
    })
    .catch(error => console.log(error))

function procesarProductos(productos) {
    productos.forEach(producto => {
        const cardHTML = crearCardHTML(producto);
        cardsContainer.innerHTML += cardHTML;
    });
}
function crearCardHTML(producto) {
    return `<div class="cardBody">
          <div class="cardTitle">${producto.title}</div>
          <div class="cardTitle">${producto.price}</div>
          <hr>
          </div>`;
}



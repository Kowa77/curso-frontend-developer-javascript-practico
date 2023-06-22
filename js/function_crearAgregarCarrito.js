function crearAgregarCarrito(){

    document.querySelectorAll(".click").forEach(el => {
    el.addEventListener("click", e => {
        const id = e.target.getAttribute('id');


        let product = productList.filter(checkId);
        let name = product[id].name;
        let image = product[id].image;
        let price = product[id].price;


        const titleContDiv = document.createElement('div');
        titleContDiv.classList.add('title-container');
        containerShopingCart.appendChild(titleContDiv);

        const imgArrow = document.createElement('img')
        imgArrow.setAttribute('src', './icons/flechita.svg');
        titleContDiv.appendChild(imgArrow);

        const ParrafoTitle = document.createElement('p');
        ParrafoTitle.innerText = "My order";
        titleContDiv.appendChild(ParrafoTitle);

        const orderContDiv = document.createElement('div');
        orderContDiv.classList.add('my-order-content');
        containerShopingCart.appendChild(orderContDiv);

        const div = document.createElement('div');
        div.classList.add('shopping-cart');
        containerProduct.appendChild(div);

        const figure = document.createElement('figure');
        div.appendChild(figure);

        const imagen = document.createElement('img');
        imagen.setAttribute('src', image );
        figure.appendChild(imagen);

        const nombre = document.createElement('p');
        nombre.innerText = name;
        div.appendChild(nombre);

        const precio = document.createElement('p');
        precio.innerText = price;
        div.appendChild(precio);

        const cerrar = document.createElement('img')
        cerrar.setAttribute('src', './icons/icon_close.png');
        div.appendChild(cerrar);

         
        //******************DIV2**************************/
        const div2 = document.createElement('div');
        div2.classList.add('order');
        containerProduct.classList.add('div2');
                       
        const parrafo = document.createElement('p');
        div2.appendChild(parrafo);
        
        const span = document.createElement('span');
        span.innerText = "Total";
        parrafo.appendChild(span);
        
        const monto = document.createElement('p');
        monto.innerText = "$0.00";
        div2.appendChild(monto);

        checkButtonCart();

        sumarAlCarrito();

        window.alert(` Agregado ${name} al carrito correctamente!! `);

        });
              
    });
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Termo',
    price: 70,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Mate',
    price: 40,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Television',
    price: 250,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Reloj Casio',
    price: 100,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Celular Iphone 10',
    price: 300,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const mainContainer = document.querySelector('.main-container');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

//const containerShopingCart = document.querySelector('#shoppingCartContainer');
const containerProduct = document.querySelector('.my-order-content');


const mobileMenu = document.querySelector('.mobile-menu');
const menuHamIcon = document.querySelector('.menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

navEmail.addEventListener('click', toggleEmailMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartAside);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

renderProducts(productList);
crearAgregarCarrito(productList);
amountInIconCart()


function toggleEmailMenu(){
    desktopMenu.classList.toggle('inactive'); 
    shoppingCartContainer.classList.add('inactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
    closeProductDetailAside();
}

function toggleCartAside(){
    shoppingCartContainer.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}
  
function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

function amountInIconCart(){
    const cartAmountIcon = document.querySelector('#cart-amount-icon');
    cantidad = document.getElementsByClassName('shopping-cart').length;
    cartAmountIcon.innerText= cantidad;
}

function recorrerArray(array) {
    for (const e of array) {
        console.log(e);
    }
}

function renderProducts(arr) {
       
    for (let i = 0; i < arr.length; i++) {
        let product = arr[i];
        
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
      
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
      
        const productInfoDiv = document.createElement('div');
      
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
      
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
      
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        productImgCart.setAttribute('id',i);
        productImgCart.setAttribute('class','click');
      
        productInfoFigure.appendChild(productImgCart);
      
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
      
        
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
      
        cardsContainer.appendChild(productCard);
        
    }
}

    function sumarAlCarrito(){
    const cartAmountIcon = document.querySelector('#cart-amount-icon');
    cantidad = document.getElementsByClassName('shopping-cart').length;
    cartAmountIcon.innerText= cantidad;
    }

    function select(){
 
    document.querySelectorAll(".click").forEach(el => {
        el.addEventListener("click", e => {
            const id = e.target.getAttribute('id');
            console.log(id +"\n");
            console.log(e);

            return id;

        });
    });


    // var apuntar = document.getElementsByClassName("shopping-cart");

    // if ( apuntar.hasChildNodes() ) {
    //     while ( apuntar.childNodes.length >= 1 ){
    //     apuntar.removeChild( apuntar.firstChild );
    //     }
    // }

    }

    function checkButtonCart(){
        let buttonTags = document.getElementsByTagName("button");
        let found;
        for (let i = 0; i < buttonTags.length; i++) {
            if (buttonTags[i].textContent == "Checkout") {
                found = buttonTags[i];
                break;
            }
        }
        
        if(found){
            //console.log('Ya existe el boton Checkout');
        }else{
        const boton = document.createElement('button');
        boton.classList.add('primary-button');  
        boton.innerText = "Checkout";
        boton.style.cssText ="margin-bottom: 20px;";

        containerProduct.appendChild(boton);
        }
    }

    function crearAgregarCarrito(){
    
        let compras = []; //mis compras
    
        document.querySelectorAll(".click").forEach(el => {
        el.addEventListener("click", e => {
            const id = e.target.getAttribute('id');
    
            let product = productList.filter(checkId);
            compras.push(product[id]);
         
            //recorrerArray(compras);  //funcion para recorrer un array
    
            let name = product[id].name;
            let image = product[id].image;
            let price = product[id].price;
    
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
    
        function checkId(id) {return idx = id; }

        return compras;
    
    }

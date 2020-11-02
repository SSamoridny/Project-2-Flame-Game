$(document).ready(function() {
    // Featured Products
    let cart = getCart();
    console.log(cart, Object.keys(cart), Object.values(cart));
    updateCartCount();
    // All Products

    function getCartArrayFromObject() {
        return Object.values(cart);
    }

    function updateCartCount() {
        let cart = getCartArrayFromObject();
        if(cart.length > 0) {
            const cartCount = cart.map(item => {
                return item.quantity;
            }).reduce((a, b) => a + b);
            $('#cartTotal').html(cartCount);
        }
    }

    function getCart() {
        return JSON.parse(localStorage.cart || "{}");
    }

    function saveCart() {
        updateCartCount();
        localStorage.cart = JSON.stringify(cart);
    }

    function addToCart(item) {
        if(cart[item.id]) {
            cart[item.id].quantity++;
        } else {
            cart[item.id] = {
                product: item,
                quantity: 1
            }
        }
        console.log("added to cart", cart)
        saveCart();
    }
    $.ajax("/api/products", {
        type: "GET",
        }).then(
        function(data) {
            data.forEach(function(item){
                let product = $(`
                    <div class="card col-xs-12 col-sm-5 col-md-3 product text-center justify-content-center" id="candleDisplay">
                        <div class="card-body">
                            <div class="imageContainer"></div>               
                            <h4 class="card-title" id="productname">${item.name}</h4>
                            <p class="card-text" id="descripton">${item.description}</p>
                            <p class="card-text" id="price">$${item.price}</p>
                            <p class="card-text">In stock:<span id="stock">${cart[item.id] ? item.stock - cart[item.id].quantity : item.stock}</span></p>
                            <button class="btn btn-dark btn-sm cart-button" id="addToCart">Add to Cart <i class="fas fa-shopping-cart" /></button>
                        </div>
                    </div>
                `)
                product.find('.cart-button').click(function() { 
                    if(item.stock == 0){
                        alert('This item is out of stock');
                    } else {
                        if(!cart[item.id] || item.stock - cart[item.id].quantity > 0) {                       
                            addToCart(item);
                            $(product).find("#stock").text(item.stock - cart[item.id].quantity);
                        } else {
                            alert('This item is out of stock');
                        }
                    }
                });
                product.appendTo('#products');
                let imageContainer = $(product).find(".imageContainer")[0];
                let zoom = new ImageZoom(imageContainer, {
                    "width":213,
                    "height":213,
                    "zoomWidth":426,
                    "img": `/assets/images/${item.image}`,
                    "offset":{"vertical":0,"horizontal":10},
                    "zoomPosition":"original",
                    "zoomStyle": "z-index: 1000;"
                });
           
        })

    });      
    
});

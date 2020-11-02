function getCart() {
    return JSON.parse(localStorage.cart || "{}");
}

function getCartArrayFromObject() {
    let cart = getCart();
    return Object.values(cart);
}


$(document).ready(function() {

    let cart = getCartArrayFromObject();
    let total = 0;

    function createCartObjectFromArray() {     
        let tmpCart = {};   
        cart.forEach(function(item) {
            tmpCart[item.product.id] = item;
        })
        return tmpCart;
    }

    function saveCart() {
        let tmpCart = createCartObjectFromArray();
        localStorage.cart = JSON.stringify(tmpCart);
    }

    cart.forEach((item, key) => {
      let cartItems=  $(`
            <tr class="d-flex">
                <td class="col-3"><img id="productimgcart" src="assets/images/${item.product.image}" /></td>
                <td class="col-3">${item.product.name}</td>
                <td class="col-3">${item.product.description}</td>
                <td class="col-3">
                <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary decreaseQuantity">${item.quantity <= 1 ? "x" : "-"}</button>
                <span class="btn btn-secondary quantity">${item.quantity}</span>
                <button type="button" class="btn btn-secondary increaseQuantity">+</button>
              </div>
              </td>
                <td class="col-3">$${item.product.price.toFixed(2)}</td>
            </tr>
        `)
        cartItems.find('.decreaseQuantity').click(function(){
            let continueDecrease = true;
            if(item.quantity == 1) {
                continueDecrease = confirm("Are you sure you want to remove this item from your cart?");
            }
            if(continueDecrease) {
                if(item.quantity > 0) {
                    item.quantity=item.quantity-1;
                    total -= item.product.price;
                    $('.subtotal').html(`$${total.toFixed(2)}`);
                    $(this).parent().find('.quantity').html(item.quantity);
                    saveCart();
                }
                if(item.quantity == 0) {
                    delete cart[key];
                    saveCart();
                    cartItems.remove();
                } else if(item.quantity == 1) {
                    $(this).html("x");
                } else {
                    $(this).html("-");
                }
            }
        });
        cartItems.find('.increaseQuantity').click(function(){
            if(item.quantity < item.product.stock) {
                item.quantity=item.quantity+1;
                total += item.product.price;
                $('.subtotal').html(`$${total.toFixed(2)}`);
                $(this).parent().find('.quantity').html(item.quantity);
                $(this).parent().find('.decreaseQuantity').html("-");
                saveCart();
            }
        });
        cartItems.appendTo('.cart');
        total += item.quantity * item.product.price;
        $('.subtotal').html(`$${total.toFixed(2)}`);
    });  

    $(`
        <tr class="d-flex">
            <td class="col-6"></td>    
            <td class="col-6 text-right"><b>Subtotal:</b></td>
            <td class="col-3 subtotal">$${total.toFixed(2)}</td>
        </tr>
    `).appendTo('.cart');

});
function getCart() {
    return JSON.parse(localStorage.cart || "{}");
}

function getCartArrayFromObject() {
    let cart = getCart();
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
function clearCart() {    
    localStorage.cart = JSON.stringify({});
    updateCartCount();
}

$(document).ready(function() {

    const TAX_RATE = 0.13;
    let cart = getCartArrayFromObject();
    let subtotal = 0;

    $(".checkout").click(function(event) {
        event.preventDefault();
        clearCart();
        window.location.href = 'products.html';
    })

    cart.forEach(item => {
        $(`
            <tr class="d-flex">
                <td class="col-3"><img id="productimgcart" src="${item.product.img}" /></td>
                <td class="col-3">${item.product.name}</td>
                <td class="col-3">${item.product.description}</td>
                <td class="col-3">${item.quantity}</td>
                <td class="col-3">$${item.product.price.toFixed(2)}</td>
            </tr>
        `).appendTo('.cart');
        subtotal += item.quantity * item.product.price;
    })  

    $(`
        <tr class="d-flex">
            <td class="col-6"></td>    
            <td class="col-6 text-right"><b>Subtotal:</b></td>
            <td class="col-3">$${subtotal.toFixed(2)}</td>
        </tr>
        <tr class="d-flex">
            <td class="col-6"></td>    
            <td class="col-6 text-right"><b>Taxes:</b></td>
            <td class="col-3">$${(subtotal * TAX_RATE).toFixed(2)}</td>
        </tr>
        <tr class="d-flex">
            <td class="col-6"></td>    
            <td class="col-6 text-right"><b>GRAND TOTAL:</b></td>
            <td class="col-3">$${((subtotal * TAX_RATE)+subtotal).toFixed(2)}</td>
        </tr>
    `).appendTo('.cart');

});
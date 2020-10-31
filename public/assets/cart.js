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
        total += item.quantity * item.product.price;
    })  

    $(`
        <tr class="d-flex">
            <td class="col-6"></td>    
            <td class="col-6 text-right"><b>Subtotal:</b></td>
            <td class="col-3">$${total.toFixed(2)}</td>
        </tr>
    `).appendTo('.cart');

});
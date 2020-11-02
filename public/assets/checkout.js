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

    $(".checkout").click(async function(event) {
        event.preventDefault();
        await postOrder();
        clearCart();
        window.location.href = 'products.html';
    })

    async function postOrderItem(orderId, orderItem) {
        let post = {
            orderId: orderId,
            productId: orderItem.product.id,
            quantity: orderItem.quantity,
            price: orderItem.product.price
        };        
        return await $.ajax(`/api/orders/${orderId}/items`, {
            type: "POST",
            data: post
        });
    }

    async function updateProductQuantity(orderItem) {      
        return await $.ajax(`/api/products/${orderItem.product.id}/stock/${orderItem.quantity}`, {
            type: "PUT"
        });
    }

    async function postOrder() {
        let post = {
            "subtotal": subtotal,
            "taxes": (subtotal * TAX_RATE),
            "total": ((subtotal * TAX_RATE) + subtotal),
            "contactEmail": $("#inputEmail").val(),
            "deliveryMethod": $("input[name='delivery']:checked").val(),
            "shippingFirstname": $("#firstName").val(),
            "shippingLastname": $("#lastName").val(),
            "shippingAddress": $("#inputAddress").val(),
            "shippingApartment": $("#inputAddress2").val(),
            "shippingCity": $("#inputCity").val(),
            "shippingProvince": $("#inputProvince").val(),
            "shippingPostal": $("#inputPostal").val(),
            "billingCredit": $("#ccNumber").val(),
            "billingExpiry": $("#ccExpiry").val(),
            "billingSecurity": $("#ccSecurityCode").val() 
        }

        let results = await $.ajax("/api/orders", {
            type: "POST",
            data: post
        });

        for(let i = 0; i < cart.length; i++) {
            await postOrderItem(results.id, cart[i]);
            await updateProductQuantity(cart[i]);
        }    

        return;
    }

    cart.forEach(item => {
        $(`
            <tr class="d-flex">
                <td class="col-3"><img id="productimgcart" src="assets/images/${item.product.image}" /></td>
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
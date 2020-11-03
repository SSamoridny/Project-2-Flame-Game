$(document).ready(function() {

    let cart = getCart();


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
        return JSON.parse(localStorage.cart || '{}');
    }

    updateCartCount();
});
getList()

$(document).ready(function() {
    $.ajax('/api/orders/last', {
        type: 'GET',
    }).then(
        function(data) {
            $('#dataOrderNumber').html(data.id);
            $('#dataEmail').html(data.contact_email);
        })
})
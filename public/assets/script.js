let candles = [
    {
        id:1,
        name:'2020',
        price: 25 ,
        description:"Just keep swimming... 100% Organic.",
        img:'assets/images/2020.jpg',
        featured: true
    },
    {
        id:2,
        name:'Shrek',
        price: 25 ,
        description:"It's ogrelicious. 100% Organic.",
        img:'assets/images/shrek.jpg',
        featured: true
    },
    {
        id:3,
        name:'Shibe',
        price: 25 ,
        description:"Truly rare puppers. 100% Organic.",
        img:'assets/images/shibe.jpg',
        featured: false
    },
    {
        id:4,
        name:'Middle Child',
        price: 25 ,
        description:"What's your name again? 100% Organic.",
        img:'assets/images/middlechild.jpg',
        featured: true
    },
    {
        id:5,
        name:'Matrix',
        price: 25 ,
        description:"Trinity's favourite. 100% Organic.",
        img:'assets/images/matrix.jpg',
        featured: false
    },
    {
        id:6,
        name:'Big Hero 6',
        price: 25 ,
        description:'Baymax loves u. 100% Organic.',
        img:'assets/images/bighero6.jpg',
        featured: false
    }]
    $(document).ready(function() {
        // Featured Products
     
        // All Products
            candles.forEach(function(item){
            $(`
            <div class="card col-xs-12 col-sm-5 col-md-3 product text-center justify-content-center" id="candleDisplay">
            <div class="card-body">
                <img class="card-img-top" src="${item.img}" />
                <h4 class="card-title" id="productname">${item.name}</h4>
                <p class="card-text" id="descripton">${item.description}</p>
                <p class="card-text" id="price">$${item.price}</p>
                <button class="btn btn-dark btn-sm" id="addToCart">Add to Cart <i class="fas fa-shopping-cart" /></button>
            </div>
        </div>
            `).appendTo('#products');
        })
    
    
    
    
    });
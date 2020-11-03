
insert into products(name, description, price, image, featured, stock) values ("Middle Child", "What's your name again? 100% Organic.", 25.00, "middlechild.jpg", TRUE, 10);
insert into products(name, description, price, image, featured, stock) values ("Matrix", "Trinity's favourite. 100% Organic.", 25.00, "matrix.jpg", TRUE, 200);
insert into products(name, description, price, image, featured, stock) values ("Shibe", "Truly rare puppers. 100% Organic.", 25.00, "shibe.jpg", TRUE, 200);
insert into products(name, description, price, image, featured, stock) values ("Shrek", "It's ogrelicious!!! 100% Organic.", 25.00, "shrek.jpg", FALSE, 175);
insert into products(name, description, price, image, featured, stock) values ("Big Hero 6", "Baymax loves u. 100% Organic.", 25.00, "bighero6.jpg", FALSE, 100);
insert into products(name, description, price, image, featured, stock) values ("2020", "Just keep swimming... 100% Organic.", 25.00, "2020.jpg", FALSE, 200);
insert into products(name, description, price, image, featured, stock) values ("Lefties", "The struggle is real. 100% Organic", 25.00, "lefties.jpg", FALSE, 200);
insert into products(name, description, price, image, featured, stock) values ("Roommates", "We used to be friends. 100% Organic.", 25.00, "roommates.jpg", FALSE, 200);
insert into products(name, description, price, image, featured, stock) values ("Veganism", "Animal friendly. Made by cows. 100% Organic.", 25.00, "veganism.jpg", FALSE, 0);

insert into orders( 
    id, 
    subtotal, 
    taxes, 
    total, 
    contact_email, 
    delivery_method, 
    shipping_firstname, 
    shipping_lastname, 
    shipping_address, 
    shipping_apartment, 
    shipping_city, 
    shipping_province,
    shipping_postal,
    billing_credit,
    billing_expiry,
    billing_security
) values (
    1, 
    75.00, 
    9.75, 
    84.75, 
    "pantanjali7@gmail.com", 
    "Pickup", 
    "Anjali", 
    "Pant", 
    "50 salute drive", 
    "2501", 
    "Woodstock", 
    "ON",
    "L4Z0B8",
    "1111 1111 1111 1111",
    "11/11",
    "111"    
);

insert into order_items( 
    orderid,
    productid,
    quantity,
    price
) values (
    1,
    1,
    2,
    25.00    
);

insert into order_items( 
    orderid,
    productid,
    quantity,
    price
) values (
    1,
    2,
    1,
    25.00    
);

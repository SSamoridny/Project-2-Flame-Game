USE FLAMEGAME;

create table product (
id int auto_increment,
name varchar(30),
description varchar(400),
price decimal(18,3),
image varchar(30),
primary key(id)
);

create table orderDetail (
id int auto_increment,
productid int,
quantity int,
subtotal decimal(18,3),
primary key(id),
foreign key(productid) references product(id));
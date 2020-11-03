DROP DATABASE IF EXISTS flamegame;
CREATE DATABASE flamegame;
USE flamegame;

CREATE TABLE `products` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `description` varchar(400),
  `price` decimal,
  `image` varchar(200),
  `featured` boolean,
  `stock` integer
);

CREATE TABLE `orders` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `subtotal` decimal,
  `taxes` decimal,
  `total` decimal,
  `contact_email` varchar(255),
  `delivery_method` varchar(10),
  `shipping_firstname` varchar(255),
  `shipping_lastname` varchar(255),
  `shipping_address` varchar(255),
  `shipping_apartment` varchar(30),
  `shipping_city` varchar(255),
  `shipping_province` varchar(255),
  `shipping_postal` varchar(255),
  `billing_credit` varchar(255),
  `billing_expiry` varchar(25),
  `billing_security` varchar(15)
);

CREATE TABLE `order_items` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `orderid` integer,
  `productid` integer,
  `quantity` integer,
  `price` decimal
);

ALTER TABLE `order_items` ADD FOREIGN KEY (`orderid`) REFERENCES `orders` (`id`);

ALTER TABLE `order_items` ADD FOREIGN KEY (`productid`) REFERENCES `products` (`id`);

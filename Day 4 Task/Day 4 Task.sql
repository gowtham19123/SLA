use SQLTask;

create table orders(id int primary key , 
                     product_name varchar(50),
                     quantity int not null,
                     price int not null);

insert into orders (id,product_name,quantity,price) values (1,'Headphone',35,3999);
insert into orders (id,product_name,quantity,price) values (2,'Phone',20,39000);
insert into orders (id,product_name,quantity,price) values (3,'Tablet',12,59000);
insert into orders (id,product_name,quantity,price) values (4,'Laptop',10,64999);
insert into orders (id,product_name,quantity,price) values (5,'C-type Charger',15,2999);

select * from orders where quantity > 12 ;

select * from orders where price between 2000 and 10000;

select * from orders where product_name like 'T%';

select * from orders order by quantity desc;
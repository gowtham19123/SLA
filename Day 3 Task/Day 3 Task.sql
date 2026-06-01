create database SQLTask;

use SQLTask;

create table products(id int primary key ,
                       name varchar(50),
                       price int not null);
                       
desc products;


alter table products change price unit_price int not null;

insert into  products(id,name,unit_price) values (1,'headphone',35000);
insert into  products(id,name,unit_price) values (2,'Watch',5000);
insert into  products(id,name,unit_price) values (3,'phone',39000);
insert into  products(id,name,unit_price) values (4,'charger',2000);
insert into  products(id,name,unit_price) values (5,'tablet',45000);

select * from products;

alter table products add column stock int not null;

update products set stock = 50 where id = 1;

delete from products where id = 2;

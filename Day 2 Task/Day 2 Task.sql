create database companyDB;
use companyDB;

create table employees(id int  primary key, name varchar(50) not null,salary int default 30000);

alter  table employees add column email varchar(50) unique;  

insert into employees(id,name,email) values (1,'santhosh','santhosh@gmail.com');
insert into employees(id,name,email,salary) values (2,'richard','richard@gmail.com',60000);
insert into employees(id,name,email) values (3,'Schifrin','schifrin@gmail.com');
insert into employees(id,name,email) values (4,'john','john@gmail.com');
insert into employees(id,name,email) values (5,'Bob','Bob@gmail.com');

select * from employees;

drop table employees;


create table employees(id int  primary key, name varchar(50) not null,salary int check(salary > 0));

insert into employees(id,name,salary) values (1,'santhosh',2000);
insert into employees(id,name,salary) values (2,'richard',1000);
insert into employees(id,name) values (3,'Bob');
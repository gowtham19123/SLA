create database schoolDB;
use schoolDB;

create table students(id int, name varchar(50),age int,grade varchar(1));

insert into students(id,name,age,grade) values (5,'kumar',23,'B');

select * from students;

drop database schooldb;

use SQLTask;

create table customers(cust_id int primary key,
                        cust_name varchar(50));

insert into customers(cust_id,cust_name) values(20,'john');
insert into customers(cust_id,cust_name) values(21,'Bob');
insert into customers(cust_id,cust_name) values(22,'Alice');
insert into customers(cust_id,cust_name) values(23,'richard');
insert into customers(cust_id,cust_name) values(24,'harry');

select * from customers;

create table orders(id int primary key,
                    product_name varchar(20), 
                    quantity int , 
                    price int, 
                    cust_id int,
                    foreign key(cust_id) references customers(cust_id));
                    
insert into orders(id,product_name,quantity,price,cust_id) values(1,'chocolate',4,100,23);
insert into orders(id,product_name,quantity,price,cust_id) values(2,'Book',1,250,24);
insert into orders(id,product_name,quantity,price,cust_id) values(3,'blue_pen',5,50,23);
insert into orders(id,product_name,quantity,price,cust_id) values(4,'black_pen',5,50,21);
insert into orders(id,product_name,quantity,price,cust_id) values(5,'note',3,90,20);
insert into orders(id,product_name,quantity,price,cust_id) values(6,'note',1,250,23);

select * from orders;

-- Write INNER JOIN to fetch customer names with their orders.

select o.id,c.cust_id,o.product_name,o.quantity,o.price from  orders o inner join customers c on o.cust_id = c.cust_id;

--  Write LEFT JOIN to fetch all customers even without orders.

select o.id,c.cust_id,o.product_name,o.quantity,o.price from customers c left join orders o  on c.cust_id = o.cust_id;


--  Normalize a table with repeating groups into 2NF.

create table students(stud_id int primary key,
                      stud_name varchar(50));
insert into students(stud_id,stud_name) values (101,'john');
insert into students(stud_id,stud_name) values (102,'Bob');
                      
create table enrollment(student_id int,
                         course_name varchar(50),
                         primary key(student_id,course_name),
                         foreign key(student_id) references students(stud_id));
insert into enrollment(student_id,course_name) values(102,'react');
insert into enrollment(student_id,course_name) values(101,'react');
insert into enrollment(student_id,course_name) values(101,'javascript');
insert into enrollment(student_id,course_name) values(102,'CSS');

select * from enrollment;

-- Show an example of 3NF using sample data.

create table department(dept_id int primary key,
                        dept_name varchar(50));
                        
insert into department(dept_id,dept_name) values (11,'computer science');
insert into department(dept_id,dept_name) values (12,'Information Technology');
insert into department(dept_id,dept_name) values (13,'AIDS');

select * from department;

create table employees(emp_id int primary key ,
					emp_name varchar(50),
                    dept_id int);

insert into employees(emp_id,emp_name,dept_id) values (1,'Alice',12);
insert into employees(emp_id,emp_name,dept_id) values (2,'Bob',11);
insert into employees(emp_id,emp_name,dept_id) values (3,'Sam',13);

select * from employees;
                    



	


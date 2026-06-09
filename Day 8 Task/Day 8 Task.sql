use schooldb;

select * from employees;

select id,name,salary from employees where salary > ( select avg(salary) from employees);

use SQLTask;

select * from products;

select id,name,unit_price from products  where unit_price > (select min(unit_price) from products) ;

select * from customers;

select * from orders;

select id,product_name,price,cust_id from orders o where exists 
                                                   (select 1 from customers c where o.cust_id = c.cust_id);


select c.cust_id,c.cust_name ,
                           (select count(*)  from orders o where o.cust_id = c.cust_id ) as Total_order from customers c;


select e1.id,e1.departments,e1.name,e1.salary from employees e1 where salary = 
                                                (select max(e2.salary) from employees e2 
                                                where e2.departments = e1.departments);
									
                                    
                                    
select exists (select 1  from products where name = "phone" ) as result;
                                                
                                                
                                                
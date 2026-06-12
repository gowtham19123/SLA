use sqltask;


drop  procedure insert_emp;

delimiter // 

create procedure update_emp()
begin
insert into employees(emp_id,emp_name,dept_id) values (4,'john',12);
end //
delimiter ;

call update_emp();

select * from employees;

alter table employees add column salary decimal(10,2);

delimiter //

create procedure insert_emp()
begin
update  employees set salary = 30500.04 where emp_id =1;
end //

delimiter ;

call insert_emp();


select * from employees;

select * from orders;

drop trigger after_update_orders;


delimiter //

create trigger update_stock
before insert on orderss
for each row
begin
    set new.stock = new.stock - new.quantity;
end //

delimiter ;

create table orderss (
    id int primary key,
    product_name varchar(50),
    quantity int,
    stock int
);

select * from orderss;

insert into orderss(id,product_name,quantity,stock) values (1,'laptop',2,5);



delimiter //

create trigger prevent_last_admin_delete
before delete on users
for each row
begin
    declare admin_count int;

    if old.role = 'admin' then
        select count(*)
        into admin_count
        from users
        where role = 'admin';

        if admin_count = 1 then
            signal sqlstate '45000'
            set message_text = 'cannot delete the last admin user';
        end if;
    end if;
end //

delimiter ;

create table users (
    id int primary key,
    username varchar(50),
    role varchar(20)
);


insert into users values (1, 'John', 'admin'), (2, 'Alice', 'user');

delete from users where id = 1;


delimiter //

create procedure fetch_employees()
begin
    select * from employees;
end //

delimiter ;

call fetch_employees;


drop procedure insert_emp;

drop trigger prevent_last_admin_delete;

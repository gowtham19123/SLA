use sqltask;

create table sales(id int  auto_increment primary key ,
					product varchar(50),
                    amount decimal(10,2)
                    );

insert into sales(product,amount) values 
                               ('Laptop', 1200.00),
                               ('Phone',  800.00),
							   ('Tablet', 800.00),
							   ('Watch',  300.00);
insert into sales(product,amount) values 
                               ('headphone', 3500.00);

select id,product,amount,
       row_number() over(order by amount desc ) as row_rank_amount,
	   rank() over(order by amount desc ) as rank_amount ,
       dense_rank() over(order by amount desc ) as rank_amount,
       sum(amount) over(order by amount desc,id asc ) as running_total
       from sales;

with avg_salary as (
select avg(amount) as overall_average from sales
) 
select s.id,s.product,s.amount from sales s cross join avg_salary a where s.amount > a.overall_average;

use SQLTask;

select * from orders;

select count(*) as total_orders from orders ;

select sum(price) as sum_of_all_orders_prices ,avg(price) as avg_of_all_orders_prices from orders ;

alter table orders add column total_sales int;

update  orders set total_sales = 6 where id = 1;
update  orders set total_sales = 12 where id = 2;
update  orders set total_sales = 12 where id = 3;
update  orders set total_sales = 24 where id = 4;
update  orders set total_sales = 6 where id = 5;

select * from orders order by product_name,total_sales ;

select min(price) as min_price , max(price) as max_price from orders;

select total_sales from orders group by total_sales order by total_sales desc ;
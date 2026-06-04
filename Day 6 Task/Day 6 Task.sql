use SQLTask;

create table events(id int primary key ,
                     event_name varchar(50),
                     event_date date);
                     
insert into events(id,event_name,event_date) values (1,'chess','2026-06-05');
insert into events(id,event_name,event_date) values (2,'carrom','2026-06-12');
insert into events(id,event_name,event_date) values (3,'Badmitan','2026-06-24');
insert into events(id,event_name,event_date) values (4,'kabaddi','2026-06-15');
insert into events(id,event_name,event_date) values (5,'kho kho','2026-06-08');
insert into events(id,event_name,event_date) values (6,'Heand ball','2026-06-06');

select now();

select date_format(event_date ,'%Y-%m-%d') as formatted_date from events; 

select year(event_date ) as event_year ,month(event_date) as event_month from events;

select concat(event_name , ' - ' , date_format(event_date ,'%Y-%m-%d') )  as Announcement from events;
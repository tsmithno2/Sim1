insert into products (url, name, price)
 values ($1, $2, $3);
select * from products order by id
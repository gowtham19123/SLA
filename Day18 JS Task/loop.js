let n = 10;

for( let i = 1; i <= n; i++)
{
     console.log(i);
 }



while(n <=5)
{
    console.log(n);
    n++;
}
  


do{
    console.log(n);
    n++;
}
while(n <= 3);



for( let i = 1; i < 10; i++)
{
    if(i === 3)
    {
        continue;
    }
    else if( i === 8)
    {
        break;
    }
    console.log(i);
}
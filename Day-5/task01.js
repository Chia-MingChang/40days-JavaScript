function pyramid(n)
{
    let result="";
    for(let i =1; i<=n; i++)
    {
        for(j=1; j<=n; j++)
        {
            if(j<=n-i)
            {
                result+=" ";
            }
            else
            {
                result+="*";
            }
        }
        result=result+"\n";
    }
    console.log(result);
}
pyramid(100);function pyramid(n) {
    let result = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            result += "* ";
        }
        result = result.trim() + "\n";
    }
    console.log(result);
}
pyramid(5);


/*Generate a Pyramid Pattern using Nested Loop as it is shown below:

```bash
*
* *
* * *
* * * *
* * * * *
*/

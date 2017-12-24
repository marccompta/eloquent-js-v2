for(var number = 1; number <= 100; number++)
{
    var output = "";
    if(number % 3 == 0)
    {
        output += "Fizz";
    }

    if(number % 5 == 0)
    {
        output += "Buzz";
    }

    console.log(output || number);
}

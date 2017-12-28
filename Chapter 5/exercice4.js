function every(array, test)
{
    var result = true;
    var counter = 0;

    while(result && counter < array.length)
    {
        result = test(array[counter++]);
    }

    return result;
}

function some(array, test)
{
    var result = false;
    var counter = 0;

    while(!result && counter < array.length)
    {
        result = test(array[counter++]);
    }

    return result;
}

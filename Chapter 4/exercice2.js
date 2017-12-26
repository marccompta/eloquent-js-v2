function reverseArray(input)
{
    var result = [];
    for(var i = 0; i < input.length; i++)
    {
        result.unshift(input[i]);
    }

    return result;
}

function reverseArrayInPlace(input)
{
    var start = 0;
    var end = input.length -1;

    while(start < end)
    {
        var aux = input[start];
        input[start] = input[end];
        input[end] = aux;

        start++;
        end--;
    }

    return input;
}

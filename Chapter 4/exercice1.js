function range(start, end, step)
{
    var step = step ? step : (start < end ? 1 : -1);
    var result = [];

    if(step > 0)
    {
        for(var i = start; i <= end; i += step)
        {
            result.push(i);
        }
    }
    else
    {
        for(var i = start; i >= end; i += step)
        {
            result.push(i);
        }
    }

    return result;
}

function sum(numbers)
{
    var result = 0;
    for(var i = 0; i < numbers.length; i++)
    {
        result += numbers[i];
    }

    return result;
}

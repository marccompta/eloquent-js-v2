function arrayToList(input)
{
    var result = null;
    for(var i = input.length - 1; i >= 0; i--)
    {
        result = 
        { 
            value: input[i],
            rest: result
        };
    }

    return result;
}

function listToArray(input)
{
    var result = [];    
    for(var node = input; node; node = node.rest)
    {
        result.push(node.value);
    }

    return result;
}

function prepend(value, list)
{
    var result = 
    {
        value: value,
        rest: list
    }

    return result;
}

function nth(list, index)
{
    if(!list)
    {
        return undefined;
    }
    else if(index == 0)
    {
        return list.value;
    }
    else
    {
        return nth(list.rest, index - 1);
    }
}

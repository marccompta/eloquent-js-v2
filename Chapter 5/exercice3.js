function groupBy(array, f)
{
    var groups = {};

    array.forEach(function(element)
    {
        var group = f(element);
        if(group in groups)
        {
            groups[group].push(element);
        }
        else
        {
            groups[group] = [element];
        }
    });

    return groups;
}

var groups = groupBy(ancestry, function(p) {
     return Math.ceil(p.died / 100) 
});

for (var group in groups)
{
    var ages = groups[group].map(function(p) {
        return p.died - p.born;
    });

    console.log(group + ": " + average(ages));
}

function deepEqual(obj1, obj2)
{
    if(obj1 === obj2)
    {
        return true;
    }

    if(typeof obj1 == "object" && obj1 != null && typeof obj2 == "object" && obj2 != null)
    {
        var numPropsObj1 = 0;
        var numPropsObj2 = 0;

        for(var prop in obj1)
        {
            numPropsObj1++;
        }

        for(var prop in obj2)
        {
            numPropsObj2++;

            if(!(prop in obj1) || !deepEqual(obj1[prop], obj2[prop]))
            {
                return false;
            }
        }

        return numPropsObj1 == numPropsObj2;
    }

    return false;
}

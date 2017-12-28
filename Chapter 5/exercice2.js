function mother(p)
{ 
    if(byName[p.mother])
    {
        return p.born - byName[p.mother].born;
    }
    
    return null;
}

var moms = ancestry.map(mother)
	.filter(function(p) { return p != null });

var result = average(moms);

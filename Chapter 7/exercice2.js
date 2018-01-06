function Tiger()
{
    this.energy = 100;
    this.direction = randomElement(directionNames);
    this.preySeen = [];
}

Tiger.prototype.act = function(view)
{
    var preys = view.findAll("O");
    var seenPerTurn = this.preySeen.reduce(function(a, b)
    {
        return a + b;
    }, 0) / this.preySeen.length;
    this.preySeen.push(preys.length);

    if(this.preySeen.length > 6)
    {
        this.preySeen.shift();
    }
    
    if (preys.length && seenPerTurn > 0.25)
    {
        return {type:"eat", direction: randomElement(preys)};
    }

    var space = view.find(" ");

    if (this.energy > 400 && space)
    {
        return {type: "reproduce", direction: space};
    }

    if (view.look(this.direction) != " " && space)
    {
        this.direction = space;
    }

    return {type: "move", direction: this.direction};
};

// From past exercice:
function SmartPlantEater()
{
    this.energy = 20;
    this.direction = randomElement(directionNames);
}

SmartPlantEater.prototype.act = function(view)
{
    var space = view.find(" ");
    
    if (this.energy > 75 && space)
    {
        return {type: "reproduce", direction: space};
    }

    var plants = view.findAll("*");

    if (plants.length > 1)
    {
        return {type: "eat", direction: randomElement(plants)};
    }

    if (view.look(this.direction) != " " && space)
    {
        this.direction = space;
    }

    return {type: "move", direction: this.direction};
};

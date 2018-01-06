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

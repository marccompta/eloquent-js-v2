var size = 8;
var output = "";

for(var line = 0; line < size; line++)
{
    for(var column = 0; column < size; column++)
    {
        if(line % 2 == column % 2)
        {
            output += " ";
        }
        else
        {
            output += "#";
        }
    }

    output += "\n";
}

console.log(output);

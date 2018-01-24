function buildTable(data)
{
    var fields = Object.keys(data[0]);
    var table = document.createElement("table");

    var firstRow = document.createElement("tr");

    fields.forEach(function(field) {
        var cell = document.createElement("th");
        cell.textContent = field;
        firstRow.appendChild(cell);
    });

    table.appendChild(firstRow);

    data.forEach(function(obj) {
        var row = document.createElement("tr");
        
        fields.forEach(function(field) {
            var cell = document.createElement("td");
            var textNode = document.createTextNode(obj[field]);
            
            if(typeof obj[field] == "number")
            {
                cell.style.textAlign = "right";
            }

            cell.appendChild(textNode);
            row.appendChild(cell);
        });

        table.appendChild(row);
    });

    return table;
}

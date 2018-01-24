function byTagName(node, tagName)
{
    var response = [];

    node.childNodes.forEach(function(child){
        privateByTagName(child, tagName.toUpperCase());
    });

    return response;

    function privateByTagName(node, tagName)
    {
        if(node.nodeType == document.ELEMENT_NODE)
        {
            if(node.tagName == tagName)
            {
                response.push(node);
            }

            node.childNodes.forEach(function(node){
                privateByTagName(node, tagName);
            });
        }
    }
}

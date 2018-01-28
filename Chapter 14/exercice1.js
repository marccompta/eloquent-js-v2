// Prevent Q, W and X.

var field = document.querySelector("input");
field.addEventListener("keydown", function(event) {
    if(["Q".charCodeAt(0), "W".charCodeAt(0), "X".charCodeAt(0)]
        .indexOf(event.keyCode) != -1)
    {
        event.preventDefault();
    }
});

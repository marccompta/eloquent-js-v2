function runLevel(level, Display, andThen) {
    var display = new Display(document.body, level);
    var running = "yes";

    function handleKey(event) {
        if (event.keyCode == 27)
        {
            if (running == "no")
            {
                running = "yes";
                runAnimation(animation);
            }
            else if (running == "pausing") 
            {
                running = "yes";
            }
            else if (running == "yes")
            {
                running = "pausing";
            }
        }
    }

    addEventListener("keydown", handleKey);
    var arrows = trackKeys(arrowCodes);

    function animation(step) {
        if(running == "pausing")
        {
            running = "no";
            return false;
        }

        level.animate(step, arrows);
        display.drawFrame(step);
        if (level.isFinished()) 
        {
            display.clear();
            // Here we remove all our event handlers.
            removeEventListener("keydown", handleKey);
            arrows.unregister();
            if (andThen)
                andThen(level.status);
            return false;
        }
    }

    runAnimation(animation);
}

function trackKeys(codes) {
    var pressed = Object.create(null);
    function handler(event) {
        if (codes.hasOwnProperty(event.keyCode)) {
            var state = event.type == "keydown";
            pressed[codes[event.keyCode]] = state;
            event.preventDefault();
        }
    }

    addEventListener("keydown", handler);
    addEventListener("keyup", handler);

    // This is new -- it allows runLevel to clean up its handlers
    pressed.unregister = function() {
        removeEventListener("keydown", handler);
        removeEventListener("keyup", handler);
    };
    // End of new code
    
    return pressed;
}

runGame(GAME_LEVELS, DOMDisplay);

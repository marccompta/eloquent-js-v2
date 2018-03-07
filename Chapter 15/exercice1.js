function runGame(plans, Display) {
    var lives = 3;

    function startLevel(n) {
        runLevel(new Level(plans[n]), Display, function(status) {
            if (status == "lost")
            {
                lives--;
                if(lives >= 0)
                {
                    startLevel(n);
                }
                else
                {
                    startLevel(0);
                }
            }
            else if (n < plans.length - 1)
                startLevel(n + 1);
            else
                console.log("You win!");
        });
    }

    startLevel(0);
}

runGame(GAME_LEVELS, DOMDisplay);

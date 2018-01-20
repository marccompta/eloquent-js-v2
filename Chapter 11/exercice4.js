specialForms["set"] = function(args, env) {
    if(args.length != 2 || args[0].type != "word")
    {
        throw new SyntaxError("Bad use of set");
    }

    var name = args[0].name;
    var value = evaluate(args[1], env);

    return privateSet(args, env);

    function privateSet(args, env) {
        if(Object.prototype.hasOwnProperty.call(env, name))
        {
            env[name] = value;
            return value;
        }

        var prototype = Object.getPrototypeOf(env);
        if(prototype)
        {
            return privateSet(args, prototype);
        }

        throw new ReferenceError("Setting undefined variable: " + name);
    }
}

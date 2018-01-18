function skipSpace(string) {
    var skip = string.match(/^(\s|#.*)+/);
    return (skip ? string.slice(skip[0].length) : string);
}

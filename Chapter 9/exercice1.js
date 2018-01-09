// car and cat
var regEx1 = /ca[rt]/

// pop and prop
var regEx2 = /pr?op/

// ferret, ferry, and ferrari
var regEx3 = /ferr(et|y|ari)/

// any word ending in ious
var regEx4 = /ious\b/

// a whitespace character followed by a dot, colon, or semicolon
var regEx5 = /\s[.,;:]/

// a word longer than six letters
var regEx6 = /\w{7,}/

// a word without the letter e
var regEx7 = /\b[^\We]+\b/i

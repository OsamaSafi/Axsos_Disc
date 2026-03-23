function acronym(str) {
    var words = str.split(" ");
    var result = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            result += words[i][0].toUpperCase();
        }
    }
    return result;
}

console.log(acronym('osama safi moon'))
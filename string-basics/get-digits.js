function getDigits(str) {
    var digit = "";
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i]) && str[i] !== " ") {
            digit += str[i]
        }
    }
    return digit;
}

console.log(getDigits('abc8c0d1ngd0j0!8'))

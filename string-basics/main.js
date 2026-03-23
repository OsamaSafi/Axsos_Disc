function removeBlanks(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            newStr += str[i];
        }
    }
    console.log(newStr);
}

removeBlanks('osama safi 88 ');

// ==========================================

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

// ============================================

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

// ============================================

function countNonSpaces(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            count++;
        }
    }
    return count;
}
console.log(countNonSpaces('osama safi moon'))


// ============================================

function removeShorterStrings(arr, minLength) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= minLength) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}

console.log(removeShorterStrings(['Good evning', 'sunmoon', 'abo', 'open', 'sets', 'world'], 4))
console.log(removeShorterStrings(['Those', 'am', 'ets', 'b', 'so', 'than', 'computer'], 3))

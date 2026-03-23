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
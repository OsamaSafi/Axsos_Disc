function alwaysHungry(arr) {
    let foodFound = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "food") {
            console.log("yummy");
            foodFound = true;
        }
    }
    if (!foodFound) {
        console.log("I'm hungry");
    }
}

alwaysHungry([4, 1, 5, 7, 2]);

// ==============================================

function highPass(arr, cutoff) {
    var filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}

console.log(highPass([6, 8, 3, 10, -2, 5, 9], 5))

// ==============================================

function betterThanAverage(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    let avg = sum / arr.length
    var count = 0;
    for (let i = 0; i < arr.length; i--) {
        if (arr[i] > avg) {
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);

// ==============================================

function reverse(arr) {
    let array = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        array.push(arr[i]);
    }
    arr = array;
    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);

// ==============================================

function fibonacciArray(n) {
    var fibArr = [0, 1];
    while (fibArr.length < n) {
        let prev1 = fibArr[fibArr.length - 1];
        let prev2 = fibArr[fibArr.length - 2];
        fibArr.push(prev1 + prev2);
    }

    return fibArr;
}

var result = fibonacciArray(10);
console.log(result);



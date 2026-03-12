let numbers = [1, 5, 10, 15, 20, 25, 30];

let array = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 15) {
        array.push(numbers[i])
    }
}

console.log(array)
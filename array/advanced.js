let numbers = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (!uniqueNumbers.includes(numbers[i])) {
        uniqueNumbers.push(numbers[i]);
    }
}
console.log(uniqueNumbers);



let nums = [1, 2, 3, 4, 5];
let n = 2;
for (let i = 0; i < n; i++) {
    let lastElement = nums.pop();
    nums.unshift(lastElement);
}
console.log(nums);
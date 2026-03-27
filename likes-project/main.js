

let counter = document.querySelector(".counter")
let countVal = 0;
function count() {
    countVal++;
    counter.innerText = countVal;
}
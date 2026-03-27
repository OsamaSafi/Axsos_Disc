
let nameVal = document.querySelector('.name')
function changeName() {
    if (nameVal.innerText === "Jane Doe") {
        nameVal.innerText = "Osama Safi"
    } else {
        nameVal.innerText = "Jane Doe"
    }
}

let number = document.querySelector('.connection-number');

function remove(element) {
    element.closest(".card-list-item").remove();
    let count = parseInt(number.innerText);
    count--;
    number.innerText = count;
}


let counter = document.querySelector('.my-connection-number');

function add(element) {
    element.closest(".card-list-item").remove();
    let count = parseInt(counter.innerText);
    count++;
    counter.innerText = count;
}
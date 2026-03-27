
function addLike(selector) {
    let element = document.querySelector(selector);
    let currentCount = parseInt(element.innerText);
    element.innerText = currentCount + 1;
}

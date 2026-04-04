function remove(element) {
    element.closest('.cookie').remove();
}

function changeDegree() {
    let type = document.querySelector('#degree').value;
    let temps = document.querySelectorAll('.temp');

    temps.forEach(function (el) {
        let original = parseFloat(el.getAttribute('data-temp'));
        let value;

        if (type === "F") {
            value = (original * 9 / 5) + 32;
        } else {
            value = original;
        }

        el.innerText = Math.round(value) + '°';
    });
}
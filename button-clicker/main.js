function logOut(element) {
    if (element.innerText === "Login") {
        element.innerText = "Logout";
        element.style.backgroundColor = "red";
    } else {
        element.innerText = "Login";
        element.style.backgroundColor = "blue";
    }
}

function remove(element) {
    element.remove()
}



const buttonElem = document.querySelector('.single-use-btn');
function clickFunction(e) {
    console.log("clicked");
    buttonElem.removeEventListener("click", clickFunction);
}
buttonElem.addEventListener("click", clickFunction);

function addError(input, elements){
    input.classList.add("error-active");
    elements.containerError.style.display = "flex"
    elements.containerError.children[1].innerHTML = elements.message;
}

function removeError(input, elements){
    input.classList.remove("error-active");
    elements.containerError.style.display = "none"
    
}
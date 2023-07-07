const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const msg = "Enter a valid value for"

function initApp(){
    addElement(firstName, `${msg} First name`);
    addElement(lastName, `${msg} Last name`);
    addElement(password, `${msg} Password`);
    addElement(email, "Look like this is not an email");
}

function addElement(element, message){
    element.addEventListener("blur", function(){

        if(element.type === "text" || element.type === "password"){
            validationForm(element, createObject(element, message));
        }else {
            validationEmail(element, createObject(element, message))
        }
    })
}

function createObject(input, message){
    return {
        containerError: input.parentNode.children[1],
        message: message 
    }
}

initApp();
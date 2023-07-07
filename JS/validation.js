function validationForm(input, elements){
    if(!input.value){
        addError(input, elements);
    }else{
        removeError(input, elements);
    }
}
function validationEmail(input, elements){
    const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi

    if(!regex.test(input.value)){
        addError(input, elements);
    }else {
        removeError(input, elements);
    }
}
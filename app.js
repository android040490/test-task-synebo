const regPassword = /^.*(?=.{8,})(?=.*[а-яА-Яa-zA-Z])(?=.*\d)(?=.*[?!№#%:;*/\+-]).*$/   ;
const regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

let emailInput = document.getElementById("email");
let passInput = document.getElementById("password");
let submitBtn = document.getElementById("submit-btn");

passInput.addEventListener("input", formInputHandler(regPassword))

emailInput.addEventListener("input", formInputHandler(regEmail))

submitBtn.addEventListener("click", function(e){
    let emailIsValid = inputValidation(emailInput.value, regEmail);
    let passwordIsValid = inputValidation(passInput.value, regPassword)
    if(emailIsValid && passwordIsValid){
        return
    }
    e.preventDefault()
})


function inputValidation(string, regexp){
    return regexp.test(string)
}

function formInputHandler(regexp){
    return function(){
        if(! inputValidation(this.value, regexp)){
            this.classList.remove('match-field');
            this.classList.add('error-field')
            this.nextElementSibling.style.display = 'block'
            return
        }
        this.classList.remove('error-field');
        this.classList.add('match-field');
        this.nextElementSibling.style.display = 'none'
    }
}
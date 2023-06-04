const formContainer = document.querySelector(".form-container");
const thanksPage = document.querySelector(".wrapper");
const form = document.querySelector("form");
const dismissBtn = document.querySelector(".dismiss-btn");
const errorMsg = document.querySelector(".error-msg");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let email = form.elements.email.value;
    console.log(/\w+@\w+.\w+/ig.test(email));
    if(email ==="" || /\w+@\w+.\w+/ig.test(email) == false) {
        errorMsg.style.opacity = "1";
    } else {
        errorMsg.style.opacity = "0";
        formContainer.style.display = "none";
        thanksPage.style.display = "flex";
    }
});

dismissBtn.addEventListener("click", function() {
    window.location.reload();
});



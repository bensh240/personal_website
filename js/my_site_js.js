
(function () {

    let contactForm = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(contactForm)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

function validateEmailInForm(){
    const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const usersEmail = document.getElementById("validationCustomEmail").value;
    let emailInput = document.getElementById("emailValidation");


    if (!(regExp.test(String(usersEmail).toLowerCase()))){
        emailInput.classList.add('is-invalid');
        return false;
    }

    emailInput.classList.remove('is-invalid');
    return true;
}


function sendMail() {
    const usersSubject = document.getElementById("validationCustomSubject").value;
    const usersMessage = document.getElementById("validationCustomMessage").value;
    let urlStr = "mailto:ben.shaya@post.idc.ac.il?subject=" + usersSubject + "&body=" + usersMessage;
    window.open(urlStr);
}




(function email() {
    let email = document.getElementById('email');
    let theForm = document.getElementById('the-form');
    let emailError = document.getElementById('error-email-message');
    

    email.addEventListener('input',function(e) {
        //console.log(email.validity);
        let element = e.target;
        let errorAtt = element.getAttribute('date-error-element');

        if(!errorAtt) {
            return;
        }

        let errorElement = document.querySelector(errorAtt);

        if (element.validity.valid) {
            errorElement.innerHTML = '';
            return;
        }

        errorElement.innerHTML = 'Please enter a valid email address.';

        //submit the form
    });

    theForm.addEventListener('submit', function(e) {
        if (email.validity.valid) {
            return;
        }

        e.preventDefault();

    })
    
})();
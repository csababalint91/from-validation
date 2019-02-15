(function email() {
    let email = document.getElementById('email');
    let theForm = document.getElementById('the-form');
    let emailError = document.getElementById('error-email-message');
    

    email.addEventListener('input',function(e) {
        //console.log(email.validity);

        if (email.validity.valid) {
            emailError.innerHTML = '';
            return;
        }

        emailError.innerHTML = 'Please enter a valid email address.';

        //submit the form
    });

    theForm.addEventListener('submit', function(e) {
        if (email.validity.valid) {
            return;
        }

        e.preventDefault();

    })
    
})();
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    checkInputs(); 
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if (usernameValue === '') {
        setErrorFor(username, 'O nome de usuário é obrigatório.');
    } else {
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'O email é obrigatório.');
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, 'Por favor, insira um email válido.');
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'A senha é obrigatória.');
    } else if (passwordValue.length < 7) {
        setErrorFor(password, 'A senha deve ter pelo menos 7 caracteres.');
    } else {
        setSuccessFor(password);
    }

    if (confirmPasswordValue === '') {
        setErrorFor(confirmPassword, 'A confirmação da senha é obrigatória.');
    } else if (passwordValue !== confirmPasswordValue) {
        setErrorFor(confirmPassword, 'As senhas não coincidem.');
    } else {
        setSuccessFor(confirmPassword);
    }

    const formControls = form.querySelectorAll('.form-control');
    const isFormValid = [...formControls].every((formControl) => {
        return formControl.classList.contains('success');
    });

    if (isFormValid) {
        alert('Formulário enviado com sucesso!');
        form.reset();
        formControls.forEach((formControl) => {
            formControl.className = 'form-control';
        });
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

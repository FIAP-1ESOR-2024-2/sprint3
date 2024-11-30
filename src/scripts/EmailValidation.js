function validateEmail(emailInput) {
    const email = emailInput.trim();

    if (email == '') {
        return {
            isValid: false,
            message: 'O campo de email não pode ser vazio!'
        }
    }

    // https://regex101.com/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return {
            isValid: false,
            message: 'Insira um email válido.'
        }
    }

    return {
        isValid: true,
        message: ''
    }
}

function handleEmailValidation(inputElement, errorElement) {
    const validationResult = validateEmail(inputElement.value);

    if (!validationResult.isValid) {
        errorElement.textContent = validationResult.message;
        inputElement.classList.add('error');
        return false;
    }

    errorElement.textContent = '';
    inputElement.classList.remove('error');
    return true;
}

document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email-input');
    const emailError = document.getElementById('email-error');

    if (emailInput && emailError) {
        emailInput.addEventListener('blur', () => {
            handleEmailValidation(emailInput, emailError);
        });

        emailInput.addEventListener('input', () => {
            if (emailInput.value.trim() != '') {
                handleEmailValidation(emailInput, emailError);
            }
        })
    }
})
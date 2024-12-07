function validateName(nameInput) {
    const name = nameInput.trim();
    
    if (name === '') {
        return {
            isValid: false,
            message: 'O nome não pode estar vazio!'
        };
    }
    
    const words = name.split(/\s+/);
    
    if (words.length !== 2) {
        return {
            isValid: false,
            message: 'Por favor, insira o seu nome completo!'
        };
    }
    
    if (words[0].length < 2 || words[1].length < 2) {
        return {
            isValid: false,
            message: 'Ambos os nomes devem ter pelo menos duas letras.'
        };
    }
    
    return {
        isValid: true,
        message: ''
    };
}

function handleNameValidation(inputElement, errorElement) {
    const validationResult = validateName(inputElement.value);
    
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
    const nameInput = document.getElementById('name-input');
    const nameError = document.getElementById('name-error');

    if (nameInput && nameError) {
        nameInput.addEventListener('blur', () => {
            handleNameValidation(nameInput, nameError);
        });

        nameInput.addEventListener('input', () => {
            if (nameInput.value.trim() !== '') {
                handleNameValidation(nameInput, nameError);
            }
        });
    }
});
function validateMessage(messageInput) {
    const message = messageInput.trim();
    
    if (message === '') {
        return {
            isValid: false,
            message: 'A mensagem não pode ser vazia.'
        };
    }
    
    if (message.length < 30) {
        return {
            isValid: false,
            message: 'A mensagem deve ter pelo menos 30 caractéres.'
        };
    }
    
    if (message.length > 500) {
        return {
            isValid: false,
            message: 'A mensagem não pode exceder os 500 caractéres.'
        };
    }
    
    return {
        isValid: true,
        message: ''
    };
}

function handleMessageValidation(inputElement, errorElement, charCountElement) {
    const validationResult = validateMessage(inputElement.value);
    
    if (charCountElement) {
        charCountElement.textContent = `${inputElement.value.trim().length}/500`;
    }
    
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
    const messageInput = document.getElementById('message-input');
    const messageError = document.getElementById('message-error');
    const charCount = document.getElementById('char-count');

    if (messageInput && messageError) {
        messageInput.addEventListener('input', () => {
            handleMessageValidation(messageInput, messageError, charCount);
        });
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm && messageInput && messageError) {
        contactForm.addEventListener('submit', function(event) {
            const messageValid = handleMessageValidation(messageInput, messageError, charCount);

            if (!messageValid) {
                event.preventDefault();
            }
        });
    }
});
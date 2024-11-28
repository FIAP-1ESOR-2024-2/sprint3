document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");
  const emailInput = document.getElementById("email");
  const confirmEmailInput = document.getElementById("confirmEmail");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");

  form.addEventListener("submit", (event) => {
      event.preventDefault();
      clearErrors();

      let hasError = false;

      // Validação do Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
          displayError(emailInput, "Insira um email válido.");
          hasError = true;
      }
      if (emailInput.value !== confirmEmailInput.value) {
          displayError(confirmEmailInput, "Os emails não correspondem.");
          hasError = true;
      }

      // Validação da Senha
      if (passwordInput.value.length < 6) {
          displayError(passwordInput, "A senha deve ter pelo menos 6 caracteres.");
          hasError = true;
      }
      if (passwordInput.value !== confirmPasswordInput.value) {
          displayError(confirmPasswordInput, "As senhas não correspondem.");
          hasError = true;
      }

      // Enviar o formulário se não houver erros
      if (!hasError) {
          alert("Cadastro realizado com sucesso!");
          form.submit();
      }
  });

  // Função para exibir erros
  function displayError(input, message) {
      const errorDiv = document.createElement("div");
      errorDiv.classList.add("text-danger", "mt-1", "error-message");
      errorDiv.textContent = message;
      input.parentElement.appendChild(errorDiv);
  }

  // Função para limpar erros
  function clearErrors() {
      const errorMessages = document.querySelectorAll(".error-message");
      errorMessages.forEach((msg) => msg.remove());
  }
});

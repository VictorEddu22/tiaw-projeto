// Dados do usuário em formato JSON
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Validação simples
    if (username === 'admin' && password === '1234') {
        alert('Login bem-sucedido!');
        // Redirecionar ou realizar outra ação
    } else {
        errorMessage.textContent = 'Usuário ou senha incorretos.';
    }
});
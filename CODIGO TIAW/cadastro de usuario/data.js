document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
  
    // Formata o campo CPF enquanto o usuário digita: 000.000.000-00
    const cpfInput = document.getElementById('cpf');
    cpfInput.addEventListener('input', e => {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length > 11) value = value.slice(0, 11);
      let formatted = '';
      if (value.length > 0) {
        formatted = value.substring(0, 3);
      }
      if (value.length >= 4) {
        formatted += '.' + value.substring(3, 6);
      }
      if (value.length >= 7) {
        formatted += '.' + value.substring(6, 9);
      }
      if (value.length >= 10) {
        formatted += '-' + value.substring(9, 11);
      }
      e.target.value = formatted;
    });
  
    // Função para validar CPF
    function validaCPF(strCPF) {
      strCPF = strCPF.replace(/[^\d]+/g,'');
      if (strCPF.length !== 11) return false;
      if (/^(\d)\1{10}$/.test(strCPF)) return false;
  
      let sum = 0;
      let rest;
  
      for (let i=1; i<=9; i++) sum += parseInt(strCPF.substring(i-1, i)) * (11 - i);
      rest = (sum * 10) % 11;
      if ((rest === 10) || (rest === 11)) rest = 0;
      if (rest !== parseInt(strCPF.substring(9, 10))) return false;
  
      sum = 0;
      for (let i=1; i<=10; i++) sum += parseInt(strCPF.substring(i-1, i)) * (12 - i);
      rest = (sum * 10) % 11;
      if ((rest === 10) || (rest === 11)) rest = 0;
      if (rest !== parseInt(strCPF.substring(10, 11))) return false;
  
      return true;
    }
  
    // Validação do formulário
    form.addEventListener('submit', e => {
      e.preventDefault();
  
      // Coleta valores dos campos
      const nome = form.fullName.value.trim();
      const email = form.email.value.trim();
      const phone = form.phone.value.trim();
      const cpf = form.cpf.value.trim();
      const dob = form.dob.value;
      const password = form.password.value;
      const confirmPassword = form.confirmPassword.value;
      const address = form.address.value.trim();
      const termsAccepted = form.terms.checked;
  
      // Validação simplificada e mensagens claras
      if (nome.length < 3) {
        alert('Por favor, informe um nome completo válido.');
        form.fullName.focus();
        return;
      }
  
      if (!validateEmail(email)) {
        alert('Por favor, informe um e-mail válido.');
        form.email.focus();
        return;
      }
  
      if (!validaCPF(cpf)) {
        alert('Por favor, informe um CPF válido.');
        form.cpf.focus();
        return;
      }
  
      if (!password || password.length < 6) {
        alert('A senha precisa ter pelo menos 6 caracteres.');
        form.password.focus();
        return;
      }
  
      if (password !== confirmPassword) {
        alert('As senhas não coincidem.');
        form.confirmPassword.focus();
        return;
      }
  
      if (!termsAccepted) {
        alert('Você precisa aceitar os termos de uso e a política de privacidade.');
        form.terms.focus();
        return;
      }
  
      // Tudo validado - aqui pode enviar os dados para servidor ou mostrar mensagem de sucesso
      alert('Cadastro realizado com sucesso!');
  
      // Opcional: resetar o formulário para uma nova entrada
      form.reset();
    });
  
    // Função simples para validar email
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email.toLowerCase());
    }
  });
  
// Set max date for date of birth to today
const dataNascimentoInput = document.getElementById('dataNascimento');
const today = new Date().toISOString().split('T')[0];
dataNascimentoInput.setAttribute('max', today);

// Simple form validation and JSON creation
const form = document.getElementById('registrationForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Clear previous error styling
  [...form.elements].forEach(el => {
    if(el.type !== "radio") {
      el.style.borderColor = '';
    } else {
      el.style.outline = '';
    }
  });

  let errors = [];

  // Validate required fields
  const nome = form.nome.value.trim();
  const cpf = form.cpf.value.trim();
  const dataNascimento = form.dataNascimento.value;
  const email = form.email.value.trim();
  const telefone = form.telefone.value.trim();
  const genero = form.genero.value;
  const condicaoMedica = form.condicaoMedica.value;
  const senha = form.senha.value;
  const confirmarSenha = form.confirmarSenha.value;

  if (!nome) { 
    errors.push('Nome é obrigatório'); 
    form.nome.style.borderColor = '#be2617'; 
  }
  if (!cpf) { 
    errors.push('CPF é obrigatório'); 
    form.cpf.style.borderColor = '#be2617'; 
  }
  if (!dataNascimento) { 
    errors.push('Data de nascimento é obrigatória'); 
    form.dataNascimento.style.borderColor = '#be2617'; 
  }
  if (!email) { 
    errors.push('E-mail é obrigatório'); 
    form.email.style.borderColor = '#be2617'; 
  }
  if (!telefone) { 
    errors.push('Telefone é obrigatório'); 
    form.telefone.style.borderColor = '#be2617'; 
  }
  if (!genero) { 
    errors.push('Gênero é obrigatório'); 
    const radios = form.querySelectorAll("input[name='genero']");
    radios.forEach(r => r.style.outline = '#be2617 solid 2px');
  }
  if (!condicaoMedica) { 
    errors.push('Condição médica é obrigatória'); 
    form.condicaoMedica.style.borderColor = '#be2617'; 
  }
  if (!senha) { 
    errors.push('Senha é obrigatória'); 
    form.senha.style.borderColor = '#be2617'; 
  }
  if (senha && senha.length < 6) { 
    errors.push('Senha deve ter mínimo 6 caracteres'); 
    form.senha.style.borderColor = '#be2617'; 
  }
  if (senha !== confirmarSenha) { 
    errors.push('Senhas não conferem'); 
    form.confirmarSenha.style.borderColor = '#be2617'; 
  }

  if (errors.length > 0) {
    alert(errors.join('\n'));
    return;
  }

  // Build JSON object
  const userData = {
    nome,
    cpf,
    dataNascimento,
    email,
    telefone,
    genero,
    condicaoMedica,
    senha
  };

  // Log JSON in console (replace with server call or localStorage as needed)
  console.log('Dados cadastrados:', JSON.stringify(userData, null, 2));

  alert('Cadastro realizado com sucesso!');

  form.reset();
});

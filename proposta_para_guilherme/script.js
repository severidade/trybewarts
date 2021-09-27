const eMail = document.getElementById('input-email-login');
const password = document.getElementById('input-password');
const login = document.getElementById('button-login');
const agreement = document.getElementById('agreement');
const submit = document.getElementById('submit-btn');
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const replaceContent = document.getElementById('main_conteiner');

login.addEventListener('click', () => {
  if (eMail.value !== 'tryber@teste.com' && password.value !== '1234546') {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

agreement.addEventListener('click', () => {
  if (agreement.checked) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
});

textarea.addEventListener('input', () => {
  const counterTextArea = textarea.value.split('').length;
  const characterCounter = 500 - counterTextArea;
  counter.innerHTML = characterCounter;
});


// Retorna os dados do formulario em como Feedback a pessoa usuaria após o envio do formulário

// Apaga conteúdo do html 
function clearForm() {
  replaceContent.innerHTML = '';
}

// Insere o novo conteúdo
submit.addEventListener('click', (event) => {
  event.preventDefault();
  
  const data = new FormData(document.getElementById('evaluation-form'));
  // o new é operador construtor que retorna um objeto através dos dados do formulário
  
  const nameRetorno = data.get('nome');
  const lastNameRetorno = data.get('sobrenome');
  const emailRetorno = data.get('email');
  const casaRetorno = data.get('casas');
  const familiaRetorno = data.get('family');
  const conteudosRetorno = data.getAll('content');
  const rateRetorno = data.get('rate');
  const textoRetorno = data.get('textarea');
  
  clearForm();
  
  replaceContent.innerHTML = `
  <p>Nome: ${nameRetorno} ${lastNameRetorno}</p>
  <p>E-mail: ${emailRetorno}</p>
  <p>Casa: ${casaRetorno}</p>
  <p>Qual sua família: ${familiaRetorno}<p>
  <p>Qual conteúdo você está com mais vontade de aprender: ${conteudosRetorno}.</p>
  <p>Sua Avaliação: ${rateRetorno};
  <div><p>Seu comentário: ${textoRetorno}</p></div>
  `; 
});

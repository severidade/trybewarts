const eMail = document.getElementById('input-email-login');
const password = document.getElementById('input-password');
const login = document.getElementById('button-login');
const agreement = document.getElementById('agreement');
const submit = document.getElementById('submit-btn');
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');
// const replaceContent = document.getElementById('main_conteiner');
const replaceContent = document.getElementById('evaluation-form');
// Guilherme o nosso erro era apagar a tag form

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
// o new é operador construtor que retorna um objeto através dos dados do formulário
function feedBack(event) {
  event.preventDefault();
  const data = new FormData(document.getElementById('evaluation-form'));
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
  <p>Nome: ${nameRetorno} ${lastNameRetorno}</p> <p>Email: ${emailRetorno}</p>
  <p>Casa: ${casaRetorno}</p> <p>Família: ${familiaRetorno}<p>
  <p>Matérias: ${conteudosRetorno.join(', ')}</p>
  <p>Avaliação: ${rateRetorno}; <div><p>Observações: ${textoRetorno}</p></div>`;
}

submit.addEventListener('click', feedBack);

// na linha 58 conteúdos retorna um array com o .join foi possível formatar para que houvesse espaço entre os itens e a vírgula.

// submit.addEventListener('click', () => {
//   // const itens = feedBack.split('&');
//   // const fullName = `Nome: ${itens[0].slice(5)} ${itens[1].slice(10)}`;
//   // const house = `Casa: ${itens[3].slice(6)}`;

//   clearForm();

//   // replaceContent.innerHTML = `<p>${fullName}</p>
//   // <p>${house}</p>`;
// });
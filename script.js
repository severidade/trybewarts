const eMail = document.getElementById('input-email-login');
const password = document.getElementById('input-password');
const login = document.getElementById('button-login');
const agreement = document.getElementById('agreement');
const submit = document.getElementById('submit-btn');
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const feedBack = window.location.search.replace('?', '');
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

function clearForm() {
  replaceContent.innerHTML = '';
}

submit.addEventListener('click', () => {
  const itens = feedBack.split('&');
  const fullName = `Nome: ${itens[0].slice(5)} ${itens[1].slice(10)}`;
  const house = `Casa: ${itens[3].slice(6)}`;

  clearForm();

  replaceContent.innerHTML = `<p>${fullName}</p>
  <p>${house}</p>`;
});

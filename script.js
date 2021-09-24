const eMail = document.getElementById('input-email-login');
const password = document.getElementById('input-password');
const login = document.getElementById('button-login');
const agreement = document.getElementById('agreement');
const submit = document.getElementById('submit-btn');

login.addEventListener('click', () => {
  if (eMail.value !== 'tryber@teste.com' && password.value !== '1234546') {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

agreement.addEventListener('click', () =>{
  if(agreement.checked){
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
});
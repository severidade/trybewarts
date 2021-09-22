const eMail = document.getElementById('input-email');
const password = document.getElementById('input-password');
const login = document.getElementById('button-login');

login.addEventListener("click", function (){
    if ( eMail.value !== 'tryber@teste.com' && password.value !== '1234546') {
      alert('Email ou senha inválidos.');
  } else {
      alert('Olá, Tryber!');
  }
});
let valor =  document.getElementById('number');
let password = document.getElementById('password');
let viewPassword = document.querySelector(".viewPassword");
let quantidade = document.querySelector("#valor");

let caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%¨&*()_+-*/=[]{};:';
let newSenha = '';


quantidade.innerHTML = valor.value;

valor.oninput = function() {
  quantidade.innerHTML = this.value;
}

function gerarPassword(){

    let pass = '';
    for(let i = 0, n = caracteres.length; i < valor.value; ++i){
      pass += caracteres.charAt(Math.floor(Math.random() * n));
    }
    
    viewPassword.style.display = 'block';
    password.innerHTML = pass;
  }

const formulario = document.getElementById("formulario");
const mensagem = document.getElementById("mensagem");
const cep = document.getElementById("cep");
const cpf = document.getElementById("cpf");
const telefone = document.getElementById("telefone");
const cnpj = document.getElementById("cnpj");


cep.addEventListener("input", function () {
  let v = cep.value.replace(/\D/g, "").slice(0, 8);
  v = v.replace(/^(\d{2})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})(\d)/, "$1-$2");
  cep.value = v;
});


cpf.addEventListener("input", function () {
  let v = cpf.value.replace(/\D/g, "").slice(0, 11);
  v = v.replace(/^(\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\d{3}\.\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\.\d{3})(\d)/, "$1-$2");
  cpf.value = v;
});


telefone.addEventListener("input", function () {
  let v = telefone.value;
  if (v.startsWith("+55")) {
    v = v.slice(3); 
  }
  v = v.replace(/\D/g, "").slice(0, 11);
  if (v === "") {
    telefone.value = "";
    return;
  }
  v = v.replace(/^(\d{1,2})/, "+55 ($1");
  v = v.replace(/(\(\d{2})(\d)/, "$1) $2");
  v = v.replace(/(\) \d)(\d)/, "$1 $2");
  v = v.replace(/(\d{4})(\d)/, "$1-$2");
  telefone.value = v;
});


cnpj.addEventListener("input", function () {
  let v = cnpj.value.replace(/\D/g, "").slice(0, 14);
  v = v.replace(/^(\d{2})(\d)/, "$1.$2");
  v = v.replace(/(\.\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\.\d{3})(\d)/, "$1/$2");
  v = v.replace(/(\d{4})(\d)/, "$1-$2");
  cnpj.value = v;
});


formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();  
  mensagem.hidden = false;  
  formulario.reset();       
});
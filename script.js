// Arquivo: script.js

// Função que será executada quando o botão for clicado
function meuBotaoClicado() {
  alert("O botão foi clicado!");
}

// Adiciona um evento de clique ao botão
document.getElementById("meu-botao").onclick = meuBotaoClicado;
function calcularIMC() {
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const genero = document.getElementById("genero").value;
    const imc = peso / (altura * altura);
  
    let mensagem = "";
    if (genero === "homem") {
      if (imc < 20.7) {
        mensagem = "Abaixo do peso";
      } else if (imc < 26.4) {
        mensagem = "Peso normal";
      } else if (imc < 27.8) {
        mensagem = "Marginalmente acima do peso";
      } else if (imc < 31.1) {
        mensagem = "Acima do peso ideal";
      } else {
        mensagem = "Obeso";
      }
    } else if (genero === "mulher") {
      if (imc < 19.1) {
        mensagem = "Abaixo do peso";
      } else if (imc < 25.8) {
        mensagem = "Peso normal";
      } else if (imc < 27.3) {
        mensagem = "Marginalmente acima do peso";
      } else if (imc < 32.3) {
        mensagem = "Acima do peso ideal";
      } else {
        mensagem = "Obesa";
      }
    }
  
    document.getElementById("resultado").innerHTML = `Seu IMC é ${imc.toFixed(2)}. ${mensagem}.`;
  }
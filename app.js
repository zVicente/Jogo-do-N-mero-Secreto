//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
let listaSorteados = [];
let numeroSecreto = gerarNmrAleatorio();
let tentativa = 1
  function exibirTxtNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
     if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
      }
}      
function mensagemInicial() {
    exibirTxtNaTela('h1', 'Jogo do Número secreto');
    exibirTxtNaTela('p', 'Escolha um número entre 1 e 10');
}
mensagemInicial();
  function verificarChute() {
    let chute = document.querySelector('input').value; {
    }if (chute == numeroSecreto) {
      exibirTxtNaTela('h1', 'Acertou!');
      let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
      let mensagemTentativa = `Você descobriu o número secreto com ${tentativa} ${palavraTentativa}`;
      exibirTxtNaTela('p', mensagemTentativa);
      document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
      if (numeroSecreto > chute) {
        exibirTxtNaTela('p', 'O numero secreto é maior');
      } else {
        exibirTxtNaTela('p', 'O número secreto é menor');
      }
    } 
    tentativa ++
    limparCampo();
}  


function gerarNmrAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 3 + 1);
    let quantNmrEsc = listaSorteados.length;
    if (quantNmrEsc == 3) {
      listaSorteados = []
    }

    if (listaSorteados.includes(numeroEscolhido)) {
      return gerarNmrAleatorio();
    } else {
        listaSorteados.push(numeroEscolhido);
        console.log (listaSorteados);
        return numeroEscolhido;  
    }
}
  

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}
function reiniciarJogo() {
  numeroSecreto = gerarNmrAleatorio();
  limparCampo();
  tentativa = 1;
  mensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled',true);
} 
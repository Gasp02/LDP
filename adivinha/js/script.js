const jogoAdivinha = {
  semente: 50,
  tentativa: 0,
  numeroSorteado: function geraValorAleatorio() {
    return Math.round(Math.random() * this.semente);
  },
};

const nomeverifica = document.getElementById("nomeverifica")
const btnVerifica = document.getElementById("btnVerifica");
const status = document.getElementById("status");
const tentativa = document.getElementById("tentativa");
const chute = document.getElementById("chute");
const nome = document.getElementById("nome");

let numeroSorteado = jogoAdivinha.numeroSorteado();

function atualizarTentativa(tentativa, valor) {
  if (valor > 1) {
    tentativa.innerHTML =
      'Tentativas : <span style="color: white">' + valor + "</span>";
  } else {
    tentativa.innerHTML =
      'Tentativa : <span style="color: white">' + valor + "</span>";
  }
}

function reiniciar() {
  status.innerHTML = "Faça sua tentativa"
  btnVerifica.innerText = "Verificar";
  tentativa.innerHTML = "Tentativa :  0";
  nome.value = "";
  chute.disabled = false;
  chute.value = "";
  jogoAdivinha.tentativa = 0;
  numeroSorteado = jogoAdivinha.numeroSorteado();
  btnVerifica.removeEventListener("click", reiniciar);
}

const formAdivinha = document.getElementById("form");

formAdivinha.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!!chute.value == false) {
    status.innerHTML = '<span style="color:#FF3D00">Digite algum valor</span>';
    return;
  }

  nomeverifica.addEventListener("click", usuario)

  function usuario(){
    nome.value = "";

  }

  atualizarTentativa(tentativa, ++jogoAdivinha.tentativa);
  
  if (jogoAdivinha.tentativa == 5){
    btnVerifica.innerHTML = '<span style="color:#FF0000">Você perdeu!</span>';
    btnVerifica.addEventListener("click", reiniciar);
  }

  if (numeroSorteado == chute.value) {
    status.innerHTML =
      '<span style="color:#00C853">Parabéns, você acertou!!</span>';
    btnVerifica.innerText = "Tentar novamente?";
    btnVerifica.addEventListener("click", reiniciar);
  } else if (numeroSorteado > chute.value) {
    status.innerText = "O número sorteado é maior";
  } else if (numeroSorteado < chute.value) {
    status.innerText = "O número sorteado é menor";
  } 
});

console.log(numeroSorteado);
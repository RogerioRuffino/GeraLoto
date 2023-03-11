
const valores = {
  6: 4.5,
  7: 31.5,
  8: 126,
  9: 378,
  10: 945,
  11: 2079,
  12: 4158,
  13: 7722,
  14: 13513.5,
  15: 22522.5
};
const blf = document.getElementById("call-lotofacil");

  blf.addEventListener('click', () => {
  
  // code to call another program
  // for example, redirect to another HTML page:
  window.location.href = '/GeraLoto/Lotofacil/index.html';
  
});


const blm = document.getElementById("call-lotomania");
blm.addEventListener('click', () => {
  // code to call another program
  // for example, redirect to another HTML page:
  window.location.href = '/GeraLoto/Lotomania/index.html';
});


const bms = document.getElementById("call-megasena");
bms.addEventListener('click', () => {
  // code to call another program
  // for example, redirect to another HTML page:
  window.location.href = '/GeraLoto/Megasena/index.html';
});


const bq = document.getElementById("call-quina");
bq.addEventListener('click', () => {
  // code to call another program
  // for example, redirect to another HTML page:
  window.location.href = '/GeraLoto/Quina/index.html';
});

function limpa() {
    document.getElementById('qtd').value = '';
    document.getElementById('tabela').innerHTML = '';
    
}


 
  function gerarNumeros() {
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];
  let pesos = [ 62.5, 65.5, 60.25, 68.75, 71.5, 64.5, 60.25, 65.75, 60.5, 74.25, 66.25, 62.25, 65.25, 60.75, 56.5, 66.75, 67.25, 62.75, 61.75, 63, 54.75, 57.75, 69.25, 65.5, 63, 53.25, 67.25, 67.75, 66.75, 68.75, 60.25, 67, 70, 68, 67.25, 65.75, 70, 68.25, 61.25, 61, 68.5, 69.25, 66.5, 68.25, 63.25, 64.25, 61.25, 59.75, 66.5, 62.25, 66.5, 64.75, 74.5, 67.25, 55, 66.75, 61.5, 62.75, 61.5, 60.75]
  
   
  let qtd = parseInt(document.getElementById('qtd').value);
  if (qtd >= 6 && qtd <= 15) {
    let result = [];
    let nums = numeros.slice();
    for (let i = 0; i < qtd; i++) {
      let totalPeso = pesos.reduce((a, b) => a + b);
      let random = Math.random() * totalPeso;
      let j = 0;
      while (random > 0) {
        random -= pesos[j];
        j++;
      }
      j--;
      result.push(nums[j]);
      nums.splice(j, 1);
      pesos.splice(j, 1);
    }
    result.sort((a, b) => a - b);
    let tabela = document.getElementById('tabela');
    tabela.innerHTML = '';
    let index = 0;

    let linha = tabela.insertRow();
    let texto = linha.insertCell();
    texto.textContent = "Os números gerados são:";
    texto.setAttribute('colspan', '6');

    for (let i = 0; i < Math.ceil(qtd/6); i++) {
      linha = tabela.insertRow();
      for (let j = 0; j < 6; j++) {
        let celula = linha.insertCell();
        if (index < result.length) {
          celula.textContent = result[index];
          index++;
        }
      }
    }
    
    linha = tabela.insertRow();
    let valorAposta = valores[qtd];
    let textoAposta = `Valor da aposta para ${qtd} números: R$ ${valorAposta.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    let celulaAposta = linha.insertCell();
    celulaAposta.setAttribute('colspan', '6');
    celulaAposta.setAttribute('class', 'aposta');
    celulaAposta.textContent = textoAposta;

    // linha = tabela.insertRow();
    // let valorAposta = valores[qtd];
    // let textoAposta = `Valor da aposta para ${qtd} números: R$ ${valorAposta.toFixed(2)}`;
    // let celulaAposta = linha.insertCell();
    // celulaAposta.setAttribute('colspan', '5');
    // celulaAposta.setAttribute('class', 'aposta');
    // celulaAposta.textContent = textoAposta;
    


  } else {
    alert(`Por favor, informe uma quantidade de números entre 6 e 15.`);
  }
}
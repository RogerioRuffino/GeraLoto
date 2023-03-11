
const valores = {
  5: 2.00,
  6: 12.00,
  7: 42.00,
  8: 112.00,
  9: 252.00,
  10: 504.00,
  11: 924.00,
  12: 1584.00,
  13: 2574.00,
  14: 4004.00,
  15: 6006.00
};

const blf = document.getElementById("call-lotofacil");

  blf.addEventListener('click', () => {
  
  // code to call another program
  // for example, redirect to another HTML page:
  window.location.href = '/GeraLoto/index.html';
  blf.style.backgroundColor = "blue";
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
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80];
    const pesos = [5.85, 6.13, 5.49, 7.18, 6.63, 6.23, 6.25, 6.20, 6.44, 6.58, 6.20, 6.41, 6.53, 6.25, 6.71, 6.69, 5.94, 6.54, 6.26, 5.84, 5.97, 5.94, 6.00, 5.94, 5.71, 6.69, 6.02, 6.33, 6.67, 5.89, 6.74, 5.97, 6.51, 6.30, 5.97, 6.25, 6.56, 6.54, 6.74, 6.43, 6.08, 6.59, 6.18, 6.67, 6.33, 6.20, 5.48, 5.64, 6.87, 5.95, 6.02, 6.72, 6.67, 6.49, 6.17, 6.58, 5.85, 5.81, 6.23, 6.13, 6.51, 6.03, 6.12, 6.33, 5.81, 6.58, 5.87, 5.77, 6.15, 6.40, 6.20, 6.51, 6.63, 6.41, 6.40, 6.17, 6.13, 6.17, 6.26, 6.20];
    

  
  let qtd = parseInt(document.getElementById('qtd').value);
  if (qtd >= 5 && qtd <= 15) {
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
    texto.setAttribute('colspan', '5');

    for (let i = 0; i < Math.ceil(qtd/5); i++) {
      linha = tabela.insertRow();
      for (let j = 0; j < 5; j++) {
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
    celulaAposta.setAttribute('colspan', '5');
    celulaAposta.setAttribute('class', 'aposta');
    celulaAposta.textContent = textoAposta;

  
    


  } else {
    alert(`Por favor, informe uma quantidade de números entre 5 e 15`);
  }
}

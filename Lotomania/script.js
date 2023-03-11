
let valores = {50:2.50};
const blf = document.getElementById("call-lotofacil");

  blf.addEventListener('click', () => {
    blf.style.backgroundColor = "yellow";
  
  // code to call another program
  // for example, redirect to another HTML page:
   window.location.href = '/GeraLoto/index.html';
  
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
    const numeros = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 
      39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 
      57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 
      75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 
      93, 94, 95, 96, 97, 98, 99
    ];
    
    const pesos = [
      19.80, 20.09, 19.97, 20.05, 20.58, 19.23, 20.46, 19.84, 20.79, 19.93, 
      19.52, 21.11, 19.84, 20.01, 19.72, 19.27, 19.84, 21.15, 19.76, 20.01, 
      20.38, 18.82, 18.78, 20.05, 20.83, 19.56, 21.03, 19.68, 19.31, 20.29, 
      19.80, 21.56, 19.03, 18.94, 19.48, 20.34, 19.60, 19.68, 21.36, 19.64, 
      19.23, 21.24, 21.07, 21.81, 20.66, 20.74, 19.60, 22.34, 21.60, 21.48, 
      19.84, 20.09, 17.96, 20.01, 21.64, 20.05, 19.23, 19.48, 19.80, 19.48, 
      19.03, 20.46, 19.72, 19.07, 20.99, 20.09, 20.05, 19.76, 20.38, 18.70, 
      19.89, 19.84, 19.72, 20.13, 19.97, 19.39, 21.28, 19.07, 20.29, 19.48, 
      19.35, 19.80, 20.46];  
  let qtd = parseInt(document.getElementById('qtd').value);
  if (qtd === 50) {
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

    // linha = tabela.insertRow();
    // let valorAposta = valores[qtd];
    // let textoAposta = `Valor da aposta para ${qtd} números: R$ ${valorAposta.toFixed(2)}`;
    // let celulaAposta = linha.insertCell();
    // celulaAposta.setAttribute('colspan', '5');
    // celulaAposta.setAttribute('class', 'aposta');
    // celulaAposta.textContent = textoAposta;
    


  } else {'Aposta é única de 50 numeros ente 0 e 99'
  }
}

let notas = [10, 9.0, 9.5, 7.3, 7.8, 8.0];
let resultado = 0;
for (let i = 0; i < notas.length; i++) {
  resultado = resultado + notas[i];
}
console.log("Media = " + resultado / notas.length);

//media

let frequencia = {};
let moda = [];
let maxFrequencia = 0;

for (let i = 0; i < notas.length; i++) {
  if (frequencia[notas[i]] === undefined) {
    frequencia[notas[i]] = 1; // verifica se o numero ja esta na frequencia
  } else {
    frequencia[notas[i]]++; // se ja estiver soma ++
  }
}

for (let numero in frequencia) {
  if (frequencia[numero] > maxFrequencia) {
    moda = [numero];
    maxFrequencia = frequencia[numero];
  } else if (frequencia[numero] === maxFrequencia) {
    moda.push(numero);
  }
}

console.log("Moda:", moda);
//moda

let notasOrdem = [];
for (let i = 0; i < notas.length; i++) {
  for (let j = i + 1; j < notas.length; j++) {
    if (notas[i] > notas[j]) {
      let aux = notas[i];
      notas[i] = notas[j];
      notas[j] = aux;
    }
  }
}
notasOrdem.push(notas);

for (let y = 0; y < notasOrdem.length; y++) {
  if (y == 0) {
    let posicao = notasOrdem[y].length;

    posicao = posicao % 2 == 0;

    if (posicao === true) {
      let calculo0 = notasOrdem[y].length / 2;
      let calculo2 = calculo0 - 1;
      let calculo = notasOrdem[calculo0] + notasOrdem[calculo2] / 2;
      console.log("Mediana" + calculo);
    } else if (posicao == false) {
      let medianaImpar = notasOrdem[y][3];
      console.log("Mediana" + medianaImpar);
    }
  }
}

//mediana

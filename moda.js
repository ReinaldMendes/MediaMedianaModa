let numeros = [4, 3, 1, 4, 5, 5, 7, 2, 7, 2001, 7];
let frequencia = {};
let moda = [];
let maxFrequencia = 0;

for (let i = 0; i < numeros.length; i++) {
  if (frequencia[numeros[i]] === undefined) {
    frequencia[numeros[i]] = 1; // verifica se o numero ja esta na frequencia
  } else {
    frequencia[numeros[i]]++; // se ja estiver soma ++
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

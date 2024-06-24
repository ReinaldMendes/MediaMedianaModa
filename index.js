let notas = [10.0, 9.0, 9.5, 8.0, 7.3, 7.8, 8.0];
let notasOrdem = [];
for (let i = 0; i < notas.length; i++) {
  for (let j = i + 1; j < notas.length; j++) {
    if (notas [i] > notas[j]) {
      let aux = notas[i];
       notas[i] = notas[j];
        notas[j] = aux;
    }
  }
}
console.log(notas);
notasOrdem.push(notas);
console.log(notasOrdem);
for (let y = 0; y < notasOrdem.length; y++) {
  if (y == 0) {
    let posicao = notasOrdem[y].length;

    posicao = posicao % 2 == 0;

    if (posicao === true) {
      let calculo = (notasOrdem[y][2] + notasOrdem[y][3]) / 2;
      console.log(calculo);
    } else if (posicao == false) {
      let medianaImpar = notasOrdem[y][3];
      console.log(medianaImpar);
    }
  }
}

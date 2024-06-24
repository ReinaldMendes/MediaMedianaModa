let notas = [10.0, 9.0, 9.5, 7.3, 7.8, 8.0];
let resultado = 0;
for (let i = 0; i < notas.length; i++) {
  resultado = resultado + notas[i];
}
console.log(resultado / notas.length);

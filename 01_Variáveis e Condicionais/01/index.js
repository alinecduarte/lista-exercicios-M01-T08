function calculadora (num1, num2, operacao) {
  if (operacao === 1) {
    let soma = num1 + num2;
    console.log(soma);
  } else if (operacao === 2) {
    let subtracao = num1 - num2;
    console.log(subtracao);
  } else if (operacao === 3) {
    let multiplicacao = num1 * num2;
    console.log(multiplicacao);
  } else if (operacao === 4) {
    let divisao = num1 / num2;
    console.log(divisao);
  } else {
    let resto = num1 % num2
    console.log(resto);
  }
}

calculadora(10, 2, 1)
let num1 = 0;
let num2 = 0;
let maior;

num1 = prompt("Digite o primeiro número: ");
num2 = prompt("Digite o segundo número: ");

num1 = +num1;
num2 = +num2;

if (num1 != num2) {
  if (num1 > num2) {
    maior = num1;
    console.log(num1 + " É maior que " + num2);
  } else if (num2 > num1) {
    maior = num2;
    console.log(num2 + " É maior que " + num1);
  }
} else {
  while (num1 === num2) {
    console.log("Numeros iguais, TENTE NOVAMENTE.");

    num1 = prompt("Digite o primeiro número: ");
    num2 = prompt("Digite o segundo número: ");
    if (num1 > num2) {
      maior = num1;
      console.log(num1 + " É maior que " + num2);
    } else if (num2 > num1) {
      maior = num2;
      console.log(num2 + " É maior que " + num1);
    }
  }
}

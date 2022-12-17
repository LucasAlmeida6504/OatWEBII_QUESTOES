var num;

num = prompt("Digite um número: ");
if (num % 2 === 0) {
  if (num >= 0) {
    console.log("O número é par e positivo!");
  } else {
    console.log("O número é par e Negativo!");
  }
} else {
  if (num >= 0) {
    console.log("O número é impar e positivo!");
  } else {
    console.log("O número é impar e Negativo!");
  }
}

var idade;

idade = prompt(
  "\nPor favor insira a idade do nadador:\n\nTabela de categorias:\n\nA - Infantil: 5 - 7 anos\nB - Infantil: 8 - 10 anos\nA - Juvenil: 11 - 13 anos\nB - Juvenil: 14 - 17 anos\nSênior: +18 anos"
);

if (idade >= 5 && idade <= 7) {
  console.log("Infantil A: 5 - 7 anos");
  console.log("Sua idade é: " + idade);
} else if (idade >= 8 && idade <= 10) {
  console.log("Infantil B: 8 - 10 anos");
  console.log("Sua idade é: " + idade);
} else if (idade >= 11 && idade <= 13) {
  console.log("Juvenil A: 11 - 13 anos");
  console.log("Sua idade é: " + idade);
} else if (idade >= 14 && idade <= 17) {
  console.log("Juvenil B: 14 - 17 anos");
  console.log("Sua idade é: " + idade);
} else if (idade >= 18) {
  console.log("Sênior: +18 anos");
  console.log("Sua idade é: " + idade);
} else if (idade <= 5) {
  console.log("A idade não é válida, tente novamente!");
}

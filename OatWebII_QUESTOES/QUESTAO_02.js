var va1 = 0;
var va2 = 0;
var oat = 0;
var total = 0;

va1 = prompt("Digite sua nota da VA1: ");
va2 = prompt("Digite sua nota da VA2: ");
oat = prompt("Digite sua nota da OAT: ");

total = +total;
va1 = +va1;
va2 = +va2;
oat = +oat;

total = (va1 + va2 + oat) / 3;
console.log("Sua nota foi: ", total);
if (total >= 60) {
  console.log("Você está aprovado!!");
} else if (total <= 40) {
  console.log("Você está reprovado!!");
} else {
  console.log("Você fará a VF!");
}

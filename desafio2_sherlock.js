console.log("Este é um inquérito sobre a a investigação. Por favor, responda às perguntas com Sim ou Não.");
let pergunta1 = prompt("1-Telefonou para a vítima?");
let pergunta2 = prompt("2-Esteve no local do crime?");
let pergunta3 = prompt("3-Mora perto da vítima?");
let pergunta4 = prompt("4-Devia para a vítima?");
let pergunta5 = prompt("5-Já trabalhou com a vítima?");
let contador = 0;
if (pergunta1.toLowerCase() === "sim") {
  contador = contador + 1;
}
if (pergunta2.toLowerCase() === "sim") {
  contador = contador + 1;
}
if (pergunta3.toLowerCase() === "sim") {
  contador = contador + 1;
}
if (pergunta4.toLowerCase() === "sim") {
  contador = contador + 1;
}
if (pergunta5.toLowerCase() === "sim") {
  contador = contador + 1;
}
if (contador === 5) {
  let classificassao = "Assassino";
  console.log("Você é o assassino! Dirija-se já para a cadeia!");
} else if (contador === 4 || contador === 3) {
  let classificassao = "Cúmplice";
  console.log("Você é o cúmplice! Dirija-se já para a cadeia!");
} else if (contador === 2) {
  let classificassao = "Suspeito";
  console.log("Você é um suspeito! Fica esperto que eu tô te manjando!");
} else {
  let classificassao = "Inocente";
  console.log("Você é inocente. Continue assim, cidadão");
}
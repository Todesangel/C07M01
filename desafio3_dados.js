const prompt = require('prompt-sync')({sigint: true});
console.log("Bem vind@ ao Super Dado Turbo!")
var jogar = 0
while(jogar==0){
let rodadas = +prompt("Quantas rodadas você deseja jogar?");
let jogadores = +prompt("Quantos jogadores irão jogar?")
let lista = [];
for (let i = 0; i < jogadores; i++) {
    let jogador = {};
    jogador.Nome = prompt(`Digite o nome do jogador ${(i+1)}:`);
    jogador.Dados = [];
    jogador.vitorias = [];
    for (let i = 0; i < rodadas; i++) {
      let dado = Math.floor(Math.random() * 6) + 1;
      console.log(`no ${i+1}º dado caiu o número ${dado}`);
      jogador.Dados.push(dado);
      }
      console.log();
    lista.push(jogador);

    
}

for (let i=0;i<rodadas;i++){
lista.sort(function (a, b) {
  if (a.Dados[i] > b.Dados[i]) {
    return -1;
  }
  if (a.Dados[i] < b.Dados[i]) {
    return 1;
  }
  else{
  return 0;
  }
})
lista[0].vitorias++
};
lista.sort(function (a, b) {
    if (a.vitorias > b.vitorias) {
      return -1;
    }
    if (a.vitorias < b.vitorias) {
      return 1;
    }
    else{
    return 0;
    }
  })
console.log(lista);
console.log(`O campeão foi ${lista[0].Nome}!`);
for (let sair=0;sair==0;){
  var jogarNovamente = prompt("Gostaria de jogar novamente?").toLowerCase();
if (jogarNovamente =="sim"||jogarNovamente =="s") {
   console.log("Legal!");
   sair=1;
 } else if (jogarNovamente == "não"||jogarNovamente =="nao"||jogarNovamente == "n") {
   console.log("Obrigado por jogar!");
   sair=1;
   jogar=1;
 } else {
   console.log("Não entendi!");
 }
}
}
const prompt = require('prompt-sync')();
var votar = "sim";
const anoAtual = new Date().getFullYear()
var repetir = 0
var candidato1=0;
var candidato2=0;
var candidato3=0;
var votosNulos=0;
var votosBrancos=0;
function autorizaVoto(anoNascimento){
    if (anoAtual-anoNascimento>=18){
        return ("Obrigatório");
    } else if(anoAtual-anoNascimento<18&&anoAtual-anoNascimento>=16){
        return ("Opcional");
    } else {
        return ("Negado");
    }
}
function votacao(autorizacao,voto){
    if(autorizacao=="Negado"){
        console.log("Você não tem idade para votar.");
        repetir++;
    } else {
        if (voto==1){
            candidato1++
            repetir++
        } else if (voto==2){
            candidato2++
            repetir++
        } else if (voto==3){
            candidato3++
            repetir++
        } else if (voto==4){
            votosNulos++
            repetir++
        } else if (voto==5){
            votosBrancos++
            repetir++
        } else {
            console.log("Valor inválido, favor digitar novamente");
        }
    }
}
function exibirResultados(){
    console.log(`O Candidato1 recebeu ${candidato1} votos.`);
    console.log(`O Candidato2 recebeu ${candidato2} votos.`);
    console.log(`O Candidato3 recebeu ${candidato3} votos.`);
    console.log(`${votosNulos} foram votos nulos.`);
    console.log(`${votosBrancos} foram votos em branco.`);
    if (candidato1>candidato2&&candidato1>candidato3){
        console.log("O vencedor foi o Candidato1");
    } else if (candidato2>candidato1&&candidato2>candidato3){
        console.log("O vencedor foi o Candidato2");
    } else if (candidato3>candidato1&&candidato3>candidato2){
        console.log("O vencedor foi o Candidato3");
    } else {
        console.log("Não houve vencedor!");
    }
}
while(votar == "sim"||votar == "s"){
    let anoNascimento = +prompt("Digite o ano de nascimento:");
    repetir = 0;
    while(repetir==0){
        console.log("1- Candidato 1\n2- Candidato 2\n3- Candidato 3\n4- Voto Nulo\n5- Voto em Branco");
        let voto = +prompt("Declare o seu voto:");
        votacao(autorizaVoto(anoNascimento),voto);
    }
    votar = prompt("Deseja incluir mais um votante? ");
}
exibirResultados()

const prompt = require ('prompt-sync')();
function sair(){
    process.exit();
}
class AcoesDiarias{
    constructor() {
        this.sujeira = "sujo";
        this.fome = "faminto";
        this.casa = "suja";
        this.plantas = "secas";
        this.aguaPlantas = 2;
        this.trabalho = "pendente";
        this.empregado = 1
        this.louca = "limpa";
        this.faltasTrabalho = 0;
        this.energia = 7;
        this.diasPassados = 0;
        this.pergunta = 0;
    }
    tomarBanho() {
        this.sujeira = "limpo";
        this.energia--;
        console.log("Você tomou um banho e vestiu uma roupa limpa.");
        console.log();
    }
    fazerComida() {
        this.fome = "satisfeito";
        this.louca = "suja";
        this.energia--;
        console.log("Você fez comida, comeu e está satifeito.");
        console.log();
    }
    lavarLouca() {
        this.louca = "limpa";
        this.energia--;
        console.log("Você lavou a louça.");
        console.log();
    }
    limparCasa() {
        this.casa = "limpa";
        this.energia--;
        console.log("Você limpou a casa.");
        console.log();
    }
    regarPlantas() {
        this.plantas = "regadas";
        this.aguaPlantas = 2;
        this.energia--
        console.log("Você regou as plantas.");
        console.log();
    }
    trabalhar() {
        if (this.fome=="faminto"){
            console.log(`Você está faminto, se não comer não vai conseguir trabalhar.`);
            console.log();
        } else if (this.sujeira=="sujo"){
            console.log("Você não pode ir para o trabalho sujo desse jeito!")
        }
        else {
            this.trabalho = "feito";
            this.energia--
        }
    }
}
class Dia extends AcoesDiarias {
    constructor() {
        super();
    }
    iniciar() {
        console.log("Você está lutando contra uma doença que pode dificultar muito sua vida, às vezes fazer tarefas simples pode ser uma batalha.");
        console.log();
        this.condicao();
    }
    condicao() {
        while(this.energia>0) {
            if (this.energia==7) {
                console.log("Disposição:Muito disposto");
            } else if (this.energia==6) {
                console.log("Disposição:Bastante disposto");
            } else if (this.energia==5) {
                console.log("Disposição:Disposto");
            } else if (this.energia==4) {
                console.log("Disposição:Pouco disposto");
            } else if (this.energia==3) {
                console.log("Disposição:Cansado");
            } else if (this.energia==2) {
                console.log("Disposição:Muito cansado");
            } else if (this.energia==1) {
                console.log("Disposição:Exausto");
            }
            console.log(`Você está ${this.sujeira} e ${this.fome}.`);
            console.log(`A louça está ${this.louca}, a casa está ${this.casa}, as plantas estão ${this.plantas}.`)
            if (this.empregado==1){
                console.log(`O seu trabalho está ${this.trabalho}.`);
                console.log();
            } else {
                console.log(`Você está desempregado.`);
                console.log();
            }
            this.perguntas();
        }
        this.dormir();

    }
    perguntas() {
        console.log("1-Tomar banho\n2-Fazer comida\n3-Lavar louça\n4-Limpar a casa\n5-Regar as plantas\n6-Trabalhar\n7-Dormir")
        this.pergunta = +prompt("O que você deseja fazer? ");
        console.log();
        if (this.pergunta==1) {
            if (this.sujeira=="limpo") {
                console.log("Você já está limpo. Outro banho não vai te fazer sentir melhor.");
                console.log();
            } else {
                this.tomarBanho();
            }
        } else if (this.pergunta==2) {
            if (this.fome=="satisfeito") {
                console.log("Você já está satisfeito. Comida não vai te fazer sentir melhor.");
                console.log();
            } else if (this.louca=="suja") {
                console.log("Você não pode fazer comida com a louça suja!");
                console.log();
            } else {
                this.fazerComida();
            }
        } else if (this.pergunta==3) {
            if(this.louca=="limpa") {
                console.log("A louça já está limpa, não existe razão para lavar novamente.");
                console.log();
            } else {
                this.lavarLouca();
            }
        } else if (this.pergunta==4) {
            if(this.casa=="limpa") {
                console.log("A casa já está limpa, não existe razão para continuar limpando.");
                console.log();
            } else {
                this.limparCasa();
            }
        } else if (this.pergunta==5) {
            if (this.plantas=="regadas") {
                console.log("Você já regou as plantas, elas não precisam de mais água.");
                console.log();
            } else {
                this.regarPlantas();
            }
        } else if (this.pergunta==6) {
            if (this.trabalho=="feito") {
                console.log("Seu trabalho já está feito, não há mais nada pra fazer.");
                console.log();
            } else {
                this.trabalhar();
            }
        } else if (this.pergunta==7) {
            this.dormir();
        } else {
            console.log("Escolha uma ação válida.");
            console.log();
        }

    }
    dormir() {
        
        console.log("O dia está muito difícil e você foi para a cama.");
        console.log();
        console.log("É um novo dia.");
        if (this.diasPassados>=6) {
            console.log("Você não consegue sair da cama hoje.");
            console.log();
            this.finalizar();
            sair();
        } else {
            if (this.trabalho=="pendente") {
                this.faltasTrabalho++;
            }
            this.sujeira = "sujo";
            this.fome = "faminto";
            this.casa = "suja";
            this.plantas = "secas";
            this.aguaPlantas--;
            this.trabalho = "pendente";
            this.diasPassados++;
            this.energia = 7-this.diasPassados;
    
            console.log(`Você acordou se sentindo um pouco mais cansado que ontem.`);
            console.log(); 
            if (this.aguaPlantas==0) {
                console.log("Suas plantas ficaram sem água e morreram");
            }
            if (this.faltasTrabalho==3) {
                console.log("Seu chefe ligou dizendo que, devido ao grande número de faltas, você foi desligado da empresa.");
                this.empregado = 0;
            }
            this.condicao();
        }
    }
    finalizar(){
        console.log("A depressão é um transtorno comum, mas sério, que interfere na vida diária, capacidade de trabalhar, dormir, estudar, comer e aproveitar a vida.");
    }
}
let dia = new Dia();
dia.iniciar();
const readline = require("readline-sync"); // você pode mudar para testar "atacar" ou "fugir"

let vidaJogador = 20;
let vidaInimigo = 20;
let turnos = 0;

let curaUsada = false;

console.log("Vida Jogador:", vidaJogador);
console.log("Vida Inimigo:", vidaInimigo);

while (vidaJogador > 0 && vidaInimigo > 0) {
    turnos ++;
    let danoJogador = 2;
    let danoInimigo = 2;

    let acao = readline.question("Escolha: atacar, curar ou fugir: ");

    // Modo desespero
    if (vidaJogador <= 3) {
        danoJogador = 4;
    }

    // Inimigo enfurecido
    if (vidaInimigo <= 4) {
        danoInimigo = 3;
    }

    
    if (acao === "atacar") {
        vidaInimigo -= danoJogador;
        console.log("Você atacou e causou", danoJogador, "de dano!");
    } 

    else if (acao ==="curar") {
        if(vidaJogador <=5 && curaUsada === false)
        {
        vidaJogador += 3;
        curaUsada = true;
        console.log("Você se curou e recuperou 3 de vida!"); 
        }  
    }

    else if (acao === "fugir") {
        console.log("Você fugiu!");
        break;
    }

    if (vidaInimigo > 0) {
        vidaJogador -= danoInimigo;
        console.log("O inimigo atacou e causou", danoInimigo, "de dano!");
    }
    console.log("Turno atual", turnos)
    console.log("Vida Jogador:", vidaJogador);
    console.log("Vida Inimigo:", vidaInimigo);
    console.log("----------------------");
}

if (vidaJogador <= 0) {
  console.log("Você morreu!");
} else if (vidaInimigo <= 0) {
  console.log("Você venceu!");
}

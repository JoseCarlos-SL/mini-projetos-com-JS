let vidaJogador = 20;
let vidaInimigo = 20;
let acao = "atacar"; // você pode mudar para testar "atacar" ou "fugir"

console.log("Vida Jogador:", vidaJogador);
console.log("Vida Inimigo:", vidaInimigo);

while (vidaJogador > 0 && vidaInimigo > 0) {

    let danoJogador = 2;
    let danoInimigo = 2;

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
    else if (acao === "fugir") {
        console.log("Você fugiu!");
        break;
    }

    if (vidaInimigo > 0) {
        vidaJogador -= danoInimigo;
        console.log("O inimigo atacou e causou", danoInimigo, "de dano!");
    }
  console.log("Vida Jogador:", vidaJogador);
  console.log("Vida Inimigo:", vidaInimigo);
  console.log("----------------------");
}

if (vidaJogador <= 0) {
  console.log("Você morreu!");
} else if (vidaInimigo <= 0) {
  console.log("Você venceu!");
}

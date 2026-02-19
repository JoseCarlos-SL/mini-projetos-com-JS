const readline = require("readline-sync"); // você pode mudar para testar "atacar" ou "fugir"

let personagem = {
  nome: "Guerreiro",
  vida: 100,
  ataque: 10,
  defesa: 5,
};

let inimigo = {
  nome: "Ogro",
  vida: 50,
  ataque: 10,
  defesa: 2,
};

let rodada = 1;
let usarCura = true;

function atacar(atacante, defensor) {
  if (atacante.vida <= 0) {
    console.log(`${atacante.nome}, está morto e não pode atacar!`);
    return;
  }
  let dano = atacante.ataque - defensor.defesa;

  if (dano < 0) {
    dano = 0;
  }

  defensor.vida -= dano;

  console.log(`${atacante.nome} causou ${dano} de dano!`);
  console.log(`${defensor.nome} possui ${defensor.vida} de vida restante.`);

  if (defensor.vida <= 0) {
    console.log(defensor.nome, "morreu!");
  }
  return dano;
}

function cura(user){
    if(usarCura == true){
        personagem.vida += 10
        usarCura = false
        atacar(inimigo, personagem);
    }else{
        console.log("Cura já usada")
    }
    return cura
}

while (personagem.vida > 0 && inimigo.vida > 0) {

    console.log(`------------- rodada ${rodada} -------------`)
    console.log("")
    console.log(`Vida Jogador:, ${personagem.vida}`);
    console.log(`Vida Inimigo:, ${inimigo.vida}`);

  let acao = readline.question("Escolha: atacar, curar ou fugir: ");

  if (acao === "atacar") {
    atacar(personagem, inimigo);
    atacar(inimigo, personagem);
    
  }else if(acao === "curar"){
    cura(personagem)
    rodada ++;
    
  }else if (acao === "fugir"){
    console.log("O usuário fugiu!")
    break

  }else {
    console.log("Nenhuma ação realizada, escolha entre atacar, curar ou fugir")
  }
  
}

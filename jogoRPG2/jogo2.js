const readline = require("readline-sync"); // você pode mudar para testar "atacar" ou "fugir"

let personagem = {
    nome: "Guerreiro",
    vida: 100,
    ataque: 10,
    defesa:5
}

let inimigo = {
    nome: "Ogro",
    vida: 50,
    ataque: 10,
    defesa:2
}

function atacar(atacante, defensor){

    if(atacante.vida <=0){
        console.log(`${atacante.nome}, está morto e não pode atacar!`)
        return
    }
    let dano = atacante.ataque - defensor.defesa

    if (dano < 0){
        dano = 0
    }

    defensor.vida -=dano

    console.log(`${atacante.nome} causou ${dano} de dano!`)
    console.log(`${defensor.nome} possui ${defensor.vida} de vida restante.`)

    if(defensor.vida <= 0){
        console.log(defensor.nome, "morreu!")
    }
    return dano
}



atacar(inimigo,personagem)
atacar(personagem,inimigo)
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
    let dano = atacante.ataque - defensor.defesa

    if (dano < 0){
        dano = 0
    }

    defensor.vida -=dano

    console.log(atacante.nome, "Causou causado", dano)
    console.log(defensor.nome, "Possui", defensor.vida,"de vida restante.")
}

atacar(inimigo,personagem)
atacar(personagem,inimigo)
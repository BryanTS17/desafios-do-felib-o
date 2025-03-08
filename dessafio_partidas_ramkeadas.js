let player = ""
let listaJogador = [
 ["Bryan", "Bruno", "Rafael"],
 [3, 15, 19], 
 [27, 15, 11],
 [5, 3, 2],
 [30, 30, 30],
 ["Ouro", "Ouro", "Bronze"]
]

for (let i = 0; i < listaJogador[0].length; i++ ){
  nome = PegarNome(listaJogador[0][i]);
  if (player === nome){
    vitorias = listaJogador[2][i];
    derrotas = listaJogador[1][i];
    Msequencia = listaJogador[3][i];
    partidas = listaJogador[4][i];
    rankeAtual = listaJogador[5][i];

    pontuacao = vitorias * 3;

    pontuacao = pontoPorSequencia(Msequencia, pontuacao);
    pontuacao += pontoPorRanke(rankeAtual, pontuacao);

    console.log(listaJogador[0][i])
    console.log(pontuacao);
    console.log(rankearPlayer(pontuacao))
    console.log(" ")

    break
  }else{
    vitorias = listaJogador[2][i];
    derrotas = listaJogador[1][i];
    Msequencia = listaJogador[3][i];
    partidas = listaJogador[4][i];
    rankeAtual = listaJogador[5][i];

    pontuacao = vitorias * 3;

    pontuacao = pontoPorSequencia(Msequencia, pontuacao);
    pontuacao += pontoPorRanke(rankeAtual, pontuacao);

    console.log(listaJogador[0][i])
    console.log(pontuacao);
    console.log(rankearPlayer(pontuacao))
    console.log(" ")
  }

    


  }

function PegarNome(nomeP){
  nome = nomeP;
  return nome;
}

function pontoPorSequencia(sequncia, pontos){
  if (Msequencia === 4){
    pontos++
  }

  else if (Msequencia < 4){
    switch (Msequencia){
      case 1:
        pontos *= 0.7;


      case 2:
        pontos *= 0.8;


      case 3:
        pontos *= 0.9;
    }
  }

  else if (Msequencia > 4){
    MsequenciaMedia = Msequencia /= 10;
    pontos *= MsequenciaMedia;
  }
          
  return pontos    ;
}

function pontoPorRanke(rankeAtual, pontos){
  if (rankeAtual === "Ferro"){

    if (vitorias > 5){
      pontos = vitorias / 2
    }else{
      pontos -= 0
    }

  }else if (rankeAtual === "Bronze"){

    if (vitorias > 10){
      pontos = vitorias / 2
    }else{
      pontos -= 3
      
    }    

  }else if (rankeAtual === "Prata"){

    if (vitorias > 12){
      pontos = vitorias - 12
    }else{
      pontos -= 4
    }    

  }else if (rankeAtual === "Ouro"){

    if (vitorias > 15){
      pontos = vitorias - 15
    }else{
      pontos -= 5
    }

  }else if (rankeAtual === "Diamante"){

    if (vitorias > 17){
      pontos
    }
    
  }else if (rankeAtual === "Lendário"){

    if (vitorias > 20){
      pontos = vitorias - 20
    }else{
      pontos -= 7
    }

  }else if (rankeAtual === "Imortal"){

    if (vitorias > 25){
      pontos = vitorias - 25
    }else{
      pontos -= 10
    }

  }else{

    if (vitorias > 15){
      pontos = vitorias - 15
    }else{
      pontos -= 2
    }
  }
  return pontos
}
//Se vitórias for menor do que 10 = Ferro
//Se vitórias for entre 11 e 20 = 
//Se vitórias for entre 21 e 50 = 
//Se vitórias for entre 51 e 80 = 
//Se vitórias for entre 81 e 90 = 
//Se vitórias for entre 91 e 100= 
//Se vitórias for maior ou igual a 101 = 
function rankearPlayer(pontuacao){
  if (pontuacao < 10){
    ranker = "Ferro"
  }else if (pontuacao < 20){
    ranker = "Bronze"
  }else if (pontuacao < 50){
    ranker = "Prata"
  }else if (pontuacao < 70){
    ranker = "Ouro"
  }else if (pontuacao < 90){
    ranker = "Diamante"
  }else if (pontuacao < 100){
    ranker = "Lendário"
  }else if (pontuacao > 100 ){
    ranker = "Imortal"
  }else{
    console.log("erro ao rankear")
  }
  return ranker
}
function viagensCaminhao (capacidadeTelhas, qtdTelhas) {
  let viagensNecessarias = qtdTelhas/capacidadeTelhas
  if (qtdTelhas < capacidadeTelhas) {
    console.log(`O caminhão fará apenas 1 viagem.`);
  } else if (qtdTelhas % capacidadeTelhas === 0) {
    console.log(`O caminhão deverá fazer ${viagensNecessarias} viagens.`);
  } else {
    console.log(`O caminhão deverá fazer ${Math. ceil(viagensNecessarias)} viagens.`);
  }
}
viagensCaminhao(2, 11)
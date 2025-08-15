let = topDemais;
function calcularNivel(vitorias, derrotas) {
  let todasAsVitorias = vitorias - derrotas;
  let XP = "";

  if (vitorias < 10) {
    XP = "Ferro";
  } else if (vitorias <= 20) {
    XP = "Bronze";
  } else if (vitorias <= 50) {
    XP = "Prata";
  } else if (vitorias <= 80) {
    XP = "Ouro";
  } else if (vitorias <= 90) {
    XP = "Diamante";
  } else if (vitorias <= 100) {
    XP = "Lendário";
  } else {
    XP = "Imortal";
  }

  return `O Herói tem de saldo de ${todasAsVitorias} está no nível de ${XP}`;
}

const jogadores = [
  { vitorias: 7, derrotas: 3 },
  { vitorias: 25, derrotas: 10 },
  { vitorias: 85, derrotas: 20 },
  { vitorias: 102, derrotas: 40 }
];

for (let i = 0; i < jogadores.length; i++) {
  const resultado = calcularNivel(jogadores[i].vitorias, jogadores[i].derrotas);
  console.log(resultado);
}

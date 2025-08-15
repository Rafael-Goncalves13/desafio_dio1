console.log("This is the projeto.js file.");

var herois = [
  { nome: "Cu", xp: 950 },
  { nome: "Joao", xp: 12000 }
];

for (let i = 0; i < herois.length; i++) {
  let nivel = "";

  if (herois[i].xp < 1000) {
    nivel = "Ferro";
  } else if (herois[i].xp <= 2000) {
    nivel = "Bronze";
  } else if (herois[i].xp <= 5000) {
    nivel = "Prata";
  } else if (herois[i].xp <= 7000) {
    nivel = "Ouro";
  } else if (herois[i].xp <= 8000) {
    nivel = "Platina";
  } else if (herois[i].xp <= 9000) {
    nivel = "Ascendente";
  } else if (herois[i].xp <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }

  console.log('O Herói de nome ${herois[i].nome} está no nível de ${nivel}');
}

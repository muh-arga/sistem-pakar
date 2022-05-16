let data1 = document.getElementById("1");
let data2 = document.getElementById("2");
let data3 = document.getElementById("3");
let data4 = document.getElementById("4");
let data5 = document.getElementById("5");
let data6 = document.getElementById("6");
let data7 = document.getElementById("7");
let data8 = document.getElementById("8");
let data9 = document.getElementById("9");
let data10 = document.getElementById("10");
let data11 = document.getElementById("11");
let data12 = document.getElementById("12");
let data13 = document.getElementById("13");
let data14 = document.getElementById("14");
let data15 = document.getElementById("15");
let data16 = document.getElementById("16");
let data17 = document.getElementById("17");
let data18 = document.getElementById("18");
let data19 = document.getElementById("19");

let penyakit1 = document.getElementById("aerus");
let penyakit2 = document.getElementById("jamur");
let penyakit3 = document.getElementById("salmonella");
let penyakit4 = document.getElementById("botulinium");
let penyakit5 = document.getElementById("campylobacter");

let treshold = document.getElementById("treshold");
let proses = document.getElementById("proses");
let infeksi = document.getElementById("infeksi");

proses.onclick = () => {
  let aerus = 0;
  let jamur = 0;
  let salmonella = 0;
  let botulinium = 0;
  let campylobacter = 0;

  let mencret = 0;
  let muntah = 0;
  let sakitPerut = 0;
  let darahRendah = 0;
  let koma = 0;
  let demam = 0;
  let septicaemia = 0;
  let lumpuh = 0;
  let mencretBerdarah = 0;
  let makanDaging = 0;
  let makanJamur = 0;
  let makanMakananKaleng = 0;
  let minumSusu = 0;

  let max = 0;
  
  if (data1.checked) {
    mencret += (1 / 4) * 100;
    mencretBerdarah += (1 / 5) * 100;
  }
  if (data2.checked) {
    mencret += (1 / 4) * 100;
    mencretBerdarah += (1 / 5) * 100;
  }
  if (data3.checked) {
    mencretBerdarah += (1 / 5) * 100;
  }
  if (data4.checked) {
    mencret += (1 / 4) * 100;
    muntah += (1 / 3) * 100;
    sakitPerut += (1 / 2) * 100;
    demam += (1 / 4) * 100;
    septicaemia += (1 / 4) * 100;
    lumpuh += (1 / 2) * 100;
    darahRendah += (1 / 3) * 100;
    mencretBerdarah += (1 / 5) * 100;
  }
  if (data5.checked) {
    mencret += (1 / 4) * 100;
    muntah += (1 / 3) * 100;
    demam += (1 / 4) * 100;
    mencretBerdarah += (1 / 5) * 100;
  }
  if (data6.checked) {
    muntah += (1 / 3) * 100;
  }
  if (data7.checked) {
    sakitPerut += (1 / 2) * 100;
  }
  if (data8.checked) {
    koma += (1 / 2) * 100;
    darahRendah += (1 / 3) * 100;
    septicaemia += (1 / 4) * 100;
  }
  if (data9.checked) {
    demam += (1 / 4) * 100;
    darahRendah += (1 / 3) * 100;
  }
  if (data10.checked) {
    koma += (1 / 2) * 100;
  }
  if (data11.checked) {
    demam += (1 / 4) * 100;
    septicaemia += (1 / 4) * 100;
  }
  if (data12.checked) {
    septicaemia += (1 / 4) * 100;
  }
  if (data13.checked) {
    lumpuh += (1 / 2) * 100;
  }
  if (data14.checked) {
    makanJamur += (1 / 2) * 100;
    makanDaging += (1 / 2) * 100;
    makanMakananKaleng = (1 / 2) * 100;
  }
  if (data15.checked) {
    makanDaging += (1 / 2) * 100;
  }
  if (data16.checked) {
    makanJamur += (1 / 2) * 100;
  }
  if (data17.checked) {
    makanMakananKaleng = (1 / 2) * 100;
  }
  if (data18.checked) {
    minumSusu += (1 / 2) * 100;
  }
  if (data19.checked) {
    minumSusu += (1 / 2) * 100;
  }

  aerus =
    (mencret / 100) * 20 +
    (muntah / 100) * 20 +
    (sakitPerut / 100) * 20 +
    (darahRendah / 100) * 20 +
    (makanDaging / 100) * 20;
  jamur =
    (mencret / 100) * 20 +
    (muntah / 100) * 20 +
    (sakitPerut / 100) * 20 +
    (koma / 100) * 20 +
    (makanJamur / 100) * 20;
  salmonella =
    (mencret / 100) * 16.67 +
    (muntah / 100) * 16.67 +
    (sakitPerut / 100) * 16.67 +
    (demam / 100) * 16.67 +
    (makanDaging / 100) * 16.67;
  botulinium =
    (muntah / 100) * 33.33 +
    (lumpuh / 100) * 33.33 +
    (makanMakananKaleng / 100) * 33.33;
  campylobacter =
    (mencretBerdarah / 100) * 25 +
    (sakitPerut / 100) * 25 +
    (demam / 100) * 25 +
    (minumSusu / 100) * 25;

  penyakit1.innerHTML = `Staphyloccoccus aerus: ${aerus.toFixed(2)} %`;
  penyakit2.innerHTML = `Jamur beracun: ${jamur.toFixed(2)} %`;
  penyakit3.innerHTML = `Salmonella: ${salmonella.toFixed(2)} %`;
  penyakit4.innerHTML = `Clostridium botulinium: ${botulinium.toFixed(2)} %`;
  penyakit5.innerHTML = `Campylobacter: ${campylobacter.toFixed(2)} %`;

  if (aerus >= max) max = aerus;
  if (jamur >= max) max = jamur;
  if (salmonella >= max) max = salmonella;
  if (botulinium >= max) max = botulinium;
  if (campylobacter >= max) max = campylobacter;

  if (max >= treshold.value) {
    if (max == aerus) {
      infeksi.innerHTML = "Staphylococcus aereus";
    } else if (max == jamur) {
      infeksi.innerHTML = "Jamur beracun";
    } else if (max == salmonella) {
      infeksi.innerHTML = "Salmonella";
    } else if (max == botulinium) {
      infeksi.innerHTML = "Clostridium botulinum";
    } else if (max == campylobacter) {
      infeksi.innerHTML = "Campylobacter";
    }
  } else {
    infeksi.innerHTML = "-";
  }
};

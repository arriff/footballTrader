
// spelers aangemaakt Id, Naam, Team, Competitie, Positie, Snelheid, Schieten, Passen, Dribbelen, Verdedigen
spelers[0]=new Speler(0,personen[0].naam,teams[0].naam,competities[0].naam,"CAM",50,60,70,80,90,95,99);
spelers[1] = new Speler(1, personen[1].naam, teams[0].naam, competities[0].naam, "RV", 50, 60, 70 ,80, 90, 95, 99);
spelers[2] = new Speler(2, personen[2].naam, teams[0].naam, competities[0].naam, "SP", 50, 60, 70 ,80, 90, 95, 99);
spelers[3] = new Speler(3, personen[3].naam, teams[0].naam, competities[0].naam, "CM", 50, 60, 70 ,80, 90, 95, 99);
spelers[4] = new Speler(4, personen[4].naam, teams[0].naam, competities[0].naam, "CAM", 50, 60, 70 ,80, 90, 95, 99);
spelers[0] = new Speler(0, personen[0].naam, teams[0].naam, competities[0].naam, "CDM", 54, 65, 80, 77, 82, 74);
spelers[1] = new Speler(1, personen[1].naam, teams[0].naam, competities[0].naam, "RW", 89, 75, 76, 85, 40, 73);
spelers[2] = new Speler(2, personen[2].naam, teams[0].naam, competities[0].naam, "LW", 91, 79, 79, 82, 40, 67);
spelers[3] = new Speler(3, personen[3].naam, teams[0].naam, competities[0].naam, "CAM", 71, 78, 77, 79, 71, 79);
spelers[4] = new Speler(4, personen[4].naam, teams[0].naam, competities[0].naam, "RW", 78, 77, 81, 81, 36, 62);
spelers[5] = new Speler(5, personen[5].naam, teams[0].naam, competities[0].naam, "GK", 79, 77, 77, 82, 57, 79);
spelers[6] = new Speler(6, personen[6].naam, teams[0].naam, competities[0].naam, "CB", 66, 49, 66, 69, 79, 78);
spelers[7] = new Speler(7, personen[7].naam, teams[0].naam, competities[0].naam, "RB", 80, 50, 66, 71, 76, 87);
spelers[8] = new Speler(8, personen[8].naam, teams[0].naam, competities[0].naam, "ST", 53, 80, 63, 66, 35, 70);
spelers[9] = new Speler(9, personen[9].naam, teams[0].naam, competities[0].naam, "GK", 80, 74, 66, 77, 45, 74);
spelers[10] = new Speler(10, personen[10].naam, teams[0].naam, competities[0].naam, "CDM", 71, 64, 68, 72, 74, 80);
spelers[11] = new Speler(11, personen[11].naam, teams[0].naam, competities[0].naam, "CM", 63, 64, 77, 75, 67, 69);
spelers[12] = new Speler(12, personen[12].naam, teams[0].naam, competities[0].naam, "ST", 91, 73, 64, 79, 29, 72);
spelers[13] = new Speler(13, personen[13].naam, teams[0].naam, competities[0].naam, "CDM", 68, 67, 74, 71, 74, 76);
spelers[14] = new Speler(14, personen[14].naam, teams[0].naam, competities[0].naam, "GK", 78, 68, 66, 81, 60, 76);
spelers[15] = new Speler(15, personen[15].naam, teams[0].naam, competities[0].naam, "GK", 76, 74, 68, 77, 41, 75);
spelers[16] = new Speler(16, personen[16].naam, teams[0].naam, competities[0].naam, "CB", 70, 55, 65, 67, 75, 77);
spelers[17] = new Speler(17, personen[17].naam, teams[0].naam, competities[0].naam, "CM", 70, 68, 77, 77, 61, 55);
spelers[18] = new Speler(18, personen[18].naam, teams[0].naam, competities[0].naam, "CDM", 68, 59, 67, 71, 73, 77);
spelers[19] = new Speler(19, personen[19].naam, teams[0].naam, competities[0].naam, "LB", 89, 53, 66, 75, 69, 71);
spelers[20] = new Speler(20, personen[20].naam, teams[0].naam, competities[0].naam, "RB", 85, 63, 71, 73, 72, 70);
spelers[21] = new Speler(21, personen[21].naam, teams[0].naam, competities[0].naam, "RW", 77, 62, 73, 79, 34, 58);

// console.log(spelers);




// console.log(spelers[0].naam);
function changename(){

document.getElementById("spelernaam").innerHTML = spelers[0].naam;
document.getElementById("snl").innerHTML = spelers[0].snelheid;
document.getElementById("stn").innerHTML = spelers[0].schieten;
document.getElementById("pas").innerHTML = spelers[0].passen;
document.getElementById("dri").innerHTML = spelers[0].dribbelen;
document.getElementById("vdg").innerHTML = spelers[0].verdedigen;
document.getElementById("fys").innerHTML = spelers[0].fysiek;
document.getElementById("spelerpositie").innerHTML = spelers[0].positie;


}
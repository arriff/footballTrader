teams = [];
spelers = [];

class Team {
    naam;
    land;
    competitie;
    
    constructor(Naam, Land, Competitie){
        this.naam = Naam;
        this.land = Land;
        this.competitie = Competitie;
    }
}

class Speler{
    id;
    naam;
    leeftijd;
    snelheid;
    kracht;
    spelerwaarde;

    constructor(Id, Naam, Leeftijd, Snelheid, Kracht, Spelerwaarde){
        this.id = Id;
        this.naam = Naam;
        this.leeftijd = Leeftijd;
        this.snelheid = Snelheid;
        this.kracht = Kracht;
        this.spelerwaarde = Spelerwaarde;
    }
}
    // functie om een lijst te genereren
    function lijstMaken(tabelID){
        var tabelID;

        var tableHeaderRowCount = 1;
        var table = document.getElementById(tabelID);
        var rowCount = table.rows.length;
        for (var i = 1; i < rowCount; i++) {
            table.deleteRow(tableHeaderRowCount);
        }

        if(tabelID == 'tabelTeams'){
        var rows = teams;
        var html = document.getElementById(tabelID).innerHTML;
        for (var i = 0; i < rows.length; i++) {
            html+="<tr>";
            html+="<td>"+rows[i].naam+"</td>";
            html+="<td>"+rows[i].land+"</td>";
            html+="<td>"+rows[i].competitie+"</td>";
            html+="</tr>";
        }
        } else{
        var rows = spelers;
        var html = document.getElementById(tabelID).innerHTML;
        for (var i = 0; i < rows.length; i++) {
            html+="<tr>";
            html+="<td>"+rows[i].id+"</td>";
            html+="<td>"+rows[i].naam+"</td>";
            html+="<td>"+rows[i].leeftijd+"</td>";
            html+="<td>"+rows[i].snelheid+"</td>";
            html+="<td>"+rows[i].kracht+"</td>";
            html+="<td>"+rows[i].spelerwaarde+"</td>";
            html+="</tr>";
        }    
        }
        document.getElementById(tabelID).innerHTML = html;
    }

    // teams aangemaakt teamnaam,land,competitie
    teams[0] = new Team("Ajax", "Nederland", "Eredivisie");
    teams[1] = new Team("PSV", "Nederland", "Eredivisie");
    teams[2] = new Team("Feyenoord", "Nederland", "Eredivisie");
    teams[3] = new Team("Vitesse", "Nederland", "Eredivisie");
    teams[4] = new Team("AZ", "Nederland", "Eredivisie");
    teams[5] = new Team("FC Utrecht", "Nederland", "Eredivisie");
    teams[6] = new Team("FC Groningen", "Nederland", "Eredivisie");
    teams[7] = new Team("sc Heerenveen", "Nederland", "Eredivisie");
    teams[8] = new Team("Heracles Almelo", "Nederland", "Eredivisie");
    teams[9] = new Team("ADO Den Haag", "Nederland", "Eredivisie");
    teams[10] = new Team("FC Twente", "Nederland", "Eredivisie");
    teams[11] = new Team("PEC Zwolle", "Nederland", "Eredivisie");
    teams[12] = new Team("Willem II", "Nederland", "Eredivisie");
    teams[13] = new Team("VVV-Venlo", "Nederland", "Eredivisie");
    teams[14] = new Team("RKC Waalwijk", "Nederland", "Eredivisie");
    teams[15] = new Team("Sparta Rotterdam", "Nederland", "Eredivisie");
    teams[16] = new Team("FC Emmen", "Nederland", "Eredivisie");
    teams[17] = new Team("Fortuna Sittard", "Nederland", "Eredivisie");
    
    // spelers aangemaakt id,naam,leeftijd,snelheid,kracht,waarde
    spelers[0] = new Speler(0,"Mohamed",26,80,70,10000);
    spelers[1] = new Speler(1,"Kees",33,75,80,5000);
    spelers[2] = new Speler(2,"Piet",25,70,70,5000);
    spelers[3] = new Speler(3,"Peter",19,90,60,7000);
    spelers[4] = new Speler(4,"Steven",35,75,85,4000);
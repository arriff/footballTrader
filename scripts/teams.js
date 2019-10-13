var teams = [];
var competities = [];


class Team {
    id;
    naam;
    spelers;
    competitie;

    constructor(Id, Naam, Spelers, Competitie){
        this.id = Id;
        this.naam = Naam;
        this.spelers = Spelers;
        this.competitie = Competitie;
    }
}

class Competitie {
    id;
    naam;
    teams;
    land;

    constructor(Id, Naam, Teams, Land){
        this.id = Id;
        this.naam = Naam;
        this.teams = Teams;
        this.land = Land;
    }
}


// competitie aangemaakt id, naam, teams en land
competities[0] = new Competitie(0, "Eredivisie", teams, "Nederland");

// teams aangemaakt id, naam, spelers en competitie
teams[0] = new Team(0, "Ajax", spelers, competities);
teams[1] = new Team(1, "PSV", spelers, competities);
teams[2] = new Team(2, "Feyenoord", spelers, competities);
teams[3] = new Team(3, "Vitesse", spelers, competities);
teams[4] = new Team(4, "AZ", spelers, competities);
teams[5] = new Team(5, "FC Utrecht", spelers, competities);
teams[6] = new Team(6, "FC Groningen", spelers, competities);
teams[7] = new Team(7, "sc Heerenveen", spelers, competities);
teams[8] = new Team(8, "Heracles Almelo", spelers, competities);
teams[9] = new Team(9, "ADO Den Haag", spelers, competities);
teams[10] = new Team(10, "FC Twente", spelers, competities);
teams[11] = new Team(11, "PEC Zwolle", spelers, competities);
teams[12] = new Team(12, "Willem II", spelers, competities);
teams[13] = new Team(13, "VVV-Venlo", spelers, competities);
teams[14] = new Team(14, "RKC Waalwijk", spelers, competities);
teams[15] = new Team(15, "Sparta Rotterdam", spelers, competities);
teams[16] = new Team(16, "FC Emmen", spelers, competities);
teams[17] = new Team(17, "Fortuna Sittard", spelers, competities);

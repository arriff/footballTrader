var spelers = [];
var personen = [];

class Persoon{
    naam;
    nationaliteit;

    constructor(Naam){
        this.naam = Naam;
        this.nationaliteit = "xx";
    }
}

class Speler{
    id;
    naam;
    positie;
    snelheid;
    schieten;
    passen;
    dribbelen;
    verdedigen;
    fysiek;

    constructor(Id, Naam, Teams, Competities, Positie, Snelheid, Schieten, Passen, Dribbelen, Verdedigen, Fysiek){
        this.id = Id;
        this.naam = Naam;
        this.team = Teams;
        this.competitie = Competities;
        this.positie = Positie;
        this.snelheid = Snelheid;
        this.schieten = Schieten;
        this.passen = Passen;
        this.dribbelen = Dribbelen;
        this.verdedigen = Verdedigen;
        this.fysiek = Fysiek;
    }
}

// persoon aangemaakt met Naam
personen[0] = new Persoon("Daley Blind");
personen[1] = new Persoon("neres");
personen[2] = new Persoon("ziyech");
personen[3] = new Persoon("onana");
personen[4] = new Persoon("beek");
    


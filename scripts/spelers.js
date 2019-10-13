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
personen[0]=new Persoon("Daley Blind");
personen[1]=new Persoon("Steven Bergwijn");
personen[2]=new Persoon("Quincy Promes");
personen[3]=new Persoon("Donny van de Beek");
personen[4]=new Persoon("Steven Berghuis");
personen[5]=new Persoon("Jeroen Zoet");
personen[6]=new Persoon("Joël Veltman");
personen[7]=new Persoon("Denzel Dumfries");
personen[8]=new Persoon("Klaas-Jan Huntelaar");
personen[9]=new Persoon("Marco Bizot");
personen[10]=new Persoon("Pablo Rosario");
personen[11]=new Persoon("Jordy Clasie");
personen[12]=new Persoon("Donyell Malen");
personen[13]=new Persoon("Teun Koopmeiners");
personen[14]=new Persoon("Kenneth Vermeer");
personen[15]=new Persoon("Sergio Padt");
personen[16]=new Persoon("Nick Viergever");
personen[17]=new Persoon("Maher");
personen[18]=new Persoon("Jorrit Hendrix");
personen[19]=new Persoon("Ridgeciano Haps");
personen[20]=new Persoon("Rick Karsdorp");
personen[21]=new Persoon("Calvin Stengs");


    


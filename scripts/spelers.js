spelers = [];
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
 
    // spelers aangemaakt id,naam,leeftijd,snelheid,kracht,waarde
    spelers[0] = new Speler(0,"Mohamed",26,80,70,10000);
    spelers[1] = new Speler(1,"Kees",33,75,80,5000);
    spelers[2] = new Speler(2,"Piet",25,70,70,5000);
    spelers[3] = new Speler(3,"Peter",19,90,60,7000);
    spelers[4] = new Speler(4,"Steven",35,75,85,4000);
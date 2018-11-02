function person(namn, epost, mobil, adress) {
    this.namn = namn;
    this.epost = epost;
    this.mobil = mobil;
    this.adress = adress;
    this.print = function(){ 
        console.log(this.namn);
        console.log(this.adress.gata);
        console.log(this.adress.postNummer + ' ' + this.adress.ort);
    }
    
}


function adress (gata, postNummer, ort) {
    this.gata = gata;
    this.postNummer = postNummer;
    this.ort = ort;
    
}
let Vasavägen = new adress('Vasavägen 22', '18142', 'Lidingö');
let Folke = new person('Folke', 'folke@wibom.nu', '0702929401', Vasavägen);
Folke.print();



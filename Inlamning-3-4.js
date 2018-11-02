let radie = prompt("Skriv in radie för dit klot")
let volym = Math.pow(radie, 3) * (Math.PI * 4);
volym = volym/3;
let area = Math.pow(radie, 2) * (Math.PI * 4);
alert("Ditt klots volym är " + volym + " och dess area är " + area);

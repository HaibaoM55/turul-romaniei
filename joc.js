//Variabilele globale
let zar_nr1, zar_nr2, poz_j1, poz_j2, jucator1 = true, jucator2 = false;
poz_j1 = 0;
poz_j2 = 0;
function $(id){
    return document.getElementById(id);
}
function start(){
    console.log("START")
    $("joaca").style.display="none";
    $("joc").style.display="block";
}
//Aceasta functie va arata un nr punctat
//Exemple: 1000 -> 1.000; 1000000 -> 1.000.000;
function punctnr(nr){
    return new Intl.NumberFormat().format(nr);
}
function zar(){
    clearTimeout();
    $("zar").style.display = "block";
    zar_nr1 = Math.floor(Math.random()*6)+1;
    zar_nr2 = Math.floor(Math.random()*6)+1;
    $("zar1").innerHTML = zar_nr1;
    $("zar2").innerHTML = zar_nr2;
    old_poz = poz_j1;
    if(jucator1){
        poz_j1 += zar_nr1;
        poz_j1 += zar_nr2;
        if(poz_j1 > 12){
            poz_j1 = poz_j1 - 12;
        }
        //DE FACUT: sa nu poata fi poz_j1 mai mare decat 12
        setTimeout(() => {animhigh(old_poz, poz_j1);}, 3000);
    }
    setTimeout(() => {$("zar").style.display = "none";}, 3000);
}
function highmergi(numar){
    if(numar == 0){
        $("highlighter").style.top = "280px";
        $("highlighter").style.left = "400px";
    }
    if(numar == 1){
        $("highlighter").style.top = "280px";
        $("highlighter").style.left = "310px";
    }
    if(numar == 2){
        $("highlighter").style.top = "280px";
        $("highlighter").style.left = "200px";
    }
    if(numar == 3){
        $("highlighter").style.top = "280px";
        $("highlighter").style.left = "100px";
    }
    if(numar == 4){
        $("highlighter").style.top = "280px";
        $("highlighter").style.left = "0px";
    }
    if(numar == 5){
        $("highlighter").style.top = "180px";
        $("highlighter").style.left = "0px";
    }
    if(numar == 6){
        $("highlighter").style.top = "80px";
        $("highlighter").style.left = "0px";
    }
    if(numar == 7){
        $("highlighter").style.top = "0px";
        $("highlighter").style.left = "0px";
    }
    if(numar == 8){
        $("highlighter").style.top = "0px";
        $("highlighter").style.left = "110px";
    }
    if(numar == 9){
        $("highlighter").style.top = "0px";
        $("highlighter").style.left = "210px";
    }
    if(numar == 10){
        $("highlighter").style.top = "0px";
        $("highlighter").style.left = "310px";
    }
    if(numar == 11){
        $("highlighter").style.top = "0px";
        $("highlighter").style.left = "400px";
    }
    if(numar == 12){
        $("highlighter").style.top = "80px";
        $("highlighter").style.left = "400px";
    }
    if(numar == 13){
        $("highlighter").style.top = "180px";
        $("highlighter").style.left = "400px";
    }
}
highmergi(0);
clearTimeout();
function animhigh(start, sfarsit){
    for(let i = start; i <= sfarsit; i++){
        setTimeout(() => {highmergi(i);}, i*100);
    }
}

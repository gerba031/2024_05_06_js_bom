/* 
1. pročitajte više o JS BOM na https://www.w3schools.com/js/js_window.asp
2. Dok ste još na toj stranici:
    - ispišite u konzoli visinu i širinu svog trenutno otvorenog java prozora 
    -saznajte ime domene stranice (hostname) i redirektajte na www.google.com
    -napišite naredbu koja otvara konfirmacijski prozor u browseru vdezan za poliku cookija
    -napišite jedostravni console.log funkciju koja itvršava 
    -
    -
    
    */



console.log("visina je: " + window.innerHeight);
console.log("širina je: " + window.innerWidth);

console.log("domena je: " + window.location.hostname);

var winLocation = window.location;

console.log("Window location " + winLocation);

var x = window.confirm("ovime prihvaćate našu politiku o kolaičića");
if (x == true) {
    console.log("korisnik odgovorio OK");
} else {
    console.log("korisnik odgovorio CANCEL");
    window.location = "onama.html"
}

console.log("response = " + x);

console.log("end page 1");
//window.alert("test alert -");
console.log("end page");

window.setTimeout(function(){
    console.log("ispis sa delay od 2 sec");

}, 2000); // 2000 milisekundi = 2 sec

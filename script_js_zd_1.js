// dodati h1 u body

var h1 = document.createElement("h1");
h1.appendChild(document.createTextNode("Ovo je tekst unutar h1"));

var dDescr = document.querySelector(".description");
dDescr.parentNode.prepend(h1);

// dodati h2 u body ispod div-a
var h2 = document.createElement("h2");
h2.appendChild(document.createTextNode("ovo je tekst unutar h2"));

dDescr.parentNode.append(h2);

// dodati div s klasom info

var divInfo = document.createElement("div");
divInfo.classList.add("info");

// nalazimo element footer sa id=footer
//insertamo na body novi kreirani objekt i insertamo prije footer elementa
var footElement = document.querySelector("#footer");
footElement.parentNode.insertBefore(divInfo, footElement);

var bodyElem = document.querySelector("body");
console.log(bodyElem);


// lista u footer elementu na kraju mora sadržavati 5 praznih <li> elemenata


// trebamo naći <ul> element
var ul = document.querySelector("ul"); // dohvaćamo is DOM-a da bi mogli kreirati nove <li> unutar njega

//var li = document.createElement("li"); // kreiramo novi objekt u memoriji

console.log("UL ima LI elemenata: " + ul.childElementCount);

// prvi način brisanja elemenata iz UL

/*for (let i = 0; i = ul.childElementCount; i > 0 i++) {
    let li = document.createElement(i - 1);
    ul.removeChild(child);
}*/

// drugi način brisanja elemenata iz UL

while (ul.childElementCount > 0) {
    let child = ul.children[0];
    ul.removeChild(child);
}

for (let i = 0; i < 3; i++) {
    let li = document.createElement("li"); // ubacimo li element u petlju da ju kreira svaki put, ako je stavimo prije petlje kreira ju samo 1 put kao referencu, a kroz petlju koliko je zadano
    ul.appendChild(li);
}


/*
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");

ul.appendChild(li);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3); */


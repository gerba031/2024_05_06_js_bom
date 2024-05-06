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

dDescr.parentNode.append(divInfo);

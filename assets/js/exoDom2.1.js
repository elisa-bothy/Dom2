const main = document.createElement("main");
const div = document.createElement("div");
const p = document.createElement("p");
const strong = document.createElement("strong");
const a1 = document.createElement("a");
const a2 = document.createElement("a");
const a3 = document.createElement("a");

strong.textContent = "JavaScript";
const text1 = document.createTextNode("a été créé en 1995 par ");
a1.textContent = "Brendan Eich";
const text2 = document.createTextNode(`.
Il a été standardisé sous le nom d'`);
a2.textContent = "ECMAScript";
const text3 = document.createTextNode(" en juin 1997 par ");
a3.textContent = "Ecma International";
const text4 = document.createTextNode(" dans le standard ECMA-262.");

div.id = "2c2";
a1.href = "/wiki/Brendan_Eich";
a1.title = "Brendan Eich";
a2.href = "/wiki/ECMAScript";
a2.title = "ECMAScript";
a3.href = "/wiki/Ecma_International";
a3.title = "Ecma International";

p.append(strong, text1, a1, text2, a2, text3, a3, text4);
div.appendChild(p);
main.appendChild(div);

document.body.insertBefore(main, document.querySelector("script"));

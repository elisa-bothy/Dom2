const main = document.createElement("main");
const div = document.createElement("div");
const p = document.createElement("p");
const dl = document.createElement("dl");
const contenu = {
    terme : ["JavaScript", "JScript", "ActionScript", "EX4"],
    description : [`JavaScript est un langage de programmation de scripts
    principalement utilisé dans les pages web interactives mais aussi coté
    serveur.`, `JScript est le nom générique de plusieurs implémentations
    d'ECMAScript 3 créées par Microsoft.`, `ActionScript est le langage de programmation utilisé au sein
    d'applications clientes (Adobe Flash, Adobe Flex) et serveur (Flash media
    server, JRun, Macromedia Generator).`, `ECMAScript for XML (E4X) est une extension XML au langage
    ECMAScript.`],
}

for(i=0; i<4; i++){
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");
    dt.textContent = contenu.terme[i];
    dd.textContent = contenu.description[i];
    dl.append(dt,dd);
}

div.id = "2c4";
div.append(p, dl);
main.appendChild(div);

document.body.insertBefore(main, document.querySelector("script"));

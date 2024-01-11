/*<body>
    <main>
        <div id="2c3">
            <p>Mangez 5 fruits et légumes par jour :</p>
            <ul>
                <li>Pomme</li>
                <li>Poire</li>
                <li>Haricots verts</li>
                <li>Carottes</li>
                <li>Concombre</li>
            </ul>
        </div>
    </main>
    <script src="./assets/js/ exoDom2.2.js"></script>
</body>*/

const main = document.createElement("main");
const div = document.createElement("div");
const p = document.createElement("p");
const ul = document.createElement("ul")
const creationli = [li1, li2, li3, li4, li5];
for(let i=0; i<5; i++){
    creationli[i] = document.createElement("li");
}

p.textContent = "Mangez 5 fruits et légumes par jour :";
li1.textContent = "Pomme";
li2.textContent = "Poire";
li3.textContent = "Haricots verts";
li4.textContent = "Carottes";
li5.textContent = "Concombre";

div.id = "2c3"

ul.append(li1, li2, li3, li4, li5);
div.appendChild(p, ul);
main.appendChild(div);

document.body.insertBefore(main, document.querySelector("script"));

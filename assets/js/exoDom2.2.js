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
const contenuli =["Pomme", "Poire", "Haricots verts", "Carottes", "Concombre"];
for(let i=0; i<5; i++){
    const li = document.createElement("li");
    li.textContent = contenuli[i];
    ul.appendChild(li);
}

p.textContent = "Mangez 5 fruits et légumes par jour :";

div.id = "2c3"
div.append(p, ul);
main.appendChild(div);

document.body.insertBefore(main, document.querySelector("script"));

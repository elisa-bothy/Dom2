const main = document.createElement("main");
const form = document.createElement("form");
const fieldset = document.createElement("fieldset");
const legend = document.createElement("legend");
const div = document.createElement("div");
const label = document.createElement("label");
const input = document.createElement("input");
const br = document.createElement("br");

const type = ["submit", "cancel"];
const value = ["Envoyer", "Annuler"];

div.append(label, input, br);

for(i=0; i<2; i++){
    const input2 = document.createElement("input");
    input2.type = type[i];
    input2.value = value[i];
    div.appendChild(input2);
}

input.type = "file";
input.id = "inputUpload";
input.name = "inputUpload";
label.for = "inputUpload";
label.textContent = "Image à uploader :";

legend.textContent = "Uploader une image";

fieldset.append(legend, div);

form.enctype = "multipart/form-data";
form.method = "post";
form.action = "upload.php";
form.id = "2c5";

form.appendChild(fieldset);
main.appendChild(form);

document.body.insertBefore(main, document.querySelector("script"));

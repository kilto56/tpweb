let input = document.getElementById("input");
let button = document.querySelector(".containbuttonanimhtml").children;

button[0].addEventListener("click", function addMessages() {
 let parentElement = document.getElementById("parent");
 const paragraph = document.createElement("p");
 paragraph.innerHTML = input.value;
 parentElement.appendChild(paragraph);
 input.value = "";
});

button[1].addEventListener("click", function removeMessage() {
	let parentElement = document.getElementById("parent");
	let paragraph = document.querySelector(".textcontain").children;
	parentElement.removeChild(paragraph[0]);
});


let buttonAnnexe = document.querySelector(".annexe").children;

buttonAnnexe[0].addEventListener("click", function htmljs() {
    location.replace("index.html");
});

buttonAnnexe[1].addEventListener("click", function cssjs() {
    location.replace("js-css.html");
});
let buttonAnimCssPink = document.querySelector("#pink");
let buttonAnimCssBlue = document.querySelector("#blue");
let buttonAnimCssGreen = document.querySelector("#green");
let buttonAnimCssRed = document.querySelector("#red");

buttonAnimCssPink.addEventListener("click", function pink() {
    document.querySelector(".rectangle").style.backgroundColor = "pink";
});

buttonAnimCssBlue.addEventListener("click", function blue() {
    document.querySelector(".rectangle").style.backgroundColor = "blue";
});

buttonAnimCssGreen.addEventListener("click", function green() {
    document.querySelector(".rectangle").style.backgroundColor = "green";
});

buttonAnimCssRed.addEventListener("click", function red() {
    document.querySelector(".rectangle").style.backgroundColor = "red";
});


let buttonAnnexe = document.querySelector(".annexe").children;

buttonAnnexe[0].addEventListener("click", function htmljs() {
    location.replace("index.html");
});

buttonAnnexe[1].addEventListener("click", function cssjs() {
    location.replace("js-html.html");
});
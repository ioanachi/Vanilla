import { red400 } from "material-ui/styles/colors";

var button = document.getElementById("btn");

var title = document.getElementById("title");
var description = document.getElementById("descript");
var textZone = document.getElementById("text");
console.log(textZone);

var titleName;
var descriptionValue;


function showTxt(event) {
    titleName = title.value;
    descriptionValue = description.value;
    var displayTxt = '<div class="bubble-message bottom" ><button class="delbtn">X</button> <b> ' + titleName + '</b></br>' +
        descriptionValue + '</div>';

    var containerBox = ' <div class="container" id="containerBox">' + displayTxt + '</div>';
    textZone.innerHTML += displayTxt;
    var insideBtn = textZone.getElementsByClassName("delbtn");
    insideBtn = Array.from(insideBtn);

    insideBtn.forEach(function (item) {
        item.addEventListener('click', (event) => {
            let parentElem = event.target.parentElement;
            let parentOfParent = parentElem.parentElement;
            parentOfParent.removeChild(parentElem);

        });

    });
    var smallChatBox = document.getElementsByClassName('bottom');
    smallChatBox = Array.from(smallChatBox);
    console.log(smallChatBox, "hjbjkytfcytcytf");

    smallChatBox.forEach(function (element) {
        element.addEventListener('click', function (event) {
            event.target.style.backgroundColor = "blue";
            console.log(event.target, "hjbjkytfcytcytf");
        })
    })
}
function resetInputValue(event) {
    showTxt();
    title.value = "";
    description.value = "";



}


button.addEventListener('click', resetInputValue);



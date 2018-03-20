import { red400 } from "material-ui/styles/colors";

var button = document.getElementById("btn");

var title = document.getElementById("title");
var description = document.getElementById("descript");
var textZone = document.getElementById("text");
console.log(textZone);
var ContainingBox = null;
var titleName;
var descriptionValue;
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function showTxt(event) {
    titleName = title.value;
    descriptionValue = description.value;
    var displayTxt = '<div class="bubble-message bottom" ><button class="delbtn">X</button><button class="updatebtn">Select</button> <b> ' + titleName + '</b></br>' +
        descriptionValue + '</div>';

    var containerBox = ' <div class="container" id="containerBox">' + displayTxt + '</div>';
    textZone.innerHTML += displayTxt;
    var insideBtn = textZone.getElementsByClassName("delbtn");
    var updateBtn = textZone.getElementsByClassName("updatebtn");
    insideBtn = Array.from(insideBtn);
    var updateButton = Array.from(updateBtn);

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
            var randNr1 = getRandomArbitrary(0, 256);
            var randNr2 = getRandomArbitrary(0, 256);
            var randNr3 = getRandomArbitrary(0, 256);

            console.log(randNr1, randNr2, randNr3);
            var ClickedDiv = event.target;




            // ClickedDiv.style.backgroundColor = "rgb(" + randNr1 + "," + randNr2 + "," + randNr3 + ")";
            //    var styleElem = event.target.appendChild(document.createElement("style"));
            //    styleElem.innerHTML = "body #text .bottom:before {border-color:  1px solid  rgb(" + randNr1 + "," + randNr2 + "," + randNr3 + ");}";

        })
    });

    updateButton.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            console.log("outside");

if(!ContainingBox){
    console.log("inside");
    ContainingBox =  e.currentTarget.parentElement;
             var txtContainingBox =ContainingBox.outerHTML;

            var insideTxt = txtContainingBox.split('<b>')[1];
            var insideTitle = insideTxt.split('</b>')[0];
            var insideDescr = insideTxt.split('<br>')[1];
            insideDescr = insideDescr.split('<')[0];
            var updateForm = document.createElement("form");
            console.log(insideDescr);

            description.value = insideDescr;
            title.value = insideTitle;

            e.currentTarget.innerHTML = "Unselect";
            



            // console.log(updateForm);

            // updateForm.innerHTML = '<input type="text" id="titleUpdate">'+insideTitle +'<textarea type="text" id="descriptUpdate" rows="4" cols="50">'
            // +insideDescr +'</textarea><button type="button" id="updateBtn"> Update </button> '
            // document.body.appendChild(updateForm);

            e.currentTarget.parentElement.style.backgroundColor = "rgb(255,0,0)";
}else{
    e.currentTarget.innerHTML = "Select";
    ContainingBox.style = "";
    
    ContainingBox = null;
    
}




        })
    });
if(!ContainingBox){
    button.innerHTML = "Update";
    updateBtn.innerHTML = "Select";
    
}else{
    button.innerHTML = "Insert";
    
};





}
function resetInputValue(event) {
    showTxt();
    title.value = "";
    description.value = "";



}


button.addEventListener('click', resetInputValue);



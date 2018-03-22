import { red400 } from "material-ui/styles/colors";

var button = document.getElementById("btn");
var title = document.getElementById("title");
var description = document.getElementById("descript");
var textZone = document.getElementById("text");
var ContainingBox = null;
var titleName;
var insideBtn;
var insideBox;
var updateBtn;
var descriptionValue;

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function showTxt(event) {
    titleName = title.value;
    descriptionValue = description.value;

    if (ContainingBox) {
        var titleUpdate = ContainingBox.getElementsByClassName("titleTxt")[0];
        var descriptionUpdate = ContainingBox.getElementsByClassName("descriptionTxt")[0];
        titleUpdate.innerHTML = titleName;
        descriptionUpdate.innerHTML = descriptionValue;
        return

    }
    else {
        var displayTxt = '<div class="bubble-message bottom" ><button class="delbtn">X</button><button class="updatebtn">Select</button> <p class="titleTxt"><b> ' + titleName + '</b></p><p class="descriptionTxt">' +
            descriptionValue + '</p></div>';
        var containerBox = ' <div class="container" id="containerBox">' + displayTxt + '</div>';
        textZone.innerHTML += displayTxt;



        // var smallChatBox = document.getElementsByClassName('bottom');
        // smallChatBox = Array.from(smallChatBox);
        // smallChatBox.forEach(function (element) {
        //     element.addEventListener('click', function (event) {
        //         var randNr1 = getRandomArbitrary(0, 256);
        //         var randNr2 = getRandomArbitrary(0, 256);
        //         var randNr3 = getRandomArbitrary(0, 256);

        //         console.log(randNr1, randNr2, randNr3);
        //         var ClickedDiv = event.target;
        //         // ClickedDiv.style.backgroundColor = "rgb(" + randNr1 + "," + randNr2 + "," + randNr3 + ")";
        //         //    var styleElem = event.target.appendChild(document.createElement("style"));
        //         //    styleElem.innerHTML = "body #text .bottom:before {border-color:  1px solid  rgb(" + randNr1 + "," + randNr2 + "," + randNr3 + ");}";

        //     })
        // });

        updateBtn = textZone.getElementsByClassName("updatebtn");
        var updateButton = Array.from(updateBtn);

        insideBtn = textZone.getElementsByClassName("delbtn");
        insideBtn = Array.from(insideBtn);
        insideBtn.forEach(function (item) {
            item.addEventListener('click', function (event) {
                let parentElem = event.target.parentElement;
                let parentOfParent = parentElem.parentElement;
                parentOfParent.removeChild(parentElem);

            });

        });



        updateButton.forEach(function (btn) {
            btn.addEventListener('click', function (e) {

                insideBox = e.currentTarget.parentElement;
                console.log(e.currentTarget, "ContainingBox");

                // var txtContainingBox = insideBox.outerHTML;

                // var insideTxt = txtContainingBox.split('<b>')[1];
                // var insideTitle = insideTxt.split('</b>')[0];
                // var insideDescr = insideTxt.split('<br>')[1];
                // insideDescr = insideDescr.split('<')[0];
                // var updateForm = document.createElement("form");


                if (!ContainingBox) {
                    // console.log("if");

                    button.innerHTML = "Update";
                    ContainingBox = insideBox;
                    title.value = ContainingBox.children[2].textContent;
                    description.value = ContainingBox.children[3].textContent;
                    e.currentTarget.innerHTML = "Unselect";
                    e.currentTarget.parentElement.style.backgroundColor = "rgb(255,0,0)";

                }
                else {
                    console.log(updateButton, "selectBtns");
                    
                    if(ContainingBox!=insideBox){
                        ContainingBox.style = null;
                        ContainingBox.children[1].innerHTML = "Select";
                        
                        ContainingBox = insideBox;
                        // console.log(ContainingBox, insideBox,  "fsesefefewfew");
                        
                        descriptionValue = description.value;
                        e.currentTarget.innerHTML = "Select";
                        console.log( ContainingBox.children[1], "inside elesesssss");
    // 
                        button.innerHTML = "Insert";
                        ContainingBox = null;
                        description.value = "";
                        title.value = '';
                    }
                    descriptionValue = description.value;
                    e.currentTarget.innerHTML = "Select";
                    // console.log( "inside elesesssss");

                    ContainingBox.style = null;
                    button.innerHTML = "Insert";
                    ContainingBox = null;
                    description.value = "";
                    title.value = '';
                }
            })
        });
    }
}
function resetInputValue(event) {
    showTxt();
    title.value = "";
    description.value = "";
}

button.addEventListener('click', resetInputValue);



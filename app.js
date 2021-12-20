var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#output");

var URL = "https://api.funtranslations.com/translate/minion.json";

function newURl(text) {
    return URL + "?" + "text=" + text

}
function errorHandler(error){
    console.log("error occured",error);
    alert(" Something went wrong with the server... Try Again Later!!!")
};

function clickHandler() {
    var inputText = txtInput.value;
    fetch(newURl(inputText))
    .then(response => response.json())
    .then( json=> {   var outputText= json.contents.translated;
        txtOutput.innerText= outputText;
    })
    .catch(errorHandler)
  

};

btnTranslate.addEventListener("click", clickHandler)
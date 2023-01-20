let characterSet = [];
let inputContainer = document.querySelector(".input-container");
let passwordElements = document.querySelectorAll(".password");
let inputForm = document.getElementById("input");
let passwordLength = 0;

for (let i = 33; i <= 126; i++) {
    characterSet.push(String.fromCharCode(i));
}

function generatePassword() {
    let password = "";
    passwordLength = inputForm.value;
    for(let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * 94);
        let randomCharacter =  characterSet[randomNumber];
        password += randomCharacter;
    }
    return password;
}

function displayPasswords() {
    for(let i = 0; i < passwordElements.length; i++) {
        passwordElements[i].textContent = generatePassword();
    }
}

function showPasswordLength() {
    if (document.querySelector(".input-length"))
        {
            (document.querySelector(".input-length")).remove();
        }
    let div = document.createElement("div");
    div.setAttribute("class", "input-length font-inter");
    inputContainer.append(div);
    div.append(inputForm.value);
}

function copyToClipboard(content) {
    if (content !== ""){
        navigator.clipboard.writeText(content);
        showMessage();
    }
}

function showMessage() {
    let positionedDiv = document.querySelector(".positioned");
    positionedDiv.textContent = "Copied to clipboard";
    positionedDiv.style.opacity = "0.9";
    positionedDiv.style.visibility = "visible";
    setTimeout( function() {
        positionedDiv.style.opacity = "0.6";
        positionedDiv.style.visibility = "hidden";
    }, 1000);
}

function showCopyMessage(content) {
    if (content !== "") {
        let positionedDiv = document.querySelector(".positioned");
        positionedDiv.textContent = "Copy";
        positionedDiv.style.visibility = "visible";  
    } 
}

function stopShowingCopyMessage() {
    let positionedDiv = document.querySelector(".positioned");
    positionedDiv.style.visibility = "hidden";
}



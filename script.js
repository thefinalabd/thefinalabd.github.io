document.addEventListener("DOMContentLoaded", (event) => {
    event.preventDefault();

    if (window.location.href.includes("index.html")) {
        alert("Welcome to my webpage");
    }

    const lightButton = document.getElementById("light-button");
    const darkButton = document.getElementById("dark-button");
    const navigationBar = document.querySelector("nav");
    const footer = document.querySelector("footer");
    const elementsDarkandLight = ["body", "h2", "nav", "li", "h5","footer", "h1", "h3", "p","h4", "h6", "a"];
    const formContainer = document.getElementById("form-container")

    lightButton.addEventListener("click", (event) => {
        event.preventDefault();
        document.body.style.backgroundColor = "#ffffff";
        navigationBar.style.backgroundColor = "#aed2f5";
        footer.style.backgroundColor = "#aed2f5";
        for (let t = 0; t < elementsDarkandLight.length; t++) {
            document.querySelectorAll(elementsDarkandLight[t]).forEach(e => {
                e.style.color = "black";
            });
        }
        formContainer.style.backgroundColor = "#8ebff1";
    })

    darkButton.addEventListener("click", (event) => {
        event.preventDefault();
        document.body.style.backgroundColor = "#575757";
        navigationBar.style.backgroundColor = "#121212";
        footer.style.backgroundColor = "#121212";
        for (let t = 0; t < elementsDarkandLight.length; t++) {
            document.querySelectorAll(elementsDarkandLight[t]).forEach(e => {
                e.style.color = "white";
            });
        }
        formContainer.style.backgroundColor = "#333333";
    })
    

    const form = document.getElementById("form");
    const name = document.getElementById("name");
    const email = document.getElementById("email")
    const number = document.getElementById("phone");
    const yes = document.getElementById("yes");
    const no = document.getElementById("no");
    const emailContact = document.getElementById("contact-email");
    const phoneContact = document.getElementById("contact-phone");
    const submitButton = document.getElementById("submit-button");

    submitButton.addEventListener("click", (event) => {
        event.preventDefault();

    const nameInput = name.value;
    const emailInput = email.value;
    const numberInput = number.value;
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const numberError = document.getElementById("number-error");
    const choiceError = document.getElementById("choice-error");
    const contactError = document.getElementById("contact-error");

    nameError.innerText = "";
    emailError.innerText = "";
    numberError.innerText = "";
    choiceError.innerText = "";
    contactError.innerText = "";

    if(nameInput === ""){
        nameError.innerText = "Enter a name!";
        nameError.style.color = "red";
    }
    if(emailInput === ""){
        emailError.innerText = "Enter an email!";
        emailError.style.color = "red";
        }
    if(numberInput === ""){
        numberError.innerText = "Enter a number!";
        numberError.style.color = "red";
    }
    if(!(yes.checked) && !(no.checked)){
        choiceError.innerText = "Choose one!";
        choiceError.style.color = "red";
    }
    if(!emailInput.includes("@")){
        emailError.innerText = "Enter a valid email!";
        emailError.style.color = "red";
    }
    if(numberInput < 9){
        numberError.innerText = "Enter a valid number!";
        numberError.style.color = "red";   
    }
    if(!(emailContact.checked) && !(phoneContact.checked)){
        contactError.innerText = "Choose one!";
        contactError.style.color = "red";
    }
    })
})
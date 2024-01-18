const btnSubmit = document.querySelector("button");
const usernameInputField = document.querySelector("#username");
const userAgeInputField = document.querySelector("#age");
const loginMessage = document.querySelector(".login-message")

btnSubmit.addEventListener("click", () => {
    const userNameInput = usernameInputField.value.toLowerCase();
    const userAgeInput = userAgeInputField.value;

    // if(userNameInput === "maverick" && userAgeInput === "57"){
    //     loginMessage.textContent = "Welcome back sir!";
    //     loginMessage.style.color = "green";
    // } else {
    //     loginMessage.textContent = "Nice try buckaroo!";
    //     loginMessage.style.color = "red"
    // }
    if(userNameInput !== "maverick" || userAgeInput !== "57"){
        loginMessage.textContent = "Nice try buckaroo!";
        loginMessage.style.color = "red";
    } else{
        loginMessage.textContent = "Welcome back sir!";
        loginMessage.style.color = "green";
    }
});
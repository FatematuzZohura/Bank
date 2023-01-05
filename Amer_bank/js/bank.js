document.getElementById("login-submit").addEventListener("click", function() {
    //email
    const emailField = document.getElementById("email");
    const userEmail = emailField.value;
    console.log(userEmail);
    //password
    const passwordField = document.getElementById("password");
    const userPassword = passwordField.value;
    console.log(userPassword);
    //check

    if (userEmail == "kami@gmail.com" && userPassword == "kami") {
        window.location.href = "banking.html";
    }

});
function ShowPhotos() {
    setInterval(IteratePhotos, 2000);
}
let checker = true;

function IteratePhotos() {
    if (checker == true) {
        document.getElementById("Image").src = "Nature1.jpg";
        checker = false;
    } else {
        document.getElementById("Image").src = "Nature.jpg";
        checker = true;
    }
}
let validater = true;

document.getElementById("form").addEventListener('submit', function(e) {
    let password = document.getElementById("Password").value;
    let repeatpassword = document.getElementById("RepeatPassword").value;
    if (validater == false) {
        document.getElementById("PasswordError").style.visibility = "Visible"
        document.getElementById("PasswordError").innerHTML = "";
    }
    if (password == "" || password == null || repeatpassword == "" || repeatpassword == null) {
        document.getElementById("PasswordError").innerHTML = "Password field or Repeat Password field can't be empty"
        document.getElementById("PasswordError").style.visibility = "Visible"
        validater = false;
    } else if (password != repeatpassword && password != "" && repeatpassword != "" && password != null && repeatpassword != null) {
        document.getElementById("PasswordError").innerHTML = "Password doesn't match for both fields"
        document.getElementById("PasswordError").style.visibility = "Visible"
        validater = false;
    } else if (password == repeatpassword) {
        document.getElementById("PasswordError").style.visibility = "hidden";
        validater = true;
    }
    if (validater == false) {
        e.preventDefault();
    } else {
        alert("Logged in Successfully")
    }
});

function Reset() {
    let name = document.getElementById("Name").value = "";
    let email = document.getElementById("Email").value = "";
    let password = document.getElementById("Password").value = "";
    let repeatpassword = document.getElementById("RepeatPassword").value = "";
    document.getElementById("PasswordError").style.visibility = "hidden"
}
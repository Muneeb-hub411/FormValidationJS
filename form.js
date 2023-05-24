function validation() {
    var username = document.getElementById("Name").value;
    var email = document.getElementById("InputEmail").value;
    var password = document.getElementById("InputPassword").value;
    var number = document.getElementById("Number").value

    var usercheck = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
    var passcheck = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    var emailcheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var numcheck = /^\+92\d{2,4}\d{7,11}$/;
    var numcheck2 = /^\d{3}-\d{3}-\d{4}$/;

    if (usercheck.test(username)) {
        document.getElementById("nameerror").innerHTML = "";

    }
    // else if(username.value.length === 0){
    //     document.getElementById("nameerror").innerHTML="Enter Username";
    // }
    else {

        if (username.length===0) {
            document.getElementById("nameerror").innerHTML = "Enter Username";
            return false;
        }
        else {
            // alert("Invalid username")
            document.getElementById("nameerror").innerHTML = "Invalid UserName";
            return false;
        }

    }

    if (passcheck.test(password)) {
        document.getElementById("passerror").innerHTML = "";
    }
    else {
        document.getElementById("passerror").innerHTML = "Password must include special characters,Upper/lower case & special characters";
        return false;
    }
    if (emailcheck.test(email)) {
        document.getElementById("mailerror").innerHTML = "";
    }
    else {
        document.getElementById("mailerror").innerHTML = "Invalid,Recheck email";
        return false;

    }
    if (numcheck.test(number) || numcheck2.test(number)) {
        document.getElementById("numerror").innerHTML = "";
    }
    else {
        document.getElementById("numerror").innerHTML = "Invalid,Phone number";
        return false;
    }





}

function passshow() {
    var x = document.getElementById("InputPassword");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let telephone = document.getElementById("telephone");
let bio = document.getElementById("bio");
let input = document.getElementsByTagName("input");
let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
let error3 = document.getElementById("error3");
let error4 = document.getElementById("error4");
let error5 = document.getElementById("error5");
let error6 = document.getElementById("error6");
let button = document.getElementById("button");
// console.log(button);
const error = {
    fname: true,
    lname: true,
    email: true,
    password: true,
    phone: true,
    bio: true
}
function inputChange() {
    // console.log(fname.value);
    if (fname.value == "") {
        error.fname = true;
        error1.innerText = "Please enter your First Name";
        input[0].style.border = "2px solid darkred";
    }
    else {
        error.fname = false;
        error1.innerText = "";
        input[0].style.border = "";
        if (/^[a-zA-Z\s]*$/.test(fname.value) != true) {
            // console.log("hello");
            error.fname = true;
            error1.innerText = "First Name must be in alphabets";
            input[0].style.border = "2px solid darkred";
        }
        else {
            error.fname = false;
            error1.innerText = "";
            input[0].style.border = "";
            if (fname.value.length > 16 || fname.value.length < 3) {
                // console.log("hello");
                error.fname = true;
                error1.innerText = "First Name must contain 3-16 characters";
                input[0].style.border = "2px solid darkred";
            }
        }
    }
    if (lname.value == "") {
        error.lname = true;

        error2.innerText = "Please enter your Last Name";
        input[1].style.border = "2px solid darkred";
    }
    else {
        error.lname = false;
        error2.innerText = "";
        input[1].style.border = "";
        if (/^[a-zA-Z\s]*$/.test(lname.value) != true) {
            // console.log("hello");
            error.lname = true;
            error2.innerText = "Last Name must be in alphabets";
            input[1].style.border = "2px solid darkred";
        }
        else {
            error.lname = false;
            error2.innerText = "";
            input[1].style.border = "";
            if (lname.value.length > 16 || lname.value.length < 3) {
                // console.log("hello");
                error.lname = true;
                error2.innerText = "Last Name must contain 3-16 characters";
                input[1].style.border = "2px solid darkred";
            }
        }
    }
    if (email.value == "") {
        error.email = true;
        error3.innerText = "Please enter your Email";
        input[2].style.border = "2px solid darkred";
    }
    else {
        error.email = false;
        error3.innerText = "";
        input[2].style.border = "";
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}[a-zA-Z\s])+$/.test(email.value) != true) {
            error.email = true;
            // console.log("hello");
            error3.innerText = "Email not valid";
            input[2].style.border = "2px solid darkred";
        }
    }
    if (password.value == "") {
        error.password = true;

        error4.innerText = "Please enter Password";
        input[3].style.border = "2px solid darkred";
    }
    else {
        error.password = false;
        error4.innerText = "";
        input[3].style.border = "";
        if (/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{6,16}$/.test(password.value) != true) {
            // console.log("hello");
            error.password = true;
            error4.innerText = "Password must contain atleast one Uppercase, one Lowercase, one Special and one numeric character";
            input[3].style.border = "2px solid darkred";
        }
    }
    if (telephone.value == "") {
        error.phone = true;
        error5.innerText = "Please enter your Telephone Number";
        input[4].style.border = "2px solid darkred";
    }
    else {
        error.phone = false;
        error5.innerText = "";
        input[4].style.border = "";
        if (/^(?=.*[0-9])[0-9]{10}$/.test(telephone.value) != true) {
            error.phone = true;
            // console.log("hello");
            error5.innerText = "Telephone Number must contain only 10 digits";
            input[4].style.border = "2px solid darkred";
        }
    }
    if (bio.value == "") {
        error.bio = true;
        error6.innerText = "Please enter Bio";
        input[5].style.border = "2px solid darkred";
    }
    else {
        error.bio = false;
        error6.innerText = "";
        input[5].style.border = "";
        if (/^(?=.*[a-z])[a-z_.-\s]{8,50}$/.test(bio.value) != true) {
            // console.log("hello");
            error.bio = true;
            error6.innerText = "Bio must contain only Lowercase letters, underscores, hyphens and be 8-50 one characters";
            input[5].style.border = "2px solid darkred";
        }
    }
    if (error.fname === true || error.lname === true || error.email === true || error.password === true || error.phone === true || error.bio === true) {
        button.removeAttribute("class");
        button.removeAttribute("onclick");
        button.style.cursor = "not-allowed";
    }
    else {
        button.setAttribute("class", "submit");
        button.setAttribute("onclick", "submit()");
        button.style.cursor = "pointer";
    }

}
function submit() {
    // console.log("hello")

    const DataToSend = {
        fname: fname.value,
        lname: lname.value,
        email: email.value,
        password: password.value,
        phone: telephone.value,
        bio: bio.value
    }
    console.log(DataToSend);
    window.alert(fname.value.toUpperCase() + " " + lname.value.toUpperCase() + ", " + "Your form is submitted");
    window.location.reload()
}


console.log("Hii");

// if (
//     password.hasAttribute != "#" ||
//     password.value != "@" ||
//     password.value != "*" ||
//     password.value != "$" ||
//     password.value != "%" ||
//     password.value != "&" ||
//     password.value != "^" ||
//     password.value != "!"
//   ) {
//     alert("Please Enter some Characters");
//   }

let fName = document.getElementById("fname");
let emailId = document.getElementById("email_id");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm_password");
let phNum = document.getElementById("ph_num");
let signBtn = document.getElementById("sign_btn");
let popPassword = document.getElementById("pop_password");
let lowerCaseLetters = /[a-z]/g;
let upperCaseLetters = /[A-Z]/g;
let numbers = /[0-9]/g;

signBtn.addEventListener("click", () => {
  if (
    !fName.value ||
    !emailId.value ||
    !password.value ||
    !confirmPassword.value ||
    !phNum.value
  ) {
    alert(" Information is incomplete ! ");
  } else if (password.value.match("!")) {
    alert("Please enter some special characters");
  } else if (confirmPassword.value != password.value) {
    alert("confirm Password is not matched with Password");
  } else if (phNum.value.length != 10) {
    alert("Invalid phone number");
  }

  if (
    password.value.match(lowerCaseLetters) &&
    password.value.match(upperCaseLetters) &&
    password.value.match(numbers) &&
    password.value.length >= 8
  ) {
  } else {
    alert("Please enter strong password");
    popPassword.style.display = "inherit";
  }
});

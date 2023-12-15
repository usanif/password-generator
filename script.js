"use strict";

//function to generate random password using loop
function generatRandomPswd(length) {
  const pswChar =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz12345678910@#!/";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomPswd = Math.floor(Math.random() * pswChar.length);
    password += pswChar.charAt(randomPswd);
  }
  return password;
}

//rest function

function resetPassword() {
  const passwordRest = document.querySelector(".number");
  passwordRest.textContent = "Password";
  passwordRest.style.color = "";
}
var timeout;

//reset copied button

function resetCopiedpswd() {
  const pswdCopied = document.querySelector(".copyPassword");
  pswdCopied.textContent = "Copy Password";
}

//On click eventlistner will generate new password
document
  .querySelector(".randomGenerator")
  .addEventListener("click", function () {
    const newPassword = generatRandomPswd(8);
    document.querySelector(".number").textContent = newPassword;
    document.querySelector(".number").style.color = "#FF0000";
    // Clear time out and assigned new when generate new password
    clearTimeout(timeout);

    // Set a timeout to reset the password after 5 seconds
    timeout = setTimeout(resetPassword, 5000);
  });

//On click eventlistner will copy the password.

document.querySelector(".copyPassword").addEventListener("click", function () {
  const newPassword = document.querySelector(".number");
  const pswText = newPassword.textContent;
  const textarea = document.createElement("textarea");
  textarea.value = pswText;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  document.querySelector(".copyPassword").textContent = "Password copied";
  // Set a timeout to reset the password copied to copy password message on button after 4 seconds
  setTimeout(resetCopiedpswd, 4000);
});

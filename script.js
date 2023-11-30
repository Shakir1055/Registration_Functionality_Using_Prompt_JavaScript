let userName = prompt("Enter your name:");
let phoneNumber = prompt("Enter your phone number:");
let email = prompt("Enter your email:");
let password = prompt("Enter your password:");
let confirmPassword = prompt("Confirm your password:");

if (userName === ''|| phoneNumber === '' || email === '' || password === '' || confirmPassword === '') {
    alert("Error: Please fill in all the input fields.");
} else {
    if (password === confirmPassword) {
        alert("You are successfully registered!");
    } else {
        alert("Error: Passwords do not match. Please make sure the password and confirm password are the same.");
    }
}
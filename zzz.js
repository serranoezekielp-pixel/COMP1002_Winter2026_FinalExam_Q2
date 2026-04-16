let name = document.getElementById('name').value;
let email = document.getElementById('email').value;
let dob = document.getElementById('dob').value;
let registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    let name = nameinput.value;

    message.textContent = "Thank you for registering, " + name + "!";
});
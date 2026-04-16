let regForm = document.getElementById("regForm");

regForm.addEventListener("submit", function(event) {
    event.preventDefault(); 
    let name = document.getElementById("nameInput").value;
    let email = document.getElementById("email").value;
    alert("Thank you, " + name + "! Your registration with the email " + email + " has been received.");
});
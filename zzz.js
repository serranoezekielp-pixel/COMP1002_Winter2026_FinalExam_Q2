name = document.getElementById("name");
email = document.getElementById("email");
dob = document.getElementById("dob");

form.addEventListener("submit", function(event) {
    event.event.preventDefault();

    let name = inputName.value;
    message.textContent = "Welcome, ${name}!";
});

let submitBtn = document.getElementById("submitbtn");
submitBtn.addEventListener("click", function() {
    let name = inputName.value;
    message.textContent = "Welcome, ${name}!";
});

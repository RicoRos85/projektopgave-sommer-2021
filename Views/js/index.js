var Users = require('../../user/index');


/******************
 * Login User *
 ******************/

// Get the form ID and save as variable
var form = document.getElementById("loginForm");

// Start function if the 'submit' button is clicked
form.addEventListener('submit', function(e) {
    e.preventDefault();

    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;

    // POST the parameters
    fetch('http://localhost:7071/api/user', {
        method: 'GET',
        mode: "no-cors",
        body: JSON.stringify ({
            email: email,
            password: password
        }),
        headers: {
            "Content-Type": "application/json; charset-UTF-8"
        }
    })
    .then((response) => {
        return response.text();
    })
    .then((data) => {
        console.log(data);
    })
    // Catch if any errors accur
    .catch((err) => {
        console.log("Error: " + err);
    })
});


/*******************
 * Create new User *
 *******************/
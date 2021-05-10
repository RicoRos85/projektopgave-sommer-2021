// TESTING PURPOSE
// module.exports = async function (context, req) {
//     context.log('JavaScript HTTP trigger function processed a request.');

//     const name = (req.query.name || (req.body && req.body.name));
//     const responseMessage = name
//         ? "Hello, " + name + ". This HTTP triggered function executed successfully."
//         : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

//     context.res = {
//         // status: 200, /* Defaults to 200 */
//         body: responseMessage
//     };
// }
const { Connection, Request, TYPES } = require('tedious');
//const { resolve } = require('node:path');
const db = require('../shared/db');

// Include Bcrypt
// const bcrypt = require('bcrypt');
// const saltRounds = 10;


module.exports = async function (context, req) {
    console.log('Javascript HTTP  trigger function processed a request');

    try {
        // Start connection to DB
        await db.startDB();
    } 
    // If we get an error
    catch(error) {
        console.log("Error connection to DB (user/index.js line 17): ", error.message)
    }
    switch(req.method) {
        // If we are using a GET request
        case 'GET':
            await get(context, req);
            break;
        // If we are using a POST request
        case 'POST':
            await post(context, req);
            break;
        // Else display a default text
        default:
            context.res = {
                body: "Please GET or POST"
            };
            break;
    }
}


async function createUSer(context, req) {
    console.log("Started inserting User to DB");

    const email = (req.query)
}

// Get data from DB
async function get(context, req) {
    try {
        let email = req.query.email;
        // Use 'select' from db.js
        let user = await db.select(email);
        context.res = {
            body: user
        }
    } 
    catch(error) {
        context.res = {
            status: 400,
            body: `No user - ${error.message}`
        }
    }
}


// Post data to DB
async function post(context, req) {
    try {
        let content = req.body;
        await db.insert(content);
        context.res = {
            body: {status: 'User created'}
        }
    } catch(error) {
        context.res = {
            status: 400,
            body: `Error: User was not created: ${error.message}`
        }
    }
}

// Create new User
async function createNewUser(firstName, email, pass, connection) {
    console.log("Test");

    const sql = "INSERT INTO eksamensopgave_tabeller.[User] (firstName, email, pass) VALUES (@firstName, @emial, @pass)"
    const request = new Request(sql, err => {
        if(err) {
            error(err)
        } else {
            resolve();
        }
    });
    request.addParameter('FirstName', TYPES.VarChar, firstName);
    request.addParameter('Email', TYPES.VarChar, email);
    request.addParameter('Password', TYPES.VarChar, pass);

    connection.execSql(request);

    const responseMessage = email
        ? "Hello, " + firstName + " " + email + " " + pass + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    // const sql = "INTO eksamensopgave_tabeller.[User] (firstName, email, pass) VALUES (" + firstName + ", " + email + ", " + pass + ")"
    // context.res = {
    //     // status: 200, /* Defaults to 200 */
    //     body: responseMessage
    // };
}

var form = document.getElementById("testForm")


form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log("Trykket på knap")
    

    createNewUser('Rico','mail','1234');


})
const db = require('../shared/db');

// Include Bcrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;


module.exports = async function (context, req) {
    context.log('Javascript HTTP  trigger function processed a request');

    try {
        // Start connection to DB
        await db.startDB();
    } 
    // If we get an error
    catch(error) {
        console.log("Error connection to DB (user/index.js line 32): ", error.message)
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
            body: {status: 'Succes'}
        }
    } catch(error) {
        context.res = {
            status: 400,
            body: error.message
        }
    }
}

async function createNewUser(email, password, connection) {

}



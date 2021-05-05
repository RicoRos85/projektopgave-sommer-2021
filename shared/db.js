const { Connection, Request, TYPES } = require('tedious');
const config = require('./config.json');


var connection = new Connection(config);

function startDB() {
    return new Promise((resolve, reject) => {
        connection.on('connect', (err) => {
            if (err) {
                console.log("Connection failed");
                reject(err);
                throw err;
            } else {
                console.log("Connected");
                resolve();
            }
        })
        connection.connect();
    });
}

// Make connection availeble globally
module.exports.sqlConnection = connection;

// Make startDB() available globally
module.exports.startDB = startDB;


function insert(payload) {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO eksamensopgave.eksamensopgave_tabeller.[User] (firstName, lastName, email, age, gender, sex, userDescription, pass) VALUES (@firstName, @lastName, @email, @age, @gender, @sex, @userDescription, @pass)`;
                     // INSERT INTO [user].user_likes (user_id, likes) VALUES ((SELECT id FROM [user].[user] WHERE name=@name), 0)`;
        const request = new Request(sql, (err) => {
            if(err) {
                reject(err);
                console.log(err);
            } 
        });
        request.addParameter('firstName', TYPES.VarChar, payload.firstName);
        request.addParameter('lastName', TYPES.VarChar, payload.lastName);
        request.addParameter('email', TYPES.VarChar, payload.email);
        request.addParameter('age', TYPES.VarChar, payload.age);
        request.addParameter('gender', TYPES.VarChar, payload.age);
        request.addParameter('sex', TYPES.VarChar, payload.age);
        request.addParameter('userDescription', TYPES.VarChar, payload.age);
        request.addParameter('pass', TYPES.VarChar, payload.age);

        request.on('requestCompleted', (row) => {
            console.log('User inserted', row);
            resolve('user inserted', row);
        });
        connection.execSql(request);
         
    });  
}
// Make insert() available globally
module.exports.insert = insert;


/*******************
 * Log in function *
 *******************/
function login(payload) {
    return new Promise((resolve, reject) => {

        // Create query for DB
        const sql = 'SELECT * FROM eksamensopgave.eksamensopgave_tabeller.[User]';
        // Make a Request to the DB using the Query
        const request = request = new Request(sql, (err, rowcount) => {
            // If an error happened
            if(err) {
                reject(err);
            // If no User was found
            } else if (rowcount == 0) {
                reject({message: 'User does not exsist.'});
            }
        });
        
        // Adding 'name' and the parameter @name
        // request.addParameter('name', TYPES.VarChar, name);

        request.on('row', (columns) => {
            resolve(columns)
        });
        connection.execSql(request);
    });
}

module.exports.login = login;


function select(email) {
    // Return promise with 'resolve' and 'reject'
    return new Promise((resolve, reject) => {

        const sql = 'SELECT * FROM eksamensopgave.eksamensopgave_tabeller.[User] WHERE email = @email';
        const request = new Request(sql, (err, rowcount) => {
            if (err) {
                reject(err);
                console.log(err);
            } else if (rowcount == 0) {
                reject({message: 'User does not exist'})
            }
        });
        // If everything goes well we are adding 'name' and the parameter @name
        request.addParameter('email', TYPES.VarChar, email);

        request.on('row', (columns) => {
            resolve(columns)
        });
        // Execute request
        connection.execSql(request);

    }); 
}

// Make select() available globally
module.exports.select = select;




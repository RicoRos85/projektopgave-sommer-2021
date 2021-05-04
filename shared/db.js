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
        const sql = `INSERT INTO [user].[user] (name, email, gender) VALUES (@name, @email, @gender);
                     INSERT INTO [user].user_likes (user_id, likes) VALUES ((SELECT id FROM [user].[user] WHERE name=@name), 0)`;
        const request = new Request(sql, (err) => {
            if(err) {
                reject(err);
                console.log(err);
            } 
        });
        request.addParameter('name', TYPES.VarChar, payload.name);
        request.addParameter('email', TYPES.VarChar, payload.email);
        request.addParameter('gender', TYPES.VarChar, payload.gender);

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


function select(name) {
    // Return promise with 'resolve' and 'reject'
    return new Promise((resolve, reject) => {

        const sql = 'SELECT [user].[user].id, [user].[user].name, [user].[user].email, [user].[user].gender, [user].user_likes.likes  FROM [user].[user]  INNER JOIN [user].user_likes ON [user].[user].id=[user].user_likes.user_id WHERE name = @name';
        const request = new Request(sql, (err, rowcount) => {
            if (err) {
                reject(err);
                console.log(err);
            } else if (rowcount == 0) {
                reject({message: 'User does not exist'})
            }
        });
        // If everything goes well we are adding 'name' and the parameter @name
        request.addParameter('name', TYPES.VarChar, name);

        request.on('row', (columns) => {
            resolve(columns)
        });
        connection.execSql(request);

    }); 
}

// Make select() available globally
module.exports.select = select;




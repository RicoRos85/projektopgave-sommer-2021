/**
 * The Class of all users within the app.
 * 
 * @class User
 * @constructor 
 * @extends none
 */

class User {
    constructor(firstname, lastname, location, matches, avatar) {
        this._firstname = firstname;
        this._lastname  = lastname;
        this._location  = location;
        this._matches   = matches;
        this._avatar    = avatar;
    }

    // Return the full name of the User
    fullname() { return this._firstname + " " + this._lastname; }

    // Validate if the User is logged in or out
    isLoggedIn() {}

    // Create the User and its Profile
    createProfile() {}
    
    // Update the User profile information
    updateProfile() {}

    // Delete the User profile    
    deleteProfile() {}
}

const rico = new User("Rico", "Rosenkrans");
console.log(rico.fullname());
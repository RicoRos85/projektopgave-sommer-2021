/**
 * The Class of all Users within the app.
 * 
 * @class User
 * @constructor 
 * @extends none
 */

class User {
    constructor(userid, firstname, lastname, age, location, matches, avatar) {
        this._userid    = userid;
        this._firstname = firstname;
        this._lastname  = lastname;
        this._age       = age;
        this._location  = location;
        this._matches   = matches;
        this._avatar    = avatar;
    }

    fixedLocation(location) {
        let locationOptions = [
            "København",        // 0
            "Storkøbenhavn",    // 1
            "Nordsjælland",     // 2
            "Sydsjælland",      // 3
            "Vestsjælland",     // 4
            "Fyn",              // 5
            "Sønderjylland",    // 6
            "Midtjylland",      // 7
            "Nordjylland"       // 8
        ]
        return locationOptions[location];
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



/* Creating a new User
 *
 * - @userid
 * - @firstname
 * - @lastname
 * - @age
 * - @location
 * - @matches
 * - @avatar   
 */
const user1 = new User(1, "Rico", "Rosenkrans", 18, 1, 2, "me.jpg");

// Testing functions
console.log(user1.fullname() + " bor i " + user1.fixedLocation(2) + ".");
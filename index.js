class User {
    constructor(firstname, lastname, location, matches, avatar) {
        this._firstname = firstname;
        this._lastname  = lastname;
        this._location  = location;
        this._matches   = matches;
        this._avatar    = avatar;
    }
    fullname() {
        return this._firstname + " " + this._lastname;
    }

    updateProfile() {}
    createProfile() {}
    deleteProfile() {}
}

const rico = new User("Rico", "Rosenkrans");
console.log(rico.fullname());
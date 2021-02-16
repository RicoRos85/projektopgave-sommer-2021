/**
 * The Class of all User Matches within the app.
 * 
 * @class Match
 * @constructor 
 * @extends none
 */

class Match {
    constructor(user1, user2, commonInterests, timeOfMatch) {
        this._user1           = user1;
        this._user2           = user2;
        this._commonInterests = commonInterests;
        this._timeOfMatch     = timeOfMatch;
    }

    // Remove a match
    unmatch() {}

    //
    message() {}
    
    // Calculate the distance between a match
    calculateDistance() {}
}
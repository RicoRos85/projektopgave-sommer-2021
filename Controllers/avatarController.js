/**
 * The Class of all User Avatars within the app.
 * 
 * @class Avatar
 * @constructor 
 * @extends none
 */

class Avatar {
    constructor(id, mimeType, path, size) {
        this._id       = id;
        this._mimeType = mimeType;
        this._path     = path;
        this._size     = size;
    }

    // Change (delete/upload) the avatar Image
    editPicture() {}

    // Upload a new Avatar Image
    uploadPicture() {}

    // Delete the Avatar Image
    deletePicture() {}
}
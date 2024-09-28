"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
var mongoose_1 = require("mongoose");
// Create a Schema corresponding to the document interface.
var UserSchema = new mongoose_1.Schema({
    id: { type: Number },
    name: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
    address: {
        street: String,
        suite: String,
        city: String,
        zipcode: String,
        geo: {
            lat: String,
            lng: String,
        }
    },
    phone: String,
    website: String,
    company: {
        name: String
    }
});
// Create a Model.
exports.UserModel = (0, mongoose_1.model)("User", UserSchema);

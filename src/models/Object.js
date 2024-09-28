"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectModel = void 0;
var mongoose_1 = require("mongoose");
var ObjectSchema = new mongoose_1.Schema({
    id: { type: Number },
    name: { type: String },
    price: { type: Number },
    description: { type: String }
});
exports.ObjectModel = (0, mongoose_1.model)("Object", ObjectSchema);

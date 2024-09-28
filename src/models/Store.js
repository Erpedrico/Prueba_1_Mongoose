"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreModel = void 0;
var mongoose_1 = require("mongoose");
var StoreSchema = new mongoose_1.Schema({
    id: { type: Number },
    objects: { type: mongoose_1.Schema.Types.ObjectId, ref: "Object" },
    name: { type: String },
    countries: { type: String }
});
exports.StoreModel = (0, mongoose_1.model)("Store", StoreSchema);

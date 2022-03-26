"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const DateSchema = new mongoose_1.default.Schema({
    status: {
        type: String,
        required: true
    },
    exclusiveDates: [{
            type: String,
            required: true
        }]
});
const Dates = mongoose_1.default.model(`tbl_dates`, DateSchema);
exports.default = Dates;

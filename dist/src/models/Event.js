"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const EventSchema = new mongoose_1.default.Schema({
    date: {
        type: String,
        required: true,
    },
});
const Event = mongoose_1.default.model(`tbl_accounts`, EventSchema);
exports.default = Event;

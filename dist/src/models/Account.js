"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const moment_1 = __importDefault(require("moment"));
const AccountSchema = new mongoose_1.default.Schema({
    role: {
        type: String,
    },
    yearLvl: {
        type: String
    },
    division: {
        type: String
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    timestamp: {
        type: Date,
        default: (0, moment_1.default)(new Date())
    }
});
const Account = mongoose_1.default.model(`tbl_accounts`, AccountSchema);
exports.default = Account;

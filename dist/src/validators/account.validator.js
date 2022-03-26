"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const AccountValidator = joi_1.default.object({
    role: joi_1.default.string(),
    yearLvl: joi_1.default.string(),
    division: joi_1.default.string(),
    email: joi_1.default.string().email().required(),
    name: joi_1.default.string().required(),
    password: joi_1.default.string().required().min(8)
});
exports.default = AccountValidator;

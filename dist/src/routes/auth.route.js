"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const export_1 = require("../controllers/export");
const { login, register } = export_1.AuthController;
const authRoute = express_1.default.Router();
authRoute.post(`/login`, login);
authRoute.post(`/signup`, register);
exports.default = authRoute;

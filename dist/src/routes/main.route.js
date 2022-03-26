"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mainRoute = express_1.default.Router();
mainRoute.get(`/`, (req, res) => {
    res.send(`Welcome to Sample API for PhilSci`);
});
exports.default = mainRoute;

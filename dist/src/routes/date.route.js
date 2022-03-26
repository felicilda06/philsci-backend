"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jwt_service_1 = require("../auth/jwt.service");
const export_1 = require("../controllers/export");
const jwtService = new jwt_service_1.JwtService();
const { verifyToken } = jwtService;
const { fetchDates, createDates } = export_1.EventController;
const dateRoute = express_1.default.Router();
dateRoute.get(`/date`, verifyToken, fetchDates);
dateRoute.post(`/date/add`, verifyToken, createDates);
exports.default = dateRoute;

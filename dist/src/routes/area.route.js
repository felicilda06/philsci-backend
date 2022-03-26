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
const { getAreas, createArea } = export_1.EventController;
const areaRoute = express_1.default.Router();
areaRoute.get(`/area`, verifyToken, getAreas);
areaRoute.post(`/area/add`, verifyToken, createArea);
exports.default = areaRoute;

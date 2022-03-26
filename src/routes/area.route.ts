import express from "express";
import { JwtService } from "../auth/jwt.service";
import { EventController } from "../controllers/export";

const jwtService = new JwtService();

const { verifyToken } = jwtService;

const { getAreas, createArea } = EventController;

const areaRoute = express.Router();

areaRoute.get(`/area`, verifyToken, getAreas);
areaRoute.post(`/area/add`, verifyToken,  createArea);

export default areaRoute;

import express from "express";
import { JwtService } from "../auth/jwt.service";
import { EventController } from "../controllers/export";

const jwtService = new JwtService();

const { verifyToken } = jwtService;

const { fetchDates, createDates } = EventController;

const dateRoute = express.Router();

dateRoute.get(`/date`, verifyToken, fetchDates);
dateRoute.post(`/date/add`, verifyToken, createDates);

export default dateRoute;

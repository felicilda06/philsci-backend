"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret_1 = require("../auth/secret");
const Date_1 = __importDefault(require("../models/Date"));
const Area_1 = __importDefault(require("../models/Area"));
const { secretkey } = secret_1.jwtKey;
const EventController = {
    createDates: (req, res) => {
        try {
            const { date, status } = req.body;
            const newDate = new Date_1.default({
                exclusiveDates: date,
                status,
            });
            //@ts-ignore
            //@ts-ignore
            jsonwebtoken_1.default.verify(req.token, secretkey, (err, data) => __awaiter(void 0, void 0, void 0, function* () {
                if (err) {
                    res.status(403).json({
                        status: 403,
                        error: err,
                    });
                }
                else {
                    yield newDate.save();
                    res.status(200).json({
                        status: 200,
                        message: `Dates Successfully Created`,
                        data,
                    });
                }
            }));
        }
        catch (err) {
            res.status(500).json({
                message: err,
            });
        }
    },
    createArea: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { area } = req.body;
            const newArea = new Area_1.default({
                area: area,
            });
            //@ts-ignore
            jsonwebtoken_1.default.verify(req.token, secretkey, (err, data) => __awaiter(void 0, void 0, void 0, function* () {
                if (err) {
                    res.status(403).json({
                        status: 403,
                        error: err,
                    });
                }
                else {
                    yield newArea.save();
                    res.status(200).json({
                        status: 200,
                        message: `Area Successfully Created`,
                        newArea,
                    });
                }
            }));
        }
        catch (err) {
            res.status(500).json({
                message: err,
            });
        }
    }),
    getAreas: (req, res) => {
        try {
            //@ts-ignore
            jsonwebtoken_1.default.verify(req.token, secretkey, (err, data) => {
                if (err) {
                    res.status(403).json({
                        status: 403,
                        error: err,
                    });
                }
                else {
                    Area_1.default.find()
                        .then((result) => {
                        res.status(200).json({
                            status: 200,
                            result,
                            data,
                        });
                    })
                        .catch((err) => {
                        return err;
                    });
                }
            });
        }
        catch (err) {
            res.status(500).json({
                message: err,
            });
        }
    },
    fetchDates: (req, res) => {
        try {
            //@ts-ignore
            jsonwebtoken_1.default.verify(req.token, secretkey, (err, data) => {
                if (err) {
                    res.status(403).json({
                        status: 403,
                        error: err,
                    });
                }
                else {
                    Date_1.default.find()
                        .then((result) => {
                        res.status(200).json({
                            status: 200,
                            result,
                            data,
                        });
                    })
                        .catch((err) => {
                        return err;
                    });
                }
            });
        }
        catch (err) {
            res.status(500).json({
                message: err,
            });
        }
    },
};
exports.default = EventController;

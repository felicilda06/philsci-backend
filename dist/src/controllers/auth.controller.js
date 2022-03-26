"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const Account_1 = __importDefault(require("../models/Account"));
const bcrypt = __importStar(require("bcrypt"));
const export_1 = require("../validators/export");
const jwt_service_1 = require("../auth/jwt.service");
const jwtService = new jwt_service_1.JwtService();
const AuthController = {
    login: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const validate = (0, export_1.Validator)(req.body, `login`);
        try {
            const { email, password } = req.body;
            const [isEmailExist] = yield Account_1.default.find({
                email: email
            });
            if (Object.keys(validate).length !== 0) {
                res.status(422).json({
                    status: 422,
                    message: validate
                });
                return;
            }
            if (!isEmailExist) {
                res.status(409).json({
                    status: 409,
                    message: `Email does'nt exist.`
                });
                return;
            }
            bcrypt.compare(password, isEmailExist.password, (_err, isMatch) => __awaiter(void 0, void 0, void 0, function* () {
                if (!isMatch) {
                    res.status(409).json({
                        status: 409,
                        message: `Incorrect Password.`
                    });
                }
                else {
                    const jwt = yield jwtService.createAccessToken(isEmailExist)
                        .catch(error => {
                        next(error);
                    });
                    res.status(200).json({
                        status: 200,
                        message: jwt
                    });
                }
            }));
        }
        catch (err) {
            res.status(500).json({
                message: err
            });
        }
    }),
    register: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const validate = (0, export_1.Validator)(req.body, `register`);
        const { role, name, email, password, yearLvl, division } = req.body;
        const salt = 10;
        const [isEmailExist] = yield Account_1.default.find({
            email: email
        });
        try {
            bcrypt.hash(password, salt, (_err, encryptedPass) => __awaiter(void 0, void 0, void 0, function* () {
                const addUser = new Account_1.default({
                    role: role,
                    yearLvl: yearLvl,
                    division: division,
                    name: name,
                    email: email,
                    password: encryptedPass
                });
                if (isEmailExist) {
                    res.status(409).json({
                        status: 409,
                        message: `Email Already Exist`
                    });
                    return;
                }
                if (Object.keys(validate).length !== 0) {
                    res.status(422).json({
                        status: 422,
                        message: validate
                    });
                }
                else {
                    yield addUser.save();
                    res.status(200).json({
                        status: 200,
                        message: `You have successully register to Portal`
                    });
                }
            }));
        }
        catch (err) {
            res.status(500).json({
                message: err
            });
        }
    })
};
exports.default = AuthController;

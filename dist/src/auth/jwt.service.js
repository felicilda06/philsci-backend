"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtService = void 0;
const secret_1 = require("../auth/secret");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const { secretkey } = secret_1.jwtKey;
class JwtService {
    verifyToken(req, res, next) {
        try {
            const bearerHeader = req.headers.authorization;
            const bearer = bearerHeader === null || bearerHeader === void 0 ? void 0 : bearerHeader.split(` `);
            const bearerToken = bearer[1];
            if (bearerToken !== undefined) {
                //@ts-ignore
                req.token = bearerToken;
                next();
            }
            else {
                res.status(403).json({
                    status: 403,
                    error: `Forbidden`,
                });
            }
        }
        catch (err) {
            res.status(403).json({
                status: 403,
                error: `Forbidden`,
            });
        }
    }
    createAccessToken(data) {
        const user = {
            _id: data._id,
            role: data.role,
        };
        return new Promise((reject, resolve) => {
            jsonwebtoken_1.default.sign(user, secretkey, (err, token) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(token);
                    return token;
                }
            });
        }).catch((response) => {
            return response;
        });
    }
}
exports.JwtService = JwtService;

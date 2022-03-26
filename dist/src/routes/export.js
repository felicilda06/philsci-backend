"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.areaRoute = exports.dateRoute = exports.authRoute = exports.mainRoute = void 0;
var main_route_1 = require("./main.route");
Object.defineProperty(exports, "mainRoute", { enumerable: true, get: function () { return __importDefault(main_route_1).default; } });
var auth_route_1 = require("./auth.route");
Object.defineProperty(exports, "authRoute", { enumerable: true, get: function () { return __importDefault(auth_route_1).default; } });
var date_route_1 = require("./date.route");
Object.defineProperty(exports, "dateRoute", { enumerable: true, get: function () { return __importDefault(date_route_1).default; } });
var area_route_1 = require("./area.route");
Object.defineProperty(exports, "areaRoute", { enumerable: true, get: function () { return __importDefault(area_route_1).default; } });

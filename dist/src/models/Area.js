"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const AreaSchema = new mongoose_1.default.Schema({
    area: {
        type: String,
        required: true,
    },
});
const Areas = mongoose_1.default.model(`tbl_areas`, AreaSchema);
exports.default = Areas;

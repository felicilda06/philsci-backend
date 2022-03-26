"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const export_1 = require("./src/routes/export");
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config/config"));
const body_parser_1 = __importDefault(require("body-parser"));
require(`dotenv`).config();
const { PORT } = process.env;
const { conn_string, configurations } = config_1.default;
const app = (0, express_1.default)();
const port = 4000 || PORT;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(export_1.mainRoute);
app.use(export_1.authRoute);
app.use(export_1.dateRoute);
app.use(export_1.areaRoute);
//@ts-ignore
mongoose_1.default.connect(conn_string, configurations).then(() => {
    app.listen(port, () => {
        console.info(`Server is listening on port ${port}`);
    });
}).catch((err) => {
    console.error(err.message);
});

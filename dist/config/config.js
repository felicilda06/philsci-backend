"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require(`dotenv`).config();
const { CONN_STRING } = process.env;
const MONGO_CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
const config = {
    conn_string: CONN_STRING,
    configurations: MONGO_CONFIG
};
exports.default = config;

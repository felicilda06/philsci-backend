"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateRegister = void 0;
const regExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const ValidateRegister = (data) => {
    if (data.email === ``) {
        return {
            message: `Email is required.`
        };
    }
    else if (!regExp.test(data.email)) {
        return {
            message: `Must be a valid email.`
        };
    }
    if (data.name === ``) {
        return {
            message: `Name is required.`
        };
    }
    if (data.password === ``) {
        return {
            message: `Password is required.`
        };
    }
    if (data.confirmPass === ``) {
        return {
            message: `Please confirm password.`
        };
    }
    else if (data.confirmPass !== data.password) {
        return {
            message: `Password does'nt match.`
        };
    }
};
exports.ValidateRegister = ValidateRegister;
exports.default = exports.ValidateRegister;

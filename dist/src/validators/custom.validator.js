"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regExpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const Validator = (data, component) => {
    const errors = {};
    if (component === `login`) {
        if (data.email === ``) {
            errors.email = `Email address is required.`;
        }
        else if (!regExpEmail.test(data.email)) {
            errors.email = `Must be a valid email.`;
        }
        if (data.password === ``) {
            errors.password = `Password is required.`;
        }
        return errors;
    }
    else if (component === `register`) {
        if (data.email === ``) {
            errors.email = `Email address is required.`;
        }
        else if (!regExpEmail.test(data.email)) {
            errors.email = `Must be a valid email.`;
        }
        if (data.name === ``) {
            errors.name = `Name is required.`;
        }
        if (data.password === ``) {
            errors.password = `Password is required.`;
        }
        if (data.confirmPass === ``) {
            errors.confirmPass = `Please confirm password.`;
        }
        else if (data.confirmPass !== data.password) {
            errors.confirmPass = `Password does'nt match.`;
        }
        return errors;
    }
};
exports.default = Validator;

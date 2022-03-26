"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const ValidateRegister = (data, component) => {
    const errors = {};
    switch (component) {
        case `login`:
            {
            }
            break;
        case `register`:
            {
                if (data.email === ``) {
                    errors.email = `Email address is required.`;
                }
                else if (!regExp.test(data.email)) {
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
            }
            break;
        default: { }
    }
    return errors;
};
exports.default = ValidateRegister;

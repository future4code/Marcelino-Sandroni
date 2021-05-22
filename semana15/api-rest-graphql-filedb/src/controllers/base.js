"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class BaseController {
    constructor() {
        this.app = express_1.default();
        this.app.get('/', (req, res, next) => {
            console.log('oi');
            res.send('oi');
            next();
        });
    }
    requestContainer() {
        try {
            this.requestHandler();
        }
        catch (e) {
            this.error(e);
        }
    }
    requestHandler() { }
    error() { }
}
exports.default = BaseController;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = __importDefault(require("../models/users"));
const BaseController_1 = __importDefault(require("./BaseController"));
class UserController extends BaseController_1.default {
    constructor() {
        super();
        this.loadUsers(users_1.default);
    }
    loadUsers() {
        const Users;
    }
    userList(req, res) {
        res.send('userList');
    }
    userCreate(req, res) {
        res.send('userCreate');
    }
    userRead(req, res) {
        res.send('userRead');
    }
    userUpdate(req, res) {
        res.send('userUpdate');
    }
    userDelete(req, res) {
        res.send('userDelete');
    }
    userSearch(req, res) {
        res.send('userDelete');
    }
    userVerify(req, res) {
        console.log(req.query);
    }
}
exports.default = UserController;

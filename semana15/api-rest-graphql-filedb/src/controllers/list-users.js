"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = __importDefault(require("../models/users"));
const base_1 = __importDefault(require("./base"));
var DbStatus;
(function (DbStatus) {
    DbStatus[DbStatus["disconnected"] = 0] = "disconnected";
    DbStatus[DbStatus["connected"] = 1] = "connected";
})(DbStatus || (DbStatus = {}));
class UserController extends base_1.default {
    constructor() {
        super();
        this.isDBConnected = () => !!this.database;
        this.loadUsersModel();
    }
    verifyConnection() {
        if (!this.database) {
            throw new Error('Banco de dados nao carregado ainda...');
        }
    }
    async loadUsersModel() {
        this.database = await new users_1.default();
    }
    async loadUsers() {
        this.verifyConnection();
        this.users = await this.database.getUsers();
    }
    async userList(_, res) {
        this.verifyConnection();
        const users = await this.database.getUsers();
        res.send({ message: 'Users here', users });
    }
}
exports.default = UserController;

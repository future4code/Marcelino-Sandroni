"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRole = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "ADMIN";
    UserRole["Normal"] = "NORMAL";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
class Users {
    constructor() {
        this.getUsers = () => this.users;
        this.users = [
            {
                id: 1,
                name: 'Marcelino',
                type: UserRole.Admin,
                age: 29
            },
            {
                id: 2,
                name: 'Alice',
                type: UserRole.Normal,
                age: 30
            }
        ];
    }
    generateID() {
        const id = 0;
    }
    saveToFile() {
        const db = {
            path: path_1.default.resolve(__dirname, '../database/usersdb.json')
        };
        fs_1.default.writeFile('');
    }
}
exports.default = Users;

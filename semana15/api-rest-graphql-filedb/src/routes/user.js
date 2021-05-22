"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const list_users_1 = __importDefault(require("../controllers/list-users"));
const userRoute = express_1.default.Router();
const Controller = new list_users_1.default();
userRoute.route('/').get(Controller.userList).post(Controller.userCreate);
userRoute
    .route('/:id')
    .all(Controller.userVerify)
    .get(Controller.userRead)
    .put(Controller.userUpdate)
    .delete(Controller.userDelete);
userRoute.route('/search').get(Controller.userSearch);
exports.default = userRoute;

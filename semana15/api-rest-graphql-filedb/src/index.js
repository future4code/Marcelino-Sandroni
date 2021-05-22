"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const https_1 = __importDefault(require("https"));
const server_1 = __importDefault(require("./server"));
const colors_1 = __importDefault(require("colors"));
const config_1 = __importDefault(require("./config"));
colors_1.default.enable();
const message = (protocol, port) => console.log(`${protocol} server ON port ${port}`.green);
const setup = (count) => {
    const { port, servers } = config_1.default;
    const { protocol, portChange } = servers[count];
    const setupPort = portChange ? port + portChange : port;
    return [setupPort, () => message(protocol, setupPort)];
};
const servers = [http_1.default.createServer(server_1.default), https_1.default.createServer(server_1.default)];
servers.forEach((server, count) => server.listen(...setup(count)));
console.log(`Server Name: ${config_1.default.name}`.blue);
console.log(config_1.default.fileDB.path);

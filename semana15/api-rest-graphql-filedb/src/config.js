"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    name: (_a = process.env.npm_package_name) === null || _a === void 0 ? void 0 : _a.toUpperCase().replace(/-/g, ' '),
    port: Number(process.env.PORT) || 3001,
    servers: [
        { protocol: 'HTTP', portChange: false },
        { protocol: 'HTTPS', portChange: 100 },
        { protocol: 'GRAPHQL', portChange: false }
    ],
    graphql: {
        playground: true
    },
    fileDB: {
        path: process.cwd()
    }
};
exports.default = config;

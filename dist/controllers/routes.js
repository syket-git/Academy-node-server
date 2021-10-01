"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const student_controller_1 = require("./student.controller");
let routes = [
    {
        http: 'get',
        path: '/dictionary',
        handler: (req, res) => {
            res.send(`This is a dictionary method`);
        },
    },
    ...student_controller_1.routes,
];
let router = express_1.default.Router();
routes.forEach((route) => {
    router[route.http](route.path, route.handler);
});
exports.default = router;
//# sourceMappingURL=routes.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
exports.routes = [
    {
        http: 'get',
        path: '/dictionary',
        handler: (req, res) => {
            res.send(`This is a dictionary method`);
        },
    },
];
//# sourceMappingURL=routes.js.map
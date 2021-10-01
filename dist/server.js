"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./controllers/routes"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const mongooseSetup = () => __awaiter(void 0, void 0, void 0, function* () {
    const uri = 'mongodb://127.0.0.1:27017/academyNodeServer';
    const options = {
        useFindAndModify: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    };
    yield mongoose_1.default
        .connect(uri, options)
        .then(() => console.log('Mongodb Connected'))
        .catch((err) => console.log(err));
});
const init = () => {
    let app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use((0, cors_1.default)());
    app.use('/api', routes_1.default);
    app.use('/', (req, res) => {
        res.send('Hey! Today is: ' + new Date());
    });
    return app;
};
const app = init();
// Connect with mongodb
mongooseSetup();
const port = 5000;
app.listen(port, () => {
    console.log(`I am listening on port ${port}`);
});
//# sourceMappingURL=server.js.map
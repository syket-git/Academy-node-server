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
exports.save = exports.getAll = exports.studentDocument = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const studentSchema = new Schema({
    name: { type: String },
    email: { type: String },
    phone: { type: String },
}, { timestamps: true });
exports.studentDocument = mongoose_1.default.model('Student', studentSchema, 'Students');
const convert = (model) => {
    let vm = Object.assign({}, JSON.parse(JSON.stringify(model)));
    return vm;
};
const getAll = (collection) => __awaiter(void 0, void 0, void 0, function* () {
    const models = yield collection.find().exec();
    // const vms: any = students.map((student) => convert(student));
    return models;
});
exports.getAll = getAll;
const save = (collection, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const savedObj = yield collection.create(payload);
    return savedObj;
});
exports.save = save;
//# sourceMappingURL=student.service.js.map
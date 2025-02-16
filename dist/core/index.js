"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerPrompts = exports.registerFiglet = exports.registerException = void 0;
var registerException_1 = require("./registerException");
Object.defineProperty(exports, "registerException", { enumerable: true, get: function () { return __importDefault(registerException_1).default; } });
var registerFiglet_1 = require("./registerFiglet");
Object.defineProperty(exports, "registerFiglet", { enumerable: true, get: function () { return __importDefault(registerFiglet_1).default; } });
var registerPrompts_1 = require("./registerPrompts");
Object.defineProperty(exports, "registerPrompts", { enumerable: true, get: function () { return __importDefault(registerPrompts_1).default; } });

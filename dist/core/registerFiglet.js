"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
var figlet_1 = __importDefault(require("figlet"));
var picocolors_1 = __importDefault(require("picocolors"));
/**
 * ASCII 艺术字
 */
function default_1() {
    var figletText = figlet_1.default.textSync('zxiaosi', { horizontalLayout: 'full' });
    console.log(picocolors_1.default.green(figletText));
}

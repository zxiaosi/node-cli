"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var figlet_1 = __importDefault(require("figlet"));
var picocolors_1 = __importDefault(require("picocolors"));
var CLI = /** @class */ (function () {
    function CLI(appPath) {
        this.appPath = appPath || process.cwd();
    }
    CLI.prototype.run = function () {
        var figletText = figlet_1.default.textSync('zxiaosi', { horizontalLayout: 'full' });
        console.log(picocolors_1.default.green(figletText));
    };
    return CLI;
}());
exports.default = CLI;
//# sourceMappingURL=index.js.map
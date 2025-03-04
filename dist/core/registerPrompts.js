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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
var path_1 = __importDefault(require("path"));
var prompts_1 = require("@inquirer/prompts");
var picocolors_1 = __importDefault(require("picocolors"));
var utils_1 = require("../utils");
var modeItems = [
    { name: '本地模板', value: 'local' },
    { name: '远程模板(Github)', value: 'github' },
    { name: '远程模板(Gitee)', value: 'gitee' },
];
var outputPath = path_1.default.join(process.cwd(), process.env.NODE_ENV === 'development' ? 'output' : '');
/**
 * 命令交互逻辑
 */
function default_1() {
    return __awaiter(this, void 0, void 0, function () {
        var mode, _a, _b, origin_1, branches, template, result, templateSource, err_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, (0, prompts_1.select)({
                        message: '请选择获取模板的方式',
                        choices: modeItems,
                    })];
                case 1:
                    mode = _c.sent();
                    _a = mode;
                    switch (_a) {
                        case 'local': return [3 /*break*/, 2];
                        case 'github': return [3 /*break*/, 3];
                        case 'gitee': return [3 /*break*/, 3];
                    }
                    return [3 /*break*/, 11];
                case 2:
                    {
                        console.log(picocolors_1.default.yellow('功能正在完善中...'));
                        return [3 /*break*/, 11];
                    }
                    _c.label = 3;
                case 3: return [4 /*yield*/, (0, utils_1.handleGitBranches)()];
                case 4:
                    _b = _c.sent(), origin_1 = _b.origin, branches = _b.branches;
                    return [4 /*yield*/, (0, prompts_1.select)({
                            message: '请选择要获取的模板',
                            choices: branches,
                        })];
                case 5:
                    template = _c.sent();
                    _c.label = 6;
                case 6:
                    _c.trys.push([6, 9, , 10]);
                    return [4 /*yield*/, (0, utils_1.handleCheckFolder)(outputPath)];
                case 7:
                    result = _c.sent();
                    if (!result)
                        return [2 /*return*/];
                    templateSource = "https://".concat(origin_1, ".com/zxiaosi/lerna-project.git");
                    return [4 /*yield*/, (0, utils_1.handleDownloadZip)(templateSource, template, outputPath)];
                case 8:
                    _c.sent();
                    return [3 /*break*/, 10];
                case 9:
                    err_1 = _c.sent();
                    throw new Error(err_1);
                case 10: return [3 /*break*/, 11];
                case 11: return [2 /*return*/];
            }
        });
    });
}

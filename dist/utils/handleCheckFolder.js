"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
var fs_1 = __importDefault(require("fs"));
var ora_1 = __importDefault(require("ora"));
/** 检测文件夹是否为空 */
function default_1(path) {
    var spinner = (0, ora_1.default)('检测文件夹是否为空...').start();
    return new Promise(function (resolve, reject) {
        fs_1.default.readdir(path, function (err, files) {
            if (err) {
                spinner.fail("\u68C0\u6D4B\u6587\u4EF6\u5939\u5931\u8D25\uFF01");
                return reject('exit');
            }
            if (files.length !== 0) {
                spinner.fail("\u5F53\u524D\u6587\u4EF6\u5939\u4E0D\u4E3A\u7A7A\uFF01");
                return reject('exit');
            }
            spinner.stop();
            return resolve(true);
        });
    });
}

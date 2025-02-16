"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
/**
 * 异常捕获
 */
function default_1() {
    process.on('uncaughtException', function (error) {
        var name = error.name, message = error.message;
        if (message.includes('User force closed the prompt')) {
            console.log('\n👋 Until next time!\n');
        }
        else {
            if (error.message !== 'exit') {
                console.log('\n🤖 Uncaught error!\n', error.message);
            }
            process.exit(1); // 退出程序
        }
    });
}

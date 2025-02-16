/**
 * 异常捕获
 */
export default function () {
  process.on('uncaughtException', (error) => {
    const { name, message } = error;

    if (message.includes('User force closed the prompt')) {
      console.log('\n👋 Until next time!\n');
    } else {
      if (error.message !== 'exit') {
        console.log('\n🤖 Uncaught error!\n', error.message);
      }

      process.exit(1); // 退出程序
    }
  });
}

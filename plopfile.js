module.exports = function (plop) {
  plop.setGenerator('hello', {
    description: '生成一个 hello.js 文件',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '请输入你的名字: ',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'output/hello.js',
        templateFile: 'templates/hello.hbs',
      },
    ],
  });
};

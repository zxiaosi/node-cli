module.exports = function (plop) {
  plop.setGenerator('hello', {
    description: '生成一个 js 文件',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '请输入文件名: ',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'output/{{name}}.js',
        templateFile: 'templates/hello.hbs',
      },
    ],
  });
};

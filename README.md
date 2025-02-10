## 项目搭建

### 初始化项目

```bash
npm init -y
```

### 配置 [plop](https://www.npmjs.com/package/plop)

- 安装 `plop`

  ```bash
  npm install --save-dev plop
  ```

- 修改 `plopfile.js` 文件内容如下

  ```js
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
  ```

- 修改 `templates/hello.hbs` 文件内容如下

  ```hbs
  console.log("Hello, {{name}}! Welcome to Plop CLI.");
  ```

- 修改 `package.json` 文件内容如下

  ```json
  {
    ... // 省略其他配置
    "scripts": {
      "plop": "plop"
    },
  }
  ```

- 运行 `Node Cli`

  ```bash
  npm plop
  ```

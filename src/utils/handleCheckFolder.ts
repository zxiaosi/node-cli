import fs from 'fs';

import ora from 'ora';

/** 检测文件夹是否为空 */
export default function (path: string) {
  const spinner = ora('检测文件夹是否为空...').start();
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => {
      if (err) {
        spinner.fail(`检测文件夹失败！`);
        return reject('exit');
      }

      if (files.length !== 0) {
        spinner.fail(`当前文件夹不为空！`);
        return reject('exit');
      }

      spinner.stop();
      return resolve(true);
    });
  });
}

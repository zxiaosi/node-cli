import chokidar from 'chokidar';
import * as path from 'node:path';

import ora from 'ora';
import { simpleGit, SimpleGit } from 'simple-git';
import pc from 'picocolors';

const git: SimpleGit = simpleGit({
  // progress({ method, stage, progress, processed, total }) {
  //   console.log(
  //     `git.${method} ${stage} stage ${progress}% complete, ${processed}/${total}`
  //   );
  // },
});

/**
 * 下载 zip 文件
 * @param templateSource 模板源
 * @param branch 分支
 * @param outputPath 输出路径
 */
export default function (
  templateSource: string,
  branch: string,
  outputPath: string
) {
  const spinner = ora(`正在从 ${templateSource} 拉取远程模板...`).start();

  // 监听文件变化
  const watcher = chokidar.watch(outputPath, {
    persistent: true,
    ignoreInitial: true, // 不监听初始状态，只监听后续变化
  });

  // 监听新文件创建
  watcher.on('add', (filePath) => {
    const fileName = path.relative(outputPath, filePath);
    if (fileName.includes('.git')) return; // 忽略 .git 文件夹
    spinner.succeed(pc.bold(`创建文件: ${fileName}`));
  });

  return new Promise<void>(async (resolve, reject) => {
    git
      .clone(templateSource, outputPath, { '--branch': branch })
      .then((resp) => {
        watcher.close(); // 关闭监听
        spinner.succeed(`拉取远程模板成功！`);
        resolve();
      })
      .catch((err) => {
        spinner.fail(`拉取远程模板失败！`);
        reject('exit');
      });
  });
}

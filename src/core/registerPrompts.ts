import path from 'path';

import { select } from '@inquirer/prompts';
import pc from 'picocolors';

import {
  handleCheckFolder,
  handleDownloadZip,
  handleGitBranches,
} from '../utils';

const modeItems = [
  { name: '本地模板', value: 'local' },
  { name: '远程模板(Github)', value: 'github' },
  { name: '远程模板(Gitee)', value: 'gitee' },
];

const outputPath = path.join(process.cwd(), 'output');

/**
 * 命令交互逻辑
 */
export default async function () {
  const mode = await select({
    message: '请选择获取模板的方式',
    choices: modeItems,
  });

  switch (mode) {
    case 'local': {
      console.log(pc.yellow('功能正在完善中...'));
      break;
    }
    case 'github':
    case 'gitee': {
      const { origin, branches } = await handleGitBranches();

      const template = await select({
        message: '请选择要获取的模板',
        choices: branches,
      });

      try {
        const result = await handleCheckFolder(outputPath);
        if (!result) return;

        const templateSource = `https://${origin}.com/zxiaosi/lerna-project.git`;
        await handleDownloadZip(templateSource, template, outputPath);
      } catch (err: any) {
        throw new Error(err);
      }

      break;
    }
  }
}

import axios from 'axios';
import ora from 'ora';

const gethubApi = 'https://api.github.com/repos/zxiaosi/lerna-project/branches';
const giteeApi =
  'https://gitee.com/api/v5/repos/zxiaosi/lerna-project/branches';

const spinner = ora('正在获取远程模板...');

/** 处理接口返回数据 */
const handleData = (origin: 'github' | 'gitee', data: any[]) => {
  spinner.stop();

  const branches = data
    ?.map((item: any) => ({ name: item.name, value: item.name }))
    ?.filter((item: any) => item.name !== 'master');

  return { origin, branches };
};

/**
 * 获取远程仓库的所有分支名
 */
export default async function () {
  spinner.start();

  try {
    const resp = await axios.get(gethubApi);
    return handleData('github', resp.data);
  } catch (err) {
    try {
      const resp = await axios.get(giteeApi);
      return handleData('gitee', resp.data);
    } catch (err) {
      spinner.fail('获取远程模板失败！');
      throw new Error('Get remote template failed!');
    }
  }
}

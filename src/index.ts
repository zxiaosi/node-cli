import figlet from 'figlet';
import pc from 'picocolors';

export default class CLI {
  appPath: string;

  constructor(appPath: any) {
    this.appPath = appPath || process.cwd();
  }

  run() {
    const figletText = figlet.textSync('zxiaosi', { horizontalLayout: 'full' });
    console.log(pc.green(figletText));
  }
}

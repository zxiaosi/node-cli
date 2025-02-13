import figlet from 'figlet';

export default class CLI {
  appPath: string;

  constructor(appPath: any) {
    this.appPath = appPath || process.cwd();
  }

  run() {
    const figletText = figlet.textSync('zxiaosi', { horizontalLayout: 'full' });
    console.log(figletText);
  }
}

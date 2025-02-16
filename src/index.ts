import { registerFiglet, registerException, registerPrompts } from './core';

/** Node CLI */
export default class CLI {
  appPath: string;

  constructor(appPath: any) {
    this.appPath = appPath || process.cwd();

    registerException();
    registerFiglet();
  }

  async run() {
    await registerPrompts();
  }
}

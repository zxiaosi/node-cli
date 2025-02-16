import figlet from 'figlet';
import pc from 'picocolors';

/**
 * ASCII 艺术字
 */
export default function () {
  const figletText = figlet.textSync('zxiaosi', { horizontalLayout: 'full' });
  console.log(pc.green(figletText));
}

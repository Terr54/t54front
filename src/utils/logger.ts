import { isDebug, setDebug } from '../storage/local.storage';

export const initLogger = () => {
  window.LOGS = [];
  window.setDebug = setDebug;
  window.logger = {
    tag: (tag: string, color?: string) => ({
      log: (message?: string, ...args: any) => {
        window.LOGS.push(`${tag}: ${new Date().toLocaleString()} ${message}`);
        if (isDebug()) {
          const logArgs = [`%c${tag}: ${new Date().toLocaleString()} %s`, `background:${color ?? '#88f'}`];
          if (message) {
            logArgs.push(`%c ${message}`);
            logArgs.push(`color:${color ?? '#88f'}`);
          }
          console.log(...logArgs, ...args);
        } else {
          console.log = () => {};
        }
      }
    })
  };
};

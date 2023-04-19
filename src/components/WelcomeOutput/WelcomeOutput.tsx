import { Divider, Link } from '../../shared/ui';

export const WelcomeOutput = () => (
  <div>
    <pre className="max-xs:text-[10px] max-xs:leading-[12px] max-sm:text-xs max-sm:leading-[14px]">
      {[
        ' __          __         _                                   ',
        ' \\ \\        / /        | |                                  ',
        '  \\ \\  /\\  / /    ___  | |   ___    ___    _ __ ___     ___ ',
        "   \\ \\/  \\/ /    / _ \\ | |  / __|  / _ \\  | '_ ` _ \\   / _ \\",
        '    \\  /\\  /    |  __/ | | | (__  | (_) | | | | | | | |  __/',
        '     \\/  \\/      \\___| |_|  \\___|  \\___/  |_| |_| |_|  \\___|',
        '                                                            ',
      ].join('\n')}
    </pre>
    <div className="pt-[24px] leading-[21px]">
      <p>Добро пожаловать на мой сайт-визитку, выполненный в стиле терминала</p>
      <Divider />
      <p>
        Исходный код этого проекта расположен в{' '}
        <Link
          href="https://github.com/densz7/densz7.github.io"
          target="_blank"
          rel="noreferrer"
        >
          GitHub-репозитории
        </Link>
      </p>
      <Divider />
      <p>
        Список всех доступных команд выводится по команде `
        <span className="text-command">help</span>`
      </p>
    </div>
  </div>
);

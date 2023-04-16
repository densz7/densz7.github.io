import { Link } from '../../shared/ui';

const Divider = () => <div>–––––</div>;

export const WelcomeOutput = () => (
  <div>
    <pre>
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
    <div className="pt-[12px] leading-[21px]">
      <p>Добро пожаловать на мой сайт-портфолио, выполненный в стиле терминала</p>
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

import { CommandId } from '../../../features/command';

const commands = [
  { name: CommandId.ABOUT, description: 'обо мне' },
  { name: CommandId.GITHUB, description: 'мой GitHub аккаунт' },
  { name: CommandId.EMAIL, description: 'узнать мой email' },
  { name: CommandId.HELP, description: 'выводит все доступные команды' },
  { name: CommandId.CLEAR, description: 'очистить терминал' },
];

export const HelpOutput = () => {
  return (
    <ul>
      {commands.map((command, index) => (
        <li
          key={index}
          className="pb-[8px] flex min-w-[340px] max-w-max"
        >
          <span className="inline-block min-w-[200px] text-command">{command.name}</span>
          <span>- {command.description}</span>
        </li>
      ))}
    </ul>
  );
};

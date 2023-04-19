import { CommandId } from '../../../features/command';

const commands = [
  { name: CommandId.ABOUT, description: 'обо мне' },
  { name: CommandId.SKILLS, description: 'мои хард-скиллы' },
  { name: CommandId.EDUCATION, description: 'образование' },
  { name: CommandId.GITHUB, description: 'мой GitHub аккаунт' },
  { name: CommandId.SOCIALS, description: 'мои социальные сети' },
  { name: CommandId.EMAIL, description: 'узнать мой email' },
  { name: CommandId.HELP, description: 'выводит все доступные команды' },
  { name: CommandId.HISTORY, description: 'выводит историю команд' },
  { name: CommandId.CLEAR, description: 'очистить терминал' },
];

export const HelpOutput = () => {
  return (
    <ul>
      {commands.map((command, index) => (
        <li
          key={index}
          className="pb-[8px] flex"
        >
          <span className="inline-block max-sm:min-w-[95px] min-w-[200px] text-command">
            {command.name}
          </span>
          <span>- {command.description}</span>
        </li>
      ))}
    </ul>
  );
};

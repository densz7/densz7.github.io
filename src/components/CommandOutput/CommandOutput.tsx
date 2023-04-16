import { useMemo } from 'react';

import { CommandId } from '../../features/command';

import { HelpOutput } from './HelpOutput';
import { AboutOutput } from './AboutOutput';
import { GithubOutput } from './GithubOutput';
import { EmailOutput } from './EmailOutput';

interface ICommandOutputProps {
  inputValue: string;
}

export const CommandOutput = ({ inputValue }: ICommandOutputProps) => {
  const commandComponentMap: Record<
    Exclude<CommandId, CommandId.CLEAR>,
    JSX.Element
  > = useMemo(() => {
    return {
      [CommandId.ABOUT]: <AboutOutput />,
      [CommandId.EMAIL]: <EmailOutput />,
      [CommandId.GITHUB]: <GithubOutput />,
      [CommandId.HELP]: <HelpOutput />,
    };
  }, []);

  const commandComponent = commandComponentMap[inputValue as Exclude<CommandId, CommandId.CLEAR>];

  if (inputValue === '') {
    return <></>;
  }

  if (!commandComponent) {
    return <div>Неизвестная команда</div>;
  }

  return commandComponent;
};

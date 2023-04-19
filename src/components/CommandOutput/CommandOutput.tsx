import { useMemo } from 'react';

import { CommandId } from '../../features/command';

import { HelpOutput } from './HelpOutput';
import { AboutOutput } from './AboutOutput';
import { GithubOutput } from './GithubOutput';
import { EmailOutput } from './EmailOutput';
import { SkillsOutput } from './SkillsOutput';
import { SocialsOutput } from './SocialsOutput';
import { HistoryOutput } from './HistoryOutput';
import { EducationOutput } from './EducationOutput';

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
      [CommandId.SKILLS]: <SkillsOutput />,
      [CommandId.SOCIALS]: <SocialsOutput />,
      [CommandId.HISTORY]: <HistoryOutput />,
      [CommandId.EDUCATION]: <EducationOutput />,
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

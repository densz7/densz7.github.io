import { CommandHelper } from '../../helpers';

import { CommandInput, ICommandInputProps } from './CommandInput';

interface ICommandLineProps {
  InputProps?: ICommandInputProps;
}

export const CommandLine = ({ InputProps }: ICommandLineProps) => {
  return (
    <div className="flex">
      <span className="text-username font-medium">{CommandHelper.getFullName()}</span>
      <span className="text-commandLineTilde">~</span>
      <span className="text-command">$</span>
      <div className="pl-[7px] w-full">
        <CommandInput
          className="w-full"
          {...InputProps}
        />
      </div>
    </div>
  );
};

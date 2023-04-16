import clsx from 'clsx';
import { useState } from 'react';

import { useCommandStore } from '../../../store';
import { CommandHelper } from '../../../helpers';
import { CommandId } from '../../../types';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ICommandInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const CommandInput = ({ className, disabled, value, ...otherProps }: ICommandInputProps) => {
  const [stateValue, setStateValue] = useState(value || '');
  const addToHistory = useCommandStore((state) => state.addToHistory);
  const clearHistory = useCommandStore((state) => state.clearHistory);

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setStateValue(event.currentTarget.value);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const keyActionMap: Record<string, () => void> = {
      Enter: () => {
        const value = event.currentTarget.value;

        const command = CommandHelper.getCommandById(value as CommandId);

        if (command === CommandId.CLEAR) {
          clearHistory();
          setStateValue('');
          return;
        }

        addToHistory(value);
        setStateValue('');
      },
    };

    const pressedKey = event.key;

    const action = keyActionMap[pressedKey];

    if (!action) {
      return;
    }

    action();
  };

  return (
    <div>
      <input
        type="text"
        maxLength={30}
        autoFocus={true}
        disabled={disabled}
        {...otherProps}
        className={clsx(
          'bg-transparent outline-none text-command absolute left-[-100vw]',
          className
        )}
        value={stateValue}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <span className="w-auto whitespace-pre text-command">{stateValue}</span>
      {!disabled && (
        <span
          className="border-solid border-l-[6px] border-command animate-[blinkCaret_1.35s_steps(1,end)_forwards_infinite]"
          dir="rtl"
        />
      )}
    </div>
  );
};

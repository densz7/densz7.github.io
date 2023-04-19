import clsx from 'clsx';

import { useCommandInput } from './useCommandInput';
import { CommandInputProps } from './types';

export const CommandInput = ({
  className,
  disabled,
  defaultValue,
  ...otherProps
}: CommandInputProps) => {
  const {
    inputRef,
    value: stateValue,
    onChange,
    handleKeyDown,
  } = useCommandInput({ defaultValue: defaultValue });

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        maxLength={30}
        autoFocus
        disabled={disabled}
        {...otherProps}
        className={clsx('bg-transparent outline-none text-command cursor-default', className)}
        value={stateValue}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        autoComplete="off"
        autoCapitalize="off"
        spellCheck="false"
      />
      {/* <span className="w-auto whitespace-pre text-command">{stateValue}</span>
      {!disabled && (
        <span
          className="border-solid border-l-[6px] border-command animate-[blinkCaret_1.35s_steps(1,end)_forwards_infinite]"
          dir="rtl"
        />
      )} */}
    </div>
  );
};

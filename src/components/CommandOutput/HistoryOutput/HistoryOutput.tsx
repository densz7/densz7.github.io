import { useRef } from 'react';

import { useCommandStore } from '../../../features/command';

export const HistoryOutput = () => {
  const historyCommands = useCommandStore((state) => state.history);
  const historyCommandsBeforeLastRef = useRef<typeof historyCommands>(
    historyCommands.slice(0, historyCommands.length - 1)
  );

  if (!historyCommandsBeforeLastRef.current.length) {
    return null;
  }

  return (
    <ul>
      {historyCommandsBeforeLastRef.current.map((command, index) => (
        <li
          key={index}
          className="mb-[2px] last:mb-0"
        >
          {command}
        </li>
      ))}
    </ul>
  );
};

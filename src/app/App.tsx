import { CommandOutput, WelcomeOutput } from '../components';
import { CommandLine } from '../features';
import { CommandsSuggestions, useCommandStore } from '../features/command';

import './styles/index.css';

const App = () => {
  const commandsHistory = useCommandStore((state) => state.history);

  return (
    <main className="pt-[5px] pb-[17px] max-sm:px-containerSm px-containerLg max-sm:text-sm">
      <WelcomeOutput />
      <div className="pt-[17px]">
        {commandsHistory.map((command, index) => (
          <CommandHistory key={index}>
            <CommandLine InputProps={{ disabled: true, defaultValue: command }} />
            <CommandOutput inputValue={command} />
          </CommandHistory>
        ))}
        <div className="pt-[17px]">
          <CommandLine InputProps={{ autoFocus: true }} />
        </div>
        <CommandsSuggestions />
      </div>
    </main>
  );
};

const CommandHistory = ({ children }: { children: React.ReactElement[] }) => {
  return (
    <div className="pt-[17px]">
      <div className="flex flex-col gap-y-[17px]">{children}</div>
    </div>
  );
};

export default App;

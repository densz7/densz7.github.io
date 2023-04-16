import { CommandOutput, WelcomeOutput } from '../components';
import { CommandLine } from '../features';
import { useCommandStore } from '../features/command';

import './styles/index.css';

const App = () => {
  const commandsHistory = useCommandStore((state) => state.history);

  return (
    <main className="h-full pt-[45px] px-containerLg bg-mainBg">
      <WelcomeOutput />
      <div className="pt-[17px]">
        {commandsHistory.map((command, index) => {
          return (
            <CommandHistory key={index}>
              <CommandLine InputProps={{ disabled: true, value: command }} />
              <CommandOutput inputValue={command} />
            </CommandHistory>
          );
        })}
        <div className="pt-[17px]">
          <CommandLine InputProps={{ autoFocus: true }} />
        </div>
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

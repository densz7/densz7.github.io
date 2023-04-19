import { HOST_NAME, USERNAME, commands } from '../constants';
import { CommandId } from '../types';

export const CommandHelper = {
  getFullName() {
    const SEPARATOR = '@';

    return [USERNAME, HOST_NAME].join(SEPARATOR);
  },

  getCommandById(id: CommandId) {
    return commands.find((command) => command === id);
  },

  findMatchesByValue(value: string) {
    if (!value) {
      return [];
    }

    const matches = commands.filter((command) => {
      const regexp = new RegExp(`^${value}`);
      return command.match(regexp) !== null;
    });

    return matches;
  },
};

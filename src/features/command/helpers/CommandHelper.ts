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
};

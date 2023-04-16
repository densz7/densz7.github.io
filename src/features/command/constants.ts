import { CommandId } from './types';

export const USERNAME = 'guest';
export const HOST_NAME = window.location.host;

export const commands: CommandId[] = [
  // CommandId.EMPTY,
  CommandId.ABOUT,
  CommandId.EMAIL,
  CommandId.GITHUB,
  CommandId.HELP,
  // CommandId.UNKNOWN,
  CommandId.CLEAR,
];

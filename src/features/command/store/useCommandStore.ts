import { create } from 'zustand';

import { CommandId } from '../types';

interface ICommandStore {
  history: string[];
  addToHistory: (command: string) => void;
  clearHistory: () => void;

  suggestions: CommandId[];
  setSuggestions: (suggestions: CommandId[]) => void;
}

export const useCommandStore = create<ICommandStore>((set) => ({
  history: [],
  addToHistory: (command) => set((state) => ({ history: [...state.history, command] })),
  clearHistory: () => set({ history: [] }),

  suggestions: [],
  setSuggestions: (suggestions) => set({ suggestions }),
}));

import { create } from 'zustand';

import { CommandId } from '../types';

interface ICommandStore {
  history: string[];
  addToHistory: (command: string) => void;
  clearHistory: () => void;
}

export const useCommandStore = create<ICommandStore>((set) => ({
  history: [],
  addToHistory: (command) => set((state) => ({ history: [...state.history, command] })),
  clearHistory: () => set({ history: [] }),
}));

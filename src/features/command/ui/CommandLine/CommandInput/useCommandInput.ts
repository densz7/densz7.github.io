import { useEffect, useRef, useState } from 'react';

import { useCommandStore } from '../../../store';
import { CommandId } from '../../../types';
import { CommandHelper } from '../../../helpers';
import { scrollDocumentToBottom } from '../../../../../shared/utils';

import { CommandInputProps } from './types';

interface IUseCommandInputParams {
  defaultValue?: CommandInputProps['defaultValue'];
}

export const useCommandInput = ({ defaultValue }: IUseCommandInputParams) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(defaultValue || '');
  const history = useCommandStore((state) => state.history);
  const suggestions = useCommandStore((state) => state.suggestions);
  const [cursor, setCursor] = useState(history.length);
  const addToHistory = useCommandStore((state) => state.addToHistory);
  const clearHistory = useCommandStore((state) => state.clearHistory);
  const setSuggestions = useCommandStore((state) => state.setSuggestions);

  useEffect(() => {
    const onClickDocument = () => {
      inputRef.current?.focus();
    };

    document.addEventListener('click', onClickDocument);

    return () => {
      document.removeEventListener('click', onClickDocument);
    };
  }, []);

  useEffect(() => {
    scrollDocumentToBottom();
  }, [history, suggestions]);

  const setDefaults = () => {
    setValue('');
    setSuggestions([]);
  };

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setValue(value);
    setCursor(history.length);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const currentTargetValue = event.currentTarget.value;

    const keyActionMap: Record<string, () => void> = {
      Enter: () => {
        const command = CommandHelper.getCommandById(currentTargetValue as CommandId);
        const isClearCommand = command === CommandId.CLEAR;
        const newCursor = history.length + 1;

        if (isClearCommand) {
          clearHistory();
          setDefaults();
          setCursor(newCursor);
          return;
        }

        addToHistory(currentTargetValue);
        setDefaults();
        setCursor(newCursor);
      },
      Tab: () => {
        event.preventDefault();

        const matches = CommandHelper.findMatchesByValue(value);
        const isMatchesContainsOneValue = matches.length === 1;
        const isMatchesContainsMoreThanOneValue = matches.length > 1;

        if (isMatchesContainsOneValue) {
          setValue(matches[0]);
          setCursor(history.length);
          setSuggestions([]);
        } else if (isMatchesContainsMoreThanOneValue) {
          setSuggestions(matches);
        }
      },
      ArrowUp: () => {
        event.preventDefault();

        const isCursorGreaterZero = cursor > 0;
        const decreasedCursor = cursor - 1;

        if (isCursorGreaterZero) {
          setValue(history[decreasedCursor] || '');
          setCursor(decreasedCursor);
        }
      },
      ArrowDown: () => {
        event.preventDefault();

        const isCursorLessThanHistoryLength = cursor < history.length;
        const increasedCursor = cursor + 1;

        if (isCursorLessThanHistoryLength) {
          setValue(history[increasedCursor] || '');
          setCursor(increasedCursor);
        }
      },
    };

    const pressedKey = event.key;
    const action = keyActionMap[pressedKey];

    if (!action) {
      return;
    }

    action();
  };

  return {
    value,
    inputRef,
    onChange,
    handleKeyDown,
  };
};

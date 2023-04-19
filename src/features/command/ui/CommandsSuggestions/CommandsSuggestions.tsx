import { useCommandStore } from '../../store';

export const CommandsSuggestions = () => {
  const suggestions = useCommandStore((state) => state.suggestions);

  if (!suggestions.length) {
    return null;
  }

  return (
    <div className="mt-[7px]">
      {suggestions.map((suggestion, index) => (
        <span
          key={index}
          className="mr-[10px] last:mr-0"
        >
          {suggestion}
        </span>
      ))}
    </div>
  );
};

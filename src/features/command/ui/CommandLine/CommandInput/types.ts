export type CommandInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'defaultValue'
> & {
  defaultValue?: string;
};

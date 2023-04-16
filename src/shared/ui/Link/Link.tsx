export const Link = ({
  children,
  ...otherProps
}: React.PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>>) => {
  return (
    <a
      {...otherProps}
      className="text-link underline hover:no-underline"
    >
      {children}
    </a>
  );
};

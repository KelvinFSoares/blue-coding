import { ReactNode, FunctionComponent } from 'react';

export interface SimpleTextProps extends React.ComponentPropsWithoutRef<'p'> {
  size: string;
  color: string;
  children: ReactNode;
}

const SimpleText: FunctionComponent<SimpleTextProps> = ({
  size,
  color,
  children,
  ...rest
}) => {
  return (
    <p
      className={`text-${size} mb-2 ${color ? `text-${color}` : 'text-black'}`}
      {...rest}
    >
      {children}
    </p>
  );
};

export default SimpleText;

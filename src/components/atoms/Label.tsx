import { FunctionComponent, ReactNode } from 'react';

export interface LabelProps extends React.ComponentPropsWithoutRef<'label'> {
  fontSize: string;
  color: string;
  children: ReactNode;
}

const Label: FunctionComponent<LabelProps> = ({
  fontSize,
  color,
  children,
  ...rest
}) => {
  return (
    <label
      className={`font-bold mb-2 ${
        fontSize ? `text-${fontSize}` : 'text-base'
      } ${color ? `text-${color}` : 'text-black'}`}
      {...rest}
    >
      {children}
    </label>
  );
};

export default Label;

import { FunctionComponent } from 'react';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  label: string;
}

const Button: FunctionComponent<ButtonProps> = ({ label, ...rest }) => {
  return (
    <button
      className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-none focus:outline-none"
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;

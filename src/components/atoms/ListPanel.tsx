import { FunctionComponent, ReactNode } from 'react';

export interface ListPanelProps extends React.ComponentPropsWithoutRef<'ul'> {
  children: ReactNode;
}

const ListPanel: FunctionComponent<ListPanelProps> = ({
  children,
  ...rest
}) => {
  return (
    <ul className="mt-1 border border-gray-300 rounded-md shadow-lg" {...rest}>
      {children}
    </ul>
  );
};

export default ListPanel;

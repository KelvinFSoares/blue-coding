import { ReactNode, FunctionComponent } from 'react';

export interface ListPanelItemProps
  extends React.ComponentPropsWithoutRef<'li'> {
  key: string;
  children: ReactNode;
}

const ListPanelItem: FunctionComponent<ListPanelItemProps> = ({
  children,
  ...rest
}) => {
  return (
    <li
      className="flex items-center bg-orange-50 px-4 py-2 hover:bg-gray-100"
      {...rest}
    >
      {children}
    </li>
  );
};

export default ListPanelItem;

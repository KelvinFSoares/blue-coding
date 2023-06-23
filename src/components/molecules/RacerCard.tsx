import { Racer } from '@/models/racer';
import { FunctionComponent } from 'react';
import SimpleText from '../atoms/SimpleText';

export interface RacerCardProps extends React.ComponentPropsWithoutRef<'div'> {
  racer: Racer;
}

const RacerCard: FunctionComponent<RacerCardProps> = ({ racer, ...rest }) => {
  return (
    <div
      className="border border-black rounded-md bg-orange-50 px-2 py-2 hover:bg-gray-100 mb-2"
      {...rest}
    >
      <SimpleText size="lg" color="black">
        Name: {racer.name}
      </SimpleText>
      <SimpleText size="sm" color="black">
        Length: {racer.length}
      </SimpleText>
      <SimpleText size="sm" color="black">
        Weight: {racer.weight}
      </SimpleText>
      <SimpleText size="sm" color="black">
        Color: {racer.color}
      </SimpleText>
      <SimpleText size="md" color="black">
        Status: {racer.oddStatus}
      </SimpleText>
      {racer.oddWin !== 0 && (
        <SimpleText size="md" color="black">
          Odd Win: {racer.oddWin}
        </SimpleText>
      )}
    </div>
  );
};

export default RacerCard;

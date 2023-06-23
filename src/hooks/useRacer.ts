import { RacerContext } from '@/contexts/useRacerContext';
import { useContext } from 'react';

const useRacer = () => {
  const context = useContext(RacerContext);
  if (!context) {
    throw new Error('useRacer must be used within a RacerContext');
  }
  return context;
};

export { useRacer };

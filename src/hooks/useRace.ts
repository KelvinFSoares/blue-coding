import { RaceContext } from '@/contexts/useRaceContext';
import { useContext } from 'react';

const useRace = () => {
  const context = useContext(RaceContext);
  if (!context) {
    throw new Error('useRace must be used within a RaceContext');
  }
  return context;
};

export { useRace };

import { ExampleContext } from '@/contexts/useExampleContext';
import { useContext } from 'react';

const useExample = () => {
  const context = useContext(ExampleContext);
  if (!context) {
    throw new Error('useRace must be used within a ExampleContext');
  }
  return context;
};

export { useExample };

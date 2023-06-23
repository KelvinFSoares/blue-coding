import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { RaceStatus } from '@/models/status';
import { useRacer } from '@/hooks/useRacer';

export const RaceContext = createContext({
  startRace: {} as () => void,
  raceStatus: {} as RaceStatus,
  setRaceStatus: {} as Dispatch<SetStateAction<Partial<RaceStatus>>>,
  raceReady: {} as boolean,
  setRaceReady: {} as Dispatch<SetStateAction<Partial<boolean>>>,
});

export function RaceProvider({ children }: { children: React.ReactNode }) {
  const { startAllOddCalcs } = useRacer();

  const [raceStatus, setRaceStatus] = useState(RaceStatus.NotYetRun);
  const [raceReady, setRaceReady] = useState(false);

  const startRace = () => {
    setRaceStatus(RaceStatus.InProgress);
    startAllOddCalcs().then(() => {
      setRaceStatus(RaceStatus.AllCalculated);
    });
  };

  return (
    <RaceContext.Provider
      value={{
        raceReady,
        setRaceReady,
        raceStatus,
        setRaceStatus,
        startRace,
      }}
    >
      {children}
    </RaceContext.Provider>
  );
}

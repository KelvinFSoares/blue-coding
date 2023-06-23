import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { Racer } from '../models/racer';
import { generateRacerWinLikelihoodCalculator } from '@/api/racers';
import { OddStatus } from '@/models/status';

export const RacerContext = createContext({
  racers: {} as Partial<Racer[]>,
  setRacers: {} as Dispatch<SetStateAction<Partial<Racer[]>>>,
  startAllOddCalcs: {} as () => Promise<void[]>,
});

export function RacersProvider({ children }: { children: React.ReactNode }) {
  const [racers, setRacers] = useState([] as Racer[]);

  const onStartRacerOddCalc = (racerIndex: number) => {
    updateRacerOddStatus(racerIndex, OddStatus.InProgress);
  };

  const onEndRacerOddCalc = (calcResponse) => {
    const { index, oddWin } = calcResponse;
    if (oddWin) {
      updateRacerOdd(index, oddWin);
    }
  };

  const sortRacerList = (nextRacers: Racer[]): Racer[] => {
    return nextRacers.sort((a, b) => b.oddWin - a.oddWin);
  };

  const updateRacerOddStatus = (racerIndex: number, newStatus: OddStatus) => {
    const nextRacers = racers.map((racer, index) => {
      if (index === racerIndex) {
        racer.oddStatus = newStatus;
        return racer;
      } else {
        return racer;
      }
    });
    setRacers(nextRacers);
  };

  const updateRacerOdd = (racerIndex: number, newOddWin: number) => {
    const nextRacers = racers.map((racer, index) => {
      if (index === racerIndex) {
        racer.oddWin = newOddWin;
        racer.oddStatus = OddStatus.Calculated;
        return racer;
      } else {
        return racer;
      }
    });
    //update racers with list sorted
    setRacers(sortRacerList(nextRacers));
  };

  const startAllOddCalcs = (): Promise<void[]> => {
    const promises = [...new Array(racers.length)].map((_, index) =>
      new Promise((resolve) => {
        onStartRacerOddCalc(index);
        generateRacerWinLikelihoodCalculator()((oddWin: number) => {
          return resolve({ index, oddWin });
        });
      }).then(onEndRacerOddCalc)
    );
    return Promise.all(promises);
  };

  return (
    <RacerContext.Provider
      value={{
        racers,
        setRacers,
        startAllOddCalcs,
      }}
    >
      {children}
    </RacerContext.Provider>
  );
}

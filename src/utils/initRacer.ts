import { Racer } from '@/models/racer';
import { OddStatus } from '@/models/status';

export const initRacer = (rawRacerObject): Racer => {
  return {
    name: rawRacerObject.name,
    length: rawRacerObject.length,
    color: rawRacerObject.color,
    weight: rawRacerObject.weight,
    oddWin: 0,
    oddStatus: OddStatus.NotYetRun,
  } as Racer;
};

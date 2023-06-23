import { OddStatus } from './status';

export interface Racer {
  name: string;
  length: number;
  color: string;
  weight: number;
  oddWin: number;
  oddStatus: OddStatus;
}

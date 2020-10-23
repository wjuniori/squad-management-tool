import { TeamType } from './enum';

export interface Player {
  id: number;
  name: string;
  nacionality: string;
  age: number;
}

export interface Team {
  id: number;
  name: string;
  description?: string;
  website: string;
  type: TeamType;
  tags?: string[];
  formation?: string;
  players?: Player[];
  avgAge?: number;
}

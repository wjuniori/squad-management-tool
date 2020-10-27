import { createContext } from 'react';
import { Team } from '../../@types/team';

export interface TeamsContextData {
  teams: Team[];
  selectedTeam: Team;

  setTeams: (teams: Team[]) => void;
  setSelectedTeam: (teams: Team) => void;
}

export const TeamsContext = createContext<TeamsContextData>(
  {} as TeamsContextData
);

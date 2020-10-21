import React, { useState } from 'react';
import { Team } from '../../@types/team';
import { TeamsContext } from '../../contexts/Teams/TeamsContext';
import { TeamType } from '../../@types/enum';

const initialTeams: Team[] = [
  {
    id: 1,
    name: 'Barcelona',
    description: 'Barcelona Squad',
    website: 'sitebarcelona',
    type: TeamType.Real,
    // tags?: string[];
    // formation: '3 - 4 - 3'
    // players: Player[];
  },
  {
    id: 2,
    name: 'Real Madrid',
    description: 'Real Madrid Squad',
    website: 'siterealmadrid',
    type: TeamType.Real,
    // tags?: string[];
    // formation: '3 - 4 - 3'
    // players: Player[];
  },
  {
    id: 3,
    name: 'Milan',
    description: 'Milan Squad',
    website: 'sitemilan',
    type: TeamType.Fantasy,
    // tags?: string[];
    // formation: '3 - 4 - 3'
    // players: Player[];
  },
  {
    id: 4,
    name: 'Liverpool',
    description: 'Liverpool Squad',
    website: 'siteliverpool',
    type: TeamType.Fantasy,
    // tags?: string[];
    // formation: '3 - 4 - 3'
    // players: Player[];
  },
];

const TeamsProvider: React.FC = ({ children }) => {
  const [teams, setTeams] = useState<Team[]>(initialTeams); // []

  return (
    <TeamsContext.Provider value={{ teams, setTeams }}>
      {children}
    </TeamsContext.Provider>
  );
};

export default TeamsProvider;

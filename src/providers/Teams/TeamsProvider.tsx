import React, { useState } from 'react';
import { Team } from '../../@types/team';
import { TeamsContext } from '../../contexts/Teams/TeamsContext';

const TeamsProvider: React.FC = ({ children }) => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<Team>({} as Team);

  return (
    <TeamsContext.Provider
      value={{ teams, selectedTeam, setTeams, setSelectedTeam }}
    >
      {children}
    </TeamsContext.Provider>
  );
};

export default TeamsProvider;

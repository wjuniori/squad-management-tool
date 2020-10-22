import React, { useState } from 'react';
import { Team } from '../../@types/team';
import { TeamsContext } from '../../contexts/Teams/TeamsContext';

const TeamsProvider: React.FC = ({ children }) => {
  const [teams, setTeams] = useState<Team[]>([]);

  return (
    <TeamsContext.Provider value={{ teams, setTeams }}>
      {children}
    </TeamsContext.Provider>
  );
};

export default TeamsProvider;

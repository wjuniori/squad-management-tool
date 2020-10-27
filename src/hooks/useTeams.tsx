import { useContext } from 'react';
import { TeamsContextData, TeamsContext } from '../contexts/Teams/TeamsContext';
import { ErrorMessage } from '../@types/message';

const useTeams = (): TeamsContextData => {
  const context = useContext(TeamsContext);

  if (!context) {
    throw new Error(ErrorMessage.NoTeamsProvider);
  }

  return context;
};

export default useTeams;

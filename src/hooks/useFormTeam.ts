import { useState } from 'react';
import { Team } from '../@types/team';

const useFormTeam = (initialTeam: Team) => {
  const [team, setTeam] = useState<Team>(initialTeam);

  const handleChange = (event: React.ChangeEvent<any>) => {
    setTeam({
      ...team,
      [event.target.name]:
        event.target.name === 'type'
          ? Number(event.target.value)
          : event.target.value,
    });
  };

  return { team, setTeam, handleChange };
};

export default useFormTeam;

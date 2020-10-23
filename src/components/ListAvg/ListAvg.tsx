import React from 'react';
import { CustomWhiteBox, List } from './ListAvg.styles';
import { Team } from '../../@types/team';

interface ListAvgProps {
  title: string;
  teams: Team[];
  onClick?: (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    team: Team
  ) => void;
}

const ListAvg: React.FC<ListAvgProps> = ({ title, teams, onClick }) => {
  return (
    <List>
      <List.Title>{title}</List.Title>
      <List.Body>
        {teams.map((team: Team) => (
          <CustomWhiteBox
            key={team.id}
            onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) =>
              onClick && onClick(event, team)
            }
          >
            <CustomWhiteBox.Body>
              <span>{team.name}</span>
              <span>31.9</span>
            </CustomWhiteBox.Body>
          </CustomWhiteBox>
        ))}
      </List.Body>
    </List>
  );
};

export default ListAvg;

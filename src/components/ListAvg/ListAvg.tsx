import React from 'react';
import List from './ListAvg.styles';
import { Team } from '../../@types/team';

interface ListAvgProps {
  title: string;
  teams: Team[];
  onClick?: (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    team: Team
  ) => void;
}

const ListAvg: React.FC<ListAvgProps> = ({ title, teams, onClick }) => (
  <List>
    <List.Title>{title}</List.Title>
    <List.Body>
      {teams.map((team: Team) => (
        <List.Item
          key={team.id}
          onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) =>
            onClick && onClick(event, team)
          }
        >
          <List.ItemBody>
            <span>{team.name}</span>
            <span>31.9</span>
          </List.ItemBody>
        </List.Item>
      ))}
    </List.Body>
  </List>
);

export default ListAvg;

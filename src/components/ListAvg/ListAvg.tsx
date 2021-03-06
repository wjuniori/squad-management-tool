import React from 'react';
import List from './ListAvg.styles';
import { Team } from '../../@types/team';

interface ListAvgProps {
  title: string;
  teams: Team[];
  onClick?: (team: Team) => void;
}

const ListAvg: React.FC<ListAvgProps> = ({ title, teams, onClick }) => (
  <List>
    <List.Title>{title}</List.Title>
    <List.Body>
      {teams.map((team: Team) => (
        <List.Item key={team.id} onClick={() => onClick && onClick(team)}>
          <List.ItemBody>
            <span>{team.name}</span>
            <span>{team.avgAge}</span>
          </List.ItemBody>
        </List.Item>
      ))}
    </List.Body>
  </List>
);

export default ListAvg;

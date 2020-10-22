import React from 'react';
import TableDiv from './TableTeams.styles';
import { Team } from '../../../@types/team';
import Table from '../Table/Table';

interface TableTeamsProps {
  teams: Team[];
}

const TableTeams: React.FC<TableTeamsProps> = ({ teams }) => (
  <TableDiv>
    <Table>
      <Table.Head>
        <Table.HeadRow>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Description</Table.HeadCell>
        </Table.HeadRow>
      </Table.Head>

      <Table.Body>
        {teams.map((team: Team) => (
          <Table.Row key={team.id}>
            <Table.Cell>{team.name}</Table.Cell>
            <Table.Cell>{team.description}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </TableDiv>
);

export default TableTeams;

import React from 'react';
import { TableDiv, TableHeadCellClickable } from './TableTeams.styles';
import { Team } from '../../../@types/team';
import Table from '../Table/Table';
import useSortableData from '../../../hooks/useSortableData';

interface TableTeamsProps {
  teams: Team[];
}

const TableTeams: React.FC<TableTeamsProps> = ({ teams }) => {
  const { items: sortedTeams, requestSort } = useSortableData(teams);

  return (
    <TableDiv>
      <Table>
        <Table.Head>
          <Table.HeadRow>
            <TableHeadCellClickable onClick={() => requestSort('name')}>
              Name
            </TableHeadCellClickable>
            <TableHeadCellClickable onClick={() => requestSort('description')}>
              Description
            </TableHeadCellClickable>
          </Table.HeadRow>
        </Table.Head>

        <Table.Body>
          {sortedTeams.map((team: Team) => (
            <Table.Row key={team.id}>
              <Table.Cell>{team.name}</Table.Cell>
              <Table.Cell>{team.description}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </TableDiv>
  );
};

export default TableTeams;

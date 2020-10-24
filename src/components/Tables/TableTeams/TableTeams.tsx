import React from 'react';
import {
  TableDiv,
  TableHeadCellClickable,
  TableRowHover,
  TableCellAction,
} from './TableTeams.styles';
import { Team } from '../../../@types/team';
import Table from '../Table/Table';
import useSortableData from '../../../hooks/useSortableData';
import { FaShareAlt, FaTrash, FaPencilAlt } from 'react-icons/fa';

interface TableTeamsProps {
  teams: Team[];
  onClickRemove?: (team: Team) => void;
  onClickShare?: (team: Team) => void;
  onClickEdit?: (team: Team) => void;
}

const TableTeams: React.FC<TableTeamsProps> = ({
  teams,
  onClickRemove,
  onClickShare,
  onClickEdit,
}) => {
  const { items: sortedTeams, requestSort } = useSortableData(teams);

  return (
    <TableDiv>
      <Table>
        <Table.Head>
          <Table.HeadRow>
            <TableHeadCellClickable onClick={() => requestSort('name')}>
              Name
            </TableHeadCellClickable>
            <TableHeadCellClickable
              colSpan={2}
              onClick={() => requestSort('description')}
            >
              Description
            </TableHeadCellClickable>
          </Table.HeadRow>
        </Table.Head>

        <Table.Body>
          {sortedTeams.map((team: Team) => (
            <TableRowHover key={team.id}>
              <Table.Cell>{team.name}</Table.Cell>
              <Table.Cell>{team.description}</Table.Cell>
              <TableCellAction>
                <FaTrash
                  size={10}
                  onClick={() => onClickRemove && onClickRemove(team)}
                />
                <FaShareAlt
                  size={10}
                  onClick={() => onClickShare && onClickShare(team)}
                />
                <FaPencilAlt
                  size={10}
                  onClick={() => onClickEdit && onClickEdit(team)}
                />
              </TableCellAction>
            </TableRowHover>
          ))}
        </Table.Body>
      </Table>
    </TableDiv>
  );
};

export default TableTeams;

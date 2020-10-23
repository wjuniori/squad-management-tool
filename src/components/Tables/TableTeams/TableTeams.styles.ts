import styled from 'styled-components';
import Table from '../Table/Table';

export const TableDiv = styled.div`
  overflow-x: auto;
`;

export const TableHeadCellClickable = styled(Table.HeadCell)`
  :hover {
    cursor: pointer;
  }
`;

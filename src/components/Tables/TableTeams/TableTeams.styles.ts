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

export const TableRowHover = styled(Table.Row)`
  :hover {
    svg {
      visibility: visible;
    }
  }
`;

export const TableCellAction = styled(Table.Cell)`
  text-align: right;
  svg {
    visibility: hidden;

    :not(:last-child) {
      margin-right: 10px;
    }

    :hover {
      cursor: pointer;
    }
  }
`;

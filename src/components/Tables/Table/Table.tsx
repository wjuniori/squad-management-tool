import styled from 'styled-components';

const Table: any = styled.table`
  width: 100%;
  border-spacing: 0px;
`;

Table.Head = styled.thead``;

Table.HeadRow = styled.tr``;

Table.HeadCell = styled.th`
  padding: 20px 15px;
  text-align: left;
  border-bottom: 1px solid var(--color-divider);
`;

Table.Body = styled.tbody``;

Table.Row = styled.tr`
  :hover {
    background-color: var(--color-background-table);
    color: var(--color-text-table);
  }
`;

Table.Cell = styled.td`
  padding: 15px;
  border-bottom: 1px solid var(--color-divider);

  :first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  :last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

export default Table;

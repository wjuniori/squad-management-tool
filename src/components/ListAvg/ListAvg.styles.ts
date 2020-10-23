import styled from 'styled-components';
import WhiteBox from '../WhiteBox/WhiteBox';

export const List: any = styled.div``;

List.Title = styled.h4`
  padding-top: 20px;
  padding-bottom: 20px;
`;

List.Body = styled.div`
  background-color: var(--color-background-list);
  padding: 3px;
  border-radius: 8px;
`;

export const CustomWhiteBox = styled(WhiteBox)`
  margin-top: 0;
  margin-bottom: 3px;

  :last-child {
    margin-bottom: 0;
  }

  :hover {
    border: 2px solid var(--color-border-list);
    cursor: pointer;
  }
`;

CustomWhiteBox.Body = styled(WhiteBox.Body)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
`;

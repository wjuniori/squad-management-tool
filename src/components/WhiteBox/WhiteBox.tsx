import styled from 'styled-components';

const WhiteBox: any = styled.section`
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 14px;
  background-color: var(--color-background-box);
  border: 1px solid rgba(120, 115, 137, 0.1);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14882);
  border-radius: 8px;
`;

WhiteBox.Header = styled.div`
  padding: 25px;
  border-bottom: 1px solid var(--color-divider);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

WhiteBox.Title = styled.h1`
  color: var(--color-secondary);
`;

WhiteBox.Body = styled.div`
  padding: 10px;
  padding-bottom: 25px;
`;

export default WhiteBox;

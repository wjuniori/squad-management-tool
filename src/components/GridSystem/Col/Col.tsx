import styled from 'styled-components';

interface ColProps {
  width?: string;
}

const Col = styled.div`
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 768px) {
    width: ${({ width }: ColProps) => width || 'auto'};
  }
`;

export default Col;

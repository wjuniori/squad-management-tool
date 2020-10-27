import styled from 'styled-components';
import Dot from '../Dot/Dot';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
  color: var(--color-text-primary);
`;

export const CardTitle = styled.h2`
  padding-bottom: 15px;
`;

export const CardBody = styled.div`
  display: flex;
`;

export const CardDotEmphasis = styled(Dot)`
  height: 145px;
  width: 145px;
  background-color: transparent;
  border: 3px dashed var(--color-border-profile-emphasis);
`;

export const CardDot = styled(Dot)`
  height: 130px;
  width: 130px;
  font-size: 50px;
  border: 3px solid var(--color-border-profile);
`;

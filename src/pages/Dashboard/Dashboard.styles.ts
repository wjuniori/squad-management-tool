import styled from 'styled-components';
import ButtonPrimary from '../../components/Buttons/ButtonPrimary/ButtonPrimary';
import WhiteBox from '../../components/WhiteBox/WhiteBox';

export const ButtonCreate = styled(ButtonPrimary)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 12px;
`;

export const PurpleBox = styled(WhiteBox)`
  background-color: var(--color-tertiary);
`;

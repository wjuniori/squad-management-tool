import styled from 'styled-components';
import ButtonPrimary from '../../Buttons/ButtonPrimary/ButtonPrimary';

export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  padding: 25px;
  color: var(--color-text-light);
`;

export const LabelRadioButton = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
`;

export const ButtonPrimaryCustom = styled(ButtonPrimary)`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 20px;
`;

import styled from 'styled-components';
import Button from '../Button/Button';

const ButtonPrimary = styled(Button)`
  background-color: var(--color-tertiary);
  color: #fff;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(132, 60, 128, 0.3);

  :hover {
    background-color: var(--color-background-table);
    color: var(--color-text-table);
    box-shadow: 0px 2px 4px rgba(186, 86, 141, 0.3);
  }
`;

export default ButtonPrimary;

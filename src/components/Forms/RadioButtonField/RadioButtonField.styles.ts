import styled from 'styled-components';

export const RadioButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 8px;
`;

export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.4rem;
  font-weight: 400;
  color: var(--color-text-light);

  :not(:last-child) {
    margin-right: 50px;
  }
`;

export const Input = styled.input`
  margin-right: 0.5rem;
`;

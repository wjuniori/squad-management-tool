import styled, { css } from 'styled-components';

export const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 400;
  color: #837775;
`;

export const Option = styled.option`
  padding: 16px 8px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;

  ${({ disabled }) => {
    return (
      disabled &&
      css`
        background-color: #ebebe4;
        color: #545454;
      `
    );
  }}
`;

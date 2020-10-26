import styled, { css } from 'styled-components';

export const Label = styled.label`
  font-size: 1.4rem;
  font-weight: bold;
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

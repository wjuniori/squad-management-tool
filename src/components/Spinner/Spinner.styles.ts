import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerDiv = styled.div`
  color: var(--color-tertiary);
  display: inline-block;
  width: 5rem;
  height: 5rem;
  vertical-align: text-bottom;
  border: 0.3em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  -webkit-animation: ${rotate} 0.75s linear infinite;
  animation: ${rotate} 0.75s linear infinite;
`;

export const SpinnerSpan = styled.span`
  position: absolute;
  width: 2px;
  height: 2px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

import React from 'react';
import { SpinnerDiv, SpinnerSpan } from './Spinner.styles';

const Spinner: React.FC = () => (
  <SpinnerDiv>
    <SpinnerSpan>Loading...</SpinnerSpan>
  </SpinnerDiv>
);

export default Spinner;

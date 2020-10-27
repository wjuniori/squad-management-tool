import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: none;
  margin-right: auto;
  margin-left: auto;

  /* Small ≥576px */
  @media (min-width: 576px) {
    max-width: 540px;
  }

  /* Medium ≥768px */
  @media (min-width: 768px) {
    max-width: 720px;
  }

  /* Large ≥992px */
  @media (min-width: 992px) {
    max-width: 960px;
  }

  /* Extra large ≥1200px */
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export default Container;

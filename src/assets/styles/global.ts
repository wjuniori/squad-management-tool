import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-background: #f7f3f7;

    font-size: 60%;
  }

  /* Medium ≥768px */
  @media (min-width: 768px) {
    :root {
      font-size: 62.5%;
    }
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    min-height: 100vh;
  }

  body {
    background: var(--color-background);
  }

  body,
  input,
  button,
  textarea {
    font: 500 1.6rem Poppins;
    /* color: var(--color-text-base); */
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;

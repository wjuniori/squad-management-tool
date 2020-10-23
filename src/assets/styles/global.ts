import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-background-body: #f7f3f7;
    --color-background-footer: #e9e3e9;
    --color-background-table: #f7eef7;
    --color-background-box: #ffffff;
    --color-background-list: #e3dde2;

    --color-primary: #c13b4e;
    --color-secondary: #56398a;
    --color-tertiary: #843c80;

    --color-text-primary: #ffffff;
    --color-text-secondary: #000000;
    --color-text-light: #6A686A;
    --color-text-table: #ba568d;

    --color-border-list: #de7194;

    --color-divider: #f1f1f1;

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
    background: var(--color-background-body);
  }

  body,
  input,
  button,
  textarea {
    font: 500 1.6rem Poppins;
    /* color: var(--color-text-base); */
  }

  #root {
    display: flex;
    flex-direction: column;
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

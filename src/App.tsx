import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import GlobalStyle from './assets/styles/global';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes />

    <GlobalStyle />
  </BrowserRouter>
);

export default App;

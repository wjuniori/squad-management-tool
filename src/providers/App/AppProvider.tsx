import React from 'react';
import TeamsProvider from '../Teams/TeamsProvider';

const AppProvider: React.FC = ({ children }) => (
  <TeamsProvider>{children}</TeamsProvider>
);

export default AppProvider;

import React from 'react';
import TeamsProvider from '../Teams/TeamsProvider';
import { LoaderProvider } from '../Loader/LoaderProvider';
import { ToastProvider } from '../Toast/ToastProvider';

const AppProvider: React.FC = ({ children }) => (
  <LoaderProvider>
    <ToastProvider>
      <TeamsProvider>{children}</TeamsProvider>
    </ToastProvider>
  </LoaderProvider>
);

export default AppProvider;

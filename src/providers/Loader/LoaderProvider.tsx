import React, { useState, useCallback, createContext } from 'react';
import Loader from '../../components/Modals/Loader/Loader';

export interface LoaderContextData {
  addLoader(): void;
  removeLoader(): void;
}

export const LoaderContext = createContext<LoaderContextData>(
  {} as LoaderContextData
);

export const LoaderProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const addLoader = useCallback(() => {
    setIsLoading(true);
  }, []);

  const removeLoader = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <LoaderContext.Provider value={{ addLoader, removeLoader }}>
      {children}
      <Loader isLoading={isLoading} />
    </LoaderContext.Provider>
  );
};

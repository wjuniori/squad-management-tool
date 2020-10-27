import React, { useState, useCallback } from 'react';
import Loader from '../../components/Modals/Loader/Loader';
import { LoaderContext } from '../../contexts/Loader/LoaderContext';

const LoaderProvider: React.FC = ({ children }) => {
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

export default LoaderProvider;

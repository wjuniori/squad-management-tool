import { useContext } from 'react';
import {
  LoaderContextData,
  LoaderContext,
} from '../contexts/Loader/LoaderContext';
import { ErrorMessage } from '../@types/message';

const useLoader = (): LoaderContextData => {
  const context = useContext(LoaderContext);

  if (!context) {
    throw new Error(ErrorMessage.NoLoaderProvider);
  }

  return context;
};

export default useLoader;

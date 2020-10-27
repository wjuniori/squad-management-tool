import { createContext } from 'react';

export interface LoaderContextData {
  addLoader(): void;
  removeLoader(): void;
}

export const LoaderContext = createContext<LoaderContextData>(
  {} as LoaderContextData
);

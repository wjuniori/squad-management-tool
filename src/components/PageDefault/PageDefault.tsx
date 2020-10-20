import React from 'react';
import NavBar from '../NavBar/NavBar';

const PageDefault: React.FC = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
};

export default PageDefault;

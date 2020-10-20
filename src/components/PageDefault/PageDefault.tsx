import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Main from './PageDefault.styles';

const PageDefault: React.FC = ({ children }) => {
  return (
    <>
      <NavBar />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default PageDefault;

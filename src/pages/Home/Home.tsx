import React from 'react';
import PageDefault from '../../components/PageDefault/PageDefault';
import Container from '../../components/GridSystem/Container/Container';
import Row from '../../components/GridSystem/Row/Row';
import Col from '../../components/GridSystem/Col/Col';
import WhiteBox from '../../components/WhiteBox/WhiteBox';

const Home: React.FC = () => {
  return (
    <PageDefault>
      <Container>
        <Row>
          <Col width="50%">
            <WhiteBox>
              <WhiteBox.Title>My teams</WhiteBox.Title>
            </WhiteBox>
          </Col>
          <Col width="50%">
            <WhiteBox>
              <WhiteBox.Title>Top 5</WhiteBox.Title>
            </WhiteBox>
          </Col>
        </Row>
      </Container>
    </PageDefault>
  );
};

export default Home;

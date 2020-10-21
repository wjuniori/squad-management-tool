import React, { useEffect } from 'react';
import PageDefault from '../../components/PageDefault/PageDefault';
import Container from '../../components/GridSystem/Container/Container';
import Row from '../../components/GridSystem/Row/Row';
import Col from '../../components/GridSystem/Col/Col';
import WhiteBox from '../../components/WhiteBox/WhiteBox';
import useTeams from '../../hooks/useTeams';

const Home: React.FC = () => {
  const { teams } = useTeams();

  useEffect(() => {
    console.log('teams', teams);
  }, [teams]);

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
            <WhiteBox>
              <WhiteBox.Title>Player</WhiteBox.Title>
            </WhiteBox>
          </Col>
        </Row>
      </Container>
    </PageDefault>
  );
};

export default Home;

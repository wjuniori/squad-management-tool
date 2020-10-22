import React, { useEffect } from 'react';
import PageDefault from '../../components/PageDefault/PageDefault';
import Container from '../../components/GridSystem/Container/Container';
import Row from '../../components/GridSystem/Row/Row';
import Col from '../../components/GridSystem/Col/Col';
import WhiteBox from '../../components/WhiteBox/WhiteBox';
import useTeams from '../../hooks/useTeams';
import teamsData from '../../data/teams.json';
import TableTeams from '../../components/Tables/TableTeams/TableTeams';

const Home: React.FC = () => {
  const { teams, setTeams } = useTeams();

  useEffect(() => {
    // console.log('teams', teams);
    setTeams(teamsData);
  }, [setTeams]);

  return (
    <PageDefault>
      <Container>
        <Row>
          <Col width="50%">
            <WhiteBox>
              <WhiteBox.Title>My teams</WhiteBox.Title>
              <TableTeams teams={teams} />
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

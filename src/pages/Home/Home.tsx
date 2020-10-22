import React, { useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import PageDefault from '../../components/PageDefault/PageDefault';
import Container from '../../components/GridSystem/Container/Container';
import Row from '../../components/GridSystem/Row/Row';
import Col from '../../components/GridSystem/Col/Col';
import WhiteBox from '../../components/WhiteBox/WhiteBox';
import useTeams from '../../hooks/useTeams';
import teamsData from '../../data/teams.json';
import TableTeams from '../../components/Tables/TableTeams/TableTeams';
import ButtonCreate from './Home.styles';

const Home: React.FC = () => {
  const { teams, setTeams } = useTeams();
  const history = useHistory();

  useEffect(() => {
    // console.log('teams', teams);
    setTeams(teamsData);
  }, [setTeams]);

  const handleClickCreate = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    history.push('/team');
  };

  return (
    <PageDefault>
      <Container>
        <Row>
          <Col width="50%">
            <WhiteBox>
              <WhiteBox.Header>
                <WhiteBox.Title>My teams</WhiteBox.Title>
                <ButtonCreate onClick={handleClickCreate}>
                  <FaPlus />
                </ButtonCreate>
              </WhiteBox.Header>
              <WhiteBox.Body>
                <TableTeams teams={teams} />
              </WhiteBox.Body>
            </WhiteBox>
          </Col>
          <Col width="50%">
            <WhiteBox>
              <WhiteBox.Header>
                <WhiteBox.Title>Top 5</WhiteBox.Title>
              </WhiteBox.Header>
            </WhiteBox>
            <WhiteBox>
              <WhiteBox.Header>
                <WhiteBox.Title>Player</WhiteBox.Title>
              </WhiteBox.Header>
            </WhiteBox>
          </Col>
        </Row>
      </Container>
    </PageDefault>
  );
};

export default Home;

import React, { useEffect, useMemo } from 'react';
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
import { ButtonCreate, PurpleBox } from './Home.styles';
import ListAvg from '../../components/ListAvg/ListAvg';
import { Team } from '../../@types/team';
import Card from '../../components/Card/Card';
import { sortByKeyAndDirection } from '../../util';
import { Direction } from '../../@types/enum';

const Home: React.FC = () => {
  const { teams, setTeams, setSelectedTeam } = useTeams();
  const history = useHistory();

  useEffect(() => {
    if (!teams.length) {
      setTeams(teamsData);
    }
    // eslint-disable-next-line
  }, []);

  const avgAgeSortedItems = useMemo(() => {
    const sortableTeams = teams.filter((filteredTeam) => filteredTeam.avgAge);
    sortableTeams.sort((itemA, itemB) =>
      sortByKeyAndDirection(itemA, itemB, 'avgAge', Direction.Ascending)
    );
    return sortableTeams;
  }, [teams]);

  const handleClickCreate = () => {
    history.push('/team');
  };

  const handleClickEdit = (team: Team) => {
    history.push('/team');
    setSelectedTeam(team);
  };

  const handleClickRemove = (team: Team) => {
    setTeams(teams.filter((filteredTeam) => filteredTeam.id !== team.id));
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
                <TableTeams
                  teams={teams}
                  onClickRemove={handleClickRemove}
                  onClickEdit={handleClickEdit}
                />
              </WhiteBox.Body>
            </WhiteBox>
          </Col>
          <Col width="50%">
            <WhiteBox>
              <WhiteBox.Header>
                <WhiteBox.Title>Top 5</WhiteBox.Title>
              </WhiteBox.Header>
              <WhiteBox.Body>
                <Row>
                  <Col width="50%">
                    <ListAvg
                      title="Highest avg age"
                      teams={avgAgeSortedItems.slice(-5).reverse()}
                      onClick={handleClickEdit}
                    />
                  </Col>
                  <Col width="50%">
                    <ListAvg
                      title="Lowest avg age"
                      teams={avgAgeSortedItems.slice(0, 5)}
                      onClick={handleClickEdit}
                    />
                  </Col>
                </Row>
              </WhiteBox.Body>
            </WhiteBox>
            <PurpleBox>
              <Row>
                <Col width="50%">
                  <Card
                    title="Most picked player"
                    playerInitials="CR"
                    percentage={75}
                    emphasis
                  />
                </Col>
                <Col width="50%">
                  <Card
                    title="Less picked player"
                    playerInitials="ZZ"
                    percentage={25}
                  />
                </Col>
              </Row>
            </PurpleBox>
          </Col>
        </Row>
      </Container>
    </PageDefault>
  );
};

export default Home;

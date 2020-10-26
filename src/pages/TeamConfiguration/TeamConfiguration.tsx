import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PageDefault from '../../components/PageDefault/PageDefault';
import Container from '../../components/GridSystem/Container/Container';
import Row from '../../components/GridSystem/Row/Row';
import Col from '../../components/GridSystem/Col/Col';
import WhiteBox from '../../components/WhiteBox/WhiteBox';
import useFormTeam from '../../hooks/useFormTeam';
import FormTeam from '../../components/Forms/FormTeam/FormTeam';
import useTeams from '../../hooks/useTeams';
import { Team } from '../../@types/team';

const TeamConfiguration: React.FC = () => {
  const { team, setTeam, handleChange } = useFormTeam({} as Team);
  const { teams, selectedTeam, setTeams, setSelectedTeam } = useTeams();
  const history = useHistory();

  useEffect(() => {
    if (selectedTeam.id) {
      setTeam(selectedTeam);
    }
    return () => {
      setSelectedTeam({} as Team);
    };
    // eslint-disable-next-line
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (team.id) {
      const index = teams.findIndex((teamLocal) => {
        return teamLocal.id === team.id;
      });
      teams.splice(index, 1, team);
    } else {
      team.id = teams.length + 1;
      setTeams([...teams, team]);
    }
    history.push('/');
  };

  return (
    <PageDefault>
      <Container>
        <Row>
          <Col width="100%">
            <WhiteBox>
              <WhiteBox.Header>
                <WhiteBox.Title>Create your team</WhiteBox.Title>
              </WhiteBox.Header>
              <WhiteBox.Body>
                <FormTeam
                  team={team}
                  onSubmit={handleSubmit}
                  onChange={handleChange}
                />
              </WhiteBox.Body>
            </WhiteBox>
          </Col>
        </Row>
      </Container>
    </PageDefault>
  );
};

export default TeamConfiguration;

import React from 'react';
import PageDefault from '../../components/PageDefault/PageDefault';
import Container from '../../components/GridSystem/Container/Container';
import Row from '../../components/GridSystem/Row/Row';
import Col from '../../components/GridSystem/Col/Col';
import WhiteBox from '../../components/WhiteBox/WhiteBox';
import useFormTeam from '../../hooks/useFormTeam';
import FormTeam from '../../components/Forms/FormTeam/FormTeam';
import { TeamType } from '../../@types/enum';

const TeamConfiguration: React.FC = () => {
  const { team, handleChange } = useFormTeam({
    id: -1,
    name: '',
    description: '',
    url: '',
    type: TeamType.Fantasy,
    formation: '',
    avgAge: -1,
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Button Save was clicked');
    console.log('team', team);
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

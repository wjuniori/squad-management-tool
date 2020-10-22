import React from 'react';
import PageDefault from '../../components/PageDefault/PageDefault';
import Container from '../../components/GridSystem/Container/Container';
import Row from '../../components/GridSystem/Row/Row';
import Col from '../../components/GridSystem/Col/Col';
import WhiteBox from '../../components/WhiteBox/WhiteBox';

const Team: React.FC = () => {
  return (
    <PageDefault>
      <Container>
        <Row>
          <Col width="100%">
            <WhiteBox>
              <WhiteBox.Header>
                <WhiteBox.Title>Create your team</WhiteBox.Title>
              </WhiteBox.Header>
            </WhiteBox>
          </Col>
        </Row>
      </Container>
    </PageDefault>
  );
};

export default Team;

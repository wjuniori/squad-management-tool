import React from 'react';
import { FooterBase, FooterContent } from './Footer.styles';
import Container from '../GridSystem/Container/Container';
import Row from '../GridSystem/Row/Row';
import Col from '../GridSystem/Col/Col';

const Footer: React.FC = () => {
  return (
    <FooterBase>
      <Container>
        <Row>
          <Col width="100%">
            <FooterContent>
              <p>2020 - All rights reserved</p>
            </FooterContent>
          </Col>
        </Row>
      </Container>
    </FooterBase>
  );
};

export default Footer;

import React from 'react';
import {
  TopNav,
  TopNavWrapper,
  Image,
  TopNavContent,
  Dot,
  Text,
  CustomLink,
} from './NavBar.styles';
import Container from '../GridSystem/Container/Container';
import Row from '../GridSystem/Row/Row';
import Col from '../GridSystem/Col/Col';
import logo from '../../assets/images/logo-venturus.png';

const NavBar: React.FC = () => (
  <TopNav>
    <Container>
      <Row>
        <Col width="100%">
          <TopNavWrapper>
            <CustomLink to="/">
              <TopNavContent>
                <Image src={logo} alt="Squad Management Tool" />
                <Text>Squad Management Tool</Text>
              </TopNavContent>
            </CustomLink>
            <TopNavContent>
              <Text>John Doe</Text>
              <Dot>JD</Dot>
            </TopNavContent>
          </TopNavWrapper>
        </Col>
      </Row>
    </Container>
  </TopNav>
);

export default NavBar;

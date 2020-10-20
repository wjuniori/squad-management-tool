import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TopNav = styled.nav`
  background-color: var(--color-primary);
  overflow: hidden;
  color: var(--color-text-primary);
`;

export const TopNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CustomLink = styled(Link)`
  color: var(--color-text-primary);

  :hover {
    color: var(--color-text-primary);
  }
`;

export const TopNavContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 69.3px; /* original image width: 99px */
  height: auto;
`;

export const Text = styled.span`
  display: none;

  /* Small ≥576px */
  @media (min-width: 576px) {
    display: inline;
  }
`;

export const Dot = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  background-color: var(--color-text-primary);
  color: var(--color-text-secondary);
  border-radius: 50%;
`;

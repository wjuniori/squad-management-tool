import styled, { css } from 'styled-components';

interface ModalProps {
  visible?: boolean;
}

export const Modal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: va(--color-text-secondary);
  background-color: rgba(0, 0, 0, 0.4);
  display: none;

  ${({ visible }: ModalProps) => {
    return (
      visible &&
      css`
        display: flex;
        justify-content: center;
        align-items: center;
      `
    );
  }}
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  text-align: center;

  /* Medium ≥768px */
  @media (min-width: 768px) {
    width: 40%;
  }
`;

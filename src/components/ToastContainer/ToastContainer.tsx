import React from 'react';
import { useTransition } from 'react-spring';
import { ToastMessage } from '../../contexts/Toast/ToastContext';
import Wrapper from './ToastContainer.styles';
import Toast from './Toast/Toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    (message) => message.id,
    {
      from: { right: '-120%', transform: 'rotateX(180deg)' },
      enter: { right: '0%', transform: 'rotateX(0deg)' },
      leave: { right: '-120%', transform: 'rotateX(180deg)' },
    }
  );

  return (
    <Wrapper>
      {messagesWithTransitions.map(({ item, key, props }) => {
        return <Toast key={key} message={item} style={props} />;
      })}
    </Wrapper>
  );
};

export default ToastContainer;

import React from 'react';
import { Modal } from '../Modal/Modal';
import ModalContentLoader from './Loader.styles';
import Spinner from '../../Spinner/Spinner';

interface LoaderProps {
  isLoading?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => (
  <Modal visible={isLoading}>
    <ModalContentLoader>
      <Spinner />
    </ModalContentLoader>
  </Modal>
);

Loader.defaultProps = {
  isLoading: false,
};

export default Loader;

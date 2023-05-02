import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, message } from 'antd';

import { 
  Title,
} from './modal-add-component.style';
function ModalAddSong({ isModalOpen, handleCancel, setSongs }) {
  const [loading, setLoading] = useState(false);

  return (
    <Modal 
      open={isModalOpen}  
      footer={[]}
      onCancel={handleCancel}
    >
      <Title>Cadastrar música</Title>
    </Modal>
  );
};
ModalAddSong.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  handleCancel: PropTypes.func.isRequired,
  setSongs: PropTypes.func.isRequired,
};
export default ModalAddSong;

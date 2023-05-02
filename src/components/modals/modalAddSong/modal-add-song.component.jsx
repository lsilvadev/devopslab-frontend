import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, message } from 'antd';

import { GENRES_TYPES } from '../../../defaults/genres';
import { getRuleFormItem } from '../../../utility/getRuleFormItem';
import { 
  Title,
  Input, 
  Select,
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
      <Form form={form} onFinish={onFinish}>
        <Form.Item 
          name="artist" 
          rules={[getRuleFormItem('preencha o nome do artista')]}
        >
          <Input placeholder="Nome do artista" />
        </Form.Item>
        
        <Form.Item 
          name="title" 
          rules={[getRuleFormItem('preencha o nome da música')]}
        >
          <Input placeholder="Nome da música" />
        </Form.Item>

        <Form.Item 
          name="genre" 
          rules={[getRuleFormItem('selecione o gênero')]}
        >
          <Select placeholder="Gênero" options={GENRES_TYPES} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

ModalAddSong.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  handleCancel: PropTypes.func.isRequired,
  setSongs: PropTypes.func.isRequired,
};

export default ModalAddSong;

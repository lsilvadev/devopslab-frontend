import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, message } from 'antd';

import { GENRES_TYPES } from '../../../defaults/genres';
import { saveSong, fetchSongs } from '../../../integrations/SongAPI';
import { getRuleFormItem } from '../../../utility/getRuleFormItem';

import { 
  Title,
  Input, 
  Select,
  BtnAddMusic
} from './modal-add-component.style';

function ModalAddSong({ isModalOpen, handleCancel, setSongs }) {
  const [loading, setLoading] = useState(false);

  const [form] = Form.useForm();

  const onFinish = (values) => {
    setLoading(true);
    addNewMusic(values);
  };

  const addNewMusic = useCallback(async (body) => {
    const response = await saveSong(body);
    setLoading(false);

    if (response.status !== 200) {
      message.warning('Não foi possivel salvar a música.');
      return;
    }

    message.success('Música salva com sucesso.');
    handleCancel();
    resetFields();
    reloadSongs();
  }, []);

  const reloadSongs = useCallback(async () => {
    const response = await fetchSongs();
    setSongs(response);
  }, []);

  const resetFields = useCallback(() => {
    form.resetFields();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await fetchSongs();
      setSongs(response);
    })();
  }, []);

  return (
    <Modal 
      open={isModalOpen}  
      footer={[]}
      onCancel={() => {
        resetFields();
        handleCancel();
      }}
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

        <Form.Item>
          <BtnAddMusic loading={loading}>Cadastrar</BtnAddMusic>
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

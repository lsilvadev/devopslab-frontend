import React, { useEffect, useState, useCallback } from 'react';
import { Modal, Form } from 'antd';

import { GENRES_LIST } from '../../../genres-list';
import { saveMusic } from '../../../integrations/MusicAPI';
import { getRuleFormItem } from '../../../utility/getRuleFormItem'

import { 
  Container, 
  Title,
  Input, 
  Select,
  Logo,
  AppName,
  BtnAddMusic
} from './modal-add-component.style';

function ModalAddMusic({ isModalOpen, handleCancel, handleOk }) {
  const onFinish = (values) => {
    // todo: add endpoint
    console.log('Success:', values);
    addNewMusic(values);
  };

  const addNewMusic = useCallback(async (body) => {
    const response = await saveMusic(body);
    console.log('response', response)
  }, []);

  return (
    <Modal 
      open={isModalOpen}  
      footer={[]}
      onCancel={handleCancel}
    >
      <Title>Cadastrar música</Title>

      <Form onFinish={onFinish}>
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
          <Select placeholder="Gênero" options={GENRES_LIST} />
        </Form.Item>

        <Form.Item>
          {/* todo: add loading */}
          <BtnAddMusic>Cadastrar</BtnAddMusic>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default ModalAddMusic;

// "request": {
//   "method": "POST",
//   "header": [],
//   "body": {
//     "mode": "raw",
//     "raw": "{\n    \"song_id\": 1, //informar o id caso queira atualizar o registro\n    \"title\": \"Era Uma Vez\",\n    \"artist\": \"Kell Smith\",\n    \"genre\": \"MPB\"\n}",
//     "options": {
//       "raw": {
//         "language": "json"
//       }
//     }
//   },
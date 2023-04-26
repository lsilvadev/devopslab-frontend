import React, { useEffect, useState } from 'react';

import ModalAddMusic from '../modals/modalAddMusic/modal-add-music.component';

import { 
  Container, 
  ContainerLogo,
  Logo,
  AppName,
  ButtonStyled
} from './header.style'

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <ContainerLogo>
        <Logo src="./logo.png" />
        <AppName>dt music</AppName>
      </ContainerLogo>
      <ButtonStyled onClick={showModal}>Adicionar música</ButtonStyled>

      <ModalAddMusic isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} />
    </Container>
  )
}

export default Header;

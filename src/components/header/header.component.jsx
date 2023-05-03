import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ModalAddSong from '../modals/modalAddSong/modal-add-song.component';

import { 
  Container, 
  ContainerLogo,
  Logo,
  AppName,
  ButtonStyled
} from './header.style'

function Header({ setSongs }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
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

      <ModalAddSong 
        isModalOpen={isModalOpen} 
        handleCancel={handleCancel} 
        setSongs={setSongs} 
      />
    </Container>
  );
};

Header.propTypes = {
  setSongs: PropTypes.func.isRequired,
};

export default Header;

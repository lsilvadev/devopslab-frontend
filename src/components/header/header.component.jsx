import React, { useState } from 'react';
import ModalAddSong from '../modals/modalAddSong/modal-add-song.component';

function Header({ setSongs }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
      <ModalAddSong 
        isModalOpen={isModalOpen} 
        handleCancel={handleCancel} 
        setSongs={setSongs} 
      />
  );
};
Header.propTypes = {
  setSongs: PropTypes.func.isRequired,
};
export default Header;

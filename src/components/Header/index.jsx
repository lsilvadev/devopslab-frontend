import React, { useEffect, useState } from 'react'

import { 
  Container, 
  ContainerLogo,
  Logo,
  AppName,
  ButtonStyled
} from './styles'

function Header() {
  return (
    <Container>
      <ContainerLogo>
        <Logo src="./logo.png" />
        <AppName>dt music</AppName>
      </ContainerLogo>
      <ButtonStyled onClick={() => {}}>Adicionar música</ButtonStyled>
    </Container>
  )
}

export default Header;

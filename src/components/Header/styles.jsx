import styled from "styled-components";
import { Button, Select } from 'antd'

import { PRIMARY_COLOR, WHITE, DARK_PRIMARY_COLOR } from '../../defaults/Colors';

export const Container = styled.header`
  background-color: ${PRIMARY_COLOR};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 160px;
`;

export const ContainerLogo = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const Logo = styled.img`
  width: 100px;
`;

export const AppName = styled.h1`
  color: ${WHITE};
`;

export const ButtonStyled = styled(Button)`
  background-color: ${DARK_PRIMARY_COLOR};
  border-color: ${DARK_PRIMARY_COLOR};
  color: ${WHITE};
`;
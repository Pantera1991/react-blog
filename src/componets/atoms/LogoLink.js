import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from 'assets/icons/logo.svg';

const LogoLink = styled(NavLink)`
  display: block;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100%;
  border: none;
  width: 200px;
  height: 60px;
`;

export default LogoLink;
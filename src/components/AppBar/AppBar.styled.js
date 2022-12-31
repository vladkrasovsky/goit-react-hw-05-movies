import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  color: #333;
  font-weight: 500;
  text-decoration: none;
  padding: 16px;
  user-select: none;
  &.active {
    color: tomato;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    text-decoration: underline;
  }
`;

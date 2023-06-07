import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: block;
  padding: ${({ theme }) => theme.spacing(5)};
  color: ${({ theme }) => theme.colors.accent};
  &.active {
    color: ${({ theme }) => theme.colors.dark};
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

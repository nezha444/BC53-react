import { Outlet } from 'react-router-dom';
import { StyledLink } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul style={{ display: 'flex' }}>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/todos">Todos</StyledLink>
            </li>
            <li>
              <StyledLink to="/gallery">Gallery</StyledLink>
            </li>
            <li>
              <StyledLink to="/cocktail">Cocktail</StyledLink>
            </li>
            <li>
              <StyledLink to="/register">Registration</StyledLink>
            </li>
          </ul>
        </nav>
      </header>
      <div
        style={{
          width: '700px',
          backgroundColor: 'lightgreen',
          margin: '0 auto',
        }}
      >
        <Outlet />
      </div>
    </>
  );
};

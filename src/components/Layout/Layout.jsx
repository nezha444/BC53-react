import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSeletors';
import { StyledLink } from './Layout.styled';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <header>
        <nav>
          <ul style={{ display: 'flex' }}>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            {isLoggedIn ? (
              <>
                <li>
                  <StyledLink to="/todos">Todos</StyledLink>
                </li>
                <li>
                  <StyledLink to="/gallery">Gallery</StyledLink>
                </li>
                <li>
                  <StyledLink to="/cocktail">Cocktail</StyledLink>
                </li>
              </>
            ) : (
              <li>
                <StyledLink to="/register">Registration</StyledLink>
              </li>
            )}
            
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

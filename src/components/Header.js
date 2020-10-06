import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const NavStyle = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
`;
const CardStyle = styled.div`
  display: grid;
  margin: 0;
  padding: 0;
  grid-template-columns: 1fr 3fr;
`;
const LinkStyle = styled.div`
  padding: 0;
  margin: 0;
  border: 1px solid rgb(212, 210, 210);
  border-radius: 6px;
  box-shadow: 0 0 3px 0 rgb(172, 170, 170);
  font-size: 40px;
`;
const Header = () => {
  return (
    <NavStyle>
      <CardStyle>
        <Link to="movieList">
          <LinkStyle>영화목록</LinkStyle>
        </Link>
      </CardStyle>
      <CardStyle>
        <Link to="/">
          <LinkStyle>영화등록</LinkStyle>
        </Link>
      </CardStyle>
    </NavStyle>
  );
};

export default Header;

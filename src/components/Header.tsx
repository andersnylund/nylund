import React from 'react';
import styled from 'styled-components';
import 'typeface-pacifico';

import ProfileImage from './ProfileImage';

const Container = styled.header`
  font-family: 'Pacifico';
  * {
    text-decoration: none;
    color: ${props => props.theme.pink};
  }

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 3rem;
  padding: 1rem;
`;

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const Header = () => {
  return (
    <Container>
      <ProfileImage />
      <Link href={window.location.href}>andersnylund</Link>
      <Link href="https://blog.andersnylund.com">blog -></Link>
    </Container>
  );
};

export default Header;

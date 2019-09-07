import React from 'react';
import styled from 'styled-components';

import ProfileImage from './ProfileImage';

const StyledHeader = styled.header`
  display: flex;
`;

const Link = styled.a``;

const Header = () => {
  return (
    <StyledHeader>
      <Link href={window.location.href}>
        <ProfileImage />
        <span>andersnylund</span>
      </Link>
    </StyledHeader>
  );
};

export default Header;

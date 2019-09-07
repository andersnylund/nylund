import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

const ProfileImage = () => {
  return (
    <Image
      src={process.env.PUBLIC_URL + '/profile.jpg'}
      alt="Profile Picture"
    />
  );
};

export default ProfileImage;

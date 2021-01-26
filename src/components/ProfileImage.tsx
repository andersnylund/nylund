import React from 'react';
import styled from 'styled-components';

const ProfileImage = () => (
  <Image src={process.env.PUBLIC_URL + '/profile.jpg'} alt="Profile Picture" />
);

const Image = styled.img`
  border-radius: 50%;
  height: 100%;
  object-fit: cover;
  width: 100px;
`;

export default ProfileImage;

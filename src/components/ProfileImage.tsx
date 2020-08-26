import React from 'react';
import styled from 'styled-components';

const ProfileImage = () => (
  <Image src={process.env.PUBLIC_URL + '/profile.jpg'} alt="Profile Picture" />
);

const Image = styled.img`
  width: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

export default ProfileImage;

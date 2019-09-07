import React from 'react';
import styled from 'styled-components';
import { motion, TargetAndTransition } from 'framer-motion';

const Image = styled(motion.img)`
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

const onHoverOptions: TargetAndTransition = {
  scale: 3,
  y: '100%',
  x: '100%',
  borderRadius: '10%',
  boxShadow: '5px 5px 10px 0px rgba(0,0,0,0.75)'
};

const transitionOptions = { mass: 0.5 };

const ProfileImage = () => {
  return (
    <Image
      transition={transitionOptions}
      whileHover={onHoverOptions}
      src={process.env.PUBLIC_URL + '/profile.jpg'}
      alt="Profile Picture"
    />
  );
};

export default ProfileImage;

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';

const imageVariants: Variants = {
  open: {
    borderRadius: '30%',
    width: '100%',
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 1
    }
  },
  closed: {
    width: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    cursor: 'pointer',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
};

const ProfileImage = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <motion.img
      animate={isOpen ? 'open' : 'closed'}
      variants={imageVariants}
      onTap={() => setOpen(!isOpen)}
      src={process.env.PUBLIC_URL + '/profile.jpg'}
      alt="Profile Picture"
    />
  );
};

export default ProfileImage;

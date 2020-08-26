import React from 'react';
import styled from 'styled-components';
import 'typeface-pacifico';
import { motion, Variants } from 'framer-motion';

import ProfileImage from './ProfileImage';
import { colors } from '../GlobalStyle';

const Container = styled(motion.header)`
  font-family: 'Pacifico';
  * {
    text-decoration: none;
    color: ${colors.pink};
  }

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 3rem;
  padding: 1rem;
`;

const Link = styled(motion.a)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const AnimatedLink: React.FC<{ href: string }> = (props) => (
  <Link
    {...props}
    whileHover={{
      scale: 1.05,
      textShadow: `${colors.darkPink} 2px 2px 4px`,
    }}
    whileTap={{ scale: 0.95 }}
  />
);

const variants: Variants = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: { opacity: 0, y: -5 },
};

const Header = () => {
  return (
    <Container initial="hidden" animate="visible" variants={variants}>
      <ProfileImage />
      <AnimatedLink href={window.location.href}>andersnylund</AnimatedLink>
      <AnimatedLink href="https://blog.andersnylund.com">
        blog &gt;
      </AnimatedLink>
    </Container>
  );
};

export default Header;

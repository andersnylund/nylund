import React, { useState, useEffect, FC } from 'react';
import { motion } from 'framer-motion';
import styled, {
  css,
  FlattenSimpleInterpolation,
  CSSProperties
} from 'styled-components';

interface SLProps {
  role: string;
  roleStyling: CSSProperties;
  emoji: string;
  text: string;
}

const StatementLine: FC<SLProps> = ({ role, roleStyling, emoji, text }) => (
  <span>
    <span style={roleStyling}>{role}</span>
    {emoji}
    {text}
  </span>
);

const statements = [
  <StatementLine
    roleStyling={{ fontSize: '30rem' }}
    role="frontend developer"
    emoji="🙋🏼‍♂️"
    text="connecting the user with the application"
  />
  //   <StatementLine
  //     role="backend developer"
  //     roleStyling="font-size: 30rem;"
  //     emoji="👨🏼‍💻"
  //     text="implementing the crucial business logic"
  //   />,
  //   <StatementLine
  //     role="database wizard"
  //     roleStyling={css`
  //       font-size: 30rem;
  //     `}
  //     emoji=" 🧙🏼‍♂️ "
  //     text="writing blazing fast queries"
  //   />,
  //   <StatementLine
  //     role="learning designer"
  //     roleStyling={css`
  //       font-size: 30rem;
  //     `}
  //     emoji=" 👨🏻‍🎨 "
  //     text="who strives for beautiful creations"
  //   />
];

const Container = styled.div`
  display: flex;
  height: 300px;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 800;
`;

const MotionDiv = styled(motion.div)`
  max-width: 50%;
  text-align: center;
`;

const animationDuration = 5;

const Statement = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (index < statements.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, animationDuration * 1000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <Container>
      I am a&nbsp;
      <MotionDiv
        animate={{
          y: [-10, 0, 0, 0, 10],
          opacity: [0, 1, 1, 1, 0]
        }}
        transition={{
          duration: animationDuration - 1,
          loop: Infinity,
          repeatDelay: 1
        }}
      >
        {statements[index]}
      </MotionDiv>
    </Container>
  );
};

export default Statement;

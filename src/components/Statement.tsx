import React, { useState, useEffect, FC } from 'react';
import { motion } from 'framer-motion';
import styled, { StyledComponent } from 'styled-components';
import 'typeface-modak';

interface SLProps {
  renderRole: StyledComponent<'div', any, {}, never>;
  role: string;
  emoji: string;
  text: string;
}

const Emoji = styled.div`
  font-size: 5rem;
`;

const Text = styled.div`
  color: hsl(0, 0%, 60%);
  text-transform: none;
`;

const RoleEmojiContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 4rem;
`;

const StatementLine: FC<SLProps> = ({
  renderRole: RenderRole,
  role,
  emoji,
  text
}) => (
  <>
    <RoleEmojiContainer>
      <RenderRole>{role}</RenderRole>
      <Emoji>{emoji}</Emoji>
    </RoleEmojiContainer>
    <Text>{text}</Text>
  </>
);

const statements = [
  <StatementLine
    renderRole={styled.div`
      font-family: Modak;
      font-weight: normal;
    `}
    role="frontend developer"
    emoji="🤝"
    text="connecting the user with the application"
  />,
  <StatementLine
    renderRole={styled.div``}
    role="backend developer"
    emoji="🙋🏼‍♂️"
    text="implementing the crucial business logic"
  />,
  <StatementLine
    renderRole={styled.div``}
    role="database wizard"
    emoji=" 🧙🏼‍♂️ "
    text="writing blazing fast queries"
  />,
  <StatementLine
    renderRole={styled.div`
      font-family: Pacifico;
    `}
    role="learning designer"
    emoji=" 👨🏻‍🎨 "
    text="who strives for beautiful creations"
  />
];

const Container = styled.div`
  display: flex;
  height: 300px;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: 800;

  > * {
    padding: 1rem;
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const MotionDiv = styled(motion.div)`
  /* max-width: 50%; */
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
      <div>I am a&nbsp;</div>
      <motion.div
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
      </motion.div>
    </Container>
  );
};

export default Statement;

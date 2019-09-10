import React, { useState, FC } from 'react';
import { motion } from 'framer-motion';
import styled, { StyledComponent } from 'styled-components';
import 'typeface-modak';
import 'typeface-vt323';
import 'typeface-pt-mono';

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
  font-weight: normal;
`;

const StatementLine: FC<SLProps> = ({
  renderRole: RenderRole,
  role,
  emoji,
  text
}) => (
  <>
    <RoleEmojiContainer>
      <RenderRole>{role}</RenderRole>&nbsp;
      <Emoji>{emoji}</Emoji>
    </RoleEmojiContainer>
    <Text>{text}</Text>
  </>
);

const statements = [
  <StatementLine
    renderRole={styled.div`
      font-family: Modak;
    `}
    role="frontend developer"
    emoji="🤝"
    text="connecting the user with the application"
  />,
  <StatementLine
    renderRole={styled.div`
      font-family: PT mono;
    `}
    role="backend developer"
    emoji="🙋🏼‍♂️"
    text="implementing the crucial business logic"
  />,
  <StatementLine
    renderRole={styled.div`
      font-family: VT323;
    `}
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

const animationDuration = 3;
const yValue = 30;

const Statement = () => {
  const [index, setIndex] = useState(0);

  return (
    <Container>
      <div>I am a&nbsp;</div>
      <motion.div
        animate={{
          y: [-yValue, 0, 0, 0, yValue],
          opacity: [0, 1, 1, 1, 0]
        }}
        transition={{
          duration: animationDuration - 1,
          loop: Infinity,
          repeatDelay: 1
        }}
        onUpdate={latest => {
          if (latest.y !== yValue) {
            return;
          }
          if (index < statements.length - 1) {
            setIndex(index => index + 1);
          } else {
            setIndex(0);
          }
        }}
      >
        {statements[index]}
      </motion.div>
    </Container>
  );
};

export default Statement;

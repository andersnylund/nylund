import React, { useState } from 'react';
import {
  motion,
  TargetAndTransition,
  Orchestration,
  Tween
} from 'framer-motion';
import styled from 'styled-components';

import statementList from './StatementList';

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

const animateOptions: TargetAndTransition = {
  y: [-yValue, 0, 0, 0, yValue],
  opacity: [0, 1, 1, 1, 0]
};

const transitionOptions: Orchestration & Tween = {
  duration: animationDuration - 1,
  loop: Infinity,
  repeatDelay: 1
};

const Statement = () => {
  const [index, setIndex] = useState(0);

  const handleUpdate = (latest: { [key: string]: React.ReactText }) => {
    if (latest.y !== yValue) {
      return;
    }
    if (index < statementList.length - 1) {
      setIndex(index => index + 1);
    } else {
      setIndex(0);
    }
  };

  return (
    <Container>
      <div>I am a&nbsp;</div>
      <motion.div
        animate={animateOptions}
        transition={transitionOptions}
        onUpdate={handleUpdate}
      >
        {statementList[index]}
      </motion.div>
    </Container>
  );
};

export default Statement;

import React, { FC } from 'react';
import styled, { StyledComponent } from 'styled-components';

interface SLProps {
  renderRole: StyledComponent<'div', any, {}, never>;
  role: string;
  emoji: string;
  text: string;
}

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  font-size: 4rem;
  font-weight: normal;
`;

const Emoji = styled.div`
  font-size: 5rem;
  line-height: 200%;
`;

const Text = styled.div`
  color: hsl(0, 0%, 40%);
  text-transform: none;
  font-size: 3rem;
  font-weight: bold;
`;

const StatementLine: FC<SLProps> = ({
  renderRole: RenderRole,
  role,
  emoji,
  text
}) => (
  <Container>
    <RenderRole>{role}</RenderRole>
    <Emoji>{emoji}</Emoji>
    <Text>{text}</Text>
  </Container>
);

export default StatementLine;

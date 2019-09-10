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
  background-color: red;
`;

const RoleEmojiContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 4rem;
  font-weight: normal;
`;

const Emoji = styled.div`
  font-size: 5rem;
`;

const Text = styled.div`
  color: hsl(0, 0%, 60%);
  text-transform: none;
`;

const StatementLine: FC<SLProps> = ({
  renderRole: RenderRole,
  role,
  emoji,
  text
}) => (
  <Container>
    <RoleEmojiContainer>
      <RenderRole>{role}</RenderRole>&nbsp;
      <Emoji>{emoji}</Emoji>
    </RoleEmojiContainer>
    <Text>{text}</Text>
  </Container>
);

export default StatementLine;

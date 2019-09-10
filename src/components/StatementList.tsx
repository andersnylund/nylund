import React from 'react';
import styled from 'styled-components';
import 'typeface-modak';
import 'typeface-vt323';
import 'typeface-pt-mono';

import StatementLine from './StatementLine';

const statementList = [
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

export default statementList;

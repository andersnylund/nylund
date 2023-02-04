import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  max-width: 600px;
  margin: 0 1rem;
  background-color: hsla(0, 0%, 90%);
  border-radius: 2rem;
  padding: 1rem;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.2);

  .email-link {
    color: ${(props) => props.theme.grey};
    text-shadow: 1px 1px 1px ${(props) => props.theme.pink};
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }

  .list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;

    li {
      padding: 5px 10px;
    }
  }
`;

const About = () => (
  <Container>
    <Box>
      <h2>TL;DR</h2>
      <p>
        Fullstack web developer from Finland. I love to solve problems and
        create stuff. I constantly learn and build things with my freshly
        acquired skills.
      </p>

      <h2>Some more</h2>
      <p>
        I love to combine the technical and &quot;soft&quot; parts of software
        development and I think that developer&apos;s voice should be heard
        more. I want to create products that help people in their everyday life
        and make everyone a bit more productive and able to enjoy their life
        more.
      </p>
      <p>
        During my career I have used the following technologies, more or less:
      </p>
      <ul className="list">
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>React</li>
        <li>Node</li>
        <li>Express</li>
        <li>Java</li>
        <li>Spring Framework</li>
        <li>Gatsby</li>
        <li>Next.js</li>
        <li>RestAPIs</li>
        <li>GraphQL</li>
        <li>Python</li>
        <li>Django</li>
        <li>MySQL</li>
        <li>PostgreSQL</li>
        <li>Docker</li>
        <li>AWS</li>
        <li>Azure</li>
        <li>Heroku</li>
        <li>Netlify</li>
        <li>Contentful</li>
        <li>Git</li>
        <li>Travis CI</li>
        <li>Web Accessibility</li>
        <li>Azure Pipelines</li>
        <li></li>
      </ul>
      <p>
        You can contact me at&nbsp;
        <a className="email-link" href="mailto:anders@nylund.co">
          anders@nylund.co
        </a>
      </p>
    </Box>
  </Container>
);

export default About;

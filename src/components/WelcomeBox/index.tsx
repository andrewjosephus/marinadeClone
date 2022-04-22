import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1``;

const AppName = styled.span`
  color: #0070f3;
`;

const Subtitle = styled.p``;

const Code = styled.code`
  background-color: #eee;
  padding: 5px 8px;
  border-radius: 4px;
`;

const WelcomeBox: React.FC = function () {
  return (
    <Wrapper>
      <Title>
        Welcome to <AppName>marinade!!!!!</AppName>
      </Title>

      <Subtitle>
        Get started by editing <Code>pages/index.tsx</Code>
      </Subtitle>
    </Wrapper>
  );
};

export default WelcomeBox;

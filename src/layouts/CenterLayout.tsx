import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0 2rem;
`;

const CenterLayout: React.FC<React.PropsWithChildren<unknown>> = function (
  props
) {
  const { children } = props;
  return <Container>{children}</Container>;
};

export default CenterLayout;

import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  height: 200vh;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: azure;
  font-family: 'Rubik', sans-serif;
`;

export const Header = styled.header`
  display: inherit;
  align-self: flex-start;
  justify-content: center;
  background-color: aliceblue;
  height: 5vh;
  width: 100%;
`;

export const List = styled.ul`
  display: inherit;
  width: 55%;
  list-style: none;
  justify-content: space-around;
  padding-inline-start: 0px;

  li {
    font-weight: 700;
  }
`;

interface PageProps {
  height: string;
}

export const Page = styled.div<PageProps>`
  display: inherit;
  height: ${(props) => props.height};
  justify-content: center;
  align-items: center;
`;

export const Body = styled.div`
  display: inherit;
  flex-direction: column;
`;

export const Landing = styled.div`
  display: inherit;
  width: 55%;
  justify-content: space-between;

  span {
    align-self: center;
  }
`;

export const Textbox = styled.div`
  display: inherit;
  flex-direction: column;
  width: 50%;
  justify-content: space-between;
  h1 {
    margin-block: 0;
    font-size: 4em;
    line-height: 1;
  }
  p {
    margin-top: auto;
    line-height: 1.5;
    margin-block: 0;
    font-size: 1.5em;
  }
`;

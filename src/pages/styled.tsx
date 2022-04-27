import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  height: 150vh;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: azure;
  font-family: 'Rubik', sans-serif;
`;

export const Header = styled.header`
  display: inherit;
  justify-content: center;
  align-items: flex-end;
  background-color: aliceblue;
  height: 10vh;
  width: 100%;
  z-index: 50;
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
  flex-direction: column;
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
  flex-wrap: wrap;
  height: 45vh;

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

export const WriteupWrapper = styled.div`
  height: 100vh;
  display: inherit;
  flex-direction: column;
  align-items: flex-start;
  width: 55%;
`;

// interface WriteupProps {
//   height: string;
// }

export const WriteupBlock = styled.div`
  display: inherit;
  flex-direction: column;
  align-items: flex-start;
`;

export const Writeup = styled.p`
  line-height: 1.5;
  font-size: 1.3em;
`;

export const YellowLine = styled.hr`
  background-color: #fac832;
  border: 0px;
  margin: 50px auto;
  width: 50%;
  height: 5px;
  border-radius: 5px;
  max-width: 430px;
  clear: both;
`;

export const WriteupTitles = styled.h1``;

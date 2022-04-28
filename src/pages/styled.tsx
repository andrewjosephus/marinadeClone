import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  font-family: 'Rubik', sans-serif;
`;

export const Header = styled.header`
  display: inherit;
  justify-content: center;
  align-items: flex-end;
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

export const StyledLink = styled.p`
  position: relative;
  display: inline;
  :hover {
    cursor: pointer;
  }

  :hover::before {
    transform-origin: 0% 50%;
    transform: scaleX(1);
  }
  ::before {
    content: '';
    background-color: #fac832;
    height: 2px;
    bottom: -3px;
    transform: scaleX(0);
    transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
    position: absolute;
    width: 100%;
    left: 0;
  }
`;

export const StyledALink = styled.a`
  position: relative;
  text-decoration: underline;
  text-decoration-line: underline;
  text-decoration-thickness: 2px;
  text-decoration-style: initial;
  text-decoration-color: initial;
  transition: all 0.25s ease;
  color: #f83735;
  :hover {
    color: #fac832;
    cursor: pointer;
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
  width: 100%;
  display: inherit;
  flex-direction: column;
`;

export const Landing = styled.div`
  display: inherit;
  width: 40%;
  justify-content: space-between;
  flex-wrap: wrap;

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
    font-size: 3.2em;
    line-height: 1;
  }
  p {
    margin-top: auto;
    line-height: 1.5;
    margin-block: 0;
    font-size: 1.2em;
  }
`;

export const WriteupWrapper = styled.div`
  height: 100vh;
  display: inherit;
  flex-direction: column;
  align-items: flex-start;
  width: 40%;
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
  font-size: 1.2em;

  ul {
    li {
      margin-top: 20px;
    }
  }
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

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
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 10vh;
  width: 100%;
  z-index: 50;
`;

export const List = styled.ul`
  display: flex;
  width: 55%;
  list-style: none;
  justify-content: space-around;
  padding-inline-start: 0px;
  align-items: baseline;

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
    color: #f38281;
    cursor: pointer;
  }
`;

interface PageProps {
  height: string;
}

export const Page = styled.div<PageProps>`
  display: flex;
  height: ${(props) => props.height};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Landing = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
  flex-wrap: wrap;

  span {
    align-self: center;
  }
`;

interface TextboxProps {
  justifyContent: string;
}

export const Textbox = styled.div<TextboxProps>`
  display: flex;
  flex-direction: column;
  width: 45%;
  justify-content: ${(props) => props.justifyContent};
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
interface WriteupWrapperProps {
  width: number;
}

export const WriteupWrapper = styled.div<WriteupWrapperProps>`
  height: 100vh;
  width: ${(props) => props.width}%;
`;

export const WriteupBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

interface WriteupProps {
  marginBottom?: number;
}

export const Writeup = styled.div<WriteupProps>`
  display: block;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
  line-height: 1.5;
  font-size: 1.2em;
  margin-bottom: ${(props) => props.marginBottom}px;

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

export const RedLine = styled.hr`
  background-color: #f83735;
  border: 0px;
  margin: 0px;
  padding: 3px;
  width: 7%;
  max-width: 430px;
  clear: both;
`;

interface TitleProps {
  marginBlockEnd: number;
}

export const WriteupTitle = styled.h1<TitleProps>`
  margin-block-end: ${(props) => props.marginBlockEnd}px;
  p {
    margin-block-start: 0;
  }
`;

export const ProjectGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 30% 40% 30%;
`;

export const ProjectBlocks = styled.div`
  margin-top: 10px;
  margin-bottom: 50px;
  width: 100%;
  display: block;
  margin-left: 0;
  margin-right: 0;
  line-height: 1.5;
  font-size: 1.2em;
`;

export const Projectlist = styled.ul`
  list-style: none;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  width: 100%;

  li {
    display: grid;
    grid-template-columns: 45% 55%;
    position: relative;
    margin-top: 40px;
  }
`;

export const Projectwriteup = styled.p`
  margin-block-start: 0;
  margin-block-end: 0;

  ::before {
    content: '→ ';
    font-weight: bold;
  }
`;

export const ProjectFilterArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20%;
  width: 50%;
`;

interface ProjectButtonProps {
  backgroundColor: string;
}
export const ProjectButton = styled.button<ProjectButtonProps>`
  width: fit-content;
  margin-top: 5px;
  padding: 8px 16px;
  border: 0;
  border-radius: 50px;
  color: white;
  background-color: ${(props) => props.backgroundColor};
  display: block;
  margin-left: 0;
  margin-right: 0;
  line-height: 1.5;
  font-size: 1.2em;

  :hover {
    cursor: pointer;
  }
`;

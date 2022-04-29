import React from 'react';

import {
  Page,
  Projectblocks,
  Projectbutton,
  Projectfilterarea,
  Projectgrid,
  Projectlist,
  Projectwriteup,
  RedLine,
  StyledALink,
  WriteupTitles,
  WriteupWrapper,
} from '../pages/styled';

const KeywordContext = React.createContext();

const Keyword = ({ children }) => {
  const [selected, setSelected] = React.useState([]);
  return (
    <KeywordContext.Provider value={{ selected, setSelected }}>
      {children}
    </KeywordContext.Provider>
  );
};

const useKeywordContext = () => {
  const context = React.useContext(KeywordContext);
  if (!context) {
    throw new Error('use context properly');
  }
  return context;
};

const PreKeywordTag = ({ children }) => {
  const [on, setOn] = React.useState(false);
  const { selected, setSelected } = useKeywordContext();

  const toggle = () => {
    setOn(!on);
    const selectedArr = [...selected];
    if (selectedArr.includes(children)) {
      selectedArr.splice(selectedArr.indexOf(children), 1);
      setSelected(selectedArr);
    } else {
      selectedArr.push(children);
      setSelected(selectedArr);
    }
  };

  React.useEffect(() => {});

  return (
    <Projectbutton
      onClick={toggle}
      style={on ? { backgroundColor: 'red' } : null}
    >
      # {children}
    </Projectbutton>
  );
};

export const KeywordTag = () => {
  return (
    <>
      <Keyword>
        <PreKeywordTag>javascript</PreKeywordTag>
        <PreKeywordTag>css</PreKeywordTag>
        <PreKeywordTag>coding</PreKeywordTag>
        <PreKeywordTag>life</PreKeywordTag>
      </Keyword>
    </>
  );
};

function Projects({ initialSet = null, step = 1 }) {
  const [displayedProjects, setDisplayedProjects] = React.useState(initialSet);

  return <WriteupWrapper width={100}>{displayedProjects}</WriteupWrapper>;
}

const Projectpage = () => {
  return (
    <>
      <Page height={'120vh'}>
        <Projectgrid>
          <Projectfilterarea>
            <WriteupTitles marginBlockEnd={0}>
              Filter by <p>Year and Type</p>{' '}
            </WriteupTitles>
            <Projectbutton># css</Projectbutton>
          </Projectfilterarea>
          <WriteupWrapper width={100}>
            <WriteupTitles marginBlockEnd={5}>2021</WriteupTitles>
            <RedLine></RedLine>
            <Projectblocks>
              <Projectlist>
                <li>
                  <StyledALink>Outsystems Traineeship</StyledALink>
                  <Projectwriteup>
                    Took part in a traineeship using the Outsystems platform to
                    create enterprise system for Advanced Micro Foundaries
                  </Projectwriteup>
                </li>
                <li>
                  <StyledALink>Outsystems Certification</StyledALink>
                  <Projectwriteup>
                    Completed an Outsystems Traditonal Web Certification exam
                  </Projectwriteup>
                </li>
                <li>
                  <StyledALink>Outsystems Bootcamp</StyledALink>
                  <Projectwriteup>
                    Completed an Outsystems Traditonal Web Certification
                    bootcamp
                  </Projectwriteup>
                </li>
              </Projectlist>
            </Projectblocks>
            <WriteupTitles marginBlockEnd={5}>2020</WriteupTitles>
            <RedLine></RedLine>
            <Projectblocks>
              <Projectlist>
                <li>
                  <StyledALink>Created first freelance website</StyledALink>
                  <Projectwriteup>
                    Got my first freelance web developer job to create a website
                  </Projectwriteup>
                </li>
                <li>
                  <StyledALink>Started learning Javascript</StyledALink>
                  <Projectwriteup>
                    Went back to learning javascript after years of not reading
                    any code
                  </Projectwriteup>
                </li>
                <li>
                  <StyledALink>Started learning HTML and CSS</StyledALink>
                  <Projectwriteup>
                    Started learning HTML and CSS to begin my developer journey
                  </Projectwriteup>
                </li>
                <li>
                  <StyledALink>Ended career with airforce</StyledALink>
                  <Projectwriteup>
                    Ended my contract with the force as I couldn't fly properly
                    :(
                  </Projectwriteup>
                </li>
              </Projectlist>
            </Projectblocks>
            <WriteupTitles marginBlockEnd={5}>2019</WriteupTitles>
            <RedLine></RedLine>
            <Projectblocks>
              <Projectlist>
                <li>
                  <StyledALink>Flying planes</StyledALink>
                  <Projectwriteup>
                    Was a pilot once. Maybe in another life
                  </Projectwriteup>
                </li>
              </Projectlist>
            </Projectblocks>
          </WriteupWrapper>
        </Projectgrid>
      </Page>
    </>
  );
};

export default Projectpage;

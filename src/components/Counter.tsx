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

const ListItem = ({ link, content }) => {
  return (
    <>
      <Projectlist>
        <StyledALink>{link}</StyledALink>
        <Projectwriteup>{content}</Projectwriteup>
      </Projectlist>
    </>
  );
};

function Projects({ initialSet = null, step = 1 }) {
  const [displayedProjects, setDisplayedProjects] = React.useState(initialSet);

  return <WriteupWrapper width={100}>{displayedProjects}</WriteupWrapper>;
}

// export default Projectpage;

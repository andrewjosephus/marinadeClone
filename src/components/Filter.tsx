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
import { listOfKeywords, projectData } from './Data';

interface TagProps {
  isSelected: boolean;
  handleTagClick: (keyword: string) => void;
  keyword: string;
}

const Tag: React.FC<TagProps> = function (props) {
  const { keyword, handleTagClick, isSelected } = props;

  const handleClick = () => {
    handleTagClick(keyword);
  };

  return (
    <Projectbutton
      backgroundColor={isSelected ? 'red' : '#273641'}
      onClick={handleClick}
    >
      # {keyword}
    </Projectbutton>
  );
};

interface KeywordTagProps {
  onClick: (keyword: string) => void;
}

export const KeywordTag: React.FC<KeywordTagProps> = function (props) {
  const { onClick } = props;
  const [selectedKeywords, setSelectedKeywords] = React.useState<string[]>([]);

  const isKeywordSelected = (keyword: string) => {
    return selectedKeywords.includes(keyword);
  };

  const handleKeywordClick = (keyword: string) => {
    const newSelectedKeywords = [...selectedKeywords];
    if (selectedKeywords.includes(keyword)) {
      const index = selectedKeywords.indexOf(keyword);
      newSelectedKeywords.splice(index, 1);
    } else {
      newSelectedKeywords.push(keyword);
    }

    setSelectedKeywords(newSelectedKeywords);
  };

  onClick(selectedKeywords);

  return (
    <>
      {listOfKeywords.map((keyword) => (
        <Tag
          key={keyword}
          keyword={`${keyword}`}
          isSelected={isKeywordSelected(keyword)}
          handleTagClick={handleKeywordClick}
        />
      ))}
    </>
  );
};

const ProjectDetails = (data) => {
  // const [details, setDetails] = React.useState({});
  console.log(data);
  const years = Object.keys(projectData);
  years.reverse();
  return (
    <WriteupWrapper width={100}>
      {years.map((year) => (
        <>
          <WriteupTitles marginBlockEnd={5} key={year}>
            {year}
          </WriteupTitles>
          <RedLine></RedLine>
          <Projectblocks>
            <Projectlist>
              {projectData[year].map((writeup) => (
                <li key={writeup.title}>
                  <StyledALink>{writeup['title']}</StyledALink>
                  <Projectwriteup>{writeup['detail']}</Projectwriteup>
                </li>
              ))}
            </Projectlist>
          </Projectblocks>
        </>
      ))}
    </WriteupWrapper>
  );
};

// export const ProjectSpace = (data) => <ProjectDetails />;

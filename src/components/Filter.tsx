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

export const KeywordTag = () => {
  const [selectedKeywords, setSelectedKeywords] = React.useState<string[]>([]);
  console.log(selectedKeywords);

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

  // what map is doing to the arr

  // |
  // v

  // return (
  //   <>
  //     <PreKeywordTag onClick={() => handleKeywordClick('javascript')}>
  //       javascript
  //     </PreKeywordTag>
  //     <button>css</button>
  //     <button>coding</button>
  //     <button>life</button>
  //   </>
  // );
};

// const ListItem = ({ link, content }) => {
//   return (
//     <>
//       <Projectlist>
//         <StyledALink>{link}</StyledALink>
//         <Projectwriteup>{content}</Projectwriteup>
//       </Projectlist>
//     </>
//   );
// };

export const ProjectSpace = () => {
  const keywordFiltering = () => {};
  const years = Object.keys(projectData);
  return (
    <>
      <WriteupWrapper width={100}>
        {years.map((year) => (
          <WriteupTitles marginBlockEnd={5} key={year}>
            {year}
          </WriteupTitles>
        ))}
      </WriteupWrapper>
    </>
  );
};

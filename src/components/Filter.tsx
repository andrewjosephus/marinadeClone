import React from 'react';

import { ProjectButton } from '../pages/styled';
import { listOfKeywords } from './Data';

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
    <ProjectButton
      backgroundColor={isSelected ? 'red' : '#273641'}
      onClick={handleClick}
    >
      # {keyword}
    </ProjectButton>
  );
};

interface KeywordTagsProps {
  updateKeywords: (keyword: string) => void;
  selectedKeywords: string[];
}

export const KeywordTags: React.FC<KeywordTagsProps> = function (props) {
  const { updateKeywords, selectedKeywords } = props;

  const isKeywordSelected = (keyword: string) => {
    return selectedKeywords.includes(keyword);
  };

  return (
    <>
      {listOfKeywords.map((keyword) => (
        <Tag
          key={keyword}
          keyword={`${keyword}`}
          isSelected={isKeywordSelected(keyword)}
          handleTagClick={updateKeywords}
        />
      ))}
    </>
  );
};

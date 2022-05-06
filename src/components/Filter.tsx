import React from 'react';

import { Projectbutton } from '../pages/styled';
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
    <Projectbutton
      backgroundColor={isSelected ? 'red' : '#273641'}
      onClick={handleClick}
    >
      # {keyword}
    </Projectbutton>
  );
};

interface KeywordTagProps {
  updateKeywords: (keyword: string) => void;
  selectedKeywords: string[];
}

export const KeywordTag: React.FC<KeywordTagProps> = function (props) {
  const { updateKeywords, selectedKeywords } = props;
  // const [selectedKeywords, setSelectedKeywords] = React.useState<string[]>([]);

  const isKeywordSelected = (keyword: string) => {
    return selectedKeywords.includes(keyword);
  };

  const handleKeywordClick = (keyword: string) => {
    updateKeywords(keyword);
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
};

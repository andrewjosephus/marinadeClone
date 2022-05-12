import React from 'react';

import { ProjectFilterArea, ProjectGrid, WriteupTitle } from '../pages/styled';
import { KeywordTags } from './Filter';
import ProjectWriteups from './ProjectWriteups';

const ProjectSpace = () => {
  const [keywords, setKeywords] = React.useState<string[]>([]);

  function handleClick(keyword: string) {
    const newSelectedKeywords = [...keywords];
    if (keywords.includes(keyword)) {
      const index = keywords.indexOf(keyword);
      newSelectedKeywords.splice(index, 1);
    } else {
      newSelectedKeywords.push(keyword);
    }
    setKeywords(newSelectedKeywords);
  }

  return (
    <ProjectGrid>
      <ProjectFilterArea>
        <WriteupTitle marginBlockEnd={0}>
          Filter by <p>Year and Type</p>{' '}
        </WriteupTitle>
        <KeywordTags updateKeywords={handleClick} selectedKeywords={keywords} />
      </ProjectFilterArea>
      <ProjectWriteups keywords={keywords} />
    </ProjectGrid>
  );
};

export default ProjectSpace;

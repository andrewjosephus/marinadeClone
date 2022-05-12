import React from 'react';

import { Projectfilterarea, Projectgrid, WriteupTitles } from '../pages/styled';
import { KeywordTags } from './Filter';
import ProjectWriteups from './ProjectWriteups';

export function ProjectSpace() {
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
    <Projectgrid>
      <Projectfilterarea>
        <WriteupTitles marginBlockEnd={0}>
          Filter by <p>Year and Type</p>{' '}
        </WriteupTitles>
        <KeywordTags updateKeywords={handleClick} selectedKeywords={keywords} />
      </Projectfilterarea>
      <ProjectWriteups keywords={keywords} />
    </Projectgrid>
  );
}

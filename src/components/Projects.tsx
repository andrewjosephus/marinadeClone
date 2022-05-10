import React from 'react';

import {
  Projectblocks,
  Projectfilterarea,
  Projectgrid,
  Projectlist,
  Projectwriteup,
  RedLine,
  StyledALink,
  WriteupTitles,
  WriteupWrapper,
  YellowLine,
} from '../pages/styled';
import { projectData } from './Data';
import { KeywordTag } from './Filter';

interface ProjectData {
  link: string;
  title: string;
  detail: string;
}

// There is a DataHolder interface in `Data.tsx` already
interface DataHolder {
  [key: string]: ProjectData[];
}

// Is this really necessary since it is the same as DataHolder?
interface Data {
  [key: string]: ProjectData[];
}

interface ProjectWriteupsProps {
  keywords: string[];
}

// This should be in its own file
const ProjectWriteups: React.FC<ProjectWriteupsProps> = (props) => {
  const { keywords } = props;
  // You can set an initial state here https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [data, setData] = React.useState<Data>({});

  if (Object.keys(data).length === 0) {
    setData(projectData);
  }

  React.useEffect(() => {
    const dataHolder: DataHolder = {};
    const years = Object.keys(projectData);
    /* 
      1. Is the reverse necessary?
      2. Avoid mutation unless absolutely necessary. Consider Object.keys(projectData).reverse()
          or other approaches that doesn't require the reverse.
    */
    years.reverse();

    /* 
      I think you should rewrite this portion. Instead of starting from an empty object,
      start from making a copy of projectData and try to make use of array.filter.

      Kevin Kelly: To make something good, just do it. To make something grate, just re-do it,
      re-do it, redo it. The secret to making fine things is in remaking them.
    */
    keywords.forEach((keyword) => {
      let re = new RegExp(keyword, 'i');

      years.forEach((year: string) => {
        if (dataHolder[year] == null) {
          dataHolder[year] = [];
        }
        projectData[year].forEach((obj: ProjectData) => {
          if (dataHolder[year].includes(obj)) {
            return;
          }
          // Prefer early returns/exits https://forum.freecodecamp.org/t/the-return-early-pattern-explained-with-javascript-examples/19364

          /* 
          if (obj['title'].search(re) > 0) {
            dataHolder[year].push(obj);
            return;
          }

          if (obj['detail'].search(re) > 0) {
            dataHolder[year].push(obj);
            return;
          } */

          if (obj['title'].search(re) == -1) {
            if (obj['detail'].search(re) != -1) {
              dataHolder[year].push(obj);
            }
          } else {
            dataHolder[year].push(obj);
          }
        });
        // Use triple equals, dataHolder[year].length === 0
        if (dataHolder[year].length == 0) {
          delete dataHolder[year];
        }
      });
    });
    setData(dataHolder);
  }, [keywords]);

  const years = Object.keys(data);
  years.reverse();

  return (
    <WriteupWrapper width={100}>
      {years.map((year) => (
        <>
          {/* Naming is off, should probably be Title instead of Titles */}
          <WriteupTitles marginBlockEnd={5} key={year}>
            {year}
          </WriteupTitles>
          <RedLine></RedLine>
          <Projectblocks>
            <Projectlist>
              {data[year].map(
                (writeup: { link: string; title: string; detail: string }) => (
                  <li key={writeup.title}>
                    <StyledALink href={writeup['link']} target="_blank">
                      {writeup['title']}
                    </StyledALink>
                    <Projectwriteup>{writeup['detail']}</Projectwriteup>
                  </li>
                )
              )}
            </Projectlist>
          </Projectblocks>
        </>
      ))}

      <YellowLine />
    </WriteupWrapper>
  );
};

/* 
 1. Export default when there is only one function to export.
 2. Should type the function, like const ProjectSpace: React.FC = function () {};
 3. The name of the file should match the exported function, ProjectSpace.tsx.
*/
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
        <KeywordTag updateKeywords={handleClick} selectedKeywords={keywords} />
      </Projectfilterarea>
      <ProjectWriteups keywords={keywords} />
    </Projectgrid>
  );
}

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

interface DataHolder {
  [key: string]: ProjectData[];
}

interface Data {
  [key: string]: ProjectData[];
}

interface ProjectWriteupsProps {
  keywords: string[];
}

const ProjectWriteups: React.FC<ProjectWriteupsProps> = (props) => {
  const { keywords } = props;
  const [data, setData] = React.useState<Data>({});

  if (Object.keys(data).length === 0) {
    setData(projectData);
  }

  React.useEffect(() => {
    const dataHolder: DataHolder = {};
    const years = Object.keys(projectData);
    years.reverse();

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
          if (obj['title'].search(re) == -1) {
            if (obj['detail'].search(re) != -1) {
              dataHolder[year].push(obj);
            }
          } else {
            dataHolder[year].push(obj);
          }
        });
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

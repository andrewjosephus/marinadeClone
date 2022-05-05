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
} from '../pages/styled';
import { projectData } from './Data';
import { KeywordTag } from './Filter';

export function ProjectSpace() {
  const [keywords, setKeywords] = React.useState<string[]>([]);
  const [data, setData] = React.useState({});

  function handleClick(keyword) {
    setKeywords(keyword);
  }

  if (Object.keys(data).length === 0) {
    setData(projectData);
  }
  const dataHolder = {};

  React.useEffect(() => {
    const years = Object.keys(projectData);
    years.reverse();

    keywords.forEach((keyword) => {
      let re = new RegExp(keyword, 'i');

      years.forEach((year) => {
        if (dataHolder[year] == null) {
          dataHolder[year] = [];
        }
        projectData[year].forEach((obj) => {
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
    <Projectgrid>
      <Projectfilterarea>
        <WriteupTitles marginBlockEnd={0}>
          Filter by <p>Year and Type</p>{' '}
        </WriteupTitles>
        <KeywordTag onClick={handleClick} />
      </Projectfilterarea>
      <WriteupWrapper width={100}>
        {years.map((year) => (
          <>
            <WriteupTitles marginBlockEnd={5} key={year}>
              {year}
            </WriteupTitles>
            <RedLine></RedLine>
            <Projectblocks>
              <Projectlist>
                {data[year].map((writeup) => (
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
    </Projectgrid>
  );
}

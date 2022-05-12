import React from 'react';

import {
  Projectblocks,
  Projectlist,
  Projectwriteup,
  RedLine,
  StyledALink,
  WriteupTitles,
  WriteupWrapper,
  YellowLine,
} from '../pages/styled';
import { ProjectData, projectData } from './Data';

interface ProjectWriteupsProps {
  keywords: string[];
}

const ProjectWriteups: React.FC<ProjectWriteupsProps> = (props) => {
  const { keywords } = props;
  const [data, setData] = React.useState<any[]>(() => projectData);

  const years: string[] = [];
  for (const i in data) {
    years.push(data[i][0]);
  }

  React.useEffect(() => {
    if (keywords.length < 1) {
      setData(projectData);
      return;
    }
    const dataHolder = [...projectData];

    const dataHolderFiltered = dataHolder.map((arrObj) => {
      return [
        arrObj[0],
        arrObj[1].filter((content: ProjectData) => {
          for (const keyword of keywords) {
            let re = new RegExp(keyword, 'i');
            if (
              content['title'].search(re) !== -1 ||
              content['detail'].search(re) !== -1
            ) {
              return true;
            }
          }
        }),
      ];
    });

    setData(dataHolderFiltered);
  }, [keywords]);
  const filteredData = data.filter((yearItem) => yearItem[1].length > 0);

  return (
    <WriteupWrapper width={100}>
      {years.map((year) => {
        const newData = filteredData.filter((obj) => obj[0] === year);
        if (newData.length < 1) {
          return;
        }
        const projectData = newData[0][1];
        return (
          <>
            <WriteupTitles marginBlockEnd={5} key={year}>
              {year}
            </WriteupTitles>
            <RedLine></RedLine>
            <Projectblocks>
              <Projectlist>
                {projectData.map((prjdata: ProjectData) => (
                  <li key={prjdata['title']}>
                    <StyledALink href={prjdata['link']} target="_blank">
                      {prjdata['title']}
                    </StyledALink>
                    <Projectwriteup>{prjdata['detail']}</Projectwriteup>
                  </li>
                ))}
              </Projectlist>
            </Projectblocks>
          </>
        );
      })}

      <YellowLine />
    </WriteupWrapper>
  );
};

export default ProjectWriteups;

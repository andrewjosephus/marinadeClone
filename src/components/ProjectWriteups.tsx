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

  if (Object.keys(data).length === 0) {
    setData(projectData);
  }

  React.useEffect(() => {
    const dataHolder = [...projectData];
    const years = Object.keys(projectData).reverse();

    keywords.forEach((keyword) => {
      let re = new RegExp(keyword, 'i');
    });

    years.forEach((year: string) => {
      // if (dataHolder[year] == null) {
      //   dataHolder[year] = [];
      // }

      dataHolder[year].filter((obj) => {});

      // projectData[year].forEach((obj: ProjectData) => {
      //   if (dataHolder[year].includes(obj)) {
      //     return;
      //   }
      //   if (obj['title'].search(re) == -1) {
      //     if (obj['detail'].search(re) != -1) {
      //       dataHolder[year].push(obj);
      //     }
      //   } else {
      //     dataHolder[year].push(obj);
      //   }
      // });
      if (dataHolder[year].length == 0) {
        delete dataHolder[year];
      }
    });
    setData(dataHolder);
  }, [keywords]);

  const years = [];
  for (const i in data) {
    years.push(data[i][0]);
  }
  const filteredYears = data.filter((yearItem) => yearItem[1].length > 0);

  return (
    <WriteupWrapper width={100}>
      {years.map((year) => {
        const newData = filteredYears.filter((obj) => obj[0] === year);
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
